import { list, put } from "@vercel/blob";
import { promises as fs } from "node:fs";
import path from "node:path";
import { getChampion, VARIANT_COUNT } from "@/data/variants";
import fallbackTheme from "@/data/publicTheme.json";

const BLOB_PATHNAME = "orbitfolio/public-theme.json";
const LOCAL_FILE = path.join(process.cwd(), "src", "data", "publicTheme.json");

export type PublicThemeRecord = {
  variantId: number;
  updatedAt?: string;
};

function clampVariantId(id: number): number {
  if (!Number.isInteger(id) || id < 1 || id > VARIANT_COUNT) {
    return getChampion().id;
  }
  return id;
}

function parseRecord(raw: string): PublicThemeRecord | null {
  try {
    const data = JSON.parse(raw) as { variantId?: unknown };
    if (typeof data.variantId !== "number") return null;
    return { variantId: clampVariantId(data.variantId), updatedAt: new Date().toISOString() };
  } catch {
    return null;
  }
}

async function readFromBlob(): Promise<PublicThemeRecord | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  try {
    const { blobs } = await list({ prefix: BLOB_PATHNAME, limit: 1 });
    const blob = blobs[0];
    if (!blob?.url) return null;
    const res = await fetch(blob.url, { cache: "no-store" });
    if (!res.ok) return null;
    return parseRecord(await res.text());
  } catch {
    return null;
  }
}

async function writeToBlob(record: PublicThemeRecord): Promise<boolean> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return false;
  try {
    await put(BLOB_PATHNAME, JSON.stringify(record, null, 2), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    return true;
  } catch {
    return false;
  }
}

async function readFromFile(): Promise<PublicThemeRecord | null> {
  try {
    const raw = await fs.readFile(LOCAL_FILE, "utf8");
    return parseRecord(raw);
  } catch {
    return parseRecord(JSON.stringify(fallbackTheme));
  }
}

async function writeToFile(record: PublicThemeRecord): Promise<boolean> {
  try {
    await fs.writeFile(LOCAL_FILE, `${JSON.stringify(record, null, 2)}\n`, "utf8");
    return true;
  } catch {
    return false;
  }
}

async function writeToGithub(record: PublicThemeRecord): Promise<boolean> {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || process.env.ORBITFOLIO_GITHUB_TOKEN;
  if (!token) return false;
  const repo = process.env.ORBITFOLIO_GITHUB_REPO || "serhii-kucherenko/orbitfolio";
  const filePath = "src/data/publicTheme.json";
  const api = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  try {
    const current = await fetch(api, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "orbitfolio-public-theme",
      },
      cache: "no-store",
    });
    const currentJson = current.ok ? ((await current.json()) as { sha?: string }) : {};
    const content = Buffer.from(`${JSON.stringify(record, null, 2)}\n`).toString("base64");
    const putRes = await fetch(api, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "User-Agent": "orbitfolio-public-theme",
      },
      body: JSON.stringify({
        message: `Set public homepage theme to #${record.variantId}`,
        content,
        sha: currentJson.sha,
      }),
    });
    return putRes.ok;
  } catch {
    return false;
  }
}

/** Shared in-process cache — helps same warm instance after a publish. */
const memory = globalThis as typeof globalThis & {
  __orbitfolioPublicTheme?: PublicThemeRecord;
};

export async function getPublicTheme(): Promise<PublicThemeRecord> {
  if (memory.__orbitfolioPublicTheme) {
    return {
      ...memory.__orbitfolioPublicTheme,
      variantId: clampVariantId(memory.__orbitfolioPublicTheme.variantId),
    };
  }

  const fromBlob = await readFromBlob();
  if (fromBlob) {
    memory.__orbitfolioPublicTheme = fromBlob;
    return fromBlob;
  }

  const fromFile = await readFromFile();
  if (fromFile) {
    memory.__orbitfolioPublicTheme = fromFile;
    return fromFile;
  }

  const fallback = { variantId: getChampion().id, updatedAt: new Date().toISOString() };
  memory.__orbitfolioPublicTheme = fallback;
  return fallback;
}

export async function getPublicThemeId(): Promise<number> {
  return (await getPublicTheme()).variantId;
}

export async function setPublicTheme(variantId: number): Promise<{
  record: PublicThemeRecord;
  persisted: Array<"memory" | "file" | "blob" | "github">;
}> {
  const record: PublicThemeRecord = {
    variantId: clampVariantId(variantId),
    updatedAt: new Date().toISOString(),
  };

  memory.__orbitfolioPublicTheme = record;
  const persisted: Array<"memory" | "file" | "blob" | "github"> = ["memory"];

  if (await writeToFile(record)) persisted.push("file");
  if (await writeToBlob(record)) persisted.push("blob");
  if (await writeToGithub(record)) persisted.push("github");

  return { record, persisted };
}

export function getAdminPassword(): string {
  return process.env.ORBITFOLIO_ADMIN_PASSWORD ?? "$uper$ecret";
}

export function passwordsMatch(provided: string, expected: string): boolean {
  if (provided.length !== expected.length) return false;
  let mismatch = 0;
  for (let i = 0; i < provided.length; i++) {
    mismatch |= provided.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return mismatch === 0;
}

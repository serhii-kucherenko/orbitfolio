import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getAdminPassword,
  getPublicTheme,
  passwordsMatch,
  setPublicTheme,
} from "@/lib/publicTheme";
import { VARIANT_COUNT } from "@/data/variants";

export const dynamic = "force-dynamic";

export async function GET() {
  const theme = await getPublicTheme();
  return NextResponse.json(theme);
}

export async function POST(request: Request) {
  let body: { password?: unknown; variantId?: unknown };
  try {
    body = (await request.json()) as { password?: unknown; variantId?: unknown };
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const password = typeof body.password === "string" ? body.password : "";
  if (!passwordsMatch(password, getAdminPassword())) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const variantId = typeof body.variantId === "number" ? body.variantId : Number(body.variantId);
  if (!Number.isInteger(variantId) || variantId < 1 || variantId > VARIANT_COUNT) {
    return NextResponse.json({ error: `variantId must be 1–${VARIANT_COUNT}` }, { status: 400 });
  }

  const { record, persisted, durable } = await setPublicTheme(variantId);

  if (!durable) {
    return NextResponse.json(
      {
        error:
          "Theme was not saved for all servers. Add BLOB_READ_WRITE_TOKEN on Vercel (Blob store), then publish again.",
        persisted,
      },
      { status: 503 },
    );
  }

  revalidatePath("/");
  revalidatePath("/lab");

  return NextResponse.json({
    ok: true,
    ...record,
    persisted,
    note: "Public homepage updated.",
  });
}

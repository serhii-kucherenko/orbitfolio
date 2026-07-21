import { expect, test } from "@playwright/test";

/**
 * Fail-then-pass UI smoke: critical routes must render a main landmark
 * and not crash into Next.js error overlays.
 */
test.describe("Orbitfolio UI smoke", () => {
  test("homepage renders public theme", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main")).toBeVisible({ timeout: 15_000 });
    await expect(page.getByText(/Serhii/i).first()).toBeVisible();
    await expect(page.locator("#next-error-h1, [data-nextjs-dialog]")).toHaveCount(0);
  });

  test("lab leaderboard loads", async ({ page }) => {
    await page.goto("/lab");
    await expect(page.locator("main")).toBeVisible({ timeout: 15_000 });
    await expect(page.getByText(/Design Lab/i).first()).toBeVisible();
    await expect(page.getByText(/test\/1/i).first()).toBeVisible();
  });

  test("sample experiments render", async ({ page }) => {
    for (const id of [1, 57, 70, 100]) {
      await page.goto(`/test/${id}`);
      await expect(page.locator("main")).toBeVisible({ timeout: 15_000 });
      await expect(page.getByText(/Serhii/i).first()).toBeVisible();
      await expect(page.locator("#next-error-h1, [data-nextjs-dialog]")).toHaveCount(0);
    }
  });

  test("resume and goals stay usable", async ({ page }) => {
    await page.goto("/resume");
    await expect(page.locator("main")).toBeVisible({ timeout: 15_000 });
    await expect(page.getByText(/Serhii/i).first()).toBeVisible();

    await page.goto("/goals");
    await expect(page.locator("main")).toBeVisible({ timeout: 15_000 });
    await expect(page.getByText(/Goals/i).first()).toBeVisible();
  });
});

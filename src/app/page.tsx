import { LabChrome } from "@/components/LabChrome";
import { getVariant } from "@/data/variants";
import { getPublicThemeId } from "@/lib/publicTheme";
import { loadVariant } from "@/variants/loadVariant";

export const dynamic = "force-dynamic";

/** Public homepage — shows the password-selected theme (fallback: scored champion). */
export default async function HomePage() {
  const themeId = await getPublicThemeId();
  const meta = getVariant(themeId);
  const { Variant } = await loadVariant(themeId);

  return (
    <>
      <LabChrome variantId={themeId} name={meta?.name} />
      <Variant />
    </>
  );
}

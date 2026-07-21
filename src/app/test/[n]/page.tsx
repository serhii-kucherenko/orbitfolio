import { LabChrome } from "@/components/LabChrome";
import { getVariant, VARIANT_COUNT } from "@/data/variants";
import { loadVariant } from "@/variants/loadVariant";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Array.from({ length: VARIANT_COUNT }, (_, i) => ({ n: String(i + 1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const id = Number(n);
  const meta = getVariant(id);
  return {
    title: meta ? `Test ${id} — ${meta.name}` : `Test ${n}`,
    description: meta?.thesis,
  };
}

export default async function TestVariantPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const id = Number(n);
  if (!Number.isInteger(id) || id < 1 || id > VARIANT_COUNT) notFound();
  const meta = getVariant(id);
  if (!meta) notFound();

  const { Variant } = await loadVariant(id);

  return (
    <>
      <LabChrome variantId={id} name={meta.name} />
      <Variant />
    </>
  );
}

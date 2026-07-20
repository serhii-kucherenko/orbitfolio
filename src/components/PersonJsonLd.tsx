import { cv } from "@/data/cv";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: cv.name,
    jobTitle: cv.title,
    email: cv.email,
    telephone: cv.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressCountry: "CA",
    },
    url: "https://orbitfolio.vercel.app",
    sameAs: [cv.linkedin, cv.github],
    description: cv.summary,
    knowsAbout: Object.values(cv.skills).flat().slice(0, 24),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

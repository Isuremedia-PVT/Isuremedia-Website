const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/ad-creative-design-services#service",
      "name": "Ad Creative Design Services",
      "description": "High-converting ad creative design for Google, Meta, LinkedIn, and TikTok. Static, animated, and video creatives built around campaign objectives and audience targeting.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/ad-creative-design-services",
      "serviceType": "Ad Creative Design"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What types of ad creatives does Isuremedia design?",
          "acceptedAnswer": { "@type": "Answer", "text": "Static, animated GIF, HTML5 banner, video, carousel, story, and reel creatives for Google Display, Meta, LinkedIn, TikTok, Pinterest, and programmatic display." } },
        { "@type": "Question", "name": "Do you write ad copy or just design the visuals?",
          "acceptedAnswer": { "@type": "Answer", "text": "Both. For a complete package, we write the headline, primary text, and CTA alongside the visual. Copy and visual are developed together for maximum performance." } },
        { "@type": "Question", "name": "How fast can you turn around ad creatives?",
          "acceptedAnswer": { "@type": "Answer", "text": "Static and animated creative sets: two to three business days. Video creatives: three to five days. Rush one-day turnaround available for live campaigns subject to capacity." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Ad Creative Design Services | Creative Agency | Isuremedia",
  description: "High-converting ad creatives for Google, Meta, LinkedIn, and TikTok. Static, animated, and video ad design built around your campaign objective and audience.",
  alternates: { canonical: "/ad-creative-design-services" },
  openGraph: { images: [{ url: "/feature_image/ad-creative-design.webp", width: 1618, height: 950 }] },
};

export default function AdCreativeDesignLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}

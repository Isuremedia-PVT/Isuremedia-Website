const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Content Marketing and Creative Services",
  "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
  "url": "https://isuremedia.com/services/content-creative",
  "description": "SEO content, website copy, ad creatives, social media, graphic design and video. Built to rank and convert."
});

export const metadata = {
  title: "Content Marketing & Creative Agency | Isuremedia",
  description: "Content that ranks. Creative that converts. SEO content, social media, website copy, and video marketing to grow your business.",
  alternates: { canonical: "/services/content-creative" },
};

export default function ContentCreativeLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}

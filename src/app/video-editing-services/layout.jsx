const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/video-editing-services#service",
      "name": "Video Editing and Marketing Services",
      "description": "Professional video editing and video marketing for brands. Social media reels, explainer videos, motion graphics, ad video production, and YouTube editing delivered worldwide.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/video-editing-services",
      "serviceType": "Video Editing and Marketing"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What types of video does Isuremedia handle?",
          "acceptedAnswer": { "@type": "Answer", "text": "Social reels, YouTube editing, explainer videos, motion graphics, product demos, testimonial edits, corporate brand videos, webinar editing, and ad video creatives for Meta, TikTok, and YouTube." } },
        { "@type": "Question", "name": "Do you produce motion graphics or only edit footage?",
          "acceptedAnswer": { "@type": "Answer", "text": "Both. Motion graphics produced from scratch in After Effects. Footage-based editing includes cutting, colour grading, sound design, subtitles, and branded intros and outros." } },
        { "@type": "Question", "name": "How long does video editing take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Short-form social content: two to three business days. Explainer or motion graphics: five to seven days. Corporate or YouTube videos: seven to ten days. Confirmed after brief review." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Video Editing Services | Video Marketing Agency | Isuremedia",
  description: "Professional video editing and video marketing services. Social media reels, explainer videos, motion graphics, and ad video production for brands worldwide.",
  alternates: { canonical: "/video-editing-services" },
  openGraph: { images: [{ url: "/feature_image/video-marketing.webp", width: 1618, height: 950 }] },
};

export default function VideoMarketingLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}

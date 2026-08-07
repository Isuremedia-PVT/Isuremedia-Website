import CareersPageClient from "./CareersPageClient";

export const metadata = {
  title: "Careers at Isuremedia – Join Our Digital Marketing Team",
  description: "Isuremedia is hiring in Haldwani, India. Work on real US and UK client accounts across SEO, PPC, web, content, and automation with an in-house team that grows together.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at Isuremedia – Join Our Digital Marketing Team",
    description: "Real client accounts from day one. See open roles and apply to join Isuremedia's in-house digital marketing team.",
    type: "website",
    url: "/careers",
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}

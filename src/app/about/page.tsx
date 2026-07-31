import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Isuremedia – Full-Service Digital Marketing Agency & White Label Partner",
  description: "Isuremedia is an in-house digital marketing agency built on US strategy and India-based execution. Meet the team, our vision and mission, and the six principles behind every client engagement.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Isuremedia – Full-Service Digital Marketing Agency & White Label Partner",
    description: "Meet the Isuremedia team and the story behind an in-house digital marketing agency built for measurable growth.",
    type: "website",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}

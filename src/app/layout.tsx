import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reimagen.ai"),
  title: "Reimagen | Tool-agnostic AI consulting",
  description:
    "Tool-agnostic AI consulting that shows where AI belongs, integrates it into real workflows, and trains teams to operate it.",
  openGraph: {
    title: "Reimagen | Tool-agnostic AI consulting",
    description:
      "Tool-agnostic AI consulting that shows where AI belongs, integrates it into real workflows, and trains teams to operate it.",
    images: ["/assets/monument-valley-aurora.jpg"],
    url: "https://reimagen.ai",
    siteName: "Reimagen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reimagen | Tool-agnostic AI consulting",
    description:
      "Tool-agnostic AI consulting that shows where AI belongs, integrates it into real workflows, and trains teams to operate it.",
    images: ["/assets/monument-valley-aurora.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Reimagen",
              description:
                "Tool-agnostic AI consulting that shows where AI belongs, integrates it into real workflows, and trains teams to operate it.",
              url: "https://reimagen.ai",
              image: "https://reimagen.ai/logo-blur.png",
              areaServed: {
                "@type": "Country",
                name: "US",
              },
              serviceType: [
                "Organizational Strategy",
                "Content Engines",
                "Workflow Automation",
                "Custom Application Development",
              ],
              hasOfferingType: "Service",
              targetAudience: [
                {
                  "@type": "Audience",
                  audienceType: "Startups",
                },
                {
                  "@type": "Audience",
                  audienceType: "Consumer Brands",
                },
                {
                  "@type": "Audience",
                  audienceType: "Advertisers",
                },
              ],
              provider: {
                "@type": "Organization",
                name: "Reimagen",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "AI Strategy",
                "Content Generation",
                "Workflow Automation",
                "Custom Tools Development",
              ],
            }),
          }}
        />
      </head>
      <body className={`${arimo.variable} min-h-screen bg-black text-white flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://asbestosremovalteesside.co.uk"),
  title: {
    default: "Asbestos Removal Middlesbrough & Teesside | Free Quote",
    template: "%s | Asbestos Removal Teesside",
  },
  description:
    "Asbestos removal, surveys and testing across Middlesbrough and Teesside. Domestic, commercial and industrial enquiries. Call 01642 921035.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: {
    google: "Gobd3iF3BOqNKPOrn2WZtAsaMJtovyjP9zZQ0I-8sUU",
  },
  openGraph: {
    title: "Asbestos Removal Middlesbrough & Teesside",
    description:
      "Asbestos removal, surveys and testing for homes, landlords, contractors and commercial sites across Teesside.",
    url: "/",
    siteName: "Asbestos Removal Middlesbrough Teesside",
    locale: "en_GB",
    type: "website",
    images: [{
      url: "/asbestos-removal-middlesbrough-teesside-middlesbrough-town-centre-ts1-5ad.webp",
      width: 1600,
      height: 1200,
      alt: "Industrial roof lining photographed for an asbestos removal enquiry covering Middlesbrough and Teesside",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asbestos Removal Middlesbrough & Teesside",
    description: "Asbestos removal, surveys and testing for homes, landlords, contractors and commercial sites across Teesside.",
    images: ["/asbestos-removal-middlesbrough-teesside-middlesbrough-town-centre-ts1-5ad.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased">{children}</body>
    </html>
  );
}

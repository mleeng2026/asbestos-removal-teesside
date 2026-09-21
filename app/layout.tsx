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
  robots: { index: true, follow: true },
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

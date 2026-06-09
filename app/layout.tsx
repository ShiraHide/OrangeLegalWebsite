import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const SITE_URL = "https://orangelegal.jp";
const TITLE =
  "司法書士オレンジリーガル｜横浜の相続・不動産・家族信託のご相談";
const DESCRIPTION =
  "横浜・東神奈川の司法書士オレンジリーガル。相続・不動産・家族信託など、複雑な手続きをひとつひとつ解きほぐし、手続きの先にある安心をお届けします。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "司法書士",
    "オレンジリーガル",
    "横浜",
    "東神奈川",
    "相続",
    "不動産登記",
    "家族信託",
    "成年後見",
    "商業登記",
    "趙成晃",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL + "/",
    siteName: "司法書士オレンジリーガル",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/assets/logo.png",
        width: 2086,
        height: 2016,
        alt: "司法書士オレンジリーガル",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "司法書士オレンジリーガル",
  alternateName: "ORANGE LEGAL OFFICE",
  image: SITE_URL + "/assets/logo.png",
  url: SITE_URL,
  telephone: "+81-45-900-6823",
  faxNumber: "+81-45-900-6824",
  founder: { "@type": "Person", name: "趙 成晃" },
  address: {
    "@type": "PostalAddress",
    postalCode: "221-0044",
    addressRegion: "神奈川県",
    addressLocality: "横浜市神奈川区",
    streetAddress: "東神奈川二丁目41番地1 オオツカビル403",
    addressCountry: "JP",
  },
  areaServed: "横浜市",
  description:
    "横浜・東神奈川の司法書士事務所。相続・不動産売買決済・家族信託・商業登記などの手続きをサポートします。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

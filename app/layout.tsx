import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "(K2A2) Kalos Kagathos Arts & Antiques by UElement",
  description:
    "A trusted & reliable Gallery and Auction house for modern Art, Coloured stones and Period Jewels. Delivering to the World right from the heart of from Mumbai.",
  openGraph: {
    title: "(K2A2) Kalos Kagathos Arts & Antiques by UElement",
    description:
      "A trusted & reliable Gallery and Auction house for modern Art, Coloured stones and Period Jewels. Delivering to the World right from the heart of from Mumbai.",
    images: [
      {
        url: "/k2a2.png",
        width: 1146,
        height: 582,
        alt: "(K2A2) Kalos Kagathos Arts & Antiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "(K2A2) Kalos Kagathos Arts & Antiques by UElement",
    description:
      "A trusted & reliable Gallery and Auction house for modern Art, Coloured stones and Period Jewels. Delivering to the World right from the heart of from Mumbai.",
    images: ["/k2a2.png"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloock&family=Archivo:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

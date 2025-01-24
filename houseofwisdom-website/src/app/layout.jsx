import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "House of Wisdom",
  description:
    "The House of Wisdom WA provides academic and social support to immigrants, refugees, and international students, helping them transition successfully to life in America.",
  keywords: "House of Wisdom, immigrants, refugees, tutoring, academic support, community empowerment",
  openGraph: {
    title: "House of Wisdom WA",
    description:
      "Providing academic and social support to empower immigrants and refugees in America.",
    url: "https://houseofwisdomwa.com",
    type: "website",
    images: [
      {
        url: "/HOW-Logo.png",
        width: 1200,
        height: 630,
        alt: "House of Wisdom WA",
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

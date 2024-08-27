import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello! I am Tiago Teixeira, Frontend Developer!",
  description:
    "I'm a Web Frontend Developer located in Aveiro, Portugal. I have a passion for creating beautiful and functional web applications.",
  openGraph: {
    title: "Hello! I am Tiago Teixeira, Frontend Developer!",
    description:
      "I'm a Web Frontend Developer located in Aveiro, Portugal. I have a passion for creating beautiful and functional web applications.",
    type: "website",
    siteName: "Tiago Teixeira",
    locale: "en_US",
    url: "https://www.me-tiagoteixeira.dev/",
    images: [
      {
        url: "https://www.me-tiagoteixeira.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tiago Teixeira",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

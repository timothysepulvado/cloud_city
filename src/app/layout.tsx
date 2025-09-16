import type { Metadata } from "next";
import "./globals.css";
import { SITE_META } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.title,
    description: SITE_META.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

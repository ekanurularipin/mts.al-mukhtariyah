import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTs Al Mukhtariyah | Cerdas, Berkarakter & Berakhlakul Karimah",
  description: "Website Profil Resmi MTs Al Mukhtariyah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
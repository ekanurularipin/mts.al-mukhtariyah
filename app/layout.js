import "./globals.css";

export const metadata = {
  title: "MTs Al-Mukhtariah | Madrasah Unggul dan Berkarakter",
  description:
    "Website resmi MTs Al-Mukhtariah. Membentuk generasi berilmu, berakhlak, mandiri, dan siap menghadapi masa depan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

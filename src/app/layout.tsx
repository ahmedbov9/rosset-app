import type { Metadata } from "next";
import { Baloo_Bhaijaan_2, Winky_Rough } from "next/font/google";
import "./globals.css";

const arabicFont = Baloo_Bhaijaan_2({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "الصفحة الرئيسية",
  description: "افضل منصة لتضمين خدمات المساعدة الصوتية لمشروعك",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arabicFont.className} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinh Kỹ sư Japan | Engineering Academy & Career Mentor",
  description: "Đào tạo thiết kế cơ khí chuẩn Nhật và Kết nối job tại Nhật cho kỹ sư khối kỹ thuật.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable}`}>
      <body className="antialiased font-sans flex min-h-screen flex-col">
        {children}
      </body>
    </html>
  );
}

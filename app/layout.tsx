import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

// Cấu hình Font cho tiêu đề (Headings) - Tech vibe
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"], // Load đủ các độ đậm cần thiết
});

// Cấu hình Font cho nội dung (Body text) - Dễ đọc
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vinh Japan - Cầu nối sự nghiệp Kỹ sư Việt Nhật",
  description: "Kết nối kỹ sư cơ khí, điện tử, IT Việt Nam với cơ hội việc làm tại Nhật Bản.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        // Kỹ thuật: Inject cả 2 biến font vào đây để Tailwind nhận diện
        // font-sans: đặt font mặc định là Inter
        className={`${plusJakarta.variable} ${inter.variable} font-sans antialiased text-gray-900 bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
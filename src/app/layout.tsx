import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["vietnamese", "latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["vietnamese", "latin"],
});

export const metadata: Metadata = {
  title: "Vinh Japan - Cầu nối sự nghiệp kỹ sư Nhật Bản",
  description: "Định hướng lộ trình sự nghiệp bởi Kỹ sư Thiết kế máy tại Yokohama. Kết nối cơ hội việc làm kỹ sư chất lượng cao ở cả Việt Nam và Nhật Bản",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* BẮT ĐẦU CODE GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9MDVDBC80S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9MDVDBC80S');
          `}
        </Script>
        {/* KẾT THÚC CODE GA4 */}

        {children}
      </body>
    </html>
  );
}

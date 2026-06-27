"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-12">
          {/* Cột 1: Định vị & Socials */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-xl text-white">
              Vinh Vũ - Kỹ sư Japan
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Đào tạo kỹ sư thiết kế cơ khí thực chiến<br />
              chuẩn Nhật & Kết nối job kỹ sư ở cả<br />
              hai đầu Việt - Nhật free.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/vinh.japan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@vinh.japanengineer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors font-bold"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@vinh.japanengineer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a href="https://zalo.me/0399604250" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-600 transition-all duration-300 overflow-hidden">
                <img src="/images/global/Icon_of_Zalo.webp" alt="Zalo" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>

          {/* Cột 2: Giải Pháp */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Giải Pháp</h4>
            <ul className="space-y-4 text-sm xl:whitespace-nowrap">
              <li><Link className="text-gray-400 hover:text-white transition-colors duration-300" href="/thiet-ke-may-chuan-nhat">Đào tạo SolidWorks chuẩn Nhật</Link></li>
              <li><Link className="text-gray-400 hover:text-white transition-colors duration-300" href="/thiet-ke-may-chuan-nhat">Đào tạo thiết kế cơ khí/máy chuẩn Nhật</Link></li>
              <li><Link className="text-gray-400 hover:text-white transition-colors duration-300" href="/thiet-ke-may-chuan-nhat">Đào tạo bóc tách bản vẽ chuẩn JIS/ISO</Link></li>
              <li><Link className="text-gray-400 hover:text-white transition-colors duration-300" href="/ky-su-nhat-ban">Kết nối Job kỹ sư Nhật Bản 0 phí</Link></li>
            </ul>
          </div>

          {/* Cột 3: Khám Phá */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Khám Phá</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link className="text-gray-400 hover:text-white transition-colors duration-300" href="/#about">
                  Về Vinh kỹ sư
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => alert('Hệ thống e-learning đang được nâng cấp. Vui lòng nhắn tin qua Zalo để được hỗ trợ trực tiếp.')} 
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Cột 4: Liên Hệ */}
          <div className="lg:-ml-4 xl:-ml-12">
            <h4 className="text-white font-semibold text-lg mb-6">Liên Hệ</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-16 flex-shrink-0">Email:</span>
                <a href="mailto:vinh.japanengineer@gmail.com" className="hover:text-white transition-colors duration-300">vinh.japanengineer@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-16 flex-shrink-0">Địa chỉ:</span>
                <span>121-8 Asahi-ku, Yokohama city, Japan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 py-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vinh Vũ - Kỹ sư Japan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

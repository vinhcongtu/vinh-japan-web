"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNotReady = () => {
    alert(
      "Hệ thống e-learning đang được nâng cấp. Vui lòng nhắn tin qua Zalo để được hỗ trợ trực tiếp."
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1d4ed8] shadow-md relative">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors">
            <Image
              src="/images/global/logo-avatar.webp"
              alt="Vinh Japan Logo"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <span className="font-heading font-bold text-xl text-white hidden sm:block tracking-wide">
            Vinh Japan
          </span>
        </Link>

        {/* Center: Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/thiet-ke-may-chuan-nhat"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Đào tạo thiết kế máy
          </Link>
          <Link
            href="/ky-su-nhat-ban"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Việc làm Nhật Bản
          </Link>
          <button
            onClick={handleNotReady}
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Blog
          </button>
        </nav>

        {/* Right: Auth */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleNotReady}
            className="text-sm font-medium text-white/90 hover:text-white transition-colors hidden sm:block"
          >
            Đăng nhập
          </button>
          <button
            onClick={handleNotReady}
            className="text-sm font-bold bg-white text-[#1d4ed8] px-6 py-2 rounded-full shadow-sm hover:bg-blue-50 transition-colors"
          >
            Đăng ký
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white ml-2 flex items-center justify-center p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#1e40af] shadow-2xl border-t border-blue-800 flex flex-col py-6 px-6 space-y-6 z-50">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-white hover:text-blue-200 transition-colors"
          >
            Trang chủ
          </Link>
          <Link
            href="/thiet-ke-may-chuan-nhat"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-white hover:text-blue-200 transition-colors"
          >
            Đào tạo thiết kế máy
          </Link>
          <Link
            href="/ky-su-nhat-ban"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-white hover:text-blue-200 transition-colors"
          >
            Việc làm Nhật Bản
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              handleNotReady();
            }}
            className="text-base font-semibold text-white hover:text-blue-200 transition-colors text-left"
          >
            Blog
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              handleNotReady();
            }}
            className="text-base font-semibold text-white hover:text-blue-200 transition-colors text-left sm:hidden"
          >
            Đăng nhập
          </button>
        </div>
      )}
    </header>
  );
}

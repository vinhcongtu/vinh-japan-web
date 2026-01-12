'use client';

import { Facebook } from 'lucide-react';
import Image from 'next/image';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ['latin', 'vietnamese'],
    weight: ['700', '800'],
    display: 'swap',
});

export default function Footer() {
    return (
        <>
            {/* --- SECTION: SOCIAL HUB (Connect With Me) --- */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className={`text-2xl md:text-3xl font-extrabold text-blue-700 text-center mb-10 ${beVietnamPro.className}`}>
                        Theo dõi Vinh HaUI trên đa nền tảng
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Card 1: Facebook */}
                        <a href="https://www.facebook.com/vinh.japan/" target="_blank" rel="noopener noreferrer"
                            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col items-center text-center group">
                            <div className="mb-4 group-hover:scale-110 transition-transform">
                                <Image
                                    src="/images/logo-facebook.webp"
                                    alt="Facebook Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-semibold text-gray-800 text-sm">Follow facebook Vinh Vu</span>
                        </a>

                        {/* Card 2: TikTok */}
                        <a href="https://www.tiktok.com/@vinh.japanengineer" target="_blank" rel="noopener noreferrer"
                            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col items-center text-center group">
                            <div className="mb-4 group-hover:scale-110 transition-transform">
                                <Image
                                    src="/images/logo-tiktok.webp"
                                    alt="TikTok Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-semibold text-gray-800 text-sm">Follow Kênh TikTok Vinh HaUI – Kỹ sư JP</span>
                        </a>

                        {/* Card 3: YouTube */}
                        <a href="https://www.youtube.com/@vinh.japanengineer" target="_blank" rel="noopener noreferrer"
                            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col items-center text-center group">
                            <div className="mb-4 group-hover:scale-110 transition-transform">
                                <Image
                                    src="/images/logo-youtube.webp"
                                    alt="YouTube Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-semibold text-gray-800 text-sm">Follow kênh youtube Vinh HaUI – Kỹ sư JP</span>
                        </a>

                        {/* Card 4: Zalo */}
                        <a href="https://zalo.me/g/gfsupu825" target="_blank" rel="noopener noreferrer"
                            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col items-center text-center group">
                            <div className="mb-4 group-hover:scale-110 transition-transform">
                                <Image
                                    src="/images/Icon_of_Zalo.webp"
                                    alt="Zalo Icon"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-semibold text-gray-800 text-sm">Tham gia nhóm Job trên zalo</span>
                        </a>

                    </div>
                </div>
            </section>


            {/* --- SECTION: FOOTER (Compact Style) --- */}
            <footer className="bg-[#0B1221] text-white pt-16 pb-8 border-t border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                        {/* Col 1: Profile */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                                    <img
                                        src="/images/logo-avatar.webp"
                                        alt="Vinh Japan Logo"
                                        className="w-full h-full object-cover pointer-events-none"
                                        onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100?text=V"; }}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl leading-none">Vinh Japan</h3>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                Chắp cánh cho những ước mơ thay đổi sự nghiệp tại Nhật Bản.
                            </p>
                        </div>

                        {/* Col 2: Quick Links */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white/90">Thông tin</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><a href="/#about" className="hover:text-blue-400 transition-colors">Về Vinh& Lý do mình làm HR Bridge</a></li>
                                <li><a href="/#jobs" className="hover:text-blue-400 transition-colors">Job Categories</a></li>
                                <li><a href="/tailieu" className="hover:text-blue-400 transition-colors">Tài liệu</a></li>
                            </ul>
                        </div>

                        {/* Col 3: Contact */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white/90">Liên hệ</h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-center text-gray-400">
                                    <span className="w-20 text-gray-500">Email:</span>
                                    <a href="mailto:vinh.japanengineer@gmail.com" className="text-white hover:text-blue-400 transition-colors">vinh.japanengineer@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                        &copy; 2026 Vinh Japan. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}

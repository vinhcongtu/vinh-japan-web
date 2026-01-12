'use client';

import { ArrowRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ['latin', 'vietnamese'],
    weight: ['700', '800'],
    display: 'swap',
});

export default function Hero() {

    const renderButtons = () => (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
                href="https://zalo.me/0399604250"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto"
            >
                <Image
                    src="/images/Icon_of_Zalo.webp"
                    alt="Zalo"
                    width={24}
                    height={24}
                    className="mr-2"
                />
                Chat Zalo với Vinh
            </a>
            <a
                href="https://zalo.me/g/gfsupu825"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto"
            >
                <Image
                    src="/images/Icon_of_Zalo.webp"
                    alt="Zalo Group"
                    width={24}
                    height={24}
                    className="mr-2"
                />
                Vào nhóm Job
            </a>
        </div>
    );

    return (
        <section className="relative pt-20 pb-4 md:pt-32 md:pb-8 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 md:pl-16">

                    {/* Text Content - 48% */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-[48%] text-center z-10"
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm tracking-wide">
                            HR Bridge Platform
                        </div>
                        <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 ${beVietnamPro.className}`}>
                            CẦU NỐI SỰ NGHIỆP <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                KỸ SƯ VIỆT - NHẬT
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                            Mentor 1:1 bởi Kỹ sư Thiết kế máy tại Yokohama. Kết nối Job kỹ sư ở cả 2 đầu Việt–Nhật Free 100% (đi mới & chuyển việc).
                        </p>

                        {/* Desktop Buttons (Hidden on Mobile) */}
                        <div className="hidden md:block">
                            {renderButtons()}
                        </div>
                    </motion.div>

                    {/* Image Content - 48% */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-[45%] relative mt-8 md:mt-0"
                    >
                        <div className="relative rounded-3xl overflow-hidden border-4 border-white aspect-[4/4.2] max-w-md mx-auto">
                            <img
                                src="/images/hero-vinh-vest.webp"
                                alt="Vinh Japan Engineer"
                                className="object-cover object-bottom w-full h-full bg-gray-200"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/800x1000/e2e8f0/1e293b?text=Vu+The+Vinh";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                                <p className="font-semibold text-lg">Vũ Thế Vinh</p>
                                <p className="text-sm opacity-90">Kỹ sư Thiết kế máy @Yokohama</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile Buttons (Visible on Mobile, Hidden on Desktop) */}
                    <div className="w-full md:hidden">
                        {renderButtons()}
                    </div>
                </div>
            </div>
        </section>
    );
}

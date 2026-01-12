'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToForm = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(false);
        const form = document.getElementById('form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#form';
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-blue-700 shadow-lg py-2' : 'bg-gradient-to-r from-blue-600 to-blue-700 py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 relative rounded-full overflow-hidden border-2 border-white/50 group-hover:border-white transition-all aspect-square flex-shrink-0">
                            <img
                                src="/images/logo-avatar.webp"
                                alt="Vinh Japan Logo"
                                className="object-cover w-full h-full pointer-events-none"
                                onError={(e) => {
                                    // Fallback if image missing
                                    e.currentTarget.src = "https://placehold.co/100x100/2563eb/ffffff?text=V";
                                }}
                            />
                        </div>
                        <span className="text-white font-bold text-lg md:text-xl tracking-wide">Vinh Japan</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white/90 hover:text-white font-medium transition-colors">
                            Home
                        </Link>
                        <Link href="/tailieu" className="text-white/90 hover:text-white font-medium transition-colors">
                            Tài liệu
                        </Link>
                        <button
                            onClick={scrollToForm}
                            className="bg-white text-blue-700 px-5 py-2.5 rounded-full font-bold shadow-md hover:bg-blue-50 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            Đăng ký nhận Job
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-blue-800 border-t border-blue-600 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                            <Link
                                href="/"
                                className="text-white text-lg font-medium w-full text-center py-2 hover:bg-blue-700 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/tailieu"
                                className="text-white text-lg font-medium w-full text-center py-2 hover:bg-blue-700 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Tài liệu
                            </Link>
                            <button
                                onClick={scrollToForm}
                                className="w-full bg-white text-blue-800 py-3 rounded-lg font-bold shadow-md active:scale-95 transition-transform"
                            >
                                Đăng ký nhận Job
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

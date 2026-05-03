import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 text-center mb-10 font-[family-name:var(--font-plus-jakarta)]">
            Theo dõi Vinh Japan trên đa nền tảng
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://www.facebook.com/vinh.japan/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col items-center text-center group">
              <div className="mb-4 group-hover:scale-110 transition-transform relative w-10 h-10">
                <Image src="/images/logo-facebook.webp" alt="Facebook Logo" fill className="object-contain" />
              </div>
              <span className="font-semibold text-gray-800 text-sm">Kết bạn với Vinh trên Facebook</span>
            </a>
            <a href="https://www.tiktok.com/@vinh.japanengineer" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col items-center text-center group">
              <div className="mb-4 group-hover:scale-110 transition-transform relative w-10 h-10">
                <Image src="/images/logo-tiktok.webp" alt="TikTok Logo" fill className="object-contain" />
              </div>
              <span className="font-semibold text-gray-800 text-sm">Follow Kênh TikTok Vinh Vũ | Kỹ sư Japan</span>
            </a>
            <a href="https://www.youtube.com/@vinh.japanengineer" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col items-center text-center group">
              <div className="mb-4 group-hover:scale-110 transition-transform relative w-10 h-10">
                <Image src="/images/logo-youtube.webp" alt="YouTube Logo" fill className="object-contain" />
              </div>
              <span className="font-semibold text-gray-800 text-sm">Follow kênh youtube Vinh Vũ | Kỹ sư Japan</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B1221] text-white pt-16 pb-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-white/20">
                  <Image src="/images/logo-avatar.webp" alt="Vinh Japan Logo" fill className="object-cover pointer-events-none" />
                </div>
                <div>
                  <h3 className="font-bold text-xl leading-none">Vinh Japan</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Chắp cánh cho những ước mơ phát triển sự nghiệp tại Nhật Bản.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white/90">Thông tin</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/#about" className="hover:text-blue-400 transition-colors">Về Vinh& Lý do mình làm HR Bridge</Link></li>
                <li><Link href="/#jobs" className="hover:text-blue-400 transition-colors">Job Categories</Link></li>
                <li><Link href="/#lead-form" className="hover:text-blue-400 transition-colors">Kho job kỹ sư Nhật Bản free</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white/90">Liên hệ</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center text-gray-400">
                  <span className="w-20 text-gray-500">Email:</span>
                  <a href="mailto:vinh.japanengineer@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                    vinh.japanengineer@gmail.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            © 2026 Vinh Japan. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

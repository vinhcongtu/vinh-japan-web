import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-4 pb-2 md:pt-10 md:pb-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 md:pl-16">
          {/* Left: Text Content */}
          <div className="w-full md:w-[48%] text-center z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm tracking-wide uppercase">
              Career Mentor & Engineering Academy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              KIẾN TẠO SỰ NGHIỆP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                KỸ SƯ THIẾT KẾ, R&D
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                CHUẨN NHẬT
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Đào tạo thiết kế máy chuẩn Nhật chuyên sâu cho ngành cơ khí. Kết
              nối việc làm kỹ sư không mất phí tại Nhật Bản cho toàn bộ kỹ sư
              khối ngành kỹ thuật (cơ khí, IT, điện-điện tử, xây dựng,…).
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link
                href="/thiet-ke-may-chuan-nhat"
                className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center"
              >
                Khám phá khoá học thiết kế máy chuẩn Nhật
              </Link>
              <Link
                href="/ky-su-nhat-ban"
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                Ứng tuyển & thông tin Job kỹ sư Nhật Bản free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Image Content */}
          <div className="w-full md:w-[45%] relative mt-12 md:mt-0">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white aspect-[4/4.2] max-w-md mx-auto shadow-xl bg-gray-200">
              <Image
                src="/images/home/hero-vinh-vest.webp"
                alt="Vũ Thế Vinh - Kỹ sư thiết kế cơ khí"
                fill
                priority
                className="object-cover object-bottom w-full h-full"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="font-semibold text-lg">Vũ Thế Vinh</p>
                <p className="text-sm opacity-90">Kỹ sư thiết kế cơ khí, chuyên gia R&D tại Japan.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-4 md:pt-32 md:pb-8 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 md:pl-16">

          <div className="w-full md:w-[48%] text-center z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm tracking-wide">
              HR Bridge Platform
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 font-[family-name:var(--font-plus-jakarta)]">
              CẦU NỐI SỰ NGHIỆP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                KỸ SƯ VIỆT - NHẬT
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Định hướng lộ trình sự nghiệp bởi Kỹ sư Thiết kế máy tại Yokohama. Kết nối cơ hội việc làm kỹ sư chất lượng cao ở cả Việt Nam và Nhật Bản (Free 100%).
            </p>
            <div className="hidden md:block">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#lead-form"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto"
                >
                  Nhận lộ trình & Job Kỹ Sư Nhật Bản free
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[45%] relative mt-8 md:mt-0">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white aspect-[4/4.2] max-w-md mx-auto shadow-xl">
              <Image
                src="/images/hero-vinh-vest.webp"
                alt="Vinh Japan Kỹ Sư"
                fill
                priority
                className="object-cover object-bottom w-full h-full bg-gray-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="font-semibold text-lg">Vũ Thế Vinh</p>
                <p className="text-sm opacity-90">Kỹ sư Thiết kế máy @Yokohama</p>
              </div>
            </div>
          </div>

          <div className="w-full md:hidden mt-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#lead-form"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto"
              >
                Nhận lộ trình & Job Kỹ Sư Nhật Bản free
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
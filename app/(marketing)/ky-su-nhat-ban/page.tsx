import { Metadata } from "next";
import Image from "next/image";
import { Settings, Laptop, Zap, Building, Factory, Globe } from "lucide-react";
import LeadForm from "@/components/sections/bu2/LeadForm";

export const metadata: Metadata = {
  title: "Cầu Nối Sự Nghiệp Kỹ Sư Việt - Nhật | Vinh Vũ",
  description: "Tuyển dụng và kết nối việc làm tại Nhật Bản cho kỹ sư Việt thuộc khối ngành kỹ thuật miễn phí.",
};

export default function KySuNhatBanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="pt-6 pb-14 md:pt-10 md:pb-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Cột Text (lg:col-span-7) */}
            <div className="lg:col-span-7 lg:pl-4 flex flex-col items-start text-left order-1 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-blue-900 leading-tight mb-6 font-heading">
                CẦU NỐI SỰ NGHIỆP <br className="hidden md:block" />
                <span className="text-blue-600">KỸ SƯ VIỆT - NHẬT</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                Tuyển dụng và kết nối việc làm kỹ sư không mất phí tại Nhật Bản cho kỹ sư khối ngành kỹ thuật (cơ khí, IT, điện-điện tử, xây dựng,…).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#lead-form"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-1 text-center"
                >
                  ỨNG TUYỂN NGAY
                </a>
                <a 
                  href="https://zalo.me/0399604250"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-sm transition-all transform hover:-translate-y-1 text-center"
                >
                  Chat Zalo với Vinh
                </a>
              </div>
            </div>
            
            {/* Cột Ảnh (lg:col-span-5) */}
            <div className="lg:col-span-5 order-2 lg:order-2 flex flex-col items-center lg:items-end">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md border-4 border-white lg:rotate-2 hover:rotate-0 transition-transform duration-500 mb-4">
                <Image 
                  src="/images/bu2-job/hero-vinh-vest.webp" 
                  alt="Vinh Vũ - Cầu nối kỹ sư Nhật Bản"
                  fill
                  className="object-cover object-top"
                />
                {/* Lớp kính cường lực chống copy */}
                <div className="absolute inset-0 z-10 bg-transparent" title="Hình ảnh có bản quyền"></div>
              </div>
              <div className="text-center w-full max-w-md">
                <p className="font-bold text-gray-900 text-lg">Vũ Thế Vinh</p>
                <p className="text-gray-600 text-[15px]">Kỹ sư thiết kế máy tại Yokohama</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VỀ VINH & LÝ DO LÀM HR BRIDGE */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900">
              Về Vinh & Lý do mình làm HR Brigde
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Cột Trái (40% - Visual Trust) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="relative w-full rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-200 aspect-[4/3]">
                <Image 
                  src="/images/bu2-job/about-team-vietnam-japan.webp" 
                  alt="Team Vietnam - Japan"
                  fill
                  className="object-cover"
                />
                {/* Lớp kính cường lực chống copy */}
                <div className="absolute inset-0 z-10 bg-transparent" title="Hình ảnh có bản quyền"></div>
              </div>
              <p className="text-[15px] font-semibold text-center text-gray-700 italic px-2">
                "Gắn kết và giao lưu với đội ngũ kỹ sư bản xứ sau giờ làm việc"
              </p>
            </div>
            
            {/* Cột Phải (60% - Storytelling) */}
            <div className="lg:col-span-7 flex flex-col justify-center h-full space-y-6">
              <p className="text-[17px] md:text-lg text-gray-700 leading-relaxed">
                Chào anh em, mình là Vinh - cựu sinh viên HaUI, hiện đang làm kỹ sư thiết kế máy tại Yokohama, Japan. Trên hành trình tìm đường phát triển sự nghiệp tại Nhật, mình cũng từng gặp rất nhiều khó khăn trắc trở do thiếu định hướng, kiến thức cần thiết, cũng như không nắm được bức tranh tổng quan.
              </p>
              <p className="text-[17px] md:text-lg text-gray-700 leading-relaxed">
                Mình cũng từng chứng kiến nhiều bạn bè lớp đại học phải bỏ ra hàng nghìn đô la phí môi giới để sang Nhật làm các công việc trái ngành, tương lai mịt mờ. Khác với HR thuần về tuyển dụng khác, mình cũng là kỹ sư đang làm việc thực tế tại Nhật, hiểu rõ cả doanh nghiệp và ứng viên cần gì, thiếu gì… do đó mình muốn vận dụng những kiến thức, trải nghiệm, network của mình để giúp ae ngành kỹ thuật hiểu rõ về thị trường công việc kỹ sư tại Nhật, và kết nối job cho những anh em phù hợp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CÁC NHÓM JOB THƯỜNG CÓ */}
      <section className="py-20 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-2">
              Các Job kỹ sư bên mình thường có
            </h2>
            <p className="text-gray-500 italic text-base md:text-lg">
              (Vào nhóm job zalo để xem nội dung chi tiết job)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-black">
                <Settings className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-blue-900 font-bold text-[19px] mb-3">Kỹ sư cơ khí, ô tô</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Thiết kế cơ khí, phân tích CAE, Lập trình gia công CNC,... (Ví dụ: Robot, máy FA, khuôn mẫu, ô tô,...)
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-black">
                <Laptop className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-blue-900 font-bold text-[19px] mb-3">Kỹ sư IT/Tech</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Thiết kế Web/App, lập trình Nhúng, Kỹ sư cầu nối, AI, Test...
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-yellow-500">
                <Zap className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-blue-900 font-bold text-[19px] mb-3">Kỹ sư Điện/Điện tử/Bán dẫn</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Thiết kế mạch điện/ điện tử cho EV, Robot, Lập trình PLC...
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-orange-600">
                <Building className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-blue-900 font-bold text-[19px] mb-3">Kỹ sư xây dựng</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Quản lý thi công, CAD, BIM,...
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-red-500">
                <Factory className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-blue-900 font-bold text-[19px] mb-3">Sản xuất & Bảo trì</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Quản lý sản xuất, Bảo dưỡng ô tô, Bảo trì máy móc,...
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-blue-400">
                <Globe className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-blue-900 font-bold text-[19px] mb-3">Khác</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                vật liệu/hoá học, Job văn phòng khác (quản lý khách sạn, thông dịch, kế toán,...)
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5: LEAD FORM */}
      <LeadForm />

    </div>
  );
}

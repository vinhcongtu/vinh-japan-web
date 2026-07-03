import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, X, Check, Calendar } from "lucide-react";
import CourseTimeline from "@/components/CourseTimeline";
import FAQAccordion from "@/components/FAQAccordion";
export const metadata: Metadata = {
  title: "Khóa Đào Tạo Thiết Kế Máy Chuẩn Nhật | Vinh Vũ",
  description: "Trở thành Kỹ sư thiết kế R&D chuẩn Nhật trong 4-6 tháng.",
};

export default function CourseLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 overflow-hidden bg-blue-900 text-white">
        {/* Pattern mờ */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 md:pl-10 lg:pl-16">
            
            {/* Cột Trái: Text */}
            <div className="w-full md:w-[50%] lg:w-[48%] flex flex-col justify-center text-center">
              {/* Eyebrow */}
              <div className="mx-auto inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gray-200 text-[11px] md:text-xs font-medium tracking-wide mb-5 w-fit shadow-sm">
                Duy nhất tại Việt Nam: Đào tạo thiết kế theo quy trình tập đoàn Nhật
              </div>
              
              {/* Headline H1 */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 leading-tight mb-5 tracking-tight">
                ĐÀO TẠO THIẾT KẾ CƠ KHÍ THỰC CHIẾN CHUẨN NHẬT: <br className="hidden md:block" />
                <span className="text-white text-xl md:text-2xl lg:text-3xl mt-2 block">RỜI XƯỞNG SẢN XUẤT, BƯỚC VÀO PHÒNG R&D</span>
              </h1>
              
              {/* Sub-headline */}
              <p className="text-sm md:text-base lg:text-lg text-blue-100/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                Chương trình huấn luyện chuyên sâu bởi Kỹ sư thiết kế, chuyên gia R&D đang làm việc tại tập đoàn hàng đầu Nhật Bản. Nắm trọn kiến thức tổng quan, tư duy kinh nghiệm thiết kế máy và bóc tách bản vẽ chuẩn JIS/ISO - Trang bị cho bạn năng lực thực tế để rời xưởng sản xuất, bước vào phòng thiết kế.
              </p>
              
              {/* Nút CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <a 
                  href="https://zalo.me/0399604250" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-full font-bold text-sm md:text-base shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all text-center w-full sm:w-auto"
                >
                  Đăng ký ngay hoặc Nhận tư vấn qua zalo
                </a>
                <a 
                  href="#lo-trinh" 
                  className="bg-transparent border-2 border-blue-400 text-blue-100 hover:bg-blue-800/50 hover:text-white px-6 py-3.5 rounded-full font-semibold text-sm md:text-base transition-all text-center w-full sm:w-auto"
                >
                  Khám phá Lộ trình Học chi tiết
                </a>
              </div>
            </div>

            {/* Cột Phải: Ảnh */}
            <div className="w-full md:w-[45%] relative mx-auto max-w-sm md:max-w-md mt-10 md:mt-0 flex flex-col items-center">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl bg-blue-800/30 aspect-[4/4.5] w-full">
                <Image
                  src="/images/bu1-course/hero-vinh-vest-bu1.webp"
                  alt="Vinh Vũ - Kỹ sư thiết kế cơ khí tại Nhật Bản"
                  fill
                  className="object-cover object-top w-full h-full"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 z-10 bg-transparent" title="Hình ảnh có bản quyền"></div>
              </div>
              <div className="text-center mt-4 w-full">
                <p className="font-bold text-white text-lg md:text-xl tracking-wide mb-0.5">Vũ Thế Vinh</p>
                <p className="text-blue-100 text-[15px] font-medium">Kỹ sư thiết kế máy, chuyên gia R&D tại Yokohama, Japan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KHUẾCH ĐẠI NỖI ĐAU */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 tracking-tight">
              BẠN CÓ ĐANG <span className="text-red-700">MẮC KẸT</span> TRONG CÁC VÒNG LẶP NÀY?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
            {/* Card 1 */}
            <div className="h-full bg-white p-8 rounded-xl shadow-sm border border-zinc-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="w-12 h-12 bg-red-50 text-red-700 rounded-lg flex items-center justify-center mb-6 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <AlertCircle className="w-6 h-6" />
              </div>
              <p className="text-zinc-700 leading-relaxed flex-grow text-[15px] md:text-base">
                <span className="font-bold text-zinc-900">Bạn học đại học 4-5 năm cơ khí. Ra trường. Hăng hái nộp hồ sơ vào phòng thiết kế.</span> Và rồi — bạn nhìn thấy dòng chữ quen thuộc trên mọi JD: <span className="font-semibold italic text-red-700">"Yêu cầu: tối thiểu 1–2 năm kinh nghiệm thiết kế cơ khí."</span>
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="h-full bg-white p-8 rounded-xl shadow-sm border border-zinc-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="w-12 h-12 bg-red-50 text-red-700 rounded-lg flex items-center justify-center mb-6 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <AlertCircle className="w-6 h-6" />
              </div>
              <p className="text-zinc-700 leading-relaxed flex-grow text-[15px] md:text-base">
                <span className="font-bold text-zinc-900">Mắc kẹt ở vị trí đứng máy/CNC:</span> Bạn ra trường đi làm vận hành với suy nghĩ "lấy kinh nghiệm xưởng rồi lên thiết kế được". Nhưng nhiều năm qua rồi, bạn vẫn đứng xưởng. Vì ai cũng nói cần kinh nghiệm — mà kinh nghiệm thì không ai dạy bạn.
              </p>
            </div>

            {/* Card 3 */}
            <div className="h-full bg-white p-8 rounded-xl shadow-sm border border-zinc-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="w-12 h-12 bg-red-50 text-red-700 rounded-lg flex items-center justify-center mb-6 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <AlertCircle className="w-6 h-6" />
              </div>
              <p className="text-zinc-700 leading-relaxed flex-grow text-[15px] md:text-base">
                <span className="font-bold text-zinc-900">Chỉ là "thợ vẽ 3D" thay vì Kỹ sư thiết kế R&D thực thụ:</span> Bạn lên YouTube học vẽ trông rất "hầm hố" và phức tạp. Nhưng sự thật là: Không doanh nghiệp nào trả lương chỉ để bạn ngồi "tô vẽ" 3D.
              </p>
            </div>

            {/* Card 4 */}
            <div className="h-full bg-white p-8 rounded-xl shadow-sm border border-zinc-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="w-12 h-12 bg-red-50 text-red-700 rounded-lg flex items-center justify-center mb-6 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <AlertCircle className="w-6 h-6" />
              </div>
              <p className="text-zinc-700 leading-relaxed flex-grow text-[15px] md:text-base">
                <span className="font-bold text-zinc-900">Không có mentor thực chiến:</span> Thiếu người đủ tâm và đủ tầm để dẫn dắt bạn đi xa hơn, tiến về phía trước.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3 SỰ THẬT TÀN NHẪN */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight">
              3 SỰ THẬT THỊ TRƯỜNG KHÔNG AI NÓI VỚI BẠN
            </h2>
            <div className="w-24 h-1.5 bg-blue-900 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* Fact 1 */}
            <div className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="absolute -right-6 -bottom-16 md:-right-10 md:-bottom-24 text-[180px] md:text-[260px] font-black text-gray-50/80 leading-none select-none z-0 transition-transform duration-500 group-hover:-translate-y-4">
                1
              </div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 md:mb-5 leading-snug">
                  Sự thật #1 — Thị trường không thiếu người. Nó thiếu người ĐỦ CHUẨN.
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-[90%] md:max-w-[85%]">
                  Hàng năm có hàng nghìn sinh viên cơ khí tốt nghiệp. Nhưng số người thực sự <span className="font-bold text-gray-900">tạo được bản vẽ JIS/ISO, hiểu về sản xuất, tư duy thiết kế máy</span> theo chuẩn công nghiệp, và có portfolio thực tế để chứng minh — thì vô cùng ít. Nên có đến 80% các ae sẽ phải làm các công việc dưới xưởng như vận hành máy, bảo trì, lập trình CNC,…Những công việc tương lai sẽ dễ dàng bị AI, robot hoặc công nhân giá rẻ thay thế.
                </p>
              </div>
            </div>

            {/* Fact 2 */}
            <div className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="absolute -right-6 -bottom-16 md:-right-10 md:-bottom-24 text-[180px] md:text-[260px] font-black text-gray-50/80 leading-none select-none z-0 transition-transform duration-500 group-hover:-translate-y-4">
                2
              </div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 md:mb-5 leading-snug">
                  Sự thật #2 — SolidWorks hay 1 phần mềm 3D chỉ là công cụ. Tư duy thiết kế mới là thứ người ta trả tiền cho.
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-[90%] md:max-w-[85%]">
                  Biết SolidWorks ngày nay dễ như biết đánh máy. Thứ khiến một kỹ sư thiết kế "đáng tiền" là anh ta hiểu <span className="font-bold text-gray-900">tại sao</span> chi tiết này phải có hình dạng đó, vật liệu nào, dung sai bao nhiêu, gia công bằng phương pháp gì, lắp ráp thế nào cho dễ bảo trì. Và ở level cao hơn là anh ta phải biết giải quyết vấn đề, thiết kế ý tưởng, lên concept máy/cụm máy, phối hợp với các bộ phận khác, Báo cáo, thảo luận,… <span className="font-bold text-gray-900">Đó là level của một kỹ sư thiết kế, nghiên cứu phát triển chuẩn Nhật thực thụ - Thứ bạn sẽ thực sự học ở đây với tôi.</span>
                </p>
              </div>
            </div>

            {/* Fact 3 */}
            <div className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="absolute -right-6 -bottom-16 md:-right-10 md:-bottom-24 text-[180px] md:text-[260px] font-black text-gray-50/80 leading-none select-none z-0 transition-transform duration-500 group-hover:-translate-y-4">
                3
              </div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 md:mb-5 leading-snug">
                  Sự thật #3 — Không có lối tắt. Nhưng có lộ trình đúng.
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-[90%] md:max-w-[85%]">
                  4–6 tháng học nghiêm túc, cùng học phí không phải con số nhỏ. Nhưng so với 2–3 năm mò mẫm trong xưởng, hoặc học tự phát mà không ai chỉ hướng — đó là <span className="font-bold text-gray-900">khoản đầu tư vào sự nghiệp rất đáng.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GIỚI THIỆU GIẢI PHÁP & BẢNG SO SÁNH */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6">
              GIỚI THIỆU: KHÓA ĐÀO TẠO CHUYÊN SÂU THIẾT KẾ MÁY CHUẨN NHẬT
            </h2>
            <p className="text-lg text-gray-800 font-bold max-w-3xl mx-auto leading-relaxed">
              Đây không phải khóa học SolidWorks. Không phải khóa học tạo bản vẽ đơn thuần. Đây là một chương trình huấn luyện chuyên sâu tổng hợp, nơi bạn sẽ được truyền đạt toàn bộ kinh nghiệm, tư duy và quy trình làm việc thực tế của một Kỹ sư thiết kế, R&D tại Nhật Bản đã và đang tham gia thiết kế nhiều hệ thống máy móc lớn từ khâu thiết kế ý tưởng đến thiết kế chi tiết. 
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex flex-col">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row border-b border-gray-200">
              <div className="w-full md:w-[40%] p-6 bg-red-50/30 hidden md:flex items-center">
                <h3 className="text-lg md:text-xl font-bold text-red-600/80">
                  ❌ Khóa học cơ khí thông thường
                </h3>
              </div>
              <div className="w-full md:w-[60%] p-6 bg-blue-50/80 flex items-center">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900">
                  ✅ Khoá đào tạo Thiết Kế Máy Chuẩn Nhật toàn diện
                </h3>
              </div>
            </div>

            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 group">
              <div className="w-full md:w-[40%] p-5 md:p-6 flex items-start gap-3 transition-colors">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 leading-relaxed text-[15px]">Dạy SolidWorks theo menu, tab, nút bấm</span>
              </div>
              <div className="w-full md:w-[60%] p-5 md:p-6 bg-blue-50/50 flex items-start gap-3 border-t md:border-t-0 md:border-l border-blue-100/50 transition-colors">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 font-medium leading-relaxed">Dạy tư duy thiết kế trước — SolidWorks chỉ là công cụ</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 group">
              <div className="w-full md:w-[40%] p-5 md:p-6 flex items-start gap-3 transition-colors">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 leading-relaxed text-[15px]">Bản vẽ không theo tiêu chuẩn gì, trình bày theo cảm tính</span>
              </div>
              <div className="w-full md:w-[60%] p-5 md:p-6 bg-blue-50/50 flex items-start gap-3 border-t md:border-t-0 md:border-l border-blue-100/50 transition-colors">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 font-medium leading-relaxed">Bản vẽ theo tiêu chuẩn JIS/ISO</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 group">
              <div className="w-full md:w-[40%] p-5 md:p-6 flex items-start gap-3 transition-colors">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 leading-relaxed text-[15px]">Kiến thức cũ chắp vá, lỗi thời.</span>
              </div>
              <div className="w-full md:w-[60%] p-5 md:p-6 bg-blue-50/50 flex items-start gap-3 border-t md:border-t-0 md:border-l border-blue-100/50 transition-colors">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 font-medium leading-relaxed">Kỹ sư đang thiết kế, R&D tại Nhật Bản trực tiếp giảng dạy. Kinh nghiệm được tích luỹ tại 1 cường quốc công nghiệp hoá - nơi có nguồn lực nghiên cứu tối ưu hoá mạnh mẽ.</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 group">
              <div className="w-full md:w-[40%] p-5 md:p-6 flex items-start gap-3 transition-colors">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 leading-relaxed text-[15px]">Lý thuyết vật liệu và gia công tách rời thiết kế</span>
              </div>
              <div className="w-full md:w-[60%] p-5 md:p-6 bg-blue-50/50 flex items-start gap-3 border-t md:border-t-0 md:border-l border-blue-100/50 transition-colors">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 font-medium leading-relaxed">Nguyên lý gia công gắn liền với quyết định thiết kế, với mục tiêu “Thiết kế phải tối ưu cho sản xuất.”</span>
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 group">
              <div className="w-full md:w-[40%] p-5 md:p-6 flex items-start gap-3 transition-colors">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 leading-relaxed text-[15px]">Không áp dụng công nghệ.</span>
              </div>
              <div className="w-full md:w-[60%] p-5 md:p-6 bg-blue-50/50 flex items-start gap-3 border-t md:border-t-0 md:border-l border-blue-100/50 transition-colors">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 font-medium leading-relaxed">Áp dụng tools hỗ trợ tính toán thiết kế các cơ cấu tự động hoá.</span>
              </div>
            </div>

            {/* Row 6 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 group">
              <div className="w-full md:w-[40%] p-5 md:p-6 flex items-start gap-3 transition-colors">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 leading-relaxed text-[15px]">Không có mentor định hướng phát triển</span>
              </div>
              <div className="w-full md:w-[60%] p-5 md:p-6 bg-blue-50/50 flex items-start gap-3 border-t md:border-t-0 md:border-l border-blue-100/50 transition-colors">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 font-medium leading-relaxed">Được hỗ trợ định hướng phát triển sự nghiệp</span>
              </div>
            </div>

            {/* Row 7 */}
            <div className="flex flex-col md:flex-row group">
              <div className="w-full md:w-[40%] p-5 md:p-6 flex items-start gap-3 transition-colors">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 leading-relaxed text-[15px]">Thiếu tính thực chiến, đặt nặng lý thuyết hàn lâm.</span>
              </div>
              <div className="w-full md:w-[60%] p-5 md:p-6 bg-blue-50/50 flex items-start gap-3 border-t md:border-t-0 md:border-l border-blue-100/50 transition-colors">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-900 font-medium leading-relaxed">Chương trình học bám sát thực tế công việc tại doanh nghiệp Nhật Bản và Việt Nam. Thực chiến bằng dự án thiết kế thực tế. lý thuyết được tổng hợp cấu trúc một cách khoa học để cung cấp nền tảng.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LỘ TRÌNH HỌC */}
      <section id="lo-trinh" className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight uppercase">
              LỘ TRÌNH 5 MODULE — TỪ NỀN TẢNG ĐẾN THỰC CHIẾN
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chương trình được thiết kế theo trình tự công việc thực tế của một kỹ sư thiết kế máy giúp bạn nắm được toàn bộ những tinh hoa để làm việc được như một kỹ sư thực thụ.
            </p>
          </div>
          
          <CourseTimeline />
        </div>
      </section>

      {/* SECTION 6: FOUNDER AUTHORITY */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
            
            {/* Cột Trái (30% - lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-full relative rounded-3xl shadow-2xl border-4 border-white overflow-hidden mb-4 bg-gray-100">
                <img 
                  src="/images/bu1-course/about-vinh-vest.webp" 
                  alt="Vinh Vũ - Founder" 
                  className="w-full h-auto object-contain"
                />
                {/* Lớp kính cường lực chống copy */}
                <div className="absolute inset-0 z-10 bg-transparent" title="Hình ảnh có bản quyền"></div>
              </div>
              <p className="text-sm text-gray-500 italic text-center font-medium">
                "Vinh Vũ - Kỹ sư thiết kế, chuyên gia R&D tại Yokohama, Japan."
              </p>
            </div>

            {/* Cột Phải (70% - lg:col-span-8) */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-8 leading-tight">
                TẠI SAO NÊN HỌC TỪ NGƯỜI ĐANG THỰC SỰ LÀM ĐIỀU BẠN MUỐN LÀM?
              </h2>
              
              <div className="mb-10">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Mình là cựu sinh viên Đại học Công nghiệp Hà Nội (HaUI). Hiện tại, mình đang làm kỹ sư thiết kế máy tại phòng R&D của một tập đoàn hàng đầu Nhật Bản ở Yokohama. Mình từng làm ở cả công ty nhỏ tại Việt Nam và tập đoàn hàng trăm năm tuổi ở Nhật Bản, từng làm leader nhiều dự án thiết kế phát triển máy từ đầu, tham gia từ khâu họp với khách hàng để lên ý tưởng đến thiết kế concept, thiết kế chi tiết, tạo bản vẽ sản xuất,…Mình cũng từng đào tạo nhiều nhân viên mới vào công ty nên có khả năng đóng gói kiến thức và truyền đạt dễ hiểu cho người khác.
                </p>
              </div>

              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium leading-relaxed">7+ năm kinh nghiệm thiết kế cơ khí tại Việt Nam và Nhật Bản.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium leading-relaxed">Từng tham gia thiết kế từ đầu: hệ thống rửa ô tô tự động, hệ thống hút bụi công nghiệp bán tự động, máy rửa chi tiết sóng siêu âm, dây chuyền đóng gói bao bì,…</span>
                </li>
              </ul>

              {/* Visual Chứng thực (Ảnh 3D) */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-8">
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-200 group">
                    <img 
                      src="/images/bu1-course/he-thong-hut-bui.webp" 
                      alt="Hệ thống hút bụi công nghiệp" 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Lớp kính cường lực chống copy */}
                    <div className="absolute inset-0 z-10 bg-transparent" title="Hình ảnh có bản quyền"></div>
                  </div>
                  <p className="text-sm font-semibold text-center text-gray-700 px-2">Dự án Hệ thống hút bụi công nghiệp</p>
                </div>

                <div className="sm:col-span-3 flex flex-col gap-2">
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-200 group">
                    <img 
                      src="/images/bu1-course/may-rua-o-to.webp" 
                      alt="Hệ thống máy rửa ô tô tự động" 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Lớp kính cường lực chống copy */}
                    <div className="absolute inset-0 z-10 bg-transparent" title="Hình ảnh có bản quyền"></div>
                  </div>
                  <p className="text-sm font-semibold text-center text-gray-700 px-2">Dự án máy rửa ô tô tự động với công nghệ không chạm</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: BẢNG GIÁ & GÓI ĐẦU TƯ */}
      <section className="py-20 md:py-24 bg-zinc-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6">
              CHI PHÍ ĐẦU TƯ CHO SỰ NGHIỆP
            </h2>
            <p className="text-[15px] md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-justify md:text-center">
              Khoản học phí này tương đương 1-2 tháng lương ở xưởng hiện tại, nhưng là bước đệm để tiến lên vị trí có mức thu nhập cao hơn 30-60%. Một khoá học chất lượng như vậy ở nước ngoài không dưới 2000 đô, nhưng với các bạn ở Việt Nam, nó lại là rào cản khá lớn nên mình thu học phí ưu đãi hợp với thu nhập của người Việt, vừa gieo mầm vừa tạo mối quan hệ với các bạn. <span className="italic text-gray-500 block mt-2">(Sau này khi các bạn đã ổn định công việc, mình sẽ mời những học viên xuất sắc và có đam mê khởi nghiệp tham gia cùng mình vào các dự án Labs, R&D máy/thiết bị thông minh và phát triển Robot cho thị trường Việt Nam.)</span>
            </p>
          </div>

          {/* Banner Lịch Khai Giảng (Scarcity Alert) */}
          <div className="max-w-3xl mx-auto mb-16 bg-blue-50 border-2 border-blue-200 rounded-xl p-5 md:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left transform hover:scale-[1.02] transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-blue-900 font-bold text-lg md:text-xl leading-tight">
                Lịch khai giảng khoá học tiếp theo (Khoá học duy nhất trong năm): <span className="text-red-600 ml-1">1-2027</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Gói Standard (Highlight) */}
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 border-2 border-blue-600 shadow-xl h-full flex flex-col lg:scale-105 transform z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-5 py-2 rounded-full text-sm shadow-md whitespace-nowrap tracking-wide uppercase">
                🔥 Số lượng giới hạn
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 uppercase">GÓI STANDARD</h3>
              <p className="text-gray-500 text-sm italic mb-6">(Có giới hạn số học viên)</p>
              
              <div className="text-3xl md:text-4xl font-black text-blue-900 mb-8">
                10.000.000 <span className="text-lg md:text-xl font-bold text-gray-500">VNĐ</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-900 font-bold leading-relaxed text-[15px] md:text-base">Học theo lộ trình như trên.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed text-[15px] md:text-base">Bonus 1 buổi định hướng sự nghiệp, hướng dẫn viết CV, phỏng vấn.</span>
                </li>
              </ul>
              
              <a 
                href="https://zalo.me/0399604250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-4 px-6 text-center text-white bg-blue-600 font-bold border-2 border-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:bg-blue-700 transition-all text-lg"
              >
                Đăng ký Gói Standard ➔
              </a>
            </div>

            {/* Gói VIP */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 uppercase">GÓI VIP</h3>
              <p className="text-gray-500 text-sm italic mb-6">(Cần test đầu vào)</p>
              
              <div className="text-3xl md:text-4xl font-black text-blue-900 mb-8">
                15.000.000 <span className="text-lg md:text-xl font-bold text-gray-500">VNĐ</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed text-[15px] md:text-base">Toàn quyền Gói Standard.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed text-[15px] md:text-base">Được học thêm 1 khoá vibecoding để áp dụng trong mảng robotic.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed text-[15px] md:text-base">Học viên xuất sắc được tham gia dự án R&D robot với Vinh trong tương lai.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed text-[15px] md:text-base">Mentoring 1-1 trực tiếp định hướng sự nghiệp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed text-[15px] md:text-base">Review CV, Portfolio.</span>
                </li>
              </ul>
              
              <a 
                href="https://zalo.me/0399604250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-4 px-6 text-center text-blue-600 font-bold border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors text-lg"
              >
                Đăng ký Gói VIP ➔
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 md:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900">
              CÁC CÂU HỎI THƯỜNG GẶP
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-20 md:py-28 bg-blue-900 border-t border-blue-800 relative overflow-hidden">
        {/* Pattern nền mờ */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] opacity-10"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-8 leading-tight">
              BẠN ĐÃ SẴN SÀNG THAY ĐỔI QUỸ ĐẠO SỰ NGHIỆP CHƯA?
            </h2>
            <p className="text-lg text-blue-100/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Đầu tư vào kiến thức và bản thân là khoản đầu tư đáng giá nhất cho tương lai. Cơ hội phát triển chỉ đến khi chính bản thân bạn đã chuẩn bị kỹ, đặc biệt trong thời đại mà công nghệ đang phát triển từng ngày, nếu bạn vẫn chấp nhận làm các công việc ở level thấp với mức lương thấp, bạn sẽ dễ dàng bị tụt lại phía sau.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a 
                href="https://zalo.me/0399604250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transition-all flex items-center justify-center gap-2"
              >
                <span className="text-xl">🔥</span> Đăng ký Ngay
              </a>
              <a 
                href="https://zalo.me/0399604250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span className="text-xl">💬</span> Nhắn tin cho Vinh để tư vấn
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

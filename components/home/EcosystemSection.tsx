import Link from "next/link";
import { Settings, Briefcase, Building } from "lucide-react";

export default function EcosystemSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-blue-900 mb-4">
            HỆ SINH THÁI GIẢI PHÁP
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: BU 1 (ĐÀO TẠO CƠ KHÍ) */}
          <div className="flex flex-col h-full bg-white rounded-xl p-8 border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mb-6">
              <Settings className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
              KHOÁ ĐÀO TẠO THIẾT KẾ CƠ KHÍ THỰC CHIẾN CHUẨN NHẬT
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-1">
              Dành riêng cho sinh viên và kỹ sư cơ khí muốn <strong className="text-gray-900">bước từ xưởng đứng máy vào phòng thiết kế, R&D văn phòng</strong>. Làm chủ tạo/bóc tách bản vẽ theo tiêu chuẩn JIS/ISO, SolidWorks thực chiến, <strong className="text-gray-900">thiết kế máy thực chiến chuẩn Nhật.</strong>
            </p>
            <div className="mt-auto">
              <Link
                href="/thiet-ke-may-chuan-nhat"
                className="inline-block w-full text-center bg-orange-500 text-white font-bold py-3.5 px-6 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Xem chi tiết Lộ trình học →
              </Link>
            </div>
          </div>

          {/* Card 2: BU 2 (KẾT NỐI JOB KỸ SƯ) */}
          <div className="flex flex-col h-full bg-white rounded-xl p-8 border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
              CẦU NỐI SỰ NGHIỆP & KẾT NỐI JOB KỸ SƯ NHẬT BẢN
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-1">
              Dành cho <strong className="text-gray-900">kỹ sư đa ngành (Cơ khí, IT, Điện-Điện tử, Xây dựng).</strong> Nhận lộ trình, bức tranh tổng quan thực tế về thị trường, và ứng tuyển job kỹ sư Nhật Bản.
            </p>
            <div className="mt-auto">
              <Link
                href="/ky-su-nhat-ban"
                className="inline-block w-full text-center bg-blue-900 text-white font-bold py-3.5 px-6 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Nhận lộ trình & Thông tin Job →
              </Link>
            </div>
          </div>

          {/* Card 3: B2B (DOANH NGHIỆP) */}
          <div className="flex flex-col h-full bg-white rounded-xl p-8 border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gray-50 text-gray-700 rounded-lg flex items-center justify-center mb-6">
              <Building className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
              GIẢI PHÁP CHO DOANH NGHIỆP (R&D & ĐÀO TẠO)
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-1">
              Tư vấn, thiết kế máy tự động, Robotic, hệ thống cơ điện tử chuẩn JIS/ISO. Thiết kế chương trình huấn luyện nâng cao năng lực cho đội ngũ kỹ sư nội bộ tại doanh nghiệp.
            </p>
            <div className="mt-auto">
              <a
                href="mailto:vinh.japanengineer@gmail.com?subject=Tư vấn hợp tác giải pháp B2B"
                className="inline-block text-blue-600 font-bold hover:underline transition-all"
              >
                Liên hệ hợp tác B2B →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

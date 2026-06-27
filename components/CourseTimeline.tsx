"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

type ModuleData = {
  id: number;
  title: string;
  description: string;
  details: string[];
};

const modules: ModuleData[] = [
  {
    id: 1,
    title: "Module 1: Product Design Process (Quy trình thiết kế sản phẩm cơ khí)",
    description: "Đây là modul để giúp học viên nắm được bức tranh tổng quan về ngành cơ khí thời đại mới ,về việc làm thế nào nào để tạo ra một sản phẩm hoàn chỉnh như máy tự động, thiết bị cơ khí thông thường ,thiết bị công nghệ (drone, robot,…).",
    details: [
      "Tìm hiểu quy trình R&D chuẩn từ khâu concept đến sản xuất mass."
    ]
  },
  {
    id: 2,
    title: "Module 2: Solidwork Thực Chiến chuẩn Nhật",
    description: "Không học SolidWorks theo tutorial. Học SolidWorks theo cách một kỹ sư R&D thực sự sử dụng nó mỗi ngày tại tập đoàn Nhật.",
    details: [
      "Quản lý cây thư mục dự án, quản lý chi tiết theo mã chuyên nghiệp chuẩn Nhật.",
      "Cách phối hợp giữa các kỹ sư khác khi thiết kế 1 dự án máy lớn cả nghìn chi tiết chuẩn Nhật.",
      "Mẹo thao tác nhanh giúp tăng hiệu suất thiết kế.",
      "Các lệnh và tính năng SolidWorks thường dùng cho R&D.",
      "Phương pháp vẽ tối ưu để dễ dàng chỉnh sửa, giảm thiểu lỗi phát sinh.",
      "Thiết lập và sử dụng template bản vẽ chuẩn tập đoàn Nhật."
    ]
  },
  {
    id: 3,
    title: "Modul 3: Tư duy Chế tạo DFM - Design for Manufacturability",
    description: "Đây là điểm giúp bạn khác biệt hoàn toàn so với phần lớn kỹ sư chỉ biết vẽ, hoặc kỹ sư thiết kế gà mờ. Trước khi thiết kế, bạn phải hiểu rõ các phương pháp gia công, các nguyên công mà một sản phẩm cần trải qua để thành hình, về chọn vật liệu, dung sai,... Bạn sẽ học cách thiết kế sao cho sản phẩm không chỉ hoạt động tốt mà còn dễ dàng và tối ưu chi phí khi sản xuất, tránh tình trạng \"vẽ những thứ không làm được, hoặc không tối ưu chi phí\". Một điểm mà mình thấy hầu hết các kỹ sư việt nam đều yếu đó là thiết kế làm sao để sản phẩm sản xuất hàng loạt được. do ở Việt Nam chủ yếu là doanh nghiệp nhỏ, thiết kế kiểu copy từ nước ngoài đơn chiếc nên không tối ưu về sản xuất hàng loạt.",
    details: [
      "Hiểu sâu về các phương pháp gia công cơ khí phổ biến trong sản xuất thử nghiệm và sản xuất hàng loạt.",
      "Nguyên lý và ứng dụng của dung sai lắp ghép trong thiết kế chuẩn JIS.",
      "Nguyên tắc chọn vật liệu: Chọn vật liệu gì và tại sao ?",
      "Chỉ định phương pháp gia công gì với từng bài toán thiết kế",
      "Tư duy DFM để thiết kế sản phẩm tối ưu cho sản xuất.",
      "Hiểu sâu về phương pháp đo kiểm khi QC theo JIS để tạo bản vẽ."
    ]
  },
  {
    id: 4,
    title: "Modul 4: Bóc tách & Tạo bản vẽ theo tiêu chuẩn JIS/ISO",
    description: "Học cách chuyển đổi mô hình 3D thành bản vẽ sản xuất 2D hoàn hảo, tuân thủ nghiêm ngặt tiêu chuẩn quốc tế.",
    details: [
      "Quy trình xuất bản vẽ lắp, bản vẽ hàn, bản vẽ gia công chi tiết từ mô hình 3D SolidWorks.",
      "Áp dụng các tiêu chuẩn JIS/ISO trong việc trình bày bản vẽ.",
      "Tiêu chuẩn và kỹ thuật ghi kích thước, dung sai, chú thích,...",
      "Quản lý và tạo BOM (Danh sách vật tư) hiệu quả.",
      "Đảm bảo bản vẽ 2D đáp ứng mọi yêu cầu gia công và lắp ráp."
    ]
  },
  {
    id: 5,
    title: "Modul 5: Thiết kế Máy thực chiến chuẩn tập đoàn Nhật",
    description: "Bạn sẽ được học tư duy về thiết kế và thực chiến bằng 2 Project chính: một dự án thiết kế máy tự động hoặc một cụm cơ cấu máy tự động, và một dự án thiết kế máy tĩnh hoàn chỉnh. Trong quá trình này, bạn sẽ được hướng dẫn cách tính toán, cách lựa chọn linh kiện tiêu chuẩn từ các hãng lớn, cũng như thiết kế hệ thống khí nén, chọn động cơ và các thiết bị khác.",
    details: [
      "Áp dụng kiến thức SolidWorks, DFM, JIS/ISO vào dự án thực tế.",
      "Thiết kế máy tự động và cơ cấu máy tĩnh từ ý tưởng đến chi tiết.",
      "Tính toán và lựa chọn linh kiện tiêu chuẩn.",
      "Xây dựng Portfolio cá nhân với các dự án thiết kế máy hoàn chỉnh.",
      "Phát triển tư duy giải quyết vấn đề và tối ưu hóa thiết kế."
    ]
  }
];

export default function CourseTimeline() {
  const [openModule, setOpenModule] = useState<number | null>(1); // Open the first module by default

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className="relative max-w-4xl mx-auto pl-2 md:pl-0">
      {/* Vertical line running through the timeline */}
      <div className="absolute left-7 md:left-12 top-4 bottom-4 w-0.5 bg-gray-200"></div>

      <div className="space-y-6 md:space-y-8">
        {modules.map((mod) => {
          const isOpen = openModule === mod.id;

          return (
            <div key={mod.id} className="relative flex items-start gap-4 md:gap-8 group">
              {/* Timeline Node */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-900 text-white font-bold shrink-0 mt-1 shadow-md border-4 border-white transition-transform duration-300 group-hover:scale-110">
                {mod.id}
              </div>

              {/* Accordion Card */}
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-300">
                {/* Header (Always visible) */}
                <div 
                  className="p-5 md:p-6 cursor-pointer hover:bg-gray-50 flex items-start justify-between gap-4 transition-colors"
                  onClick={() => toggleModule(mod.id)}
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-snug">
                      {mod.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                  <div className={`shrink-0 transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>

                {/* Body (Expandable) */}
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden bg-blue-50/30 ${isOpen ? 'max-h-[1000px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 md:p-6">
                    <ul className="space-y-3">
                      {mod.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm md:text-base leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

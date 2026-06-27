"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Khoá học này có phù hợp với người chưa có kinh nghiệm không?",
    answer: "Có. Khóa học được thiết kế để dẫn dắt bạn từ nền tảng vững chắc đến các kỹ năng chuyên sâu, ngay cả khi bạn chưa có kinh nghiệm. Tuy nhiên, bạn cần có đam mê và sự cam kết cao để theo kịp lộ trình."
  },
  {
    question: "Tôi có cần biết SolidWorks trước khi tham gia không?",
    answer: "Không bắt buộc. Module 2 sẽ trang bị cho bạn cách sử dụng SolidWorks theo tư duy R&D. Tuy nhiên, nếu bạn đã có kiến thức cơ bản, bạn sẽ tiếp thu nhanh hơn."
  },
  {
    question: "Khóa học diễn ra như thế nào?",
    answer: "Khóa học sẽ được tổ chức dưới hình thức Online Zoom chuyên sâu, kết hợp lý thuyết, thực hành dự án và các buổi tư vấn trực tiếp."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900 text-lg md:text-xl">{faq.question}</span>
              <ChevronDown 
                className={`w-6 h-6 text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""}`} 
              />
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden bg-gray-50/50 ${isOpen ? "max-h-[500px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"}`}
            >
              <div className="p-6 pt-4 text-gray-700 leading-relaxed text-[15px] md:text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

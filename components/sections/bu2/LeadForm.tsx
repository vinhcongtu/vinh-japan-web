"use client";

import { useState, useRef } from "react";
import { CheckCircle2, Loader2, Lock } from "lucide-react";
import Link from "next/link";

export default function LeadForm() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    industry: "",
    japanese: "",
    experience: "",
    obstacle: "",
    fullName: "",
    contact: "",
    specialty: "",
    note: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsSuccess(true);
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        alert("Lỗi máy chủ, vui lòng thử lại!");
      }
    } catch {
      alert("Lỗi kết nối mạng!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-16 bg-blue-50/30">
      <div className="container mx-auto px-4 max-w-6xl">
        

        {/* KHỐI 2: FORM THU LEAD */}
        <div ref={formRef} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-8 uppercase">
                HỒ SƠ CỦA BẠN ĐÃ ĐƯỢC ĐƯA VÀO HỆ THỐNG!
              </h2>
              
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 md:p-8 text-left mb-10 space-y-4 text-gray-700 leading-relaxed text-[15px] md:text-base">
                <p>
                  <strong className="text-blue-900">1. Với các vị trí đã hoặc sắp đủ chuẩn về tiếng Nhật và kinh nghiệm:</strong> Vinh sẽ trực tiếp lọc từ file hồ sơ bạn vừa điền và inbox qua Zalo/email để gửi thông tin job.
                </p>
                <p>
                  <strong className="text-blue-900">2. Với các bạn chưa đủ chuẩn appy ngay:</strong> Mời bạn truy cập ngay vào nhóm Job trên Zalo. Hãy lướt xem các Job đang tuyển để thấy thực tế thị trường tuyển dụng Nhật Bản đang yêu cầu công việc thế nào, để có kế hoạch học tập cho bản thân.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                <a 
                  href="https://zalo.me/g/gfsupu825" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-xl text-center shadow-lg transition-colors"
                >
                  VÀO NHÓM JOB ZALO NGAY
                </a>
                <Link 
                  href="/thiet-ke-may-chuan-nhat"
                  className="w-full md:w-auto bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-4 rounded-xl text-center shadow-lg transition-colors"
                >
                  KHOÁ ĐÀO TẠO THIẾT KẾ MÁY CHUẨN NHẬT
                </Link>
              </div>

              <div className="text-center mt-6">
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-gray-500 hover:text-blue-600 font-medium underline text-sm transition-colors"
                >
                  Điền lại form
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 uppercase">
                  ĐĂNG KÝ NHẬN JOB
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-[15px]">
                  Hoàn thành 1 phút trắc nghiệm để Vinh nắm được tình hình của ae và đưa ra lời khuyên về lộ trình phù hợp, cũng như để đăng ký nhận thông tin job phù hợp, tài liệu hữu ích với chuyên môn và kinh nghiệm một cách định kỳ.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* fullName */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tên của bạn <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="VD: Nguyễn Văn A"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>

                  {/* contact */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Số Zalo / Email <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="contact" 
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="VD: 0987654321 / a@gmail.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>

                  {/* industry */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Chuyên ngành của bạn? <span className="text-red-500">*</span></label>
                    <select 
                      name="industry" 
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                      <option value="" disabled>-- Chọn chuyên ngành --</option>
                      <option value="Cơ khí / Ô tô/ Tự động hóa">Cơ khí / Ô tô/ Tự động hóa</option>
                      <option value="Điện / Điện tử / Viễn thông">Điện / Điện tử / Viễn thông</option>
                      <option value="Công nghệ thông tin (IT) / Phần mềm">Công nghệ thông tin (IT) / Phần mềm</option>
                      <option value="Xây dựng / Kiến trúc">Xây dựng / Kiến trúc</option>
                      <option value="Ngành khác...">Ngành khác...</option>
                    </select>
                  </div>

                  {/* japanese */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tiếng Nhật hiện tại <span className="text-red-500">*</span></label>
                    <select 
                      name="japanese" 
                      required
                      value={formData.japanese}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                      <option value="" disabled>-- Chọn trình độ --</option>
                      <option value="Chưa biết gì">Chưa biết gì</option>
                      <option value="JLPT N5/Tương đương N5">JLPT N5/Tương đương N5</option>
                      <option value="JLPT N4/Tương đương N4">JLPT N4/Tương đương N4</option>
                      <option value="JLPT N3/Tương đương N3">JLPT N3/Tương đương N3</option>
                      <option value="JLPT N2/Tương đương N2">JLPT N2/Tương đương N2</option>
                      <option value="JLPT N1/Tương đương N1">JLPT N1/Tương đương N1</option>
                    </select>
                  </div>

                  {/* experience */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Kinh nghiệm làm việc <span className="text-red-500">*</span></label>
                    <select 
                      name="experience" 
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                      <option value="" disabled>-- Chọn kinh nghiệm --</option>
                      <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm</option>
                      <option value="Dưới 1 năm kinh nghiệm">Dưới 1 năm kinh nghiệm</option>
                      <option value="1-3 năm kinh nghiệm">1-3 năm kinh nghiệm</option>
                      <option value="3-5 năm kinh nghiệm">3-5 năm kinh nghiệm</option>
                      <option value="5 năm kinh nghiệm trở lên">5 năm kinh nghiệm trở lên</option>
                    </select>
                  </div>

                  {/* specialty */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Chi tiết chuyên môn/Kỹ năng nổi bật</label>
                    <input 
                      type="text" 
                      name="specialty" 
                      value={formData.specialty}
                      onChange={handleChange}
                      placeholder="VD: Thiết kế máy FA, CAE, khuôn, PLC, Java, React..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>

                  {/* note */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ghi chú thêm</label>
                    <textarea 
                      name="note" 
                      rows={3}
                      value={formData.note}
                      onChange={handleChange}
                      placeholder="Bạn có nguyện vọng hay câu hỏi gì thêm không"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-y"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        ĐANG XỬ LÝ...
                      </>
                    ) : (
                      "GỬI THÔNG TIN"
                    )}
                  </button>
                  <p className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                    <Lock className="w-4 h-4" />
                    Thông tin của bạn được bảo mật an toàn.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";

export default function LeadForm() {
  const formRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const isMechanical = formData.industry === "Cơ khí / Ô tô / Tự động hóa";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      }
    } catch (error) {
      alert("Lỗi kết nối. Vui lòng kiểm tra mạng và thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      industry: "",
      japanese: "",
      experience: "",
      obstacle: "",
      fullName: "",
      contact: "",
      specialty: "",
      note: ""
    });
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  if (isSuccess) {
    return (
      <section id="lead-form" ref={formRef} className="bg-blue-50/40 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 text-center border border-blue-100">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 uppercase">HỒ SƠ CỦA BẠN ĐÃ ĐƯỢC ĐƯA VÀO HỆ THỐNG!</h2>

            <div className="text-gray-700 text-left mb-8 space-y-4 bg-slate-50 p-6 rounded-lg">
              <p className="font-semibold text-lg text-blue-800">Quy trình nhận Job diễn ra như sau:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li><span className="font-medium text-gray-900">Với các vị trí đã hoặc sắp đủ chuẩn về tiếng Nhật và kinh nghiệm:</span> Vinh sẽ trực tiếp lọc từ file hồ sơ bạn vừa điền và inbox qua Zalo/email để gửi thông tin job.</li>
                <li><span className="font-medium text-gray-900">Với các bạn chưa đủ chuẩn appy ngay:</span> Mời bạn truy cập ngay vào Kho Job trên Zalo. Hãy lướt xem các Job đang tuyển để thấy thực tế thị trường tuyển dụng Nhật Bản đang yêu cầu thế nào, để có kế hoạch học tập cho bản thân.</li>
              </ol>
            </div>

            <a
              href="https://zalo.me/g/gfsupu825"
              target="_blank" rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 mb-10"
            >
              VÀO KHO JOB ZALO NGAY
            </a>

            <div className="border-t border-gray-200 pt-8 mt-4">
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                <span className="font-semibold text-blue-800">Bonus:</span> Đừng quên kết nối và Follow Facebook của Vinh. Đây là nơi tôi thường xuyên chia sẻ các kiến thức, kinh nghiệm thực tế về thiết kế cơ khí và chia sẻ mẹo học tiếng nhật, mẹo phỏng vấn cho kỹ sư.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.facebook.com/vinh.japan/"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto bg-blue-600 text-white font-bold px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition-colors text-center"
                >
                  FOLLOW FACEBOOK VINH VŨ
                </a>
                <button
                  onClick={handleReset}
                  className="inline-block w-full sm:w-auto bg-gray-200 text-gray-700 font-bold px-8 py-3 rounded-xl shadow hover:bg-gray-300 transition-colors text-center"
                >
                  ĐIỀN LẠI FORM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" ref={formRef} className="bg-blue-50/40 pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-10">
          <div className="text-center">
            <span className="block text-base md:text-lg font-extrabold uppercase tracking-widest text-blue-600 mb-2 font-[family-name:var(--font-plus-jakarta)]">
              NHẬN LỘ TRÌNH & CỐ VẤN
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 font-[family-name:var(--font-plus-jakarta)] uppercase">
              MỞ KHOÁ KHO JOB KỸ SƯ MIỄN PHÍ
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto pb-6 border-b border-gray-100">
              Dành cho cả người muốn đi Nhật và kỹ sư muốn chuyển việc tại Nhật. Hoàn thành 1 phút trắc nghiệm để Vinh nắm được tình hình của ae và đưa ra lời khuyên về lộ trình phù hợp, cũng như để truy cập vào nhóm job zalo .
            </p>
          </div>

          <form onSubmit={handleSubmit} className="pt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Field 1 */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Chuyên ngành của bạn? <span className="text-red-500">*</span></label>
                <select name="industry" required value={formData.industry} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 outline-none transition-shadow">
                  <option value="" disabled>-- Chọn chuyên ngành --</option>
                  <option value="Cơ khí / Ô tô / Tự động hóa">Cơ khí / Ô tô/ Tự động hóa</option>
                  <option value="Điện / Điện tử / Viễn thông">Điện / Điện tử / Viễn thông</option>
                  <option value="Công nghệ thông tin (IT) / Phần mềm">Công nghệ thông tin (IT) / Phần mềm</option>
                  <option value="Xây dựng / Kiến trúc">Xây dựng / Kiến trúc</option>
                  <option value="Ngành khác...">Ngành khác...</option>
                </select>
              </div>

              {/* Field 2 */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Tiếng Nhật hiện tại của bạn <span className="text-red-500">*</span></label>
                <select name="japanese" required value={formData.japanese} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 outline-none transition-shadow">
                  <option value="" disabled>-- Trình độ tiếng Nhật --</option>
                  <option value="Chưa biết gì">Chưa biết gì</option>
                  <option value="JLPT N5/Tương đương N5">JLPT N5/Tương đương N5</option>
                  <option value="JLPT N4/Tương đương N4">JLPT N4/Tương đương N4</option>
                  <option value="JLPT N3/Tương đương N3">JLPT N3/Tương đương N3</option>
                  <option value="JLPT N2/Tương đương N2">JLPT N2/Tương đương N2</option>
                  <option value="JLPT N1/Tương đương N1">JLPT N1/Tương đương N1</option>
                </select>
              </div>

              {/* Field 3 */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Kinh nghiệm làm việc <span className="text-red-500">*</span></label>
                <select name="experience" required value={formData.experience} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 outline-none transition-shadow">
                  <option value="" disabled>-- Chọn số năm kinh nghiệm --</option>
                  <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm</option>
                  <option value="Dưới 1 năm kinh nghiệm">Dưới 1 năm kinh nghiệm</option>
                  <option value="1-3 năm kinh nghiệm">1-3 năm kinh nghiệm</option>
                  <option value="3-5 năm kinh nghiệm">3- 5 năm kinh nghiệm</option>
                  <option value="5 năm kinh nghiệm trở lên">5 năm kinh nghiệm trở lên</option>
                </select>
              </div>

              {/* Field 4 */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Trở ngại lớn nhất của bạn lúc này là gì? <span className="text-red-500">*</span></label>
                <select name="obstacle" required value={formData.obstacle} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 outline-none transition-shadow">
                  <option value="" disabled>-- Chọn khó khăn hiện tại --</option>
                  <option value="Mông lung, chưa có lộ trình đi Nhật rõ ràng">Mông lung, chưa có lộ trình đi Nhật rõ ràng</option>
                  <option value="Tiếng Nhật yếu, sợ không qua nổi vòng phỏng vấn">Tiếng Nhật yếu, sợ không qua nổi vòng phỏng vấn</option>
                  <option value="Tiếng Nhật tốt, kinh nghiệm vững nhưng chưa tìm được Job phù hợp">Tiếng Nhật tốt, kinh nghiệm vững nhưng chưa tìm được Job phù hợp</option>
                  {isMechanical && (
                    <option value="Yếu chuyên môn thực chiến (Bản vẽ JIS, SolidWorks, kinh nghiệm thiết kế cơ khí)">
                      Yếu chuyên môn thực chiến (Bản vẽ JIS, SolidWorks, kinh nghiệm thiết kế cơ khí)
                    </option>
                  )}
                </select>
              </div>

              {/* Field 5 */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Tên của bạn <span className="text-red-500">*</span></label>
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="Nguyễn Văn A" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 outline-none transition-shadow" />
              </div>

              {/* Field 6 */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Số Zalo/Email <span className="text-red-500">*</span></label>
                <input type="text" name="contact" required value={formData.contact} onChange={handleChange} placeholder="0912345678 / email@example.com" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 outline-none transition-shadow" />
              </div>
            </div>

            {/* Field 7 */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Chi tiết chuyên môn/Kỹ năng nổi bật <span className="text-gray-400 font-normal">(Không bắt buộc)</span></label>
              <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} placeholder="VD: Thiết kế máy FA (SolidWorks), CAE, khuôn, ô tô, PLC, Java backend, React, Embedded C" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 outline-none transition-shadow" />
            </div>

            {/* Field 8 */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Ghi chú thêm <span className="text-gray-400 font-normal">(Không bắt buộc)</span></label>
              <textarea name="note" value={formData.note} onChange={handleChange} placeholder="Bạn có nguyện vọng hay câu hỏi gì thêm không?" rows={3} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 outline-none transition-shadow"></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    ĐANG XỬ LÝ...
                  </>
                ) : (
                  "GỬI THÔNG TIN"
                )}
              </button>
              <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                Thông tin của bạn được bảo mật an toàn.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

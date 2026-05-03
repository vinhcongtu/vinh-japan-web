export default function JobCategories() {
  const categories = [
    {
      title: "Kỹ sư cơ khí,ô tô",
      items: "Thiết kế cơ khí, phân tích CAE, Lập trình gia công CNC,… (Ví dụ: Robot, máy FA, khuôn mẫu, ô tô,…)",
      icon: "⚙️"
    },
    {
      title: "Kỹ sư IT/Tech",
      items: "Thiết kế Web/App, lập trình Nhúng, Kỹ sư cầu nối, AI, Test…",
      icon: "💻"
    },
    {
      title: "Kỹ sư Điện/Điện tử/Bán dẫn",
      items: "Thiết kế mạch điện/ điện tử cho EV, Robot, Lập trình PLC…",
      icon: "⚡"
    },
    {
      title: "Kỹ sư xây dựng",
      items: "Quản lý thi công, CAD, BIM,…",
      icon: "🏗️"
    },
    {
      title: "Sản xuất & Bảo trì",
      items: "Quản lý sản xuất, Bảo dưỡng ô tô, Bảo trì máy móc,...",
      icon: "🏭"
    },
    {
      title: "Khác",
      items: "vật liệu/hoá học, Job văn phòng khác (quản lý khách sạn, thông dịch, kế toán,…)",
      icon: "🌐"
    }
  ];

  return (
    <section id="jobs" className="bg-slate-50 pb-8 md:pb-12 pt-12 md:pt-16 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
            Các nhóm Job bên mình thường có
          </h2>
          <p className="text-gray-500 italic text-sm md:text-base">
            (hãy điền form bên dưới để xem nội dung chi tiết job)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{cat.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{cat.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {cat.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

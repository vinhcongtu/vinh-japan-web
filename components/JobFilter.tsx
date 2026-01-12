'use client';

import { Check, Info, Settings, Code2, Zap, HardHat, Factory, Briefcase } from 'lucide-react';

export default function JobFilter() {
    const jobCategories = [
        {
            title: "Kỹ sư Cơ khí/ô tô/tự động hoá",
            desc: "Thiết kế cơ khí, thiết kế ô tô/CAD/CAE, CNC…",
            icon: Settings
        },
        {
            title: "Kỹ sư IT/Tech",
            desc: "Web/App, Bridge SE, AI, Lập trình nhúng,...",
            icon: Code2
        },
        {
            title: "Kỹ sư Điện/Điện tử",
            desc: "Thiết kế mạch, PLC,...",
            icon: Zap
        },
        {
            title: "Kỹ sư Xây dựng",
            desc: "Quản lý thi công, BIM,...",
            icon: HardHat
        },
        {
            title: "Sản xuất & Bảo trì",
            desc: "Quản lý sản xuất, Bảo dưỡng ô tô/máy móc, Bảo trì,...",
            icon: Factory
        },
        {
            title: "Ngành nghề khác",
            desc: "Hoá học, Vật liệu, Phiên dịch, Kế toán, Nhà hàng, Back-office...",
            icon: Briefcase
        },
    ];

    return (
        <section id="jobs" className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        Các nhóm Job bên mình thường có
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Mình tập trung vào các vị trí kỹ sư chất lượng cao, nhưng cũng hỗ trợ các ngành nghề khác nếu có cơ hội tốt.
                    </p>
                </div>

                {/* Categories Grid - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {jobCategories.map((job, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600 group">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                                <job.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">{job.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{job.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Requirements Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Suitable Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Check size={100} className="text-green-500" />
                        </div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <Check className="text-green-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Bạn phù hợp nếu...</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <span className="font-bold text-gray-700 min-w-[100px]">Ở Việt Nam:</span>
                                <p className="text-gray-600">Tiếng Nhật tương đương <span className="font-bold text-gray-900">N3 trở lên</span> và tối thiểu <span className="font-bold text-gray-900">1 năm kinh nghiệm</span> chuyên môn. (thỉnh thoảng có Job hakken yêu cầu tiếng nhật thấp hơn nhưng yêu cầu kinh nghiệm tốt)</p>
                            </div>
                            <div className="flex items-start">
                                <span className="font-bold text-gray-700 min-w-[100px]">Ở Nhật:</span>
                                <p className="text-gray-600">Giao tiếp tốt <span className="font-bold text-gray-900">(N3 cứng/N2)</span> và có kinh nghiệm phù hợp vị trí.</p>
                            </div>
                        </div>
                    </div>

                    {/* Unsuitable Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-400 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Info size={100} className="text-amber-500" />
                        </div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                <Info className="text-amber-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Nếu chưa đủ điều kiện:</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="mr-2 text-amber-500">•</span>
                                Follow kênh social để nắm lộ trình & tài liệu.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-amber-500">•</span>
                                Vào nhóm job Zalo để xem job mình đăng.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-amber-500">•</span>
                                Điền form để mình chủ động báo khi có job.
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
}

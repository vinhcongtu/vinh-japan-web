import Link from 'next/link';
import { FileText, FolderOpen, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const resources = [
    {
        title: "Tài liệu học tiếng Nhật",
        desc: "Tổng hợp giáo trình, từ vựng, kanji N5-N1 chọn lọc.",
        link: "https://drive.google.com/drive/folders/1w74uXWI56dJeB8DoUaWNd0BEvxHAQURA",
        icon: <FolderOpen className="w-12 h-12 text-blue-500" />,
        color: "bg-blue-50 border-blue-100"
    },
    {
        title: "CV mẫu & Câu hỏi phỏng vấn",
        desc: "Các mẫu CV chuẩn Nhật và bộ câu hỏi thường gặp khi phỏng vấn.",
        link: "https://drive.google.com/drive/folders/125FynREFhEsYT2JlHnree1DlBT5yoKsj",
        icon: <FileText className="w-12 h-12 text-green-500" />,
        color: "bg-green-50 border-green-100"
    },
];

export default function ResourcesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Header />

            <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Kho Tài Liệu Miễn Phí
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Mình tổng hợp một số tài liệu hữu ích cho anh em học tiếng Nhật và chuẩn bị phỏng vấn. Khi có thời gian mình sẽ sưu tầm thêm và cập nhật đầy đủ hơn nữa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {resources.map((res, idx) => (
                        <a
                            key={idx}
                            href={res.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block p-8 rounded-2xl border-2 hover:shadow-xl transition-all transform hover:-translate-y-1 ${res.color} group relative overflow-hidden`}
                        >
                            <div className="flex items-start space-x-6 relative z-10">
                                <div className="p-4 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                    {res.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{res.title}</h3>
                                    <p className="text-gray-600 text-lg mb-4">{res.desc}</p>
                                    <span className="inline-flex items-center font-bold text-blue-600 group-hover:underline">
                                        Truy cập Drive <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>



            </div>

            <Footer />
        </main>
    );
}

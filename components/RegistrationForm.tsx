'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type FormData = {
    fullName: string;
    contact: string;
    industry: string;
    specialty?: string;
    japanese: string;
    experience: string;
    note?: string;
    _honey?: string; // Honeypot field
};

export default function RegistrationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                // Handle fake success from honeypot or real success
                setIsSuccess(true);
                reset();
            } else {
                setError(result.message || 'Có lỗi xảy ra. Vui lòng thử lại.');
            }
        } catch (err) {
            setError('Lỗi kết nối. Vui lòng kiểm tra mạng.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 p-8 rounded-2xl border border-green-200 text-center shadow-lg"
            >
                <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Đăng ký thành công!</h3>
                <p className="text-green-700 mb-6 max-w-lg mx-auto">
                    Mình đã nhận được thông tin và sẽ liên hệ sớm với bạn. Trong lúc chờ đợi, hãy tham gia nhóm Job trên zalo bên dưới để xem thông tin các job bên mình đang tuyển.
                </p>
                <a
                    href="https://zalo.me/g/gfsupu825"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-md"
                >
                    Vào nhóm Job Zalo ngay <ArrowRight className="ml-2 w-5 h-5" />
                </a>
            </motion.div>
        );
    }

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100" id="form">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Đăng ký nhận Job
                </h2>
                <p className="text-gray-600">
                    Điền 30 giây để mình chủ động liên hệ khi có job đúng ngành + share tài liệu hữu ích.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* HONEYPOT - Hidden */}
                <input
                    type="text"
                    {...register("_honey")}
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            {...register("fullName", { required: "Vui lòng nhập họ tên" })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="Nguyễn Văn A"
                        />
                        {errors.fullName && <span className="text-red-500 text-sm mt-1">{errors.fullName.message}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Số Zalo / Email <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            {...register("contact", { required: "Vui lòng nhập liên hệ" })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="09xxx hoặc email..."
                        />
                        {errors.contact && <span className="text-red-500 text-sm mt-1">{errors.contact.message}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nhóm Ngành <span className="text-red-500">*</span></label>
                        <select
                            {...register("industry", { required: "Vui lòng chọn ngành" })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                        >
                            <option value="">-- Chọn ngành --</option>
                            <option value="Cơ khí / Ô tô">Cơ khí / Ô tô</option>
                            <option value="IT / Software">IT / Software</option>
                            <option value="Điện / Điện tử">Điện / Điện tử</option>
                            <option value="Nhúng / Embedded">Nhúng / Embedded</option>
                            <option value="Xây dựng">Xây dựng</option>
                            <option value="Sản xuất / QA / QC / Manufacturing">Sản xuất / QA / QC / Manufacturing</option>
                            <option value="Bán dẫn">Bán dẫn</option>
                            <option value="Khác">Khác</option>
                        </select>
                        {errors.industry && <span className="text-red-500 text-sm mt-1">{errors.industry.message}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tiếng Nhật <span className="text-red-500">*</span></label>
                        <select
                            {...register("japanese", { required: "Vui lòng chọn trình độ" })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                        >
                            <option value="">-- Chọn trình độ --</option>
                            <option value="Dự định học">Dự định học</option>
                            <option value="JLPT N5/Tương đương N5">JLPT N5/Tương đương N5</option>
                            <option value="JLPT N4/Tương đương N4">JLPT N4/Tương đương N4</option>
                            <option value="JLPT N3/Tương đương N3">JLPT N3/Tương đương N3</option>
                            <option value="JLPT N2/Tương đương N2">JLPT N2/Tương đương N2</option>
                            <option value="JLPT N1/Tương đương N1">JLPT N1/Tương đương N1</option>
                        </select>
                        {errors.japanese && <span className="text-red-500 text-sm mt-1">{errors.japanese.message}</span>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Số năm kinh nghiệm <span className="text-red-500">*</span></label>
                    <select
                        {...register("experience", { required: "Vui lòng chọn kinh nghiệm" })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                        <option value="">-- Chọn kinh nghiệm --</option>
                        <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm</option>
                        <option value="Dưới 1 năm">Dưới 1 năm</option>
                        <option value="1–3 năm">1–3 năm</option>
                        <option value="3–5 năm">3–5 năm</option>
                        <option value="Trên 5 năm">Trên 5 năm</option>
                    </select>
                    {errors.experience && <span className="text-red-500 text-sm mt-1">{errors.experience.message}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chi tiết chuyên môn (Optional)</label>
                    <input
                        type="text"
                        {...register("specialty")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="VD: Thiết kế máy FA, Lập trình nhúng, Java, CAE..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú thêm (Nếu có)</label>
                    <textarea
                        {...register("note")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px]"
                        placeholder="VD: mong muốn khu vực, mức lương,..."
                    />
                </div>

                {error && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.01] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin mr-2" /> Đang gửi...
                        </>
                    ) : (
                        'Đăng ký ngay'
                    )}
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                    thông tin của bạn được bảo mật an toàn.
                </p>
            </form>
        </div>
    );
}

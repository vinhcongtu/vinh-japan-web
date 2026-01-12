'use client';

export default function About() {
    return (
        <section id="about" className="pt-8 pb-16 md:pt-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">

                    {/* Image */}
                    <div className="flex-1 w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                            <img
                                src="/images/about-team-japan.webp"
                                alt="Team Engineers Japan"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/800x600/f1f5f9/475569?text=Team+Activities";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-6">
                                <div className="text-white">
                                    <p className="font-bold text-xl">Kết nối & Chia sẻ</p>
                                    <p className="text-sm opacity-90">Cùng phát triển cộng đồng kỹ sư Việt tại Nhật</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 w-full lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                            Về Vinh & Lý do mình làm <br /><span className="text-blue-700">HR Bridge</span>
                            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-600 rounded-full"></span>
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
                            <p>
                                Chào anh em, mình là Vinh - cựu sinh viên HaUI, hiện đang làm kỹ sư thiết kế máy tại Yokohama, Japan. Trên hành trình tìm đường phát triển sự nghiệp tại Nhật, mình cũng từng gặp rất nhiều khó khăn trắc trở do thiếu định hướng, không nắm được bức tranh tổng quan. Mình cũng từng chứng kiến nhiều bạn bè lớp đại học phải bỏ ra hàng nghìn đô la phí môi giới để sang Nhật, hay nhiều bạn ở Nhật rồi nhưng lương quá thấp, đang loay hoay không tìm được Job phù hợp để chuyển việc.
                            </p>
                            <p>
                                Do đó mình muốn vận dụng những kiến thức, trải nghiệm, network của mình để giúp ae trên hành trình phát triển sự nghiệp. Khác với HR thuần về tuyển dụng khác, mình cũng là kỹ sư đang làm việc thực tế tại Nhật, hiểu rõ cả doanh nghiệp và ứng viên muốn gì, nên ngoài giới thiệu Job mình còn có thể tư vấn cho ae về viết CV, phỏng vấn, hay các vấn đề khác trong công việc hay cuộc sống.
                            </p>
                            <p>
                                Ngoài lề một chút về mình, mình rất thích kinh doanh và marketing, cũng có ước mơ sau này về Việt Nam sẽ phát triển các sản phẩm tự động hoá cho thị trường Việt. Một mình mình làm thì điều đó là rất khó khăn, nhưng nếu có thể hợp tác với vài anh em kỹ sư giỏi ở các lĩnh vực khác nhau thì mình nghĩ vẫn còn cơ hội cạnh tranh với các sản phẩm của nước ngoài trên “sân nhà Việt Nam”(mình làm phần cơ khí, 1 người làm điện, 1 người lập trình nhúng,...). Do đó mình muốn kết nối với ae bằng cách giới thiệu Job và trao đi giá trị.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

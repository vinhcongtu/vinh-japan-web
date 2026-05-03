import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="pt-8 pb-16 md:pt-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          
          <div className="flex-1 w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group aspect-[4/3]">
              <Image 
                src="/images/about-team-japan.webp" 
                alt="Team Engineers Japan" 
                fill
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-xl">Kết nối & Chia sẻ</p>
                  <p className="text-sm opacity-90">Cùng phát triển cộng đồng kỹ sư Việt tại Nhật</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block font-[family-name:var(--font-plus-jakarta)]">
              Về Vinh & Lý do mình làm <br/>
              <span className="text-blue-700">HR Bridge</span>
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
              <p>
                Chào anh em, mình là Vinh - cựu sinh viên HaUI, hiện đang làm kỹ sư thiết kế máy tại Yokohama, Japan. Trên hành trình tìm đường phát triển sự nghiệp tại Nhật, mình cũng từng gặp rất nhiều khó khăn trắc trở do thiếu định hướng, kiến thức cần thiết, cũng như không nắm được bức tranh tổng quan. Mình cũng từng chứng kiến nhiều bạn bè lớp đại học phải bỏ ra hàng nghìn đô la phí môi giới để sang Nhật làm các công việc trái ngành, tương lai mịt mờ.
              </p>
              <p>
                Khác với HR thuần về tuyển dụng khác, mình cũng là kỹ sư đang làm việc thực tế tại Nhật, hiểu rõ cả doanh nghiệp và ứng viên cần gì, thiếu gì,… do đó mình muốn vận dụng những kiến thức, trải nghiệm, network của mình để giúp ae trên hành trình phát triển sự nghiệp.
              </p>
              <p>
                Ngoài lề một chút về mình, mình rất thích vọc vạch nghiên cứu phát triển sản phẩm, và có ước mơ tương lai có thể phát triển robot, sản phẩm công nghiệp thông minh cho quê nhà Việt Nam,... Nên rất muốn tương lai có thể hợp tác với các ae kỹ sư ở các lĩnh vực khác nhau. Đó cũng là lý do thôi thúc mình muốn kết nối với ae bằng cách chia sẻ kinh nghiệm, giới thiệu Job và trao đi giá trị.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

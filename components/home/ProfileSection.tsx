import Image from "next/image";

export default function ProfileSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Image (40%) */}
          <div className="w-full lg:w-[40%] order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group aspect-[4/3]">
              <Image
                src="/images/home/about-team-japan.webp?v=2"
                alt="Team in Japan"
                fill
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-xl mb-1">「共創」- Đồng sáng tạo</p>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Gắn kết và làm việc cùng đội ngũ chuyên gia bản xứ.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story (60%) */}
          <div className="w-full lg:w-[60%] order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8 relative inline-block">
                Người Đồng Hành Cùng Bạn Là Ai?
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-blue-600 rounded-full"></span>
              </h2>
            </div>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                こんにちは！Mình là Vinh - cựu sinh viên HaUI, hiện đang làm kỹ
                sư thiết kế máy tại phòng nghiên cứu phát triển của một tập đoàn
                hàng đầu Nhật Bản ở Yokohama. Mình từng chứng kiến nhiều bạn bè
                lớp đại học vì nhiều lý do như thiếu định hướng, kiến thức và kỹ
                năng cần thiết, nên cho đến hiện tại vẫn đang làm các công việc
                tay chân đứng máy dưới xưởng vốn không phải giành cho kỹ sư, hay
                có bạn phải bỏ ra một số tiền rất lớn để sang Nhật làm các công
                việc trái ngành, gặp công ty không tốt,...
              </p>
              <p>
                May mắn hơn, mình đã gặp được mentor tốt từ thời sinh viên, giúp
                mình đi đúng hướng ngay từ đầu. Đến nay, mình đã có hơn 7 năm
                kinh nghiệm thiết kế máy ở cả Nhật Bản và Việt Nam, từng thiết
                kế từ khâu lên ý tưởng các dự án lớn như: hệ thống rửa ô tự động,
                hệ thống hút bụi công nghiệp tự động, máy in, dây chuyền sản
                xuất,… Đặc biệt, mình cũng đã kết nối, xây dựng được network với
                một số Agency tuyển dụng kỹ sư uy tín tại Nhật Bản.
              </p>
              <p>
                Ngoài lề một chút về mình, mình có niềm đam mê lớn với việc
                nghiên cứu phát triển sản phẩm và ước mơ tương lai có thể tạo ra
                những robot, sản phẩm công nghiệp thông minh cho quê nhà Việt
                Nam. Nên rất muốn tương lai có thể hợp tác với các ae kỹ sư ở
                các lĩnh vực khác nhau. Đó cũng là lý do thôi thúc mình muốn kết
                nối với ae bằng cách chia sẻ kinh nghiệm, đào tạo thiết kế cơ
                khí, giới thiệu Job uy tín mà mình biết và trao đi giá trị.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

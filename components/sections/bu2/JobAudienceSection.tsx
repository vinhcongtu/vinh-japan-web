import Link from "next/link";
import { ArrowRight, GraduationCap, ShieldCheck } from "lucide-react";

export default function JobAudienceSection() {
  return (
    <section aria-labelledby="job-audience-title" className="border-t border-blue-100 bg-blue-50/40 py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <h2 id="job-audience-title" className="mb-6 scroll-mt-24 text-2xl font-heading font-extrabold leading-tight text-blue-900 md:text-4xl">
            NHÓM JOB ZALO KỸ SƯ NHẬT BẢN DÀNH CHO AI?
          </h2>
          <p className="text-base leading-relaxed text-gray-700 md:text-lg">
            Nhóm Zalo này dành cho <strong>sinh viên và kỹ sư các ngành kỹ thuật</strong> có định hướng làm việc tại Nhật Bản, hoặc các kỹ sư đang ở Nhật và muốn tìm cơ hội tốt hơn để chuyển việc.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            (Không dành cho du học sinh, thực tập sinh,…)
          </p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-10">
          <div className="flex items-start gap-3 md:gap-4">
            <ShieldCheck aria-hidden="true" className="mt-1 h-7 w-7 shrink-0 text-blue-600" />
            <h3 className="text-xl font-bold leading-snug text-blue-900 md:text-2xl">
              VÌ SAO JOB BÊN MÌNH KHÔNG THU PHÍ MÔI GIỚI?
            </h3>
          </div>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
            <p>
              Mình kết nối các cơ hội việc làm kỹ sư chất lượng cao tại Nhật thông qua những đối tác tuyển dụng mà mình hợp tác. Với các vị trí này, <strong className="text-blue-900">phí giới thiệu nhân sự do doanh nghiệp tuyển dụng chi trả cho agency, không thu từ ứng viên.</strong> Vì vậy, anh em hoàn toàn không phải trả phí môi giới khi ứng tuyển qua những Job này.
            </p>
            <p className="rounded-r-lg border-l-2 border-amber-300 bg-amber-50/70 p-4 text-sm italic leading-relaxed text-gray-700 md:text-base">
              Còn các job mà mất phí mấy nghìn đô anh em thường hay thấy thì đều là các job mà bên công ty môi giới ở Việt Nam thu phí cả 2 phía doanh nghiệp Nhật lẫn ứng viên, nó mang mác visa kỹ sư chứ thực chất là làm công việc tay chân dưới xưởng.
            </p>
          </div>
          <div className="mt-7 text-center">
            <a
              href="https://zalo.me/g/gfsupu825"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-orange-500 px-6 py-4 text-center text-base font-bold leading-relaxed text-white shadow-md transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 sm:w-auto md:px-8 md:text-lg"
            >
              VÀO NHÓM ZALO THEO DÕI JOB KỸ SƯ
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-blue-200 pt-10 md:mt-12 md:pt-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <GraduationCap aria-hidden="true" className="mb-4 h-8 w-8 text-blue-600" />
            <h3 className="text-xl font-bold leading-snug text-blue-900 md:text-2xl">
              DÀNH CHO ANH EM CƠ KHÍ MUỐN PHÁT TRIỂN LÊN THIẾT KẾ MÁY
            </h3>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
              <p>
                Anh em <strong>cơ khí, cơ điện tử</strong> nào đang làm vận hành máy, làm sản xuất hoặc CAD Operator (thợ vẽ), nhưng có định hướng tiến lên làm <strong>kỹ sư thiết kế cơ khí</strong>?
              </p>
              <p>
                Mình đã xây dựng <strong className="text-blue-900">chương trình đào tạo thiết kế cơ khí thực chiến chuẩn Nhật</strong>, đi từ nền tảng sản xuất, vật liệu, bản vẽ JIS/ISO đến tư duy tính toán, thiết kế chi tiết, thiết kế ý tưởng máy tự động hoá và thiết bị cơ khí thông thường.
              </p>
              <p>
                Chương trình còn có các dự án thực hành để xây dựng portfolio, giúp bạn từng bước phát triển năng lực chuyên môn và có thêm cơ sở chứng minh kỹ năng khi ứng tuyển.
              </p>
            </div>
            <Link
              href="/thiet-ke-may-chuan-nhat"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-blue-800 px-5 py-4 text-center text-sm font-bold leading-relaxed text-white transition-colors hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:w-auto md:text-base"
            >
              XEM LỘ TRÌNH KHÓA HỌC THIẾT KẾ MÁY CHUẨN NHẬT
              <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

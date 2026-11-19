"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export default function CollapsibleAbout({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <p className="text-[17px] text-gray-700 leading-relaxed md:hidden">
        Chào anh em, mình là Vinh - cựu sinh viên HaUI, hiện đang làm kỹ sư thiết kế máy tại Yokohama, Japan.
      </p>
      <div id="about-vinh-details" className={`${expanded ? "block mt-6" : "hidden"} md:block md:mt-0`}>
        {children}
      </div>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls="about-vinh-details"
        onClick={() => setExpanded(!expanded)}
        className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 md:hidden"
      >
        {expanded ? "Thu gọn" : "Xem thêm"}
        <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
    </>
  );
}

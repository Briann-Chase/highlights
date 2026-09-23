import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";

/** Sits beside the orange CTA. Parent should use `group` and matching text size. */
export function OrangeCtaChevron() {
  return (
    <span
      aria-hidden
      className="relative inline-flex size-[2.75em] shrink-0 rounded-full bg-[#ff9b3f] text-white transition group-hover:bg-[#ffa654]"
    >
      <IoMdArrowDropright
        className="absolute left-1/2 top-1/2 block h-[68%] w-[68%] text-current"
        style={{
          transform: "translate(calc(-50% + 1px), -50%)",
        }}
      />
    </span>
  );
}

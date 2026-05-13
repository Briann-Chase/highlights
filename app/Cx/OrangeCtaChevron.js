import { IoMdArrowDropleft } from "react-icons/io";

/** Sits beside the orange CTA (outside the link). Parent should set matching text size (e.g. text-sm) so em matches the button. */
export function OrangeCtaChevron() {
  return (
    <span
      aria-hidden
      className="relative inline-flex size-[2.75em] shrink-0 rounded-full bg-[#ff9b3f] text-white transition group-hover:bg-[#ffa654]"
    >
      <IoMdArrowDropleft
        className="absolute left-1/2 top-1/2 block h-[68%] w-[68%] text-current"
        style={{
          transform: "translate(calc(-50% - 2px), -50%)",
        }}
      />
    </span>
  );
}

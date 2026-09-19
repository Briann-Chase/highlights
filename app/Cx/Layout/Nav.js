import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import Image from "next/image";
const Nav = () => {
  return (
    <nav
      className="relative z-50 px-4 py-4 sm:px-6 lg:px-10"
    >
      <div className="relative z-50 mx-auto flex min-h-[78px] max-w-7xl items-center justify-between">
        <a
          href="https://athleteclips.com/"
          className="shrink-0"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <Image
            src="/logo.png"
            alt="Athlete Clips"
            width={92}
            height={72}
            priority
            className="h-auto w-[78px] sm:w-[92px]"
          />
        </a>

        <div
          className="flex items-center gap-3 sm:gap-4"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <a
            href="mailto:info@athleteclips.com"
            aria-label="Email Athlete Clips"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[#6f6f79] transition hover:bg-white hover:text-[#2d204e]"
          >
            <HiOutlineMail size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
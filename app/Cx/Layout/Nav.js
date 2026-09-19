import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Templates", href: "#packages" },
  { label: "Contact", href: "mailto:info@athleteclips.com" },
];

const Nav = () => {
  return (
    <nav className="relative z-50 w-full px-4 pt-4 sm:px-6 sm:pt-5 lg:px-10 lg:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
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
            className="h-auto w-[70px] sm:w-[92px]"
          />
        </a>

        <div
          className="flex items-center gap-3 sm:gap-6 lg:gap-10"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium text-white transition hover:text-white/80 sm:text-sm lg:text-base"
            >
              {label}
            </a>
          ))}

          <a
            href="https://athleteclips.com/package-pricing-2/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-b from-[#3d8bfd] to-[#1a4fbf] px-3 py-2 text-[11px] font-semibold whitespace-nowrap text-white transition hover:from-[#4a95ff] hover:to-[#2158d0] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Packaging Prices
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

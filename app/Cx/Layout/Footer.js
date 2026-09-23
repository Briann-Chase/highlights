import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { anton } from "../Font/Font";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/1b11TKxbKm/",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/proathleteclips?igsh=MWZ3aHEweWNqZHE3OA==",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/@athlete-clips?si=rtF67LyR3zkj02uF",
    label: "YouTube",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#f4f1ea] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
        <p className="text-sm font-semibold text-[#1a1a1a] sm:text-base">
          Follow Us On!
        </p>

        <div className="mt-5 flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-full bg-[#ff9b3f] text-white transition hover:bg-[#ffa654]"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 sm:mt-14 sm:flex-row">
          <p className="text-[10px] text-[#666] sm:text-xs">
            &copy; Athleteclips.com {new Date().getFullYear()}. All right reserved
          </p>

          <p
            className={`${anton.className} text-xs tracking-wide text-[#1a1a1a] uppercase sm:text-sm`}
          >
            More Athletes{" "}
            <span className="border-b-2 border-[#ff9b3f] pb-0.5 text-[#ff9b3f]">
              Brighter Futures
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Templates", href: "#packages" },
  { label: "Contact", href: "mailto:info@athleteclips.com" },
];

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
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#063635] via-[#1a3a32] to-[#5c2e1a] px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <a href="https://athleteclips.com/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Athlete Clips"
            width={120}
            height={94}
            className="h-auto w-[90px] sm:w-[110px]"
          />
        </a>

        <nav className="mt-8 flex items-center gap-8 sm:mt-10 sm:gap-12">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-white transition hover:text-white/80 sm:text-base"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-7 flex items-center gap-4 sm:mt-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-full bg-[#0faeb1] text-white transition hover:bg-[#18c1c4]"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p className="mt-7 text-[10px] text-white/50 sm:mt-8 sm:text-xs">
          &copy; Athleteclips.com {new Date().getFullYear()}. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/share/1b11TKxbKm/", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/proathleteclips?igsh=MWZ3aHEweWNqZHE3OA==", label: "Instagram" },
  { icon: FaYoutube, href: "https://youtube.com/@athlete-clips?si=rtF67LyR3zkj02uF", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer
      className="px-4 py-12 sm:px-6 sm:py-14"
      style={{ backgroundColor: "#021011" }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-sm font-semibold text-white">Follow Us On!</p>

        <div className="mt-5 flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0faeb1] text-white transition hover:bg-[#18c1c4]"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>

        <p className="mt-5 text-[10px] text-white/45">
          &copy; Athleteclips.com {new Date().getFullYear()}. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
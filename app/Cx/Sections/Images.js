import Image from "next/image";
import { OrangeCtaChevron } from "../OrangeCtaChevron";
import { anton } from "../Font/Font";

const features = [
  {
    src: "/images/girl-image-1.png",
    alt: "Female soccer player dribbling",
    title: "Athletes Build Brighter Futures",
  },
  {
    src: "/images/girl-image-2.png",
    alt: "Female volleyball player",
    title: "Highlight Your Hard Work",
  },
  {
    src: "/images/baseball-section-after-hero.png",
    alt: "Baseball player swinging",
    title: "Same Game Bigger Opportunities",
  },
];

const Images = () => {
  return (
    <>
      <section className="relative z-10 bg-[#0b0b0b]">
        <div className="relative overflow-hidden bg-[#f4f1ea] px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
          <div
            className={`${anton.className} pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] leading-none tracking-wider text-transparent uppercase opacity-25 sm:text-[6rem] lg:text-[8rem]`}
            style={{ WebkitTextStroke: "1px #ff9b3f" }}
            aria-hidden="true"
          >
            Noticed
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div data-aos="fade-right" data-aos-duration="700">
              <h2
                className={`${anton.className} text-[2rem] leading-none text-[#ff9b3f] uppercase sm:text-[2.75rem] lg:text-[3.25rem]`}
              >
                Play<span className="text-[#ff9b3f]">,</span> Record
                <span className="text-[#ff9b3f]">,</span> Get Noticed
              </h2>
              <span className="mt-3 block h-[3px] w-24 bg-[#ff9b3f]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={item.title}
              className="relative aspect-[3/4] overflow-hidden md:aspect-[4/5]"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={index * 100}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                <h3
                  className={`${anton.className} max-w-[220px] text-[1.35rem] leading-[1.05] text-white uppercase sm:text-[1.55rem]`}
                >
                  {item.title}
                </h3>
                <span className="mt-3 block h-[3px] w-14 bg-[#ff9b3f]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 bg-[#f4f1ea] px-4 py-10 sm:px-6 sm:py-12 lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2
            className={`${anton.className} max-w-[560px] text-[1.85rem] leading-[1.05] text-[#1a1a1a] uppercase sm:text-[2.4rem] lg:text-[2.75rem]`}
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Talent Gets You On The Field.{" "}
            <span className="text-[#ff9b3f]">Visibility Gets You Recruited.</span>
          </h2>

          <div
            className="flex flex-col items-start gap-3 lg:items-end"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <p className="text-sm text-[#333] sm:text-base">
              Use Code{" "}
              <span className="font-semibold text-[#ff9b3f]">
                &ldquo;ATHLETE20&rdquo;
              </span>{" "}
              Get 20% Off
            </p>
            <div className="group inline-flex items-center gap-2 text-sm">
              <a
                href="https://athleteclips.com/package-pricing-2/"
                className="inline-flex items-center rounded-full bg-[#ff9b3f] px-6 py-3 font-semibold text-white transition hover:bg-[#ffa654]"
              >
                Get Your Video Now
              </a>
              <OrangeCtaChevron />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Images;

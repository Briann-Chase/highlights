import Image from "next/image";
import { anton } from "../Font/Font";

const WhyAthleteClips = () => {
  return (
    <section className="relative overflow-x-clip bg-white">
      <Image
        src="/vector-6.png"
        alt=""
        width={370}
        height={204}
        unoptimized
        className="pointer-events-none absolute top-1/2 right-0 z-0 w-[28vw] max-w-[280px] -translate-y-[35%] translate-x-[4%] sm:w-[22vw] lg:w-[18vw] lg:max-w-[260px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-4 pt-24 pb-10 sm:px-6 sm:pt-28 sm:pb-12 lg:grid-cols-2 lg:gap-4 lg:px-10 lg:pt-32 lg:pb-16">
        <div
          className="relative z-10 max-w-[560px]"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <span className="inline-flex items-center rounded-full border border-[#00c6bd] bg-black px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase sm:text-xs">
            Why AthleteClips
          </span>

          <h2
            className={`${anton.className} mt-5 text-[2rem] leading-[1.05] text-[#1a1a1a] uppercase sm:text-[2.75rem] lg:text-[3.25rem]`}
          >
            Your Talent Deserves a Professional Spotlight.
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-[#333] sm:text-base sm:leading-7">
            At AthleteClips.com, we help athletes like you get noticed. Whether
            you&apos;re applying for scholarships, sharing your performance with
            recruiters, or building your athletic brand, our expert editors
            craft clean, impactful highlight reels that speak for themselves.
            Every play, every moment, perfectly synced to your game&apos;s
            rhythm.
          </p>

          <a
            href="https://athleteclips.com/package-pricing-2/"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-gradient-to-b from-[#3d8bfd] to-[#1a4fbf] px-7 py-3 text-sm font-semibold tracking-wide text-white uppercase transition hover:from-[#4a95ff] hover:to-[#2158d0]"
          >
            Let&apos;s Get Started
          </a>
        </div>

        <div
          className="relative -mt-8 flex w-full justify-center lg:-mt-16 lg:justify-end"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <Image
            src="/basketball-man.png"
            alt="Basketball player dunking"
            width={4096}
            height={2560}
            sizes="(max-width: 1024px) 95vw, 60vw"
            className="relative z-10 h-auto w-[95%] max-w-[520px] -translate-x-6 -translate-y-8 object-contain object-bottom grayscale sm:w-[90%] sm:-translate-x-10 sm:-translate-y-10 lg:w-full lg:max-w-[560px] lg:-translate-x-16 lg:-translate-y-14"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyAthleteClips;

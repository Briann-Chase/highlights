import Image from "next/image";
import { anton } from "../Font/Font";

const Hero = () => {
  return (
    <section className="relative z-10 flex flex-1 flex-col justify-center pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-6">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div
          className="max-w-[640px]"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <h1
            className={`${anton.className} text-[2.6rem] leading-[0.92] text-white uppercase sm:text-[3.75rem] lg:text-[4.6rem]`}
          >
            Professional{" "}
            <span className="text-[#ff9b3f]">Sports</span>
            <br />
            Highlight Reels
          </h1>

          <p className="mt-5 max-w-[380px] text-base leading-relaxed text-white/90 sm:text-xl sm:leading-8">
            Serious about playing college sports? This step isn&apos;t optional.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 text-white">
            <span className="text-lg font-semibold sm:text-2xl">
              Get your professional
            </span>
            <span className="inline-flex items-center gap-2">
              <a
                href="https://athleteclips.com/package-pricing-2/"
                className="inline-flex items-center rounded-full bg-[#ff9b3f] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#ffa654] sm:text-base"
              >
                Highlight Reel
              </a>
              <Image
                src="/arrow-orange.png"
                alt=""
                width={72}
                height={72}
                className="h-auto w-14 motion-safe:animate-bounce sm:w-16"
                aria-hidden="true"
              />
            </span>
          </div>

          <div className="mt-8 inline-block border border-white/80 bg-black/50 px-5 py-3 backdrop-blur-sm sm:px-6 sm:py-4">
            <p
              className={`${anton.className} text-[1.15rem] leading-tight text-white uppercase sm:text-[1.65rem]`}
            >
              Use the code{" "}
              <span className="text-[#ff9b3f]">&ldquo;Athlete20&rdquo;</span> Get
              20% Off
            </p>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute top-[22%] right-2 hidden lg:right-5 lg:block"
        aria-hidden="true"
      >
        <p
          className={`${anton.className} text-[0.65rem] text-black tracking-[0.4em] uppercase [writing-mode:vertical-rl]`}
        >
          More Than Plays
        </p>
        <p
          className={`${anton.className} mt-3 border-r-2 border-[#ff9b3f] pr-2 text-[0.65rem] tracking-[0.4em] text-[#ff9b3f] uppercase [writing-mode:vertical-rl]`}
        >
          A Bigger Tomorrow
        </p>
      </div>
    </section>
  );
};

export default Hero;

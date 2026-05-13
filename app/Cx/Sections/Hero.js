import Image from "next/image";
import { anton } from "../Font/Font";

const Hero = () => {
  return (
    <section
      className="relative z-40 overflow-visible"
    >
      <div className="relative mx-auto flex min-h-[calc(100vh-78px)] max-w-7xl flex-col justify-start px-4 pt-4 pb-12 sm:px-6 sm:pt-6 sm:pb-14 lg:min-h-[540px] lg:px-10 lg:pt-8 lg:pb-16">
        <div
          className="relative z-10 max-w-[620px]"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <h1
            className={`${anton.className} max-w-[620px] text-[2.4rem] leading-[0.92] text-white uppercase sm:text-[3.4rem] lg:text-[4.15rem]`}
          >
            Professional Sports
            <br />
            Highlight Reels
          </h1>

          <p className="mt-4 max-w-[360px] text-lg leading-7 text-white/90 sm:text-[1.55rem] sm:leading-9">
            Serious about playing college sports? This step isn&apos;t optional.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3 text-white">
            <span className="text-xl font-semibold sm:text-[2rem]">
              Get your professional
            </span>
            <span className="group inline-flex items-center gap-2 text-base sm:text-lg">
              <a
                href="https://athleteclips.com/package-pricing-2/"
                className="inline-flex items-center rounded-xl bg-[#ff9b3f] px-5 py-2 font-bold text-white transition hover:bg-[#ffa654]"
              >
                Highlight Reel
              </a>
              <Image
                src="/arrow-orange.png"
                alt=""
                width={80}
                height={80}
                className="motion-safe:animate-bounce"
                aria-hidden="true"
              />
            </span>
          </div>

          <p
            className={`${anton.className} mt-7 text-[1.6rem] leading-tight text-white uppercase sm:text-[2.25rem]`}
          >
            Use the code{" "}
            <span className="text-[#ff8f24]">&ldquo;Athlete20&rdquo;</span> Get
            20% Off
          </p>
        </div>

        <div
          className="relative mt-8 h-[400px] w-full overflow-visible sm:h-[500px] lg:absolute lg:inset-y-0 lg:right-[-40%] lg:mt-10 lg:h-full lg:w-[64%]"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <Image
            src="/hero-image.png"
            alt="Soccer player kicking a ball"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 64vw"
            className="object-contain object-bottom lg:object-bottom-right"
            style={{ transform: "scaleX(-1) scale(1.5)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
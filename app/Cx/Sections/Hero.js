import { anton } from "../Font/Font";

const Hero = () => {
  return (
    <section className="relative flex flex-1 flex-col justify-center pb-10 pt-4 sm:pb-14 lg:pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div
          className="max-w-[640px]"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <h1
            className={`${anton.className} text-[2.4rem] leading-[0.95] uppercase tracking-wide sm:text-[3.5rem] lg:text-[4.6rem]`}
          >
            <span className="block text-white">College Recruiting</span>
            <span className="mt-1 block text-[#f39c3f]">Highlight Reels</span>
          </h1>

          <p className="mt-5 text-lg font-semibold text-white sm:text-2xl">
            Get Noticed by College Coaches
          </p>

          <p className="mt-3 max-w-[420px] text-sm leading-relaxed text-white/90 sm:text-lg">
            We create professional, coach-ready highlight reels that showcase
            your talent and help you stand out.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href="https://athleteclips.com/package-pricing-2/"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-b from-[#3d8bfd] to-[#1a4fbf] px-6 py-2.5 text-sm font-semibold text-white transition hover:from-[#4a95ff] hover:to-[#2158d0] sm:px-7 sm:py-3 sm:text-base"
            >
              View Packages
            </a>
            <a
              href="https://athleteclips.com/package-pricing-2/"
              className="inline-flex items-center justify-center rounded-md border border-[#f39c3f]/80 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition hover:border-[#f39c3f] hover:bg-white/10 sm:px-7 sm:py-3 sm:text-base"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

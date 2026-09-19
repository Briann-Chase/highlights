import { anton } from "../Font/Font";

const MomentCTA = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <h2
          className={`${anton.className} text-[1.85rem] leading-[1.05] text-[#1a1a1a] uppercase sm:text-[2.75rem] lg:text-[3.5rem]`}
        >
          Turn Your Best Moments
          <br />
          Into Your{" "}
          <span className="text-[#00c6bd]">Future Opportunity.</span>
        </h2>

        <p className="mt-5 text-sm text-[#1a1a1a] sm:text-base lg:text-lg">
          Professional. Powerful. Personal. That&apos;s Athleteclips.
        </p>

        <a
          href="https://athleteclips.com/package-pricing-2/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-gradient-to-b from-[#3d8bfd] to-[#1a4fbf] px-8 py-3 text-sm font-semibold text-white transition hover:from-[#4a95ff] hover:to-[#2158d0] sm:mt-10 sm:px-10 sm:py-3.5 sm:text-base"
        >
          View Packages
        </a>
      </div>
    </section>
  );
};

export default MomentCTA;

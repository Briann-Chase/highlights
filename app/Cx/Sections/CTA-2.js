import Image from "next/image";
import { OrangeCtaChevron } from "../OrangeCtaChevron";
import { anton } from "../Font/Font";

const CTA2 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b0b0b]">
      <div className="relative min-h-[200px] w-full sm:min-h-[240px] lg:min-h-[280px]">
        <Image
          src="/images/cta-2-image.png"
          alt="Soccer ball hitting the net"
          fill
          sizes="100vw"
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/85" />

        <div className="relative z-10 mx-auto flex min-h-[200px] max-w-7xl flex-col justify-center gap-8 px-4 py-10 sm:min-h-[240px] sm:px-6 lg:min-h-[280px] lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div
            className="max-w-[520px] sm:ml-[22%] lg:ml-[40%]"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h2
              className={`${anton.className} text-[1.75rem] leading-[1.05] text-white uppercase sm:text-[2.5rem] lg:text-[3rem]`}
            >
              Use the Code{" "}
              <span className="text-[#ff9b3f]">&ldquo;Athlete20&rdquo;</span> Get
              20% Off
            </h2>

            <div className="group mt-5 inline-flex items-center gap-2 text-sm">
              <a
                href="https://athleteclips.com/package-pricing-2/"
                className="inline-flex items-center rounded-full bg-[#ff9b3f] px-6 py-3 font-semibold text-white transition hover:bg-[#ffa654]"
              >
                Get Your Video Now
              </a>
              <OrangeCtaChevron />
            </div>
          </div>

          <p
            className={`${anton.className} max-w-[140px] text-right text-sm leading-tight tracking-wide text-white uppercase sm:text-base lg:text-lg`}
            data-aos="fade-left"
            data-aos-duration="700"
          >
            Good Players Get Seen
            <br />
            <span className="text-[#ff9b3f]">Great Players Get Chosen.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA2;

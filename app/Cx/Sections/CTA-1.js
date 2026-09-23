import Image from "next/image";
import { OrangeCtaChevron } from "../OrangeCtaChevron";
import { anton } from "../Font/Font";

const CTA1 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f1ea] px-4 pb-14 sm:px-6 sm:pb-16 lg:px-10 lg:pb-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl">
        <div className="relative min-h-[280px] w-full sm:min-h-[320px] lg:min-h-[380px]">
          <Image
            src="/images/cta-1-image.png"
            alt="Upgrade your intro cards"
            fill
            sizes="100vw"
            className="object-cover object-[12%_top]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black/80" />

          <div className="relative z-10 flex min-h-[280px] flex-col justify-center gap-8 px-5 py-10 sm:min-h-[320px] sm:px-8 lg:min-h-[380px] lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-12">
            <div
              className="max-w-[560px] sm:ml-[18%] lg:ml-[36%]"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <h2
                className={`${anton.className} text-[1.65rem] leading-[1.05] text-white uppercase sm:text-[2.4rem] lg:text-[2.85rem]`}
              >
                Upgrade Your Intro Cards Today!
                <br />
                Use Code{" "}
                <span className="text-[#ff9b3f]">&ldquo;ATHLETE20&rdquo;</span>{" "}
                Get 20% Off
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

            <div
              className="flex flex-col items-start gap-3 lg:items-center"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <Image
                src="/logo.png"
                alt="Athlete Clips"
                width={100}
                height={78}
                className="h-auto w-[70px] sm:w-[84px]"
              />
              <p
                className={`${anton.className} text-sm tracking-wide text-white uppercase sm:text-base`}
              >
                Stand Out
                <br />
                Get Recruited
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA1;

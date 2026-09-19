import Image from "next/image";
import { anton } from "../Font/Font";

const steps = [
  {
    number: "01",
    title: "Upload Your Footage",
    description:
      "Send your videos directly through our secure upload form or share a cloud link. We handle all major formats (MP4, MOV, etc.).",
  },
  {
    number: "02",
    title: "We Edit & Polish",
    description:
      "We edit the best moments you select, include professional effects, music, and stage info ensuring your video looks sharp and engaging.",
  },
  {
    number: "03",
    title: "Receive Your Highlight Reel",
    description:
      "Receive your edited reel in Full HD or 4K, ready for recruiters, YouTube, and social media sharing.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h2
            className={`${anton.className} text-center text-[2.5rem] leading-none text-[#1a1a1a] uppercase sm:text-[3.5rem] lg:text-[4rem]`}
          >
            How It Works
          </h2>

          <span className="mt-5 inline-flex items-center rounded-full border border-[#00c6bd] bg-black px-5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#00c6bd] uppercase sm:mt-6 sm:px-6 sm:text-xs">
            Simple. Fast. Effective.
          </span>
        </div>

        <div className="mt-8 grid items-center gap-10 sm:mt-10 lg:mt-12 lg:grid-cols-2 lg:gap-10">
          <div
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex gap-5 sm:gap-7 ${
                  index < steps.length - 1
                    ? "border-b border-[#00c6bd] pb-7 sm:pb-8"
                    : ""
                } ${index > 0 ? "pt-7 sm:pt-8" : ""}`}
              >
                <div className="relative flex w-14 shrink-0 flex-col items-center sm:w-16">
                  <span
                    className={`${anton.className} text-[2.5rem] leading-none text-[#f39c3f] sm:text-[3.25rem]`}
                  >
                    {step.number}
                  </span>
                  {index < steps.length - 1 ? (
                    <Image
                      src="/vector-10.png"
                      alt=""
                      width={42}
                      height={148}
                      unoptimized
                      className="mt-2 h-12 w-auto sm:h-14"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>

                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="text-base font-extrabold tracking-wide text-[#1a1a1a] uppercase sm:text-lg lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555] sm:text-[0.95rem] sm:leading-6">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none lg:justify-self-end"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <Image
              src="/gpt.png"
              alt="Volleyball athlete reaching for the ball"
              width={1122}
              height={1402}
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

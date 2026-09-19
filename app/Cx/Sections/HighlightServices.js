import Image from "next/image";
import { anton } from "../Font/Font";

const HighlightServices = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
        <div
          className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <Image
            src="/group-1.png"
            alt="Baseball player swinging for a highlight reel"
            width={666}
            height={496}
            sizes="(max-width: 1024px) 90vw, 50vw"
            className="h-auto w-full object-contain"
          />
        </div>

        <div
          className="max-w-[480px] lg:justify-self-end"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <h2
            className={`${anton.className} text-[2.25rem] leading-[0.95] text-[#1a1a1a] uppercase sm:text-[3rem] lg:text-[3.5rem]`}
          >
            Highlight
            <br />
            Services
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-[#333] sm:text-base sm:leading-7">
            Highlight reels can take time, effort and money to do on your own.
            We know your life is already packed with work, school and sports on
            a regular basis. That&apos;s where we come in. Our technical staff
            will do all the work for you at a low cost. Whatever you need we can
            do it. Oh and if you don&apos;t have time to watch 10 to 20 hours of
            games we also provide an add on service to find your best moments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HighlightServices;

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { anton } from "../Font/Font";

const cards = [
  {
    title: "Dynamic Reels",
    image: "/images/services-image-1.png",
    alt: "Dynamic soccer reel preview",
  },
  {
    title: "Pro Quality Videos",
    image: "/images/services-image-2.png",
    alt: "Pro quality sports video preview",
  },
  {
    title: "Slow-Mo & Effects",
    image: "/images/services-image-3.png",
    alt: "Slow motion soccer edit preview",
  },
];

const Services = () => {
  return (
    <div className="bg-[#ff9b3f]">
      <section
        id="services"
        className="relative overflow-hidden bg-[#f4f1ea] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
        style={{
          clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div
          className={`${anton.className} pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 text-[5rem] leading-none tracking-wider text-transparent uppercase opacity-25 sm:top-10 sm:text-[8rem] lg:text-[11rem]`}
          style={{ WebkitTextStroke: "1px #ff9b3f" }}
          aria-hidden="true"
        >
          Services
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div data-aos="fade-right" data-aos-duration="700">
              <h2
                className={`${anton.className} text-[2rem] leading-none text-[#ff9b3f] uppercase sm:text-[2.75rem] lg:text-[3.25rem]`}
              >
                Services We Offer
              </h2>
              <span className="mt-3 block h-[3px] w-24 bg-[#ff9b3f]" />
            </div>
            <p
              className={`${anton.className} text-sm tracking-wide text-[#ff9b3f] uppercase sm:text-base`}
              data-aos="fade-left"
              data-aos-duration="700"
            >
              Highlights That Open Doors
              <span className="mt-2 block h-[2px] w-full max-w-[180px] bg-[#ff9b3f] sm:ml-auto" />
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="group relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl lg:max-w-none"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#ff9b3f] text-white shadow-lg">
                        <FaPlay className="ml-0.5 size-3.5" />
                      </span>
                      <h3
                        className={`${anton.className} text-[1.35rem] leading-none text-white uppercase sm:text-[1.6rem]`}
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

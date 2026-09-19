import Image from "next/image";
import { anton } from "../Font/Font";

const cards = [
  {
    title: "Dynamic Reels",
    image: "/dynamic-reel-image.png",
    alt: "Dynamic soccer reel preview",
  },
  {
    title: "Pro Quality Videos",
    image: "/pro-quality-vids.png",
    alt: "Pro quality sports video preview",
    accent: (
      <div className="absolute left-1/2 top-14 h-0 w-0 -translate-x-1/2 border-x-16 border-t-24 border-x-transparent border-t-[#ff4a3a]" />
    ),
  },
  {
    title: "Slow-Mo & Effects",
    image: "/slow-mo.png",
    alt: "Slow motion soccer edit preview",
  },
];

const Services = () => {
  return (
    <section
      className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-10"
      style={{ backgroundColor: "#2d204e" }}
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className={`${anton.className} text-center text-[2.4rem] leading-none text-white uppercase sm:text-[3.5rem]`}
          data-aos="fade-down"
          data-aos-duration="700"
        >
          Services We Offer
        </h2>

        <div data-aos="fade-up" data-aos-duration="700" className="mx-auto mt-10 grid max-w-[1257px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative mx-auto w-full max-w-[403px] overflow-hidden rounded-xl bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            >
              <div className="relative h-[424px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  unoptimized
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={card.imageClassName ?? "object-cover"}
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.18)_45%,rgba(0,0,0,0.38)_100%)]" />

                <h3
                  className={`${anton.className} absolute left-1/2 top-8 w-full tracking-wider -translate-x-1/2 px-4 text-center text-[1.65rem] text-white uppercase sm:text-[2.5rem]`}
                >
                  {card.title}
                </h3>

                {/* {card.accent ?? null} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
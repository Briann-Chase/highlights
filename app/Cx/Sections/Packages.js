"use client";

import { useState } from "react";
import Image from "next/image";
import { anton } from "../Font/Font";
import { FaCheckCircle } from "react-icons/fa";
import { OrangeCtaChevron } from "../OrangeCtaChevron";

const plans = [
  {
    name: "Starter Reel",
    price: "$199",
    href: "https://athleteclips.com/?add-to-cart=1237",
    features: [
      "Up to 3 minutes",
      "Up to 20 key plays",
      "Title card / Intro banner",
      "High resolution",
    ],
  },
  {
    name: "Pro Reel",
    price: "$299",
    badge: "Most Popular Plan",
    featured: true,
    href: "https://athleteclips.com/?add-to-cart=1239",
    features: [
      "Up to 5 minutes",
      "Up to 30 key plays",
      "Title card / Intro banner",
      "High resolution",
      "Custom music and titles",
      "Zoom in/out slow-motion(x2)",
      "Transitions",
    ],
  },
  {
    name: "Custom Reel",
    price: "$399+",
    href: "https://athleteclips.com/?add-to-cart=1800",
    features: [
      "Everything in Pro Reel",
      "Duration of your choice",
      "Full Player Highlight Tracking",
      "Banners",
      "Custom Requests",
    ],
  },
];

const videos = [
  {
    id: "na_-1PU-1LU",
    title: "Athlete Clips work sample 1",
  },
  {
    id: "D3urcZybv-E",
    title: "Athlete Clips work sample 2",
  },
  {
    id: "jGUcirafChE",
    title: "Athlete Clips work sample 3",
  },
  {
    id: "cBLQ-Ww_91Y",
    title: "Athlete Clips work sample 4",
  },
  {
    id: "E1mQyUNFBxA",
    title: "Athlete Clips work sample 5",
  },
  {
    id: "Z-fjZDuioqc",
    title: "Athlete Clips work sample 6",
  },
];

const staticCards = [
  {
    src: "/static-1.webp",
    alt: "Static intro card sample 1",
  },
  {
    src: "/static-2.webp",
    alt: "Static intro card sample 2",
  },
  {
    src: "/static-3.webp",
    alt: "Static intro card sample 3",
  },
  {
    src: "/static-4.webp",
    alt: "Static intro card sample 4",
  },
  {
    src: "/static-5.webp",
    alt: "Static intro card sample 5",
  },
  {
    src: "/static-6.webp",
    alt: "Static intro card sample 6",
  },
];

const Packages = () => {
  const [activeTab, setActiveTab] = useState("animated");

  return (
    <section
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-10"
      style={{ backgroundColor: "#2d204e" }}
    >
      <Image
        src="/bottom-right-corner.png"
        alt=""
        width={600}
        height={900}
        className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-auto lg:block"
      />

      <div className="relative mx-auto max-w-7xl">
        <h2
          className={`${anton.className} text-center text-[2.6rem] leading-none text-white uppercase sm:text-[3.6rem]`}
          data-aos="fade-down"
          data-aos-duration="700"
        >
          Packages
        </h2>

        <div data-aos="zoom-in" data-aos-duration="700" className="mx-auto mt-10 grid max-w-5xl items-end gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${
                plan.featured
                  ? "rounded-[22px] bg-[#ff9a33] p-[3px] pt-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                  : ""
              }`}
            >
              {plan.badge ? (
                <div
                  className={`${anton.className} absolute inset-x-0 top-0 z-10 rounded-t-[22px] bg-[#ff9a33] py-1 text-center text-[0.72rem] uppercase tracking-[0.18em] text-[#5b2c00]`}
                >
                  {plan.badge}
                </div>
              ) : null}

              <div
                className={`flex min-h-[410px] flex-col rounded-[18px] bg-white px-5 pb-5 pt-4 text-[#232323] shadow-[0_12px_30px_rgba(0,0,0,0.18)] ${
                  plan.featured
                    ? "rounded-[18px] shadow-none"
                    : ""
                }`}
              >
                <h3
                  className={`${anton.className} text-[1.15rem] leading-none uppercase text-black`}
                >
                  {plan.name}
                </h3>

                <p className="mt-3 text-[2rem] font-extrabold leading-none">
                  {plan.price}
                </p>

                <ul className="mt-5 space-y-2.5 text-[0.82rem] text-[#5b5b5b]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-[0.95rem] text-[#5b5b5b]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <a
                    href={plan.href}
                    className="flex w-full items-center justify-center rounded-full bg-[#11a9aa] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#17b8b9]"
                  >
                    Select plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[22px]">
          <div className="relative min-h-[210px] w-full md:min-h-[190px]">
            <Image
              src="/CTA-22.png"
              alt="Package CTA background"
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="relative z-10 flex min-h-[210px] items-center justify-end px-6 py-12 md:min-h-[190px] md:px-10">
              <div className="max-w-[480px] text-left">
                <h3
                  className={`${anton.className} text-[2rem] leading-[0.95] text-white uppercase sm:text-[2.8rem]`}
                >
                  Use the code &ldquo;Athlete20&rdquo; Get 20% Off
                </h3>

                <div className="group mt-5 inline-flex items-center gap-2 text-sm">
                  <a
                    href="https://athleteclips.com/package-pricing-2/"
                    className="inline-flex items-center rounded-xl bg-[#ff9b3f] px-6 py-3 font-semibold text-white transition hover:bg-[#ffa654]"
                  >
                    Get Your Video Now
                  </a>
                  <OrangeCtaChevron />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16">
          <h2
            className={`${anton.className} text-center text-[2.6rem] leading-none text-white uppercase sm:text-[3.6rem]`}
          >
            Intro Cards
          </h2>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 p-1.5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <button
                type="button"
                onClick={() => setActiveTab("animated")}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                  activeTab === "animated"
                    ? "bg-white/20 text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                Animated
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("static")}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                  activeTab === "static"
                    ? "bg-white/20 text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                Static
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activeTab === "animated"
              ? videos.map((video) => (
                  <div
                    key={video.id}
                    className="overflow-hidden rounded-2xl bg-black/20 shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                  >
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                        title={video.title}
                        className="h-full w-full border-0"
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))
              : staticCards.map((card) => (
                  <div
                    key={card.src}
                    className="overflow-hidden rounded-2xl bg-black/20 shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={card.src}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div> */}
      </div>
      <div></div>
    </section>
  );
};

export default Packages;
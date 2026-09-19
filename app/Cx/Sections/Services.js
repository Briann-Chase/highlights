"use client";

import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { anton } from "../Font/Font";

const videos = [
  { id: "na_-1PU-1LU", title: "Keelie Chase highlight reel 1" },
  { id: "D3urcZybv-E", title: "Keelie Chase highlight reel 2" },
  { id: "jGUcirafChE", title: "Keira Huibregtse highlight reel" },
  { id: "cBLQ-Ww_91Y", title: "Athlete Clips work sample 4" },
  { id: "E1mQyUNFBxA", title: "Athlete Clips work sample 5" },
  { id: "Z-fjZDuioqc", title: "Athlete Clips work sample 6" },
];

const VISIBLE = 3;

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);
  const maxStart = Math.max(0, videos.length - VISIBLE);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxStart, i + 1));

  const visibleVideos = videos.slice(startIndex, startIndex + VISIBLE);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <span className="inline-flex items-center rounded-full border border-[#00c6bd] bg-black px-5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#00c6bd] uppercase sm:text-xs">
            Featured Work
          </span>

          <h2
            className={`${anton.className} mt-5 max-w-[900px] text-[2rem] leading-[1.05] text-[#1a1a1a] uppercase sm:text-[2.75rem] lg:text-[3.5rem]`}
          >
            Highlight Reels That Get Results
          </h2>
        </div>

        <div
          className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {visibleVideos.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-xl bg-[#111] shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
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
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-2 sm:mt-8">
          <button
            type="button"
            onClick={prev}
            disabled={startIndex === 0}
            aria-label="Previous videos"
            className="flex size-11 items-center justify-center rounded-md bg-[#d4d4d4] text-white transition enabled:hover:bg-[#c4c4c4] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <HiChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={startIndex >= maxStart}
            aria-label="Next videos"
            className="flex size-11 items-center justify-center rounded-md bg-[#2a2a2a] text-white transition enabled:hover:bg-[#3a3a3a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <HiChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

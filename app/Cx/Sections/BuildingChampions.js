import {
  HiOutlineVideoCamera,
  HiOutlineMusicNote,
  HiOutlineTag,
  HiOutlineClock,
  HiOutlineSearch,
} from "react-icons/hi";
import { anton } from "../Font/Font";

const leftFeatures = [
  {
    icon: HiOutlineVideoCamera,
    title: "Professional Editing",
    description:
      "Expert editors craft clean, high-impact clips that tell your story the right way",
  },
  {
    icon: HiOutlineMusicNote,
    title: "Custom Music & Transitions",
    description:
      "We add the perfect music and smooth transitions to keep coaches engaged.",
  },
];

const rightFeatures = [
  {
    icon: HiOutlineTag,
    title: "Recruit-Ready Titles & Labels",
    description:
      "Player info, positions, achievements and stats clearly presented.",
  },
  {
    icon: HiOutlineClock,
    title: "Fast Turnaround",
    description:
      "Most reels delivered within 10 to 20 days so you never miss an opportunity",
  },
  {
    icon: HiOutlineSearch,
    title: "Zoom & Slow Motion Analysis",
    description:
      "Highlight key plays with slow motion and zoomed cuts that stand out.",
  },
];

function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div>
      <Icon className="size-8 text-[#f39c3f] sm:size-9" strokeWidth={1.5} />
      <h3 className="mt-3 text-lg font-extrabold tracking-wide text-[#1a1a1a] uppercase sm:text-xl lg:text-2xl">
        {title}
      </h3>
      <p className="mt-2 max-w-[340px] text-sm leading-relaxed text-[#555] sm:text-[0.95rem] sm:leading-6">
        {description}
      </p>
    </div>
  );
}

const BuildingChampions = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <h2
          className={`${anton.className} max-w-[720px] text-[2.25rem] leading-[0.95] text-[#1a1a1a] uppercase sm:text-[3.25rem] lg:text-[3.75rem]`}
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Building Champions on Screen
        </h2>

        <div className="mt-12 grid items-stretch gap-12 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-20">
          <div
            className="flex h-full flex-col justify-between gap-12 sm:gap-14 lg:gap-0"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {leftFeatures.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>

          <div
            className="flex h-full flex-col justify-between gap-12 sm:gap-14 lg:gap-0"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            {rightFeatures.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingChampions;

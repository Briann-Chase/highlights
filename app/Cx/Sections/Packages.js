import Image from "next/image";
import { anton } from "../Font/Font";
import { FaCheckCircle } from "react-icons/fa";

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

const Packages = () => {
  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-[#f4f1ea] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center" data-aos="fade-down" data-aos-duration="700">
          <h2
            className={`${anton.className} text-[2.6rem] leading-none text-[#1a1a1a] uppercase sm:text-[3.6rem]`}
          >
            Packages
          </h2>
          <p className="mt-3 text-sm font-semibold tracking-[0.18em] text-[#555] uppercase sm:text-base">
            Choose Your Highlight Reel
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          className="mx-auto mt-12 grid max-w-5xl items-end gap-6 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${
                plan.featured
                  ? "rounded-[22px] bg-[#ff9a33] p-[3px] pt-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                  : ""
              }`}
            >
              {plan.badge ? (
                <div
                  className={`${anton.className} absolute inset-x-0 top-0 z-10 rounded-t-[22px] bg-[#ff9a33] py-1.5 text-center text-[0.72rem] tracking-[0.18em] text-white uppercase`}
                >
                  {plan.badge}
                </div>
              ) : null}

              <div
                className={`flex min-h-[410px] flex-col rounded-[18px] bg-white px-5 pb-5 pt-5 text-[#232323] shadow-[0_12px_30px_rgba(0,0,0,0.08)] ${
                  plan.featured ? "shadow-none" : ""
                }`}
              >
                <h3
                  className={`${anton.className} text-[1.15rem] leading-none text-black uppercase`}
                >
                  {plan.name}
                </h3>

                <p className="mt-3 text-[2rem] font-extrabold leading-none">
                  {plan.price}
                </p>

                <ul className="mt-5 space-y-2.5 text-[0.82rem] text-[#5b5b5b]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <FaCheckCircle
                        className={`mt-0.5 shrink-0 text-[0.95rem] ${
                          plan.featured ? "text-[#ff9a33]" : "text-[#11a9aa]"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <a
                    href={plan.href}
                    className={`flex w-full items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold text-white transition ${
                      plan.featured
                        ? "bg-[#ff9a33] hover:bg-[#ffa654]"
                        : "bg-[#11a9aa] hover:bg-[#17b8b9]"
                    }`}
                  >
                    Select plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;

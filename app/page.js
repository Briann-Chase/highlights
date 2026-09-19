import Image from "next/image";
import Nav from "./Cx/Layout/Nav";
import Footer from "./Cx/Layout/Footer";
import Hero from "./Cx/Sections/Hero";
import WhyAthleteClips from "./Cx/Sections/WhyAthleteClips";
import HighlightServices from "./Cx/Sections/HighlightServices";
import BuildingChampions from "./Cx/Sections/BuildingChampions";
import HowItWorks from "./Cx/Sections/HowItWorks";
import Images from "./Cx/Sections/Images";
import Services from "./Cx/Sections/Services";
import MomentCTA from "./Cx/Sections/MomentCTA";
import Reviews from "./Cx/Sections/Reviews";
import Packages from "./Cx/Sections/Packages";

export default function Home() {
  return (
    <>
      <div className="relative w-full bg-white">
        <div
          className="relative w-full"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 94%, 0% 87.1%)",
          }}
        >
          <Image
            src="/hero-img.png"
            alt="College athlete on the field"
            width={1440}
            height={1039}
            priority
            sizes="100vw"
            className="block h-auto w-full"
          />
          <div className="absolute inset-0 flex flex-col">
            <Nav />
            <Hero />
          </div>
        </div>

        <Image
          src="/vector-5.png"
          alt=""
          width={1440}
          height={135}
          unoptimized
          className="pointer-events-none absolute bottom-0 left-0 z-20 w-full"
          aria-hidden="true"
        />
      </div>

      <WhyAthleteClips />
      <HighlightServices />
      <BuildingChampions />
      <HowItWorks />
      {/* <Images /> */}
      <Services />
      <MomentCTA />
      <Reviews />
      {/* <Packages /> */}
      <Footer />
    </>
  );
}

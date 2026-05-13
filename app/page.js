import Image from "next/image";
import Nav from "./Cx/Layout/Nav";
import Footer from "./Cx/Layout/Footer";
import Hero from "./Cx/Sections/Hero";
import Images from "./Cx/Sections/Images";
import Services from "./Cx/Sections/Services";
import CTA1 from "./Cx/Sections/CTA-1";
import Packages from "./Cx/Sections/Packages";

export default function Home() {
  return (
    <>
      <div className="relative" style={{ backgroundColor: "#2d204e" }}>
        <Image
          src="/top-left-corner.png"
          alt=""
          width={1920}
          height={1080}
          unoptimized
          className="pointer-events-none absolute left-0 top-0 z-30 w-[95%] max-w-[950px]"
        />
        <Image
          src="/main-banner-bkg.png"
          alt=""
          width={1920}
          height={1080}
          unoptimized
          className="pointer-events-none absolute left-0 top-[25%] z-50 w-full"
        />
        <Nav/>
        <Hero/>
        {/* <Image
          src="/shadow.png"
          alt=""
          width={1920}
          height={200}
          className="pointer-events-none absolute bottom-0 left-0 z-50 w-full translate-y-1/2"
        /> */}
      </div>
      <Images/>
      <Services/>
      <CTA1/>
      <Packages/>
      <Footer/>
    </>
  )
}
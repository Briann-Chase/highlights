import Image from "next/image";
import Nav from "./Cx/Layout/Nav";
import Footer from "./Cx/Layout/Footer";
import Hero from "./Cx/Sections/Hero";
import Images from "./Cx/Sections/Images";
import Services from "./Cx/Sections/Services";
import CTA1 from "./Cx/Sections/CTA-1";
import Packages from "./Cx/Sections/Packages";
import CTA2 from "./Cx/Sections/CTA-2";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black">
        <Image
          src="/images/main-hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover object-[70%_center]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent"
          aria-hidden="true"
        />
        <Nav />
        <Hero />
      </div>

      <Images />
      <Services />
      <CTA1 />
      <Packages />
      <CTA2 />
      <Footer />
    </>
  );
}

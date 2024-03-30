import Image from "next/image";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Process from "./components/Process";
import Services from "./components/Services";
import About from "./components/About";
import ServiceWeOffer from "./components/ServiceWeOffer";
import Review from "./components/Review";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Trust/>
      <Process/>
      <Services/>
      <About/>
      <ServiceWeOffer/>
      <Review/>
    </main>
  );
}

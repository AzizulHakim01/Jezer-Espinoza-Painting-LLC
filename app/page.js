import Image from "next/image";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Process from "./components/Process";
import Services from "./components/Services";
import About from "./components/About";
import ServiceWeOffer from "./components/ServiceWeOffer";
import Review from "./components/Review";
import ProjectManager from "./components/ProjectManager";

export default function Home() {
  return (
    <main className="">
      <Hero title="EXTERIOR / INTERIOR" subtitle="PAINTING / CARPENTRY SERVICES" image="/bg.jpg"/>
      <Trust/>
      <Process/>
      <Services/>
      <About/>
      <ServiceWeOffer/>
      <Review/>
      <ProjectManager/>
    </main>
  );
}

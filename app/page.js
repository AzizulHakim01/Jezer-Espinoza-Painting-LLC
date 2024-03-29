import Image from "next/image";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Process from "./components/Process";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Trust/>
      <Process/>
      <Services/>
    </main>
  );
}

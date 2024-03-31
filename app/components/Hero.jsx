import Link from "next/link";
import Image from "next/image";
const Hero = ({ title, subtitle, image }) => {
  return (
    <div className="relative">
      <section className="h-[calc(100vh-200px)] w-full">
        <Image src={image} fill className="absolute -z-20" alt="background"/>
        <div className="bg-black w-full h-[calc(100vh-200px)] bg-opacity-45 flex justify-center items-center">
          <p className="xl:text-7xl text-3xl font-bold text-white shadow-md text-center flex flex-col gap-4">
            <span>{title}</span>
            <span>{subtitle}</span>
          </p>
        </div>
      </section>
      <div className="absolute bg-black bg-opacity-25 w-full bottom-0 flex justify-center items-center xl:h-24 h-10 gap-4">
        <p className="text-white xl:text-2xl">Ready to make a change?</p>
        <Link
          href="/contact-us"
          className="xl:text-2xl font-semibold bg-yellow-500 xl:py-4 xl:px-6 px-2 text-sm py-1 rounded-md hover:opacity-80 transition-all"
        >
          Get Started!
        </Link>
      </div>
    </div>
  );
};

export default Hero;

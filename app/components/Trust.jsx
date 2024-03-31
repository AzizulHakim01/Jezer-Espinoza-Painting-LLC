import { AiOutlineFormatPainter } from "react-icons/ai";
import Link from "next/link"

const Trust = () => {
  return (
    <div className="bg-white md:py-12 lg:py-10 py-20 xl:py-0">
      <div className="max-w-screen-xl flex justify-center items-center h-[50vh] flex-col mx-auto gap-6">
        <h1 className="xl:text-5xl text-2xl text-gray-700 font-bold ">Trust us, We Keep Our Words</h1>
        <p className="xl:text-2xl text-gray-700 font-medium xl:z-10 text-justify px-10 xl:px-0 ">
        <span className="bg-gradient-to-r from-amber-300 to-red-700 bg-clip-text text-transparent font-bold">Jezer Espinoza Painting LLC</span> is a leading commercial painting company,
          specializing in high-quality painting services tailored to businesses.
          With 15 years of experience, we serviced commercial and residential
          projects locally and out of states, we deliver impeccable
          craftsmanship, personalized service, and a commitment to safety. Our
          skilled team ensures timely completion and exceeds client expectations
          on every project. Contact us today to experience excellence in
          commercial painting and carpentry
        </p>
        <Link href="/contact-us" className="bg-gradient-to-r from-yellow-400 to-red-600 xl:px-7 px-4 xl:py-3 py-2 xl:text-xl font-semibold text-white rounded-md transition-all hover:from-red-600 hover:to-yellow-400 flex items-center gap-3">
          <span>Contact Us</span> <AiOutlineFormatPainter className="xl:text-3xl text-xl"/>
        </Link>
      </div>
    </div>
  );
};

export default Trust;

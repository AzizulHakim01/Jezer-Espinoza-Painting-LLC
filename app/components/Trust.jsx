import { AiOutlineFormatPainter } from "react-icons/ai";

const Trust = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl flex justify-center items-center h-[50vh] flex-col mx-auto gap-6">
        <h1 className="text-5xl text-gray-700 font-bold">Trust us, We Keep Our Words</h1>
        <p className="text-2xl text-gray-700 font-medium z-10 text-justify flex justify-center">
          Jezer Espinoza Painting LLC is a leading commercial painting company,
          specializing in high-quality painting services tailored to businesses.
          With 15 years of experience, we serviced commercial and residential
          projects locally and out of states, we deliver impeccable
          craftsmanship, personalized service, and a commitment to safety. Our
          skilled team ensures timely completion and exceeds client expectations
          on every project. Contact us today to experience excellence in
          commercial painting and carpentry
        </p>
        <button className="bg-gradient-to-r from-yellow-400 to-red-600 px-7 py-3 text-xl font-semibold text-white rounded-md transition-all focus:from-red-600 focus:to-yellow-400 flex items-center gap-3">
          <span>Contact Us</span> <AiOutlineFormatPainter className="text-3xl"/>
        </button>
      </div>
    </div>
  );
};

export default Trust;

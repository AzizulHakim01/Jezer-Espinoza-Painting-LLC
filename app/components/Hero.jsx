const Hero = () => {
  return (
    <div className="relative">
      <section className="bg-[url('/bg.jpg')] h-[calc(100vh-200px)] w-full bg-no-repeat bg-cover bg-center">
        <div className="bg-black w-full h-[calc(100vh-200px)] bg-opacity-45 flex justify-center items-center">
          <p className="text-7xl font-bold text-white shadow-md text-center flex flex-col gap-4">
            <span>EXTERIOR / INTERIOR</span>
            <span>PAINTING / CARPENTRY SERVICES</span>
          </p>
        </div>
      </section>
      <div className="absolute bg-black bg-opacity-25 w-full bottom-0 flex justify-center items-center h-24 gap-4">
        <p className="text-white text-2xl">Ready to make a change?</p>
        <button className="text-2xl font-semibold bg-yellow-500 py-4 px-6 rounded-md hover:opacity-80 transition-all">Get Started!</button>
      </div>
    </div>
  );
};

export default Hero;

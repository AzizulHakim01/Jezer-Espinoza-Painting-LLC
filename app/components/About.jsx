import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div className="bg-white">
      <div className="p-8">
        <div className="max-w-screen-2xl mx-auto " id="about">
          <div className="grid xl:grid-cols-2 items-center text-gray-700">
            <section className="flex flex-col gap-6">
              <p className="tracking-widest">About Us</p>
              <h1 className="text-5xl font-bold">
                Not Just Painting <br /> We Make Relationship
              </h1>
              <p className="text-justify font-base">
                At{" "}
                <span className="bg-gradient-to-r from-amber-300 to-red-700 bg-clip-text text-transparent font-bold text-lg">
                  Jezer Espinoza Painting LLC
                </span>
                , we take pride in our family-owned business that has been
                serving residential and commercial clients since 2009. With
                years of experience in the industry, we bring expertise and
                dedication to every project we undertake. Our skilled team
                specializes in providing high-quality painting services,
                transforming spaces with precision and attention to detail.
                Whether it's revitalizing the interior of a home or enhancing
                the appearance of a commercial property, we are committed to
                delivering exceptional results that exceed our clients'
                expectations. Moreover, as registered federal contractors with
                Sam.gov, we maintain the highest standards of professionalism
                and integrity in all our endeavors. At Jezer Espinoza Painting
                LLC, we combine craftsmanship, reliability, and a personal touch
                to create beautiful and long-lasting finishes that truly stand
                the test of time.
              </p>
              <Link
                href={"/contact-us"}
                className="bg-gradient-to-r from-amber-300 to-red-700 text-center text-white font-bold text-base py-3 rounded-md w-40"
              >
                Contact Us
              </Link>
            </section>
            <section className="flex justify-center items-center">
              <Image
                src={"/image.png"}
                alt="founder"
                width={600}
                height={100}
                className="opacity-100 rounded-full"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

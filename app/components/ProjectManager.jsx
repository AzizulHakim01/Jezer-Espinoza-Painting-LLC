import Image from "next/image";
import Link from "next/link";
const ProjectManager = () => {
  return (
    <div className="bg-white">
      <div className="p-8">
        <div className="max-w-screen-2xl mx-auto " id="about">
          <div className="grid xl:grid-cols-2 items-center text-gray-700">
            <section className="flex justify-center items-center">
              <Image
                src={"/image.png"}
                alt="founder"
                width={600}
                height={100}
                className="opacity-100 rounded-full"
              />
            </section>
            <section className="flex flex-col gap-6">
              <p className="tracking-widest">What our Project Manager Says</p>
              <h1 className="text-5xl font-bold">
                Meet Our Project Manager <br />{" "}
                <span className="bg-gradient-to-r from-amber-300 to-red-700 bg-clip-text text-transparent font-bold">
                  Maritza Diaz
                </span>
              </h1>
              <p className="text-justify font-base">
                Dear Clients,
                <br />
                Thank you for choosing{" "}
                <span className="bg-gradient-to-r from-amber-300 to-red-700 bg-clip-text text-transparent font-bold">
                  Jezer Espinoza Painting LLC
                </span>
                . We're committed to exceeding your expectations with our
                skilled team and attention to detail. Your satisfaction is our
                priority, and we're here to bring your vision to life. Let's
                create something remarkable together. <br />{" "}
                <p className="text-right mt-4">
                  Warm regards,
                  <br /> <span className="font-bold">Maritza Diaz</span>
                  <br />
                  Project Manager <br />
                  Jezer Espinoza Painting LLC
                </p>
              </p>
              <Link
                href="/contact-us"
                className="text-center bg-gradient-to-r from-amber-300 to-red-700 text-white font-bold text-base py-3 rounded-md w-40"
              >
                Contact Us
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManager;

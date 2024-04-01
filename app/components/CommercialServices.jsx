import ServicesCard from "./ServicesCard";

const CommercialServices = ({ title, description }) => {
  const data = [
    {
      title: "AWNING REMOVAL & REPLACEMENT",
      description: "When it comes to removing and replacing awnings for your commercial building, it’s important that the job is done properly the first time to ensure long-term success",
      image:"/1694118615-mefWO9FkjETy828D77VY.png",
      link: "/#",
    },
    {
      title: "BRICK WATERPROOFING",
      description: "In order to keep your brick and mortar exterior from absorbing water, a brick sealer water repellent can be applied.",
      image:"/brick-waterproofing-featured-image-SynergyClean.jpg",
      link: "/#",
    },
    {
      title: "Retail",
      description: "We provide services for Retail.",
      image:"/alexander-kovacs-GMGdhtYeROY-unsplash.jpg",
      link: "/retail",
    },
    {
      title: "Healthcare",
      description: "We provide services for Healthcare.",
      image:"/888255a3966a845402c9a7fce5eadce4.jpg",
      link: "/healthcare",
    },
    {
      title: "Hospitality",
      description: "We provide services for Hospitality.",
      image:"/AdobeStock_383498070-1024x683.jpeg",
      link: "/hospitality",
    },
    {
      title: "School",
      description: "We provide services for School.",
      image:"/1_0ppPgeZXV8vnYkvsl61zvg.jpg",
      link: "/school",
    },
    {
      title: "Amusement",
      description: "We provide services for Amusement.",
      image:"/ScottCarpenter_Cam2_030619_op2.jpg",
      link: "/amusement",
    },
  ];
  return (
    <div className="text-gray-700 max-w-screen-2xl mx-auto xl:py-10">
      <div className="flex flex-col h-full justify-center items-center gap-8">
        <h1 className="uppercase text-center font-semibold xl:text-4xl text-2xl">
          {title}
        </h1>
        <p className="xl:text-xl text-md text-justify capitalize px-4 xl:px-0">
          At{" "}
          <span className="bg-gradient-to-r from-amber-300 to-red-700 bg-clip-text text-transparent font-bold">
            Jezer Espinoza Painting LLC
          </span>{" "}
          {description}
        </p>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 xl:px-0 px-4">
          {
            data.map((item, index)=>(
                <ServicesCard
            title={item.title}
            image={item.image}
            description={item.description}
            link={item.link}
            key={index}
          />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default CommercialServices;

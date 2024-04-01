import CommercialServices from "../components/CommercialServices";
import CommercialServicesWeOffer from "../components/CommercialServicesWeOffer";
import Hero from "../components/Hero";

const CommercialPainting = () => {
  return (
    <div className="">
      <Hero
        title={"Commercial Painting"}
        subtitle="We Design Dreams"
        image="/painting-red.jpg"
      />
      <CommercialServices
        title={"Your Expert Commercial Painter"}
        description={
          "Our commercial painting services are tailored to meet the unique needs of businesses across North America. From office buildings to retail spaces, we specialize in providing professional interior and exterior painting solutions. With a focus on quality and customer satisfaction, our team takes pride in delivering exceptional results. Explore our range of services below to discover how we can enhance the appearance and durability of your commercial property."
        }
      />
      <div className="bg-white">
        <CommercialServicesWeOffer />
      </div>
    </div>
  );
};

export default CommercialPainting;

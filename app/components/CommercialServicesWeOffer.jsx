import ServiceWeOfferSingle from "./ServiceWeOfferSingle"

const CommercialServicesWeOffer = () => {
    const data = [
        {
          title: "HOA & Community",
          description: "We provide services for HOA & Community.",
          image:"/hoa-condo-community-advantages-disadvantages.jpeg",
          link: "/commercial-painting/hoa",
        },
        {
          title: "Industiral",
          description: "We provide services for Industiral.",
          image:"/Industrial manufacturing plant.jpg",
          link: "/commercial-painting/industiral",
        },
        {
          title: "Retail",
          description: "We provide services for Retail.",
          image:"/0x0.webp",
          link: "/commercial-painting/retail",
        },
        {
          title: "Healthcare",
          description: "We provide services for Healthcare.",
          image:"/63da6981e181b8d4ce474c35_PPD-painting-healthcare-medical-clinic-1024x640.jpeg",
          link: "/commercial-painting/healthcare",
        },
        {
          title: "Hospitality",
          description: "We provide services for Hospitality.",
          image:"/commercial-hotels-1024x683.jpg",
          link: "/commercial-painting/hospitality",
        },
        {
          title: "School",
          description: "We provide services for School.",
          image:"/education-painting-services-banner2.webp",
          link: "/commercial-painting/school",
        },
        {
          title: "Amusement",
          description: "We provide services for Amusement.",
          image:"/AmusementPark.webp",
          link: "/commercial-painting/amusement",
        },
      ];
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className='text-gray-700 py-24 xl:px-0 px-10'>
            <h1 className="text-center mb-10 text-4xl font-bold">Commercial Painting by Jezer Espinoza Painting LLC®</h1>
            <p className="xl:text-xl xl:mb-9 mb-6">Our line of commercial painting services includes interior painting, exterior painting, power washing, color consulting and more. If you have a commercial property in need of professional painting services, contact us today. We will provide a clear and timely estimate and get the job done quickly. See below for our full range of commercial painting services:</p>
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full xl:gap-7 gap-4 place-items-center">
                    {
                        data.map((item,index)=>(
                            <ServiceWeOfferSingle title={item.title} image={item.image} link={item.link} description={item.description}/>
                        ))
                    }
                </div>
            </div>
        </div>
        </div>
    )
}

export default CommercialServicesWeOffer
import ServiceWeOfferSingle from "./ServiceWeOfferSingle"
const ServiceWeOffer = () => {
    return (
        <div className='text-gray-700 py-24 xl:px-0 px-10'>
            <h1 className="text-center mb-10 text-4xl font-bold">Service We Offer</h1>
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full xl:gap-7 gap-4 place-items-center">
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Cabinet Refinishing and Repainting"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Color Consultation"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Concrete Staining and Epoxy Finish"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Crown Molding Services"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Drywall Repair"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"EPA Lead Certified"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Light Carpentry and Repairs"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Painting and Staining"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Power Washing"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Stucco Repairs and Painting"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Vinyl and Aluminum Siding Painting"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Wallpaper Removal"} image={"/logo.png"} link={'/brickpaint'} description={""}/>
                </div>
            </div>
        </div>
    )
}

export default ServiceWeOffer
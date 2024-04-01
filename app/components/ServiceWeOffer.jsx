import ServiceWeOfferSingle from "./ServiceWeOfferSingle"
const ServiceWeOffer = () => {
    return (
        <div className='text-gray-700 py-24 xl:px-0 px-10'>
            <h1 className="text-center mb-10 text-4xl font-bold">Service We Offer</h1>
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full xl:gap-7 gap-4 place-items-center">
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/painting-red.jpg"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Cabinet Refinishing and Repainting"} image={"/Cabinet Refinishing and Repainting.png"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Color Consultation"} image={"/14251.jpg"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Concrete Staining and Epoxy Finish"} image={"/2749.jpg"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Crown Molding Services"} image={"/moulding_1__detail.jpg"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Drywall Repair"} image={"/drywall-repair.jpg"} link={'/2085.jpg'} description={""}/>
                    <ServiceWeOfferSingle title={"Light Carpentry and Repairs"} image={"/3754.jpg"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Painting and Staining"} image={"/bg_2.jpg"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Power Washing"} image={"/2749.jpg"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Stucco Repairs and Painting"} image={"/4-mistakes-to-avoid-when-painting-stucco.jpeg"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Vinyl and Aluminum Siding Painting"} image={"/Painting-aluminum-siding-–-Techniques.jpg"} link={'/brickpaint'} description={""}/>
                    <ServiceWeOfferSingle title={"Wallpaper Removal"} image={"/1569950144416.jpeg"} link={'/brickpaint'} description={""}/>
                </div>
            </div>
        </div>
    )
}

export default ServiceWeOffer
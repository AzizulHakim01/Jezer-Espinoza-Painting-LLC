import ServiceWeOfferSingle from "./ServiceWeOfferSingle"
const ServiceWeOffer = () => {
    return (
        <div className='text-gray-700 py-24'>
            <h1 className="text-center mb-10 text-4xl font-bold">Service We Offer</h1>
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-3 w-full gap-7 place-items-center">
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} />
                </div>
            </div>
        </div>
    )
}

export default ServiceWeOffer
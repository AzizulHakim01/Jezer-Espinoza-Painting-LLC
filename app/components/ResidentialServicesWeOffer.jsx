import ServiceWeOfferSingle from "./ServiceWeOfferSingle"

const ResidentialServicesWeOffer = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className='text-gray-700 py-24 xl:px-0 px-10'>
            <h1 className="text-center mb-10 text-4xl font-bold">House Painting Services by Jezer Espinoza Painting LLC®</h1>
            <p className="xl:text-xl xl:mb-9 mb-6">Jezer Espinoza Painting LLC® provides a range of custom interior and exterior painting services, allowing for a smooth, seamless experience and exceptional results in every home. Whether you’re having your two-story foyer updated or refreshing the paint in your home’s bedrooms, the Jezer Espinoza Painting LLC® team approaches every painting project with an eye for detail.</p>
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full xl:gap-7 gap-4 place-items-center">
                    <ServiceWeOfferSingle title={"Brick Painting & Limewashing"} image={"/logo.png"} link={'/brickpaint'} description={"Give brick surfaces on the interior or exterior of your home a brand new look and an extra layer of protection with professional brick painting and limewashing services from Jezer Espinoza Painting LLC®."}/>
                    <ServiceWeOfferSingle title={"Cabinet Refinishing and Repainting"} image={"/logo.png"} link={'/brickpaint'} description={"Your cabinets are perhaps one of the most touched surfaces in your home, so it’s no surprise that they wind up with a little wear and tear. At Jezer Espinoza Painting LLC® of Winston-Salem we’ll work with you to find a finish or paint that meets the needs of your home and daily routine."}/>
                    <ServiceWeOfferSingle title={"Color Consultation"} image={"/logo.png"} link={'/brickpaint'} description={"Not sure which shade to choose? Struggling to differentiate matte, satin and gloss? We’ll help you navigate the sea of options to find a color that matches your home’s interior aesthetic and stands up to your family’s daily routine."}/>
                    <ServiceWeOfferSingle title={"Concrete Staining and Epoxy Finish"} image={"/logo.png"} link={'/brickpaint'} description={"Applying a stain to an interior or exterior concrete floor can add unique dimension to any space. You can enhance the durability of your concrete with an epoxy floor coating. The Jezer Espinoza Painting LLC® team is trained in applying concrete stains and epoxy floor coatings."}/>
                    <ServiceWeOfferSingle title={"Crown Molding Services"} image={"/logo.png"} link={'/brickpaint'} description={"Crown molding is a great way to add elegance in a home. It is timeless, ornate and exquisite looking. The Jezer Espinoza Painting LLC® team can work install decorative borders around your home including fireplace mantels, baseboards, door casings, and wainscoting."}/>
                    <ServiceWeOfferSingle title={"Drywall Repair"} image={"/logo.png"} link={'/brickpaint'} description={"Whether your home has water damage that requires drywall repair or your walls have medium-to-large holes that need patching, the Jezer Espinoza Painting LLC® crew will patch, sand and prime, to create a flawless surface to paint on."}/>
                    <ServiceWeOfferSingle title={"EPA Lead Certified"} image={"/logo.png"} link={'/brickpaint'} description={"At Jezer Espinoza Painting LLC® we are EPA Lead Certified. If the painting project disturbs lead-based paint in your home, we use certified renovators who are trained by EPA-approved training providers and follow lead-safe work practices."}/>
                    <ServiceWeOfferSingle title={"Light Carpentry and Repairs"} image={"/logo.png"} link={'/brickpaint'} description={"Our painters are qualified to repair or replace exterior wood, metal or stucco/EIFS repairs, as well as drywall, plaster, siding and wood replacement."}/>
                    <ServiceWeOfferSingle title={"Painting and Staining"} image={"/logo.png"} link={'/brickpaint'} description={"Protect your home’s exterior from Mother Nature with our variety of exterior home painting and staining services, including your home’s deck and fencing. Our team works with you to determine the best plan of action for your home."}/>
                    <ServiceWeOfferSingle title={"Power Washing"} image={"/logo.png"} link={'/brickpaint'} description={"Power washing is a vital step in painting the exterior of your home. Jezer Espinoza Painting LLC® uses the process to remove mold, oil and old paint so new paint absorbs into your surface better."}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ResidentialServicesWeOffer
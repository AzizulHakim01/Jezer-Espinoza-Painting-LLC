import Hero from "../components/Hero"
import ResidentialServices from "../components/ResidentialServices"
import ResidentialServicesWeOffer from "../components/ResidentialServicesWeOffer"

const ResidentialPainting = () => {
    return (
        <div className=''>
            <Hero title={"Residential Painting"} subtitle="We Design A Home" image="/residential.jpg"/>
            <ResidentialServices title={"Your Expert Residential Painter"} description={"professional interior and exterior house painting services to locations in North America. We take great pride in our quality painting services and high customer reviews. Click one of the links below to learn more about the painting services we offer."}/>
            <ResidentialServicesWeOffer/>
        </div>
    )
}

export default ResidentialPainting
import ServicesCard from "./ServicesCard"

const Services = () => {
    return (
        <div className=''>
            <div className="flex flex-col h-full p-24 justify-center items-center gap-8">
                <h1 className="uppercase font-semibold text-4xl">Services</h1>
                <p className="text-3xl capitalize">No matter what you want, We got you covered</p>
                <div className="flex gap-6">
                    <ServicesCard title={"Residential"} image={"/residential.jpeg"} description={"We provide services for residential properties."} link={"/residential"}/>
                    <ServicesCard title={"Commercial"} image={"/commercial.jpeg"} description={"We provide services for commercial properties."} link={"/commercial"}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Services
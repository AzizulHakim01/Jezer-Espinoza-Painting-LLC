import ServicesCard from "./ServicesCard"

const Services = () => {
    return (
        <div className='text-gray-700 max-w-screen-2xl mx-auto'>
            <div className="flex flex-col h-full p-24 justify-center items-center gap-8">
                <h1 className="uppercase font-semibold text-4xl">Professional Painting Services</h1>
                <p className="text-3xl capitalize">At <span className="bg-gradient-to-r from-amber-300 to-red-700 bg-clip-text text-transparent font-bold">Jezer Espinoza Painting LLC</span> we transform homes and businesses by providing expert services with a proven process, giving you more time to enjoy moments that matter in the spaces you love</p>
                <div className="flex gap-6">
                    <ServicesCard title={"Residential Painting"} image={"/residential.jpeg"} description={"We provide services for residential properties."} link={"/residential"}/>
                    <ServicesCard title={"Commercial Painting"} image={"/commercial.jpeg"} description={"We provide services for commercial properties."} link={"/commercial"}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Services
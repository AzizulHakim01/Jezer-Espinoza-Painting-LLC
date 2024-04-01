import ServicesCard from "./ServicesCard"

const ResidentialServices = ({title, description}) => {
    return (
        <div className='text-gray-700 max-w-screen-2xl mx-auto xl:py-10'>
            <div className="flex flex-col h-full justify-center items-center gap-8">
                <h1 className="uppercase text-center font-semibold xl:text-4xl text-2xl">{title}</h1>
                <p className="xl:text-xl text-md text-justify capitalize px-4 xl:px-0">At <span className="bg-gradient-to-r from-amber-300 to-red-700 bg-clip-text text-transparent font-bold">Jezer Espinoza Painting LLC</span> {description}</p>
                <div className="flex gap-6 xl:px-0 px-4 flex-col lg:flex-row xl:flex-row">
                    <ServicesCard title={"Exterior Painting"} image={"/exterior.png"} description={"We provide services for residential properties."} link={"/residential"}/>
                    <ServicesCard title={"Interior Painting"} image={"/interior.jpeg"} description={"We provide services for commercial properties."} link={"/commercial"}/>
                    
                </div>
            </div>
        </div>
    )
}

export default ResidentialServices
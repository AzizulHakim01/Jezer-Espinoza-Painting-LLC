import Link from "next/link"
import Image from "next/image"
const ServiceWeOfferSingle = ({title, image, link}) => {
    return (
        <div className=' overflow-hidden ring-2 ring-yellow-400 rounded-lg transition-all duration-300 hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] xl:w-96 w-72 flex flex-col justify-between items-center py-4 xl:gap-6 gap-4'>
            <Image src={image} alt="service" width={300} height={100} className="sm:w-32 md:w-48"/>
            <h1 className="font-bold xl:text-2xl">
                {title}
            </h1>
            <Link href={link} className="ring-2 xl:px-3 px-1 py-2 rounded-md font-semibold hover:ring-yellow-400">Learn More</Link>
        </div>
    )
}

export default ServiceWeOfferSingle
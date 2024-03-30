import Link from "next/link"
import Image from "next/image"
const Process = () => {
    return (
        <div className='w-full py-4 relative h-full bg-white'>
            {/* Background compo.. */}
                <div className="-z-1 w-96 h-96 rounded-full bg-gradient-to-r from-[#c8d9f5] to-[#e4e8f1] opacity-45 absolute -top-48 left-40" />
                <div className="-z-1 w-56 h-56 rounded-full bg-gradient-to-r from-[#c8d9f5] to-[#e4e8f1] opacity-65 absolute top-24 right-64" />
                <div className="-z-1 w-36 h-36 rounded-full bg-gradient-to-r from-[#c8d9f5] to-[#e4e8f1] opacity-65 absolute top-96 left-96" />
                <div className="-z-1 w-36 h-36 rounded-full bg-gradient-to-r from-[#c8d9f5] to-[#e4e8f1] opacity-65 absolute top-96 right-96" />
            <div className="max-w-screen-2xl mx-auto h-full">
                <div className="w-full h-full flex items-center gap-4">
                    <div className="h-full flex flex-col w-1/4 gap-5">
                        <h1 className="text-4xl font-bold z-10">NEED ASSISTANCE?</h1>
                        <p className="text-2xl z-10">TALK TO US AND HAVE A BETTER UNDERSTANDING HOW WE DO IT.</p>
                        <Link href="/" className="bg-[#1a1c28] text-white py-3 px-5 w-44 text-center rounded-lg opacity-90 hover:opacity-100 shadow-lg">CONTACT NOW</Link>
                    </div>
                    <div className="w-2/4 flex justify-center relative">
                    {/* Image */}
                    <h1 className="absolute text-5xl bottom-60 bg-gradient-to-r from-amber-300 to-red-700 bg-clip-text text-transparent font-bold">Jezer Espinoza Painting LLC</h1>
                    <Image src="/house.png" alt="cycle" width={650} height={200} className="z-10"/>
                    </div>
                    <div className="w-1/4 flex flex-col gap-16">
                        {/* containers */}
                        <div className="hover:scale-110 transition-all bg-gradient-to-t from-[#8e8d95] to-[#e4e1f6 z-10 flex justify-center items-center h-60 w-60 shadow-xl rounded-xl">
                            <Image src="/ladder.png" className="" alt="cycle" width={200} height={100} />
                        </div>
                        <div className="hover:scale-110 transition-all bg-gradient-to-t from-[#8e8d95] to-[#e4e1f6 z-10 flex justify-center items-center h-60 w-60 shadow-xl rounded-xl">
                            <Image src="/pallet.png" className="" alt="cycle" width={200} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
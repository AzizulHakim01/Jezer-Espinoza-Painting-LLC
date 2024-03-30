import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <div className="w-full">
            <ul className="h-16 items-center flex justify-center gap-5 text-xl font-semibold text-gray-800">
                <li><Link href="/residential-painting">Residential</Link></li>
                <li><Link href="/residential-painting">Commercial Painting</Link></li>
                <li><Link href="/#reviews">Reviews</Link></li>
                <li><Link href="/#about">About Us</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
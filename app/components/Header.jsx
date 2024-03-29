import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-yellow-400 h-36 flex justify-between items-center px-3 shadow-md">
      <div className="">
        <Link href="/">
          <Image src={"/logo.png"} alt="logo" width={200} height={64} />
        </Link>
      </div>
      <Navbar/>
      <div className="flex gap-6 item-center">
        <button className="font-bold text-xl bg-red-700 py-5 px-5 text-white rounded-md hover:bg-opacity-80 transition-all">
          Get Capability Statement
        </button>
      </div>
    </div>
  );
};

export default Header;

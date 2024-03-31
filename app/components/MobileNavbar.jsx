import Link from "next/link";
import { FaBrush } from "react-icons/fa";

const MobileNavbar = () => {
  return (
    <div className="xl:hidden">
      <div className="">
        <FaBrush className="text-5xl"/>
      </div>
    </div>
  );
};

export default MobileNavbar;

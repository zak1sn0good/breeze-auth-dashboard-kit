import { Link } from "react-router-dom";
import Logo from "@/assets/svgs/logo.svg?react";

const Navbar = () => {

  const navbaritems = [
    {
      name: "Product",
      link: "/product"
    },
    {
      name: "Solutions",
      link: "/solutions"
    },
    {
      name: "Pricing",
      link: "/pricing"
    },
    {
      name: "About us",
      link: "/about"
    }
  ]

  return (
    <div 
      className="
        fixed top-0 flex items-center justify-around 
        border-b border-b-[#F7F7F7] h-[100px]
        bg-white w-full z-50 box-shadow-[0px 4px 4px 0px rgba(188, 188, 188, 0.12)]
      "
    >
      <Logo/>
      <div className="flex items-center gap-7">
        {
          navbaritems.map((item, index) => (
            <Link 
              key={index} 
              to={item.link} 
              className="text-[#3B3B3B] text-lg font-medium"
            >
              {item.name}
            </Link>
          ))
        }
      </div>
      <Link to="/login">
        <div 
          className="
            bg-[#CC1A67] text-white px-[30px] py-[10px] rounded-full
            text-lg font-semibold
          "
        >
          Login
        </div>
      </Link>
    </div>
  );
}
 
export default Navbar;

import Navbar from "@/components/common/Navbar";
import { Link } from "react-router-dom";
import BackgroundImage from  "@/assets/svgs/background.svg";
import Hook from "@/assets/svgs/hook.svg?react";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div 
        className="mt-[100px] min-h-[calc(100vh-100px)] w-full flex flex-col justify-center bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div className="flex flex-col items-center gap-10 max-w-4xl -mt-28 mx-auto">
          <div className="flex flex-col items-center gap-4">
            <h1 className="relative text-[40px] font-bold text-center">
              <span className="text-[#DD679A]">Hook</span>
              <span className="text-[#0A0A0A] mx-2">your audience before they</span>
              <span className="text-[#B2014D]">scroll</span>
              <Hook className="absolute -top-4 -right-16 -z-10" />
            </h1>
            <p className="text-2xl text-[#858585] font-normal text-center">
              Create scroll-stopping ad creatives, instantly generated from smart personas and proven angles.
            </p>
          </div>
          <Link to="/login">
            <div 
              className="
                bg-[#CC1A67] text-white px-[60px] py-5 
                rounded-full text-xl font-semibold
              "
            >
              Get Started
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center items-center h-[100px]">
        <h4 className="text-base font-semibold space-x-1">
          <span className="text-[#858585]">Powered by</span>
          <span className="text-[#232323]">One Token Squad</span>
        </h4>
      </div>
    </div>
  );
}

export default Index;

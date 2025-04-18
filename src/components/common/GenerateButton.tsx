import { Button } from "../ui/button";
import Sparkling from "@/assets/svgs/sparkling.svg?react";

interface GenerateButtonProps {
  onClick: () => void;
};

const GenerateButton = ({
  onClick,
}: GenerateButtonProps) => {
  return (
    <Button 
      onClick={onClick}
      className="
        rounded-full bg-[#CC1A67] text-white text-base font-semibold
        px-10 py-3 box-shadow-[0px 2px 8px 0px rgba(117, 117, 117, 0.16)]
        flex items-center gap-3
      "
    >
      <Sparkling/>
      <span>Generate my creative pack</span>
    </Button>
  );
}
 
export default GenerateButton;
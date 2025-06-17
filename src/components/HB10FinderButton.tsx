
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const HB10FinderButton = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="/hb10"
          className="flex items-center bg-[#060034] border-2 border-[#73afff] rounded-[36px] max-w-[450px] p-[15px_30px] fixed bottom-[145px] right-[-30px] z-[200] hover:bg-[#080048] text-white shadow-lg transition-all duration-300 hover:shadow-xl group"
        >
          <img
            src="https://www.loewen-vertrieb.de/_assets/522279b556b280de835e1011f7255b60/img/RZ_DART_HB10-Finder.svg"
            alt="HB10 Finder Icon"
            className="w-[135px] h-[60px] object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-xl font-medium text-white leading-tight flex-1 ml-4">
            HB10<br />Kaufen
          </span>
        </a>
      </TooltipTrigger>
      <TooltipContent side="left" className="bg-[#002454] text-white">
        <p>HB10 kaufen</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default HB10FinderButton;

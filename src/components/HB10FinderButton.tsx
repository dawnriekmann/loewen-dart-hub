
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const HB10FinderButton = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="https://www.loewen.de/produkte/dart-soccer/hb10-finder/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-[#002454] hover:bg-[#003875] text-white p-3 rounded-l-xl shadow-lg transition-all duration-300 hover:shadow-xl group w-60 h-[70px]"
        >
          <div className="flex items-center space-x-3 h-full">
            <img
              src="https://www.loewen.de/_assets/522279b556b280de835e1011f7255b60/img/RZ_DART_HB10-Finder.svg"
              alt="HB10 Finder Icon"
              className="w-[90px] h-[40px] object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-sm font-medium text-white leading-tight">
              HB10<br />Finder
            </span>
          </div>
        </a>
      </TooltipTrigger>
      <TooltipContent side="left" className="bg-[#002454] text-white">
        <p>Zum HB10 Standortfinder</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default HB10FinderButton;

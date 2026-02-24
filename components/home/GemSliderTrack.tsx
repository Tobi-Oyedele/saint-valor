import { Gem } from "@/types/carousel";
import GemPlaceholder from "./GemPlaceHolder";

export default function GemSliderTrack({ gems }: { gems: Gem[] }) {
  return (
    <div className="w-full flex items-center justify-center gap-4 md:gap-6 lg:gap-20 px-6 mb-14">
      {gems.map((gem) => (
        <GemPlaceholder key={gem.id} gem={gem} />
      ))}
    </div>
  );
}

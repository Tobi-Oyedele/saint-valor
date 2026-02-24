import Image from "next/image";
import { Gem } from "@/types/carousel";

const sizeMap: Record<Gem["size"], string> = {
  sm: "w-[50px] h-[50px]",
  md: "w-[80px] h-[80px]",
  lg: "w-[112px] h-[112px]",
};

export default function GemPlaceholder({ gem }: { gem: Gem }) {
  return (
    <div
      className={`
        ${sizeMap[gem.size]}
        relative shrink-0 rounded-full overflow-hidden cursor-pointer
        border border-[#c8c0b0]
        transition-transform duration-300 ease-out
        hover:scale-110 hover:shadow-[0_8px_28px_rgba(0,0,0,0.16)]
      `}
    >
      <Image src={gem.src} alt={gem.alt} fill className="object-cover" />
    </div>
  );
}

import Image from "next/image";
import React from "react";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt?: string;
};

type TeamGridProps = {
  members: TeamMember[];
};

export const TeamGrid: React.FC<TeamGridProps> = ({ members }) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {members.map((m) => (
        <article key={m.id} className="w-full">
          {/* Image */}
          <div className="overflow-hidden rounded-xs bg-neutral-200">
            <Image
              src={m.imageSrc}
              alt={m.imageAlt ?? m.name}
              width={300}
              height={260}
              className="h-96 w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="mt-4">
            <h3 className="text-[13px] font-medium tracking-tight text-neutral-900">
              {m.name}
            </h3>
            <p className="mt-1 text-[11px] leading-relaxed text-neutral-500">
              {m.role}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

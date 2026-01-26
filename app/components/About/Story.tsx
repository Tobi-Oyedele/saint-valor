import Image from "next/image";

const Story = () => {
  return (
    <section className="py-10 md:py-16 px-6">
      <h1 className="text-charcoal text-center text-4xl font-medium">
        Our Story
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-6">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          <h3 className="order-2 md:order-1 leading-relaxed font-medium text-charcoal">
            Founded with an unwavering commitment to quiet luxury and exquisite
            refinement, Saint Valor emerged from a passion for jewelry that
            speaks softly yet confidently. We believe luxury should be felt, not
            shouted — through impeccable materials, thoughtful proportions, and
            pieces created to be treasured for generations.
          </h3>

          <div className="order-1 md:order-2 relative w-full overflow-hidden">
            <div className="relative aspect-4/3 w-full">
              <Image
                src="/images/our-story-2.png"
                alt="Rings"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="mt-5 md:mt-10 flex flex-col gap-6">
          <div className="relative w-full overflow-hidden">
            <div className="relative aspect-4/3 w-full">
              <Image
                src="/images/our-story-1.png"
                alt="Rings"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <h3 className="leading-relaxed text-charcoal font-medium">
            At Saint Valor, every creation is an expression of intentional
            elegance — meant to celebrate personal milestones, timeless style,
            and discerning taste. Our collections stand at the intersection of
            heritage craft and modern sensibility.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Story;

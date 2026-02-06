import Image from "next/image";

type CollectionItem = {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
};

const collections: CollectionItem[] = [
  {
    id: "1",
    name: "The Signature Edit",
    imageSrc: "/images/our-story-2.png",
    imageAlt: "The Signature Edit",
  },
  {
    id: "2",
    name: "Heirloom Series",
    imageSrc: "/images/shop-2.png",
    imageAlt: "Heirloom Series",
  },
  {
    id: "3",
    name: "The Prestige Collection",
    imageSrc: "/images/shop-1.png",
    imageAlt: "The Prestige Collection",
  },
  {
    id: "4",
    name: "Elysian Line",
    imageSrc: "/images/our-story-1.png",
    imageAlt: "Elysian Line",
  },
];

export default function ShopCollectionSection() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-charcoal">
            Shop the Saint Valor <br className="hidden sm:block" />
            Collection
          </h1>

          <p className="mt-3 text-base leading-relaxed text-charcoal">
            A curated selection of fine jewelry designed to reflect elegance,
            confidence, <br className="hidden sm:block" />
            and enduring style.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((item) => (
            <article key={item.id} className="group flex flex-col items-center">
              <div className="w-full overflow-hidden">
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>

              <h3 className="mt-4 text-sm font-medium text-charcoal">
                {item.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

export type Product = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
};

type ProductGridProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {products.map((product) => (
        <article key={product.id} className="relative overflow-hidden">
          {/* Image */}
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="px-3 py-2">
              <p className="text-sm font-semibold text-white">
                ${product.price.toLocaleString()}
              </p>

              <button
                aria-label="Add to Cart"
                onClick={() => onAddToCart(product)}
                className="mt-2 cursor-pointer rounded-full bg-gold px-4 py-2 text-xs font-semibold text-charcoal transition hover:brightness-95"
              >
                Add to cart
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

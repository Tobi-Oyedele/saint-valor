"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";
import Button from "./Button";

interface Product {
  id: number;
  image: string;
  category: string;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: number) => void;
  onFavourite: (id: number) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
  onFavourite,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image wrapper */}
      <div className="relative overflow-hidden rounded-xl aspect-3/4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />

        {/* Heart button */}
        <button
          onClick={() => {
            setIsFavourite(!isFavourite);
            onFavourite(product.id);
          }}
          className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm transition-transform duration-200 hover:scale-110"
        >
          <Heart
            size={16}
            className={
              isFavourite ? "fill-red-500 stroke-red-500" : "stroke-gray-400"
            }
          />
        </button>

        {/* Add to Cart overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            label="Add to Cart"
            onClick={() => onAddToCart(product.id)}
            fullWidth
            variant="outline"
          />
        </div>
      </div>

      {/* Text info */}
      <div className="flex flex-col gap-0.5 px-1">
        <p className="text-xs text-gray-400 uppercase tracking-wide">
          {product.category}
        </p>
        <p className="text-sm font-medium text-gray-800">{product.name}</p>
        <p className="text-sm font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

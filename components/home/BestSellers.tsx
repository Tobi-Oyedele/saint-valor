"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductSlider from "@/components/ui/ProductSlider";
import { getBestSellers } from "@/lib/api/products";
import { Product } from "@/types/product";

const BestSellers = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getBestSellers()
      .then(setProducts)
      .catch(() => toast.error("Something went wrong. Please try again."));
  }, []);

  return (
    <ProductSlider
      title="Best Sellers"
      subtitle="Our most coveted pieces, chosen for their elegance, presence, and enduring appeal."
      products={products}
    />
  );
};

export default BestSellers;

"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductSlider from "@/components/ui/ProductSlider";
import { getNewArrivals } from "@/lib/api/products";
import { Product } from "@/types/product";

const NewArrivals = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getNewArrivals()
      .then(setProducts)
      .catch(() => toast.error("Something went wrong. Please try again."));
  }, []);

  return (
    <ProductSlider
      title="New Arrivals"
      subtitle="The latest additions, thoughtfully crafted to complement evolving style and contemporary luxury."
      products={products}
    />
  );
};

export default NewArrivals;

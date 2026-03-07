"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useFavouritesStore } from "@/store/favouritesStore";
import { useAuthStore } from "@/store/authStore";
import ProductCard from "@/components/ui/ProductCard";

const FavouritesPage = () => {
  const { isLoggedIn } = useAuthStore();
  const { favouriteIds, favourites, fetchFavourites } = useFavouritesStore();

  useEffect(() => {
    if (isLoggedIn) fetchFavourites();
  }, [isLoggedIn, fetchFavourites]);

  return (
    <div className="min-h-screen bg-ivory px-6 py-8 mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-secondary mb-6">
        <Link href="/" className="hover:text-charcoal transition">
          Home
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-charcoal">Favourites</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-charcoal mb-8">
        Favourite ({favouriteIds.size})
      </h1>

      {/* Grid */}
      {favouriteIds.size === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
          <p className="text-sm font-medium text-charcoal">No favourites yet</p>
          <p className="text-xs text-secondary">
            Items you heart will appear here
          </p>
          <Link
            href="/shop"
            className="mt-2 px-5 py-2 border border-gold text-gold text-sm rounded-md hover:bg-gold hover:text-white transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {favourites.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;

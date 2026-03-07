"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useFavouritesStore } from "@/store/favouritesStore";
import HeroCarousel from "@/components/hero/HeroCarousel";
import Collection from "@/components/home/Collection";
import CustomInquiry from "./custom-inquiry/page";
import NewArrivals from "@/components/home/NewArrivals";
import BestSellers from "@/components/home/BestSellers";
import CustomJewelry from "@/components/home/CustomJewelry";

const HomePage = () => {
  const { isLoggedIn } = useAuthStore();
  const { fetchFavourites } = useFavouritesStore();

  useEffect(() => {
    if (isLoggedIn) fetchFavourites();
  }, [isLoggedIn, fetchFavourites]);

  return (
    <main className="bg-ivory">
      <HeroCarousel backgroundSrc="/images/hero-bg.png" autoPlayMs={3500} />
      <Collection />
      <CustomJewelry />
      <NewArrivals />
      <BestSellers />
      <CustomInquiry />
    </main>
  );
};

export default HomePage;

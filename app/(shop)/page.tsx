import HeroCarousel from "../../components/Hero/HeroCarousel";
import Collection from "../../components/Home/Collection";
import CustomInquiry from "./custom-inquiry/page";
import { newArrivals, bestSellers } from "@/data/products";
import ProductSlider from "@/components/ui/ProductSlider";

const page = () => {
  return (
    <main className="bg-ivory">
      <HeroCarousel backgroundSrc="/images/hero-bg.png" autoPlayMs={3500} />
      <Collection />
      <ProductSlider
        title="New Arrivals"
        subtitle="The latest additions, thoughtfully crafted to complement evolving style and contemporary luxury."
        products={newArrivals}
      />
      <ProductSlider
        title="Best Sellers"
        subtitle="Our most coveted pieces, chosen for their elegance, presence, and enduring appeal."
        products={bestSellers}
      />
      <CustomInquiry />
    </main>
  );
};

export default page;

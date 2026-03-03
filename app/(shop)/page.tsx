import HeroCarousel from "@/components/hero/HeroCarousel";
import Collection from "@/components/home/Collection";
import CustomInquiry from "./custom-inquiry/page";
import NewArrivals from "@/components/home/NewArrivals";
import BestSellers from "@/components/home/BestSellers";
import CustomJewelry from "@/components/home/CustomJewelry";

const page = () => {
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

export default page;

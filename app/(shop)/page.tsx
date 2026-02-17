import HeroCarousel from "../../components/Hero/HeroCarousel";
import Collection from "../../components/Home/Collection";
import CustomInquiry from "./custom-inquiry/page";
const page = () => {
  return (
    <main className="bg-ivory">
      <HeroCarousel backgroundSrc="/images/hero-bg.png" autoPlayMs={3500} />
      <Collection />
      <CustomInquiry />
    </main>
  );
};

export default page;

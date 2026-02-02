import HeroCarousel from "../components/Hero/HeroCarousel";
import Collection from "../components/Home/Collection";

const page = () => {
  return (
    <main className="bg-ivory">
      <HeroCarousel backgroundSrc="/images/hero-bg.png" autoPlayMs={3500} />
      <Collection />
    </main>
  );
};

export default page;

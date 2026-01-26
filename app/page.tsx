import HeroCarousel from "./components/Hero/HeroCarousel";

const page = () => {
  return (
    <main>
      <HeroCarousel backgroundSrc="/images/hero-bg.png" autoPlayMs={3500} />
    </main>
  );
};

export default page;

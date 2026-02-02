export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    title: "Bespoke Jewelry Crafted for\nTimeless Elegance and Distinction",
    subtitle:
      "Exceptional diamonds and precious metals designed to elevate presence, status, and personal expression.",
    ctaLabel: "Shop Now",
    ctaHref: "/shop",
  },
  {
    id: "slide-2",
    title: "Crafted to Be Worn, Remembered,\nand Admired",
    subtitle:
      "Thoughtfully designed jewelry that reflects personal legacy, refined taste, and lasting sophistication.",
    ctaLabel: "Shop Now",
    ctaHref: "/shop",
  },
  {
    id: "slide-3",
    title: "An Expression of Luxury Defined by\nDetail",
    subtitle:
      "Every Saint Valor piece embodies elegance, intention, and the confidence that comes with true refinement.",
    ctaLabel: "Shop Now",
    ctaHref: "/shop",
  },
];

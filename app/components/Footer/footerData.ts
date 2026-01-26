export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "New arrivals", href: "#" },
      { label: "Female", href: "#" },
      { label: "Male", href: "#" },
      { label: "Fashion", href: "#" },
      { label: "Bespoke collection", href: "#" },
      { label: "Custom Inquiry", href: "#" },
    ],
  },
  {
    title: "Collections",
    links: [
      { label: "The Signature Edit", href: "#" },
      { label: "Heirloom Series", href: "#" },
      { label: "The Prestige Collection", href: "#" },
      { label: "Elysian Line", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
];

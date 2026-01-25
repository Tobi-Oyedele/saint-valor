export type ChildLink = {
  label: string;
  href: string;
  count?: number;
};

export type MenuItem =
  | { type: "link"; label: string; href: string; rightIcon?: "chevron" }
  | { type: "accordion"; label: string; children: ChildLink[] };

const PLACEHOLDER_COUNTS = {
  female: {
    rings: 22,
    necklaces: 44,
    earrings: 30,
    bracelets: 23,
    pantChains: 12,
    anklets: 12,
  },
  male: {
    rings: 10,
    necklaces: 8,
  },
  fashion: {
    rings: 5,
    necklaces: 9,
  },
} as const;

export const MENU: MenuItem[] = [
  { type: "link", label: "NEW ARRIVALS", href: "/new-arrivals" },

  {
    type: "accordion",
    label: "FEMALE",
    children: [
      { label: "JEWELRY TYPE", href: "/female/jewelry-type" },
      {
        label: "RINGS",
        href: "/female/rings",
        count: PLACEHOLDER_COUNTS.female.rings,
      },
      {
        label: "NECKLACES",
        href: "/female/necklaces",
        count: PLACEHOLDER_COUNTS.female.necklaces,
      },
      {
        label: "EARRINGS",
        href: "/female/earrings",
        count: PLACEHOLDER_COUNTS.female.earrings,
      },
      {
        label: "BRACELETS",
        href: "/female/bracelets",
        count: PLACEHOLDER_COUNTS.female.bracelets,
      },
      {
        label: "PANT CHAINS",
        href: "/female/pant-chains",
        count: PLACEHOLDER_COUNTS.female.pantChains,
      },
      {
        label: "ANKLETS",
        href: "/female/anklets",
        count: PLACEHOLDER_COUNTS.female.anklets,
      },
    ],
  },

  {
    type: "accordion",
    label: "MALE",
    children: [
      { label: "JEWELRY TYPE", href: "/male/jewelry-type" },
      {
        label: "RINGS",
        href: "/male/rings",
        count: PLACEHOLDER_COUNTS.male.rings,
      },
      {
        label: "NECKLACES",
        href: "/male/necklaces",
        count: PLACEHOLDER_COUNTS.male.necklaces,
      },
    ],
  },

  {
    type: "accordion",
    label: "FASHION",
    children: [
      { label: "JEWELRY TYPE", href: "/fashion/jewelry-type" },
      {
        label: "RINGS",
        href: "/fashion/rings",
        count: PLACEHOLDER_COUNTS.fashion.rings,
      },
      {
        label: "NECKLACES",
        href: "/fashion/necklaces",
        count: PLACEHOLDER_COUNTS.fashion.necklaces,
      },
    ],
  },

  {
    type: "link",
    label: "BESPOKE COLLECTION",
    href: "/bespoke-collection",
    rightIcon: "chevron",
  },
  {
    type: "link",
    label: "CUSTOM INQUIRY",
    href: "/custom-inquiry",
    rightIcon: "chevron",
  },
  {
    type: "link",
    label: "ABOUT US",
    href: "/about-us",
    rightIcon: "chevron",
  },
];

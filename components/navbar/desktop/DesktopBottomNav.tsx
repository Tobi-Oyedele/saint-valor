"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DesktopDropdown } from "./DesktopDropdown";

const DesktopBottomNav = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex justify-center items-center gap-7">
      <Link
        href="/new-arrivals"
        className={`bottom-nav-link-style ${isActive("/new-arrivals") ? "text-burgundy" : ""}`}
      >
        New Arrivals
      </Link>

      <DesktopDropdown
        label="Female"
        href="/female"
        items={[
          { label: "Rings", href: "/new-arrivals/latest", count: 22 },
          { label: "Necklaces", href: "/new-arrivals/trending", count: 88 },
          { label: "Earrings", href: "/new-arrivals/earrings", count: 39 },
          { label: "Bracelets", href: "/new-arrivals/bracelets", count: 23 },
          {
            label: "Pant Chains",
            href: "/new-arrivals/pant-chains",
            count: 12,
          },
          { label: "Anklet", href: "/new-arrivals/anklet", count: 12 },
        ]}
      />

      <DesktopDropdown
        label="Male"
        href="/male"
        items={[
          { label: "Rings", href: "/new-arrivals/latest", count: 22 },
          { label: "Necklaces", href: "/new-arrivals/trending", count: 88 },
          { label: "Earrings", href: "/new-arrivals/earrings", count: 39 },
          { label: "Bracelets", href: "/new-arrivals/bracelets", count: 23 },
          {
            label: "Pant Chains",
            href: "/new-arrivals/pant-chains",
            count: 12,
          },
          { label: "Anklet", href: "/new-arrivals/anklet", count: 12 },
        ]}
      />

      <DesktopDropdown
        label="Fashion"
        href="/fashion"
        items={[
          { label: "Rings", href: "/new-arrivals/latest", count: 22 },
          { label: "Necklaces", href: "/new-arrivals/trending", count: 88 },
          { label: "Earrings", href: "/new-arrivals/earrings", count: 39 },
          { label: "Bracelets", href: "/new-arrivals/bracelets", count: 23 },
          {
            label: "Pant Chains",
            href: "/new-arrivals/pant-chains",
            count: 12,
          },
          { label: "Anklet", href: "/new-arrivals/anklet", count: 12 },
        ]}
      />

      <Link
        href="/bespoke-collection"
        className={`bottom-nav-link-style ${isActive("/bespoke-collection") ? "text-burgundy" : ""}`}
      >
        Bespoke Collection
      </Link>
      <Link
        href="/custom-inquiry"
        className={`bottom-nav-link-style ${isActive("/custom-inquiry") ? "text-burgundy" : ""}`}
      >
        Custom Inquiry
      </Link>
      <Link
        href="/about-us"
        className={`bottom-nav-link-style ${isActive("/about-us") ? "text-burgundy" : ""}`}
      >
        About Us
      </Link>
    </nav>
  );
};

export default DesktopBottomNav;

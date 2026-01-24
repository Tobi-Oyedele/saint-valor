import Image from "next/image";
import { ChevronDown, ShoppingCart, Heart, UserRound } from "lucide-react";
import Link from "next/link";
import { CurrencyDropdown } from "../CurrencyDropdown";
import { DesktopHoverDropdown } from "../DesktopHoverDropdown";

const DesktopNav = () => {
  return (
    <nav className="py-4 px-10 space-y-6 bg-ivory">
      {/* top nav section*/}
      <nav className="flex justify-between">
        <div>
          <Image
            src="/images/Logo.svg"
            width={50}
            height={50}
            alt="Saint Valor Logo"
          />
        </div>

        <div className="flex items-center gap-2">
          {/* User menu button */}
          <button
            type="button"
            className="top-nav-icon-style"
            aria-label="Open user menu"
          >
            <UserRound className="w-6 h-6" />
            <ChevronDown className="w-4 h-4 ml-0.5" />
          </button>

          {/* Cart */}
          <button
            type="button"
            className="top-nav-icon-style"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-6 h-6" />
          </button>

          {/* Fav */}
          <button
            type="button"
            className="top-nav-icon-style"
            aria-label="Open favourites"
          >
            <Heart className="w-6 h-6" />
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-charcoal" />
          {/* Currency */}
          <div>
            <CurrencyDropdown />
          </div>
        </div>
      </nav>

      {/* bottom nav section */}
      <nav className="flex justify-center items-center gap-7">
        <DesktopHoverDropdown
          label="New Arrivals"
          href="/new-arrivals"
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

        <DesktopHoverDropdown
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

        <DesktopHoverDropdown
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

        <DesktopHoverDropdown
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

        <Link href="/bespoke-collection" className="bottom-nav-link-style">
          Bespoke Collection
        </Link>
        <Link href="/custom-inquiry" className="bottom-nav-link-style">
          Custom Inquiry
        </Link>
        <Link href="/about-us" className="bottom-nav-link-style">
          About Us
        </Link>
      </nav>
    </nav>
  );
};

export default DesktopNav;

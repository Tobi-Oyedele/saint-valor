import Image from "next/image";
import { ChevronDown, ShoppingCart, Heart, UserRound } from "lucide-react";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="py-4 px-10 space-y-6">
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
          <div>
            {/* Currency */}
            <button
              type="button"
              className="flex items-center justify-center h-10 px-3 text-charcoal cursor-pointer"
              aria-label="Change currency"
            >
              <span>USD</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </nav>

      {/* bottom nav section */}
      <nav className="flex justify-center items-center gap-7">
        <Link href="/new-arrivals" className="bottom-nav-link-style">
          New Arrivals
        </Link>
        <Link href="/female" className="bottom-nav-link-style">
          Female
        </Link>
        <Link href="/male" className="bottom-nav-link-style">
          Male
        </Link>
        <Link href="/fashion" className="bottom-nav-link-style">
          Fashion
        </Link>
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

import Link from "next/link";
import Image from "next/image";
import { UserRound, ChevronDown, ShoppingCart, Heart } from "lucide-react";
import { CurrencyDropdown } from "../CurrencyDropdown";

const DesktopTopNav = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/images/Logo.svg"
            width={50}
            height={50}
            alt="Saint Valor Logo"
          />
        </Link>
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
        <Link
          href="/favourites"
          className="top-nav-icon-style"
          aria-label="Open favourites"
        >
          <Heart className="w-6 h-6" />
        </Link>

        {/* Divider */}
        <div className="w-px h-6 bg-charcoal" />
        {/* Currency */}
        <div>
          <CurrencyDropdown />
        </div>
      </div>
    </nav>
  );
};

export default DesktopTopNav;

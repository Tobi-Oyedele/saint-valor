import Link from "next/link";
import { ChevronDown } from "lucide-react";

type DropdownItem = { label: string; href: string; count?: number };

export function DesktopHoverDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: DropdownItem[];
}) {
  return (
    <div className="relative group">
      <Link href={href} className="bottom-nav-link-style flex items-center">
        <span>{label}</span>
        <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
      </Link>

      {/* Hover bridge */}
      <div className="fixed left-0 right-0 top-(--nav-height) h-5 opacity-0" />

      {/* Dropdown */}
      <div
        className="
      fixed left-0 right-0 top-(--nav-height) bg-ivory z-50 mt-5

      opacity-0 invisible translate-y-1 pointer-events-none
      group-hover:opacity-100 group-hover:visible
      group-hover:translate-y-0 group-hover:pointer-events-auto

      transition duration-150
    "
      >
        <h1 className="uppercase px-14 pt-10 pb-4">Jewelry Type</h1>
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-1 px-14 py-2 text-sm uppercase"
              >
                <span>{item.label}</span>
                {typeof item.count === "number" && (
                  <span className="text-xs">({item.count})</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

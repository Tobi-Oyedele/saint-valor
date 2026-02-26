"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Users", href: "/admin/users" },
  { label: "Orders", href: "/admin/orders" },
  { label: "Products", href: "/admin/products" },
];

export default function AdminNavbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-ivory px-8 py-4 flex items-center gap-12">
      <Image
        src="/images/Logo.svg"
        alt="Saint Valor Logo"
        width={40}
        height={40}
      />

      <ul className="flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xs tracking-widest uppercase transition-all pb-1 ${
                  isActive
                    ? "border-b-2 border-charcoal font-medium text-charcoal"
                    : "text-secondary hover:text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

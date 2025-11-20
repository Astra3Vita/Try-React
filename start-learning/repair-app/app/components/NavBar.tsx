"use client"; // if you plan to use hooks like useRouter

import Link from "next/link";
import clsx from "clsx";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  items: NavItem[];
  className?: string;
};

export default function Navbar({ items, className }: NavbarProps) {
  return (
    <nav
      className={clsx(
        "flex items-center justify-between px-6 py-3 bg-gray-50",
        className
      )}
    >
      {/* Logo */}
      <div className="text-lg font-bold">Repair and Maintenance System</div>

      {/* Links */}
      <ul className="flex gap-6">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="hover:text-gray-600 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

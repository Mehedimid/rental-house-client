
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-secondary font-semibold" : "text-white";

  return (
    <aside className="w-64 bg-gray-900 text-white p-6 space-y-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-3">
        <Link href="/admin/users" className={isActive("/admin/users")}>
          👥 All Users
        </Link>
        <Link href="/admin/listings" className={isActive("/admin/listings")}>
          🏠 All Listings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

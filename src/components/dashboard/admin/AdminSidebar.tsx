"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Home } from "lucide-react";
// import { useAuth } from "@/hooks/useAuth"; // Enable if you have auth logic

const adminLinks = [
  { label: "Dashboard Overview", href: "/dashboard/admin" },
  { label: "All Users", href: "/dashboard/admin/users" },
  { label: "All Listings", href: "/dashboard/admin/listings" },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  // Dummy data for now – replace with real user from auth
  const user = {
    name: "Admin Name",
    email: "admin@example.com",
    photoURL: "/default-avatar.png",
  };

  return (
    <aside className="w-64 min-h-screen flex flex-col justify-between px-6 py-8 sidebar-theme shadow-theme">
      {/* Top Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        {/* Admin Info */}
        {user && (
          <div className="flex items-center gap-3 mb-6">
            <img
              src={user.photoURL}
              alt="Admin Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4">
          {adminLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm px-4 py-2 rounded-md hover:bg-secondary/10 transition ${
                pathname === href ? "bg-secondary font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Buttons */}
      <div className="mt-8 border-t border-[color:var(--sidebar-foreground)]/20 pt-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-md hover:bg-secondary/10 transition"
        >
          <Home size={16} />
          Home
        </Link>

        <button
          // onClick={logout}
          className="flex items-center gap-2 text-sm px-4 py-2 text-red-400 hover:text-red-500 rounded-md mt-2"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;

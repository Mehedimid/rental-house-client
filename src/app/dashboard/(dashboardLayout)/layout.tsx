"use client";  // This makes this file a Client Component

import { useSession } from "next-auth/react";
import AdminSidebar from "@/components/dashboard/admin/AdminSidebar";
// import TenantSidebar from "@/components/dashboard/tenant/TenantSidebar";
// import LandlordSidebar from "@/components/dashboard/landlord/LandlordSidebar";

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    // Handle the case when the user is not authenticated
    return <div>You need to sign in</div>;
  }

  return (
    <div>
      <div className="flex">
        <aside>
          {/* Render sidebar based on role */}
          {/* {session.user.role === "admin" && <AdminSidebar />}
          {session.user.role === "tenant" && <TenantSidebar />}
          {session.user.role === "landlord" && <LandlordSidebar />} */}
          <AdminSidebar/>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

"use client";  // This makes this file a Client Component

import { useSession } from "next-auth/react";
import AdminSidebar from "../../../components/dashboard/admin/AdminSidebar";
import Loader from "@/components/shared/Loader";
// import TenantSidebar from "@/components/dashboard/tenant/TenantSidebar";
// import LandlordSidebar from "@/components/dashboard/landlord/LandlordSidebar";

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { data: session, status } = useSession();
  console.log(session?.user)

  if (status === "loading") {
    return <Loader/>;
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
          {/* {user.role === 'admin' && <AdminSidebar />}
        {user.role === 'tenant' && <TenantSidebar />}
        {user.role === 'landlord' && <LandlordSidebar />} */}
          <AdminSidebar />
        </aside>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
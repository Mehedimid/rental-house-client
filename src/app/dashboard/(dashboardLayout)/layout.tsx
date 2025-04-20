import AdminSidebar from "@/components/dashboard/admin/AdminSidebar";

const DashboardLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
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
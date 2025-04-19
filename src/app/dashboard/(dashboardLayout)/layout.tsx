
const DashboardLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (

    <div>
      <header> {/* Common header */} </header>
      <aside>
        {/* Render sidebar based on role */}
        {/* {user.role === 'admin' && <AdminSidebar />}
        {user.role === 'tenant' && <TenantSidebar />}
        {user.role === 'landlord' && <LandlordSidebar />} */}
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
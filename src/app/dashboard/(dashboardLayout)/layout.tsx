// import AdminSidebar from "@/components/dashboard/admin/AdminSidebar";

// const DashboardLayout = ({ children }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   return (

//     <div>
//       <div className="flex">
//         <aside>
//           {/* Render sidebar based on role */}
//           {/* {user.role === 'admin' && <AdminSidebar />}
//         {user.role === 'tenant' && <TenantSidebar />}
//         {user.role === 'landlord' && <LandlordSidebar />} */}
//           <AdminSidebar />
//         </aside>
//         <main>
//           {children}
//         </main>
//       </div>
//     </div>
//   )
// }

// export default DashboardLayout
import { AppSidebar } from "@/components/module/dashboard/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await getCurrentUser();
  type UserRole = "tenant" | "landlord" | "admin";
  const user: {
    name: string;
    email: string;
    photoURL: string;
    role: UserRole;
  } = {
    name: "Admin Name",
    email: "admin@example.com",
    photoURL: "/default-avatar.png",
    role: "tenant",
  };
  return (
    <SidebarProvider >
      <AppSidebar role={user?.role} />

      <SidebarInset>
        <header className="flex flex-col h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        
        <div className="p-4 pt-0 ">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

"use client";  
import { useSession } from "next-auth/react";
// import AdminSidebar from "../../../components/dashboard/admin/AdminSidebar";
// import TenantSidebar from "@/components/dashboard/tenant/TenantSidebar";
// import LandlordSidebar from "@/components/dashboard/landlord/LandlordSidebar";

// const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (!session) {
//     // Handle the case when the user is not authenticated
//     return <div>You need to sign in</div>;
//   }

//   // return (

//   //   <div>
//   //     <div className="flex">
//   //       <aside>
//   //         {/* Render sidebar based on role */}
//   //         {/* {user.role === 'admin' && <AdminSidebar />}
//   //       {user.role === 'tenant' && <TenantSidebar />}
//   //       {user.role === 'landlord' && <LandlordSidebar />} */}
//   //         <AdminSidebar />
//   //       </aside>
//   //       <main>
//   //         {children}
//   //       </main>
//   //     </div>
//   //   </div>
//   // )
// }

// export default DashboardLayout
// export default DashboardLayout
import { AppSidebar } from "@/components/module/dashboard/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>)=> {

  const { data: session, status } = useSession();
console.log({session},"sesion found")
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    // Handle the case when the user is not authenticated
    return <div>You need to sign in</div>;
  }

  return (
    <SidebarProvider >
      <AppSidebar role='tenant' />

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

export default DashboardLayout;
"use client";

import * as React from "react";
import {
  Bot,
  Pen,
  SquareTerminal,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";
import Logo from "../../../../assets/rental.png";
import Image from "next/image";


const getNavItems = (role: "tenant" | "landlord" | "admin") => {
  if (role === "tenant") {
    return [
      {
        title: "Dashboard",
        url: "/tenant/dashboard",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "House Rent Data",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Apply Rental Deed",
            url: "/tenant/apply-rental-deed",
          },
          {
            title: "Show All Deed",
            url: "/tenant/show-all-deed",
          },
          
        ],
      },
      {
        title: "Review Management",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Give Review",
            url: "/tenant/give-review"
          },
          {
            title: "Manage Review",
            url: "/tenant/manage-review"
          },
          
        ],
      },
      {
        title: "Update Profile",
        url: "/tenant//update-profile",
        icon: User,
        isActive: true,
      },
    ];
  } else if (role === "landlord") {
    return [
      {
        title: "Dashboard",
        url: "/landlord/dashboard",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "My Rental Add",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Manage Add",
            url: "/landlord/manage-add"
          },  
        ],
      },  
      {
        title: "Add Post",
        url: "/landlord/add-post",
        icon: Pen,
      },
      {
        title: "Manage Add Post",
        url: "/landlord/manage-add-post",
        icon: Bot,
      },
    ];
  }
  else {
    return [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "All Rental Add",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Manage Add",
            url: "/admin/manage-add"
          },  
        ],
      },  
      {
        title: "Add Post",
        url: "/landlord/add-post",
        icon: Pen,
      },
      {
        title: "Manage Add Post",
        url: "/landlord/manage-add-post",
        icon: Bot,
      },
      {
        title: "Manage user",
        url: "/admin/manage-user",
        icon: Bot,
      },
    ];
  }
};

export function AppSidebar({ role, ...props }: { role: "tenant"| "landlord" | "admin"}  & React.ComponentProps<typeof Sidebar>) {
  const navMain = getNavItems(role);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center">
                  <Image src={Logo} alt="logo" width={36}/>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">TutorLink</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}

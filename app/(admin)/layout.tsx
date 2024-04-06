"use client"

import type { Metadata } from "next";
import "@/app/global.css"
import NarbarComponent from "@/component/navbar/NavbarComponent";
import FooterComponent from "@/component/footer/FooterComponent";
import { Suspense, useState } from "react";
import SidebarComponent from "@/component/sidebar/SidebarComponent";
import { MenuIcon } from "@/component/icons/FontAwesome";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [isShowSidebar, setIsShowSidebar] = useState<boolean>(true)

  return (
    <html lang="en">
      <body 
        className="flex none-scroll-bar">
            <MenuIcon
					onClick={() => setIsShowSidebar(!isShowSidebar)}
					classname="h-8 z-20 w-8 fixed bottom-0 m-4 cursor-pointer lg:hidden"
				/>
        {/* this is the sidebar section  */}
        <aside
            className={`sticky left-0 z-10 h-screen${
                isShowSidebar && "hidden"
            } lg:block`}>
            <SidebarComponent/>  
        </aside>

        {/* main section */}
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}

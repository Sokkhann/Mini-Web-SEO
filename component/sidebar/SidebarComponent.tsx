
"use client";

import { Sidebar } from "flowbite-react";
import { useState } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { MenuList } from "./menu";

type MenuItem = {
    name: string,
    path: string,
    icon: React.ElementType
}

export default function SidebarComponent() {

    const [menu, setMenu] = useState<MenuItem[]>(MenuList)

  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup >
          {menu.map((item, index) => (
            <Sidebar.Item 
                key={index}
                href={item.path} 
                icon={item.icon}>
                {item.name}
          </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

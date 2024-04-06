
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useState } from "react";
import { MenuList } from "./menu";
import { usePathname } from "next/navigation";

type MenuItem = {
  name: string,
  path: string,
  active: boolean
}

export default function NarbarComponent() {

  const pathName = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(MenuList)

  return (
    <Navbar fluid rounded className="my-8">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="special-logo self-center whitespace-nowrap text-xl font-semibold dark:text-white">K.Shopper</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {menu.map((item, index) => (
          <Navbar.Link className="text-green-800"
            as={Link}
            key={index}
            href={item.path}
            active={item.path === pathName}
          >
              {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

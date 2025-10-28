import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const menuOptions = [
  {
    name: "Home",
    path: "/",
  },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact Us", path: "/contact-us" },
];
function Header() {
  return (
    <div className="flex justify-between p-4" >
      {/* logo */}
      <div className="flex gap-2 items-center">
        <Image src={"./logo.svg"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-2xl">AI TRIP PLANNER</h2>
      </div>
      {/* Menu Options */}
      <div className="flex gap-8 items-center">
        {menuOptions.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2 className="text-lg hover:scale-105 transition-all">
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      {/* Button */}
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;

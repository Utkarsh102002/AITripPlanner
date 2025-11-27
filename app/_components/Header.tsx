"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const menuOptions = [
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact-us" },
];

function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-sm bg-white sticky top-0 z-50">
      <div className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
        <h2 className="font-bold text-2xl text-gray-800 tracking-tight">
          AI TRIP PLANNER
        </h2>
      </div>

      <nav className="hidden md:flex gap-8 items-center">
        {menuOptions.map((menu, index) => (
          <Link
            href={menu.path}
            key={index}
            className="text-lg text-gray-700 hover:text-black transition-all hover:scale-105"
          >
            {menu.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="px-5">Get Started</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-3">
            <Link href="/create-new-trip">
              <Button className="px-5">Create New Trip</Button>
            </Link>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;

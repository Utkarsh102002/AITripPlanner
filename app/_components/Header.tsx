"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const menuOptions = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact Us", path: "/contact-us" },
];

function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-sm bg-white sticky top-0 z-50">
      {/* ---- Logo ---- */}
      <div className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
        <h2 className="font-bold text-2xl text-gray-800 tracking-tight">
          AI TRIP PLANNER
        </h2>
      </div>

      {/* ---- Navigation Menu ---- */}
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

      {/* ---- Auth Section ---- */}
      <div className="flex items-center gap-4">
        {/* When logged out */}
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="px-5">Get Started</Button>
          </SignInButton>
        </SignedOut>

        {/* When logged in */}
        <SignedIn>
          <div className="flex items-center gap-3">
            <Link href="/create-trip">
              <Button className="px-5">Create New Trip</Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;

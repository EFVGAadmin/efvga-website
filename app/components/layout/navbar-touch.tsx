"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { FaLock } from "react-icons/fa";

/**
 * Mobile / touch navbar for small screens.
 * Shows the logo (half-overlapping) and a hamburger icon that reveals a full-screen slide-in menu.
 */
const MENU: Array<{
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string }>;
}> = [
  { label: "Home", href: "/" },
  { label: "About Edinburgh", href: "/about-edinburgh" },
  {
    label: "Tours",
    children: [
      { label: "Free Tours (2025)", href: "/free-tours" },
      { label: "Private Tours", href: "/private-tours" },
      { label: "Safety on Tours", href: "/tour-safety" },
      { label: "Tours FAQ", href: "/tours-faq" },
    ],
  },
  { label: "Make a Donation", href: "/bank" },
  { label: "Testimonials", href: "/testimonials" },
  {
    label: "Guides",
    children: [
      { label: "Becoming a Guide", href: "/becoming" },
      { label: "Guides Login", href: "/guides" },
    ],
  },
  { label: "Contact", href: "/contact_us" },
];

export const NavbarTouch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-yellow-400">
      {/* NAVBAR */}
      <nav className="relative z-5 h-16 flex items-center container mx-auto px-4">
        {/* Logo – positioned half-out */}
        <Link href="/" className="absolute left-4 -bottom-12">
          <Image
            src="/logo.png"
            alt="Kingdom Family Church Logo"
            width={64}
            height={64}
            priority
            className={`h-24 w-24 object-contain ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Hamburger */}
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={24}
          color="#1D080C"
          rounded
          label="Toggle menu"
        />
      </nav>

      {/* MENU OVERLAY */}
      <div
        className={`fixed z-40 inset-0 bg-yellow-400 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-10 overflow-y-auto h-full flex flex-col gap-6">
          {/* Hamburger */}
          <div className="flex justify-end">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={24}
              color={isOpen ? "#1D080C" : "#FFFFFF"}
              rounded
              label="Toggle menu"
            />
          </div>
          {MENU.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <Link
                href={item.href ?? "#"}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-[#1D080C]"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="ml-4 flex flex-col gap-1 text-base text-[#1D080C]">
                  {item.children.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 font-semibold"
                      >
                        {sub.label === "Free Tours (2025)"
                          ? `Free Tours ${currentYear}`
                          : sub.label}
                        {sub.href === "/guides" && (
                          <FaLock className="ml-1 inline" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarTouch;

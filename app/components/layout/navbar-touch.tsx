"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import {
  DEFAULT_MAIN_NAV,
  formatNavLabel,
  type NavItem,
} from "@/lib/site-config";
import { buildMobileNav } from "@/lib/build-mobile-nav";

type NavbarTouchProps = {
  nav?: NavItem[];
  festivalYear?: string;
};

export const NavbarTouch: React.FC<NavbarTouchProps> = ({
  nav,
  festivalYear = String(new Date().getFullYear()),
}) => {
  const menu = nav ?? buildMobileNav(DEFAULT_MAIN_NAV);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-yellow-400">
      <nav className="relative z-5 h-16 flex items-center container mx-auto px-4">
        <Link href="/" className="absolute left-4 -bottom-12">
          <Image
            src="/logo.png"
            alt="Edinburgh Festival Voluntary Guides Association"
            width={64}
            height={64}
            priority
            className={`h-24 w-24 object-contain ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>

        <div className="flex-1" />

        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={24}
          color="#1D080C"
          rounded
          label="Toggle menu"
        />
      </nav>

      <div
        className={`fixed z-40 inset-0 bg-yellow-400 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-10 overflow-y-auto h-full flex flex-col gap-6">
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
          {menu.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-[#1D080C]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-lg font-semibold text-[#1D080C]">
                  {item.label}
                </span>
              )}
              {item.children && (
                <ul className="ml-4 flex flex-col gap-1 text-base text-[#1D080C]">
                  {item.children.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 font-semibold"
                      >
                        {formatNavLabel(sub.label, festivalYear)}
                        {sub.protected && (
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

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { FaLock } from "react-icons/fa";

const ABOUT_SUB = [{ label: "About Edinburgh", href: "/about-edinburgh" }];

const TOURS_SUB = [
  { label: "Free Tours 2026", href: "/free-tours" },
  { label: "Private Tours", href: "/private-tours" },
  { label: "Safety on Tours", href: "/tour-safety" },
  { label: "Tours FAQ", href: "/tours-faq" },
];

const GUIDES_SUB = [
  { label: "Becoming a Guide", href: "/becoming" },
  { label: "Guides Login", href: "/guides" },
];

const NAV_LINKS: Array<{
  label: string;
  href?: string;
  children?: typeof ABOUT_SUB;
}> = [
  { label: "Home", href: "/" },
  { label: "About Edinburgh", href: "/about-edinburgh" },
  { label: "Tours", children: TOURS_SUB },
  { label: "Make a Donation", href: "/bank" },
  { label: "Guides", children: GUIDES_SUB },
  { label: "Contact", href: "/contact_us" },
];

export const NavbarDesktop: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const logoSize = scrolled ? "h-20 w-20" : "h-32 w-32 xl:h-40 xl:w-40";
  const placeholderSize = scrolled ? "h-20 w-20" : "h-32 w-32 xl:h-40 xl:w-40";
  const currentYear = new Date().getFullYear();
  return (
    <nav className="hidden md:block bg-yellow-400 font-sans relative">
      <div className="container mx-auto flex items-center justify-between h-24 px-4 xl:px-12 relative">
        <div className={`${placeholderSize} transition-all duration-300`}></div>
        {/* Logo */}
        <Link
          href="/"
          className={`absolute left-4 xl:left-12 bottom-0 transition-all duration-300 ${
            scrolled ? "translate-y-0 bottom-2" : "translate-y-1/2"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Edinburgh Festival Voluntary Guides Association"
            width={192}
            height={192}
            priority
            className={`${logoSize} object-contain transition-all duration-300`}
          />
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-8  justify-center">
          {NAV_LINKS.map((item) => (
            <li key={item.label} className="group relative">
              {item.children ? (
                <>
                  <span className="inline-flex items-center cursor-pointer text-gray-900 uppercase font-bold tracking-[0.2em] text-base gap-1">
                    {item.label}
                    <FiChevronDown className="text-orange-700 h-6 w-6 transition-transform group-hover:rotate-180" />
                  </span>
                  {/* dropdown menu */}
                  <ul className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:flex flex-col bg-yellow-400 shadow-lg min-w-[200px] z-40">
                    {item.children.map((sub, idx) => (
                      <li key={sub.label} className="w-full">
                        <Link
                          href={sub.href}
                          className="block w-full px-6 py-4 text-gray-900 whitespace-nowrap hover:bg-orange-700 "
                        >
                          {sub.label === "Free Tours (2025)"
                            ? `Free Tours ${currentYear}`
                            : sub.label}
                          {sub.href === "/guides" && (
                            <FaLock className="ml-1 inline" />
                          )}
                        </Link>
                        {idx < item.children!.length - 1 && (
                          <div className="h-px bg-[#1E1B1C]" />
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className="text-gray-900 uppercase font-bold tracking-[0.2em] text-base hover:text-orange-700"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Contact button */}
        <div className="hidden xl:block">
          {/* <Button variant="outline" size="sm" href="/contact_us">
            Contact Us
          </Button> */}
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;

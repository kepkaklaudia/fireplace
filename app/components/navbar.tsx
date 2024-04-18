"use client";

import { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkStyle =
    "block py-3.5 px-3 md:p-0 text-black hover:bg-blue hover:text-white md:hover:bg-transparent md:hover:text-red transition-colors text-transform: uppercase text-sm transition-colors focus-style-blue";

  const closeMenu = () => setIsMobileMenuOpen(false);

  const MenuIcon = ({ isMobileMenuOpen }: { isMobileMenuOpen: boolean }) =>
    isMobileMenuOpen ? (
      <svg
        className="w-5 h-5 animate-in fade-in"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    );

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <li>
      <a onClick={closeMenu} href={href} className={linkStyle}>
        {label}
      </a>
    </li>
  );

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse focus-style-blue"
          >
            <Image
              src="/pagelogo.png"
              width="170"
              height="32"
              className="h-7 w-auto"
              alt="ILDNORD Logo"
            />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden focus:outline-none focus:ring-1 focus:ring-gray-200"
            aria-controls="navbar-solid-bg"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            <MenuIcon isMobileMenuOpen={isMobileMenuOpen} />
          </button>
          <div
            className={`${
              isMobileMenuOpen
                ? "max-h-screen opacity-100 md:max-h-none"
                : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
            } w-full overflow-hidden transition-all duration-300 ease-in-out md:block md:w-auto`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {[
                { href: "#", label: "Home" },
                { href: "#products", label: "Products" },
                { href: "#about-us", label: "About us" },
                { href: "#kratki", label: "Where to buy" },
              ].map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

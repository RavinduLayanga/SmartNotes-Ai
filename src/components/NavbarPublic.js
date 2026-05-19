"use client";

import { useState } from "react";
import Logo from "./Logo";
import AuthButton from "./AuthButton";

export default function NavbarPublic({ session }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 fixed w-full z-20 top-0 start-0 border-b border-slate-800 text-slate-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />

        {/* Dynamic User Session Area */}
        <div className="flex items-center md:order-2 space-x-3 relative">
          <AuthButton session={session} />

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-800 rounded-lg bg-slate-900 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-blue-500 font-semibold md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 hover:text-blue-400 md:p-0"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 hover:text-blue-400 md:p-0"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

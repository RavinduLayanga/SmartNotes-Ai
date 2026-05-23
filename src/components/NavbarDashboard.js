"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Logo from "./Logo";

export default function NavbarDashboard({ session }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 fixed w-full z-20 top-0 start-0 border-b border-slate-800 text-slate-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />

        {/* User Profile Dropdown Area */}
        <div className="flex items-center md:order-2 space-x-3 relative">
          <button
            type="button"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex text-sm bg-slate-800 rounded-full focus:ring-4 focus:ring-slate-700 transition"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={
                session?.user?.image ||
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
              }
              alt="user profile"
            />
          </button>

          {isProfileOpen && (
            <div className="z-50 absolute right-0 top-10 mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-lg w-44">
              <div className="px-4 py-3 text-sm border-b border-slate-700">
                <span className="block font-medium text-white truncate">
                  {session?.user?.name || "User"}
                </span>
                <span className="block text-slate-400 truncate text-xs">
                  {session?.user?.email}
                </span>
              </div>
              <ul className="p-2 text-sm text-slate-300 font-medium">
                <li>
                  <a
                    href="/dashboard"
                    className="block p-2 hover:bg-slate-700 hover:text-white rounded"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="text-left w-full block p-2 hover:bg-slate-700 text-red-400 hover:text-red-300 rounded"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-slate-800"
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

        {/* Application Navigation Links */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-800 rounded-lg bg-slate-900 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="/dashboard"
                className="block py-2 px-3 text-blue-500 font-semibold md:p-0"
              >
                My Notes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 hover:text-blue-400 md:p-0"
              >
                ⚙️ Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

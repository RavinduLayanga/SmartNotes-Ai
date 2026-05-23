"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function AuthButton({ session }) {
  // Show portal to workspace if the session exists, otherwise show login triggers
  if (session) {
    return (
      <Link
        href="/dashboard"
        className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-md flex items-center gap-1"
      >
        Go to Dashboard
      </Link>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
      >
        Sign In
      </button>
    </div>
  );
}

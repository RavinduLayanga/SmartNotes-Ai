import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "SmartNotes AI",
  description: "Create, edit, and summarize your thoughts with AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

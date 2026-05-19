import { auth } from "@/auth";
import { redirect } from "next/navigation";
import NavbarDashboard from "@/components/NavbarDashboard";

export default async function DashboardLayout({ children }) {
  const session = await auth();

  // Kick unauthenticated users back to home
  if (!session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <NavbarDashboard session={session} />
      <main className="flex-grow pt-24 max-w-screen-xl w-full mx-auto p-4">
        {children}
      </main>
    </div>
  );
}

import { auth } from "@/auth";
import NavbarPublic from "@/components/NavbarPublic";
import Footer from "@/components/Footer";

export default async function HomepageLayout({ children }) {
  const session = await auth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <NavbarPublic session={session} />

      <main className="flex-grow pt-24 max-w-screen-xl w-full mx-auto p-4">
        {children}
      </main>

      <Footer />
    </div>
  );
}

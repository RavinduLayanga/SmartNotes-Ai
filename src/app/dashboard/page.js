import { auth } from "@/auth";
import { neon } from "@neondatabase/serverless";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata = {
  title: "Dashboard | SmartNotes AI",
};

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  // Connect to Neon and fetch  user's notes
  const sql = neon(process.env.DATABASE_URL);

  const notes = await sql`
    SELECT id, title, content, summary, created_at 
    FROM notes 
    WHERE user_id = ${session.user.id} 
    ORDER BY created_at DESC
  `;

  return (
    <div className="max-w-screen-xl mx-auto p-4 pt-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">My Notes</h1>
        <Link
          href="/dashboard/new"
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
        >
          + New Note
        </Link>
      </div>

      {notes.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center">
          <h3 className="text-xl font-medium text-slate-300 mb-2">
            No notes yet
          </h3>
          <p className="text-slate-500 mb-6">
            Create your first note to start building your second brain.
          </p>
          <Link
            href="/dashboard/new"
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Create Note
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-colors flex flex-col h-64"
            >
              <h2 className="text-lg font-semibold text-white mb-2 line-clamp-1">
                {note.title}
              </h2>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                {note.content}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
                <span>{new Date(note.created_at).toLocaleDateString()}</span>
                <Link
                  href={`/dashboard/${note.id}`}
                  className="text-blue-500 hover:text-blue-400 font-medium"
                >
                  Open →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

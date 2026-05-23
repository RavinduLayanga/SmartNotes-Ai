import { auth } from "@/auth";
import { neon } from "@neondatabase/serverless";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import EditNoteForm from "./EditNoteForm";

export default async function SingleNotePage({ params }) {
  const session = await auth();
  if (!session) redirect("/");

  const resolvedParams = await params;
  const noteId = resolvedParams.id;

  const sql = neon(process.env.DATABASE_URL);
  const fetchedNotes = await sql`
    SELECT * FROM notes 
    WHERE id = ${noteId} AND user_id = ${session.user.id}
  `;

  if (fetchedNotes.length === 0) {
    notFound();
  }

  const note = fetchedNotes[0];

  return (
    <div className="w-full max-w-[1600px] mx-auto p-4 pt-24">
      <Link
        href="/dashboard"
        className="text-slate-400 hover:text-white transition mb-8 inline-block"
      >
        ← Back to Dashboard
      </Link>

      <EditNoteForm note={note} />
    </div>
  );
}

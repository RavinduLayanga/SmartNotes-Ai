"use client";

import { useState } from "react";
import { updateNote, deleteNote } from "@/actions/noteActions";

export default function EditNoteForm({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Show read only view with Edit/Delete buttons
  if (!isEditing) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold text-white">{note.title}</h1>

          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition"
            >
              Edit Note
            </button>

            <form
              action={async (formData) => {
                setIsDeleting(true);
                await deleteNote(formData);
              }}
            >
              <input type="hidden" name="id" value={note.id} />
              <button
                type="submit"
                disabled={isDeleting}
                className="px-4 py-2 bg-red-900/20 hover:bg-red-900/50 text-red-400 border border-red-900/50 rounded-lg text-sm font-medium transition disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </form>
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-8 border-b border-slate-800 pb-4">
          Created on {new Date(note.created_at).toLocaleDateString()}
        </p>

        <div className="whitespace-pre-wrap text-slate-300 leading-relaxed">
          {note.content}
        </div>
      </div>
    );
  }

  // Show editable form when in edit mode
  return (
    <form
      action={async (formData) => {
        setIsSaving(true);
        await updateNote(formData);
        setIsSaving(false);
        setIsEditing(false);
      }}
      className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-6"
    >
      <input type="hidden" name="id" value={note.id} />

      <div>
        <input
          type="text"
          name="title"
          required
          defaultValue={note.title}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-2xl font-bold text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div>
        <textarea
          name="content"
          required
          rows="12"
          defaultValue={note.content}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-300 leading-relaxed focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
        ></textarea>
      </div>

      <div className="flex gap-4 pt-4 border-t border-slate-800">
        <button
          type="submit"
          disabled={isSaving}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors disabled:opacity-50"
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

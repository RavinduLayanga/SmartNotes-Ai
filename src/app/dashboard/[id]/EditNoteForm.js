"use client";

import { useState } from "react";
import { updateNote, deleteNote } from "@/actions/noteActions";

export default function EditNoteForm({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [textLength, setTextLength] = useState(note.content?.length || 0);
  const MAX_CHARS = 20000;

  // --- Read only view ---
  if (!isEditing) {
    return (
      <div className="w-[92%] max-w-[1600px] mx-auto mb-12">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl flex flex-col h-[85vh]">
          <div className="flex justify-between items-start mb-6 shrink-0 border-b border-slate-800 pb-6">
            <div>
              <h1 className="text-3xl font-bold text-white leading-tight mb-2">
                {note.title}
              </h1>
              <p className="text-sm text-slate-500">
                Created on{" "}
                {new Date(note.created_at).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>

            <div className="flex gap-3 shrink-0">
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

          <div className="flex-grow overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
              {/* Actual content   */}
              <div className="lg:col-span-7 h-full overflow-y-auto overflow-x-hidden custom-scrollbar pr-4 pb-4 flex flex-col">
                <div className="whitespace-pre-wrap text-slate-300 leading-relaxed text-sm mt-2">
                  {note.content}
                </div>
              </div>

              {/* Genarated summary */}
              <div className="lg:col-span-5 h-full">
                {note.summary ? (
                  <div className="bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-900/50 rounded-xl p-6 h-full flex flex-col">
                    <h2 className="text-lg font-bold text-indigo-300 flex items-center gap-2 mb-5 border-b border-indigo-900/50 pb-3 shrink-0">
                      ✨ AI Summary
                    </h2>
                    <div className="prose prose-invert prose-indigo max-w-none overflow-y-auto custom-scrollbar pr-2">
                      <div className="whitespace-pre-wrap text-indigo-100/90 leading-relaxed text-[15px]">
                        {note.summary}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-800/50 rounded-xl p-6 text-center text-slate-500 italic h-full flex items-center justify-center border border-dashed border-slate-700">
                    No summary generated.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Edit View ---
  return (
    <form
      action={async (formData) => {
        setIsSaving(true);
        await updateNote(formData);
        setIsSaving(false);
        setIsEditing(false);
      }}
      className="bg-slate-900 border border-slate-800 rounded-xl p-8 max-w-4xl mx-auto shadow-2xl flex flex-col h-[80vh]"
    >
      <input type="hidden" name="id" value={note.id} />

      <div className="shrink-0 mb-6">
        <input
          type="text"
          name="title"
          required
          defaultValue={note.title}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-2xl font-bold text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div className="flex-grow flex flex-col overflow-hidden mb-6">
        <div className="flex justify-between items-end mb-2 shrink-0">
          <label className="block text-sm font-medium text-slate-300">
            Brain Dump
          </label>
          <span
            className={`text-xs ${textLength > MAX_CHARS * 0.9 ? "text-red-400" : "text-slate-500"}`}
          >
            {textLength.toLocaleString()} / {MAX_CHARS.toLocaleString()}{" "}
            characters
          </span>
        </div>

        <textarea
          name="content"
          required
          maxLength={MAX_CHARS}
          onChange={(e) => setTextLength(e.target.value.length)}
          defaultValue={note.content}
          className="flex-grow w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-slate-300 leading-relaxed focus:ring-2 focus:ring-blue-500 outline-none transition resize-none overflow-y-auto custom-scrollbar"
        ></textarea>
      </div>

      <div className="shrink-0 pt-4 border-t border-slate-800 flex gap-4">
        <button
          type="submit"
          disabled={isSaving}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {isSaving ? "Saving & Summarizing..." : "Save Changes"}
        </button>
        <button
          type="button"
          onClick={() => {
            setIsEditing(false);
            setTextLength(note.content?.length || 0);
          }}
          className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

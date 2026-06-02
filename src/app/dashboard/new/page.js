"use client";

import { useState } from "react";
import { createNote } from "@/actions/noteActions";
import Link from "next/link";

export default function NewNotePage() {
  const [isSaving, setIsSaving] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  const MAX_CHARS = 20000;

  return (
    <div className="max-w-3xl mx-auto p-4 pt-24 relative">
      {/* Rate limit Error Message */}
      {errorMsg && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-red-950/80 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 backdrop-blur-md">
          <svg
            className="w-5 h-5 text-red-400 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">{errorMsg}</span>
          <button
            type="button"
            onClick={() => setErrorMsg(null)}
            className="text-red-400 hover:text-white transition ml-2"
          >
            ✕
          </button>
        </div>
      )}

      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/dashboard"
          className="text-slate-400 hover:text-white transition"
        >
          ← Back
        </Link>
        <h1 className="text-3xl font-bold text-white">Create New Note</h1>
      </div>

      <form
        action={async (formData) => {
          setIsSaving(true);
          setErrorMsg(null);

          try {
            const result = await createNote(formData);
            if (result?.error) {
              setErrorMsg(result.error);
              setIsSaving(false);
            }
          } catch (error) {
            if (error.message.includes("NEXT_REDIRECT")) throw error;
            setErrorMsg("Server error: " + error.message);
            setIsSaving(false);
          }
        }}
        className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Note Title
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="e.g., Q3 Marketing Strategy"
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <div>
          <div className="flex justify-between items-end mb-2">
            <label className="block text-sm font-medium text-slate-300">
              Note Content
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
            rows="10"
            placeholder="Type your raw thoughts or meeting notes here..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSaving}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
        >
          {isSaving ? "Saving to Database..." : "Save Note"}
        </button>
      </form>
    </div>
  );
}

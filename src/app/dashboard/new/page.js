"use client";

import { useState } from "react";
import { createNote } from "@/actions/noteActions";
import Link from "next/link";

export default function NewNotePage() {
  const [isSaving, setIsSaving] = useState(false);
  const [textLength, setTextLength] = useState(0);

  const MAX_CHARS = 20000;

  return (
    <div className="max-w-3xl mx-auto p-4 pt-24">
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
          await createNote(formData);
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
              Brain Dump
            </label>
            {/* 👈 The Counter UI */}
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

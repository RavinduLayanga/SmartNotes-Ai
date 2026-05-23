export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 min-h-[85vh]">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6">
          Welcome to SmartNotes AI
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          The ultimate Brain Dump destination. Paste your chaotic meeting notes
          and let our AI instantly transform them into clean, actionable
          executive summaries.
        </p>
      </div>

      {/* --- CARDS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full text-left">
        {/* About the App */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:bg-slate-900/50 hover:border-indigo-500/30 transition-all duration-300 group">
          <div className="h-14 w-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            The AI Brain Dump
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Stop worrying about formatting. Paste your messy meeting notes,
            chaotic thoughts, and unorganized transcripts. Our Next.js powered
            AI instantly transforms them into clean, actionable executive
            summaries.
          </p>
        </div>

        {/* Pricing */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:bg-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-colors"></div>

          <div className="h-14 w-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Pro Plan</h2>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              $9
            </span>
            <span className="text-slate-400">/month</span>
          </div>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-center gap-3">
              <span className="text-emerald-400">✓</span> Unlimited AI Summaries
            </li>
            <li className="flex items-center gap-3">
              <span className="text-emerald-400">✓</span> Dynamic Output Scaling
            </li>
            <li className="flex items-center gap-3">
              <span className="text-emerald-400">✓</span> Secure Data Storage
            </li>
          </ul>
        </div>

        {/* How to Use */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:bg-slate-900/50 hover:border-blue-500/30 transition-all duration-300 group">
          <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">How it Works</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold">
                1
              </div>
              <p className="text-slate-400 text-sm mt-1">
                Dump your raw text into the dashboard editor.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold">
                2
              </div>
              <p className="text-slate-400 text-sm mt-1">
                Hit save and let Groq process the context dynamically.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold">
                3
              </div>
              <p className="text-slate-400 text-sm mt-1">
                Read your beautiful bullet points in the side-by-side view.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

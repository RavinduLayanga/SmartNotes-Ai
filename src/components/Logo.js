export default function Logo() {
  return (
    <a href="/" className="flex items-center space-x-3">
      <img
        src="smartnotes-ai-logo.png"
        alt="SmartNotes Logo"
        width={32}
        height={32}
        className="h-10 w-auto object-contain"
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
        SmartNotes AI
      </span>
    </a>
  );
}

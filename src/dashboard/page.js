import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  // Route Protection
  if (!session) {
    redirect("/");
  }

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        color: "#f8fafc",
        backgroundColor: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #334155",
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "bold" }}>
            My SmartNotes
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
            Logged in as {session.user?.email}
          </p>
        </div>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#334155",
              color: "#f8fafc",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Sign Out
          </button>
        </form>
      </header>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem" }}
      >
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "1.5rem",
            borderRadius: "8px",
            height: "fit-content",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              marginBottom: "1rem",
              fontWeight: "600",
            }}
          >
            Create New Note
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
            Database connection coming up next!
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "1.5rem",
            borderRadius: "8px",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              marginBottom: "1rem",
              fontWeight: "600",
            }}
          >
            Your Notes
          </h2>
          <p style={{ color: "#94a3b8" }}>No notes saved yet.</p>
        </div>
      </div>
    </div>
  );
}

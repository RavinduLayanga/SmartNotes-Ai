import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#0f172a",
        color: "#f8fafc",
      }}
    >
      <div
        style={{
          padding: "2rem",
          borderRadius: "12px",
          backgroundColor: "#1e293b",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h1 style={{ marginBottom: "1.5rem", fontSize: "1.75rem" }}>
          SmartNotes AI
        </h1>

        {session ? (
          /* UI shown when the user IS logged in */
          <div>
            {session.user?.image && (
              <img
                src={session.user.image}
                alt="Profile Picture"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: "1rem",
                  border: "2px solid #3b82f6",
                  objectFit: "cover",
                }}
              />
            )}
            <p style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              Welcome, {session.user?.name}!
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#94a3b8",
                marginBottom: "1.5rem",
              }}
            >
              {session.user?.email}
            </p>

            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: "#ef4444",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Sign Out
              </button>
            </form>
          </div>
        ) : (
          /* UI shown when the user IS NOT logged in */
          <div>
            <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>
              Securely sync your smart notes across all your devices.
            </p>

            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "6px",
                  border: "1px solid #334155",
                  backgroundColor: "#ffffff",
                  color: "#1e293b",
                  fontWeight: "bold",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Sign in with Google
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

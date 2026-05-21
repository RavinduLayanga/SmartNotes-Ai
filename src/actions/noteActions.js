"use server";

import { auth } from "@/auth";
import { neon } from "@neondatabase/serverless";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Groq from "groq-sdk";

// export async function createNote(formData) {
//   // 1. Verify the users logging
//   const session = await auth();
//   if (!session || !session.user) {
//     throw new Error("Unauthorized");
//   }

//   // 2. Extract the data from the fe
//   const title = formData.get("title");
//   const content = formData.get("content");

//   // 3. Connect to Neon Database
//   const sql = neon(process.env.DATABASE_URL);

//   await sql`
//     INSERT INTO notes (user_id, title, content)
//     VALUES (${session.user.id}, ${title}, ${content})
//   `;

//   revalidatePath("/dashboard");

//   // 5. Redirect the user back to the dashboard
//   redirect("/dashboard");
// }

export async function createNote(formData) {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  const title = formData.get("title");
  const content = formData.get("content");

  // 2. Initialize the Groq AI client
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  // 3. Send the raw note to Groq and ask for a summary
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are an expert executive assistant. Summarize the following note into 3 concise, highly actionable bullet points. Do not include any intro or outro text, just the bullet points.",
      },
      {
        role: "user",
        content: content,
      },
    ],
    model: "llama-3.1-8b-instant",
  });

  // Extract the AI's response
  const aiSummary =
    chatCompletion.choices[0]?.message?.content ||
    "Could not generate summary.";

  // 4. Connect to Neon Database
  const sql = neon(process.env.DATABASE_URL);

  // 5. Insert the new note AND the new AI summary into the database
  await sql`
    INSERT INTO notes (user_id, title, content, summary)
    VALUES (${session.user.id}, ${title}, ${content}, ${aiSummary})
  `;

  // 6. Clear cache and redirect
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

// export async function updateNote(formData) {
//   const session = await auth();
//   if (!session || !session.user) throw new Error("Unauthorized");

//   const id = formData.get("id");
//   const title = formData.get("title");
//   const content = formData.get("content");

//   const sql = neon(process.env.DATABASE_URL);

//   // Check ownership again before update
//   await sql`
//     UPDATE notes
//     SET title = ${title}, content = ${content}
//     WHERE id = ${id} AND user_id = ${session.user.id}
//   `;

//   revalidatePath("/dashboard");
//   redirect("/dashboard");
// }

export async function updateNote(formData) {
  const session = await auth();
  if (!session || !session.user) throw new Error("Unauthorized");

  const id = formData.get("id");
  const title = formData.get("title");
  const content = formData.get("content");

  // 1. Boot up Groq again
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  // 2. Ask for a brand new summary based on the updated text
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are an expert executive assistant. Summarize the following note into 3 concise, highly actionable bullet points. Do not include any intro or outro text, just the bullet points.",
      },
      {
        role: "user",
        content: content,
      },
    ],
    model: "llama-3.1-8b-instant",
  });

  const aiSummary =
    chatCompletion.choices[0]?.message?.content ||
    "Could not generate summary.";

  // 3. Update the title, content, AND the new summary in Neon
  const sql = neon(process.env.DATABASE_URL);
  await sql`
    UPDATE notes 
    SET title = ${title}, content = ${content}, summary = ${aiSummary}
    WHERE id = ${id} AND user_id = ${session.user.id}
  `;

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function deleteNote(formData) {
  const session = await auth();
  if (!session || !session.user) throw new Error("Unauthorized");

  const id = formData.get("id");

  const sql = neon(process.env.DATABASE_URL);

  // Ownership Check again
  await sql`
    DELETE FROM notes 
    WHERE id = ${id} AND user_id = ${session.user.id}
  `;

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

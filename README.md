# SmartNotes AI

SmartNotes AI is a modern full-stack web application that helps users create, organize, and summarize personal notes using AI. The application combines secure authentication, serverless database storage, and fast AI-powered summarization to provide a seamless note-taking experience.

## Live Demo

**Live Application:** https://smart-notes-ai-gold.vercel.app/

## Features

* **Secure Authentication** - Sign in with Google using NextAuth.js (Auth.js) and database-backed sessions.
* **AI-Powered Summarization** – Generate concise summaries of notes using Groq-hosted Large Language Models.
* **Note Management** – Create, view, edit, and delete personal notes through an intuitive interface.
* **User Data Isolation** – Users can only access and manage their own notes through session-based authorization.
* **Responsive Design** – Clean and mobile-friendly user interface built with Tailwind CSS.

## Tech Stack

* **Framework:** Next.js (App Router & Server Actions)
* **Language:** TypeScript
* **Database:** Neon (Serverless PostgreSQL)
* **Authentication:** NextAuth.js v5 (Auth.js)
* **Database Adapter:** @auth/neon-adapter
* **AI Integration:** Groq SDK (LLaMA / Qwen Models)
* **Styling:** Tailwind CSS
* **Deployment:** Vercel

## Prerequisites

Before running the application, obtain the following credentials:

* Google OAuth Client ID and Secret
* Neon PostgreSQL Database Connection String
* Groq API Key

## Environment Variables

Create a `.env.local` file in the project root and add the following variables:

```env
# NextAuth Configuration
AUTH_SECRET=your_generated_nextauth_secret_key
AUTH_URL=http://localhost:3000

# Google OAuth Credentials
AUTH_GOOGLE_ID=your_google_client_id.apps.googleusercontent.com
AUTH_GOOGLE_SECRET=your_google_client_secret

# Database Connection
DATABASE_URL=postgres://user:password@neon-cluster-url/dbname?sslmode=require

# Groq API Key
GROQ_API_KEY=gsk_your_groq_api_key
```


## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/RavinduLayanga/SmartNotes-Ai.git
cd smartnotesai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Security Features

* Secure OAuth authentication with NextAuth.js.
* Server-side session management.
* Protected API routes and server actions.
* User-specific database queries to prevent unauthorized data access.
* Environment variable management for sensitive credentials.

## Project Highlights

* Built using the Next.js App Router architecture.
* Integrated AI-powered note summarization using the Groq SDK.
* Implemented secure user authentication and session handling.
* Utilized a serverless PostgreSQL database with Neon.
* Deployed to production on Vercel.

---

Developed by **Ravindu Layanga**
Live Demo: https://smart-notes-ai-gold.vercel.app/

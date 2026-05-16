import { Pool } from "@neondatabase/serverless";

export const query = async (text, params) => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  try {
    return await pool.query(text, params);
  } finally {
    await pool.end();
  }
};

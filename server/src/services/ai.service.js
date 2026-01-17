import axios from "axios";
import { buildMigrationPrompt } from "./prompt.builder.js";

export const migrateCodeWithAI = async (code, target) => {
  if (typeof code !== "string" || !code.trim()) {
    throw new Error("Invalid or empty source code provided");
  }

  if (typeof target !== "string" || !target.trim()) {
    throw new Error("Invalid or empty target provided");
  }

  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Missing GEMINI_API_KEY");
  }

  const prompt = buildMigrationPrompt({ code, target });
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";

  try {
    const { data, status } = await axios.post(
      `${url}?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ role: "user", parts: [{ text: prompt }] }]
      },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 30000
      }
    );

    if (status !== 200) {
      throw new Error(`Gemini API Error: ${status}`);
    }

    const text =
      data?.candidates?.[0]?.content?.parts
        ?.map((p) => p?.text)
        .filter(Boolean)
        .join("\n")
        .trim();

    return text || "No response from AI";
  } catch (err) {
    const message =
      err.response?.data?.error?.message || err.message || "Unknown error";

    console.error("Gemini API Error:", message);
    throw new Error(message);
  }
};

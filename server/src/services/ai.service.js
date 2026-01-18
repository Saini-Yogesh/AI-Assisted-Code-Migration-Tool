import axios from "axios";
import { buildMigrationPrompt } from "./prompt.builder.js";

const MODELS = [
  {
    key: "GEMINI_API_KEY_3_FLASH_PREVIEW",
    url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent"
  },
  {
    key: "GEMINI_API_KEY_2_5_FLASH",
    url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"
  }
];

export const migrateCodeWithAI = async (code, target) => {
  if (typeof code !== "string" || !code.trim())
    throw new Error("Invalid or empty source code provided");

  if (typeof target !== "string" || !target.trim())
    throw new Error("Invalid or empty target provided");

  const prompt = buildMigrationPrompt({ code, target });

  let lastError = "AI failed";

  for (const model of MODELS) {
    const apiKey = process.env[model.key];
    if (!apiKey) continue;

    try {
      const { data, status } = await axios.post(
        `${model.url}?key=${apiKey}`,
        { contents: [{ role: "user", parts: [{ text: prompt }] }] },
        { headers: { "Content-Type": "application/json" }, timeout: 30000 }
      );

      if (status !== 200) throw new Error(`Status ${status}`);

      const text = data?.candidates?.[0]?.content?.parts
        ?.map(p => p?.text)
        .filter(Boolean)
        .join("\n")
        .trim();

      if (text) return text;
      lastError = "Empty response";
    } catch (err) {
      lastError = err.response?.data?.error?.message || err.message;
    }
  }

  throw new Error(lastError);
};

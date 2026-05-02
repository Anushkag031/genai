import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBkeJaV7vItl7kKIGknrcUSLC7ZVKPCnjQ" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Tell me about gen ai",
  });
  console.log(response.text);
}

await main();
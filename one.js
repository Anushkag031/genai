import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({ apiKey: "AIzaSyAUV1K4wJFeQwhmjpaaRa8SiAFpyCmuY_g" });

const StoreHistory = [];

async function chat(userProblem) {
   // const userInput = readlineSync.question("You: ");
    StoreHistory.push({ 
        role: "user", 
        parts:[{text:userProblem}]
    });

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: StoreHistory
    });

    StoreHistory.push({ 
        role: "assistant",
        parts: [{ text: response.text }]
    });
    console.log("AI: " + response.text);
}

async function main() {

    console.log("Welcome to the Google GenAI Chat!");
    const userProblem = readlineSync.question("Ask me anything--> ");
    await chat(userProblem);
    main();

}

main();
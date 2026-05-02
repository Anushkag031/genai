import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({ apiKey: "AIzaSyAUV1K4wJFeQwhmjpaaRa8SiAFpyCmuY_g" });
const History = []

async function Chatting(userProblem) {

  History.push({
    role:'user',
    parts:[{text:userProblem}]
  })

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: History
  });
  

  History.push({
    role:'model',
    parts:[{text:response.text}]
  })
  
  console.log("\n");
  console.log(response.text);
}


async function main(){
   
   const userProblem = readlineSync.question("Ask me anything--> ");
   await Chatting(userProblem);
   main();
}


main();
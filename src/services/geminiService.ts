import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askAI = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure your environment.";
  }

  try {
    const systemInstruction = `You are a helpful customer support AI for 'Brainstorm Global Education', a visa and education consultancy firm. 
    Use the following context to answer user questions:
    - We have over a decade of experience.
    - We offer services for student visas, immigration, test preparation (IELTS/TOEFL), and university selection.
    - We have a 98% success rate.
    - We help with countries like USA, UK, Canada, Australia, and New Zealand.
    - We provide personalized counseling and pre-departure support.
    
    Keep answers concise, professional, and encouraging. If the answer isn't in the context, suggest they contact our support team at (808) 555-0111.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I am having trouble connecting to the server right now. Please try again later.";
  }
};

import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the MNFP Official Business Hub Assistant. 
MNFP is a premium business ecosystem. 
Your tone should be professional, exclusive, helpful, and sophisticated.
You help users with business inquiries, product details, and platform navigation.
Keep responses concise and informative.
`;

export async function sendMessageToGemini(message: string): Promise<string> {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing some technical difficulties. Please try again later.";
  }
}

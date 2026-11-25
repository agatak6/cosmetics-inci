
export async function analyzeInci(inciText, apiKey) {
  if (!apiKey) {
    throw new Error("Brak klucza API.");
  }

  const cleanedInci = inciText?.trim();
  if (!cleanedInci) {
    throw new Error("Podaj skład INCI do analizy.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    config: {
      systemInstruction:
        "Jesteś asystentem wyjaśniającym składy kosmetyków (INCI) po polsku. " +
        "Odpowiadaj zwięźle, rzeczowo i w tonie edukacyjnym (bez diagnoz medycznych).",
      temperature: 0.3,
    },
    contents: `Przeanalizuj poniższy skład INCI:\n\n${cleanedInci}`,
  });

  return response.text ?? "";
}


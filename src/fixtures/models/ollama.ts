import { OllamaProvider } from "../providers";

export const Gemma2_2b = {
  id: "a14aa3dc-ddc4-441a-a572-gemma2_2b",
  name: "gemma2:2b",
  readableName: "Gemma2 2B",
  description: `Gemma2 2B is a small, affordable, and intelligent model for fast, lightweight tasks.`,
  contextWindow: 8192,
  inputTokenCost: 0,
  outputTokenCost: 0,
  providerId: OllamaProvider.id,
};

export const Llmma3p1_8b = {
  id: "a14aa3dc-ddc4-441a-a572-llmma3p1_8b",
  name: "llama3.1:8b",
  readableName: "Meta Llama 3.1",
  description: `Meta Llama 3.1: The most capable openly available LLM to date`,
  contextWindow: 8192,
  inputTokenCost: 0,
  outputTokenCost: 0,
  providerId: OllamaProvider.id,
};

export const OllamaModels = [
  Gemma2_2b,
  Llmma3p1_8b,
];

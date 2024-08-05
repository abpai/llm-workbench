import { OpenAIProvider } from "../providers";

export const OpenAIGpt4oMini = {
  id: "a14aa3dc-ddc4-441a-a572-536c960omini",
  name: "gpt-4o-mini",
  readableName: "GPT-4o Mini",
  description: `GPT-4o Mini is an affordable and intelligent small model for fast, lightweight tasks. GPT-4o mini is cheaper and more capable than GPT-3.5 Turbo. Currently points to gpt-4o-mini-2024-07-18.`,
  contextWindow: 128000,
  inputTokenCost: 0.15,
  outputTokenCost: 0.60,
  providerId: OpenAIProvider.id,
};

export const OpenAIGpt4o = {
  id: "61ea563d-83ee-45e9-8ee5-25db449fd0co",
  name: "gpt-4o",
  readableName: "GPT-4o",
  description: `New GPT-4o
    The latest GPT-4o high-intelligence flagship model for complex, multi-step tasks. GPT-4o is cheaper and faster than GPT-4 Turbo. Currently points to gpt-4o-2024-05-13.`,
  contextWindow: 128000,
  inputTokenCost: 10,
  outputTokenCost: 30,
  providerId: OpenAIProvider.id,
};

export const OpenAIGpt4Turbo = {
  id: "61ea563d-83ee-45e9-8ee5-25db449fd0ca",
  name: "gpt-4-turbo",
  readableName: "GPT-4 Turbo",
  description: `GPT-4 Turbo with Vision
    The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling. Currently points to gpt-4-turbo-2024-04-09.`,
  contextWindow: 128000,
  inputTokenCost: 10,
  outputTokenCost: 30,
  providerId: OpenAIProvider.id,
};

export const OpenAIGpt4Turbo20240409 = {
  id: "a14aa3dc-ddc4-441a-a572-536c9609ecfd",
  name: "gpt-4-turbo-2024-04-09",
  readableName: "GPT-4 Turbo 2024-04-09",
  description: `GPT-4 Turbo with Vision model. Vision requests can now use JSON mode and function calling. gpt-4-turbo currently points to this version.`,
  contextWindow: 128000,
  inputTokenCost: 10,
  outputTokenCost: 30,
  providerId: OpenAIProvider.id,
};

export const OpenAIGpt4 = {
  id: "3d531dbf-a21a-40c7-9200-e040f1673761",
  name: "gpt-4",
  readableName: "GPT-4",
  description: `Currently points to gpt-4-0613.`,
  contextWindow: 8192,
  inputTokenCost: 30,
  outputTokenCost: 60,
  providerId: OpenAIProvider.id,
};

export const OpenAIGpt40613 = {
  id: "3d531dbf-f21a-40c7-9200-e040f1673761",
  name: "gpt-4-0613",
  readableName: "GPT-4 0613",
  description: `Snapshot of gpt-4 from June 13th 2023 with improved function calling support.`,
  contextWindow: 8192,
  inputTokenCost: 30,
  outputTokenCost: 60,
  providerId: OpenAIProvider.id,
};

export const OpenAIGpt432k = {
  id: "31531dbf-f21a-40c7-9200-e040f1673761",
  name: "gpt-4-32k",
  readableName: "GPT-4 32k",
  description: `Currently points to gpt-4-32k-0613. See continuous model upgrades. This model was never rolled out widely in favor of GPT-4 Turbo.`,
  contextWindow: 32768,
  inputTokenCost: 60,
  outputTokenCost: 120,
  providerId: OpenAIProvider.id,
};

export const OpenAIGpt432k0613 = {
  id: "32531dbf-f21a-40c7-9200-e040f1673761",
  name: "gpt-4-32k-0613",
  readableName: "GPT-4 32k 0613",
  description: `Snapshot of gpt-4-32k from June 13th 2023 with improved function calling support. This model was never rolled out widely in favor of GPT-4 Turbo.`,
  contextWindow: 32768,
  inputTokenCost: 60,
  outputTokenCost: 120,
  providerId: OpenAIProvider.id,
};

export const OpenAIModels = [
  OpenAIGpt4o,
  OpenAIGpt4oMini,
  OpenAIGpt4Turbo,
  OpenAIGpt4Turbo20240409,
  OpenAIGpt4,
  OpenAIGpt40613,
  OpenAIGpt432k,
  OpenAIGpt432k0613,
];

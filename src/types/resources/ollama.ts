import { OllamaModels } from "@/fixtures/models/ollama";
import { z } from "zod";
import {
  ParameterInputType,
} from "./common";

export type OllamaChatCompletionRequestKeyType =
  | "model"
  | "stream"

export const OllamaChatCompletionRequestSchema: Record<
  OllamaChatCompletionRequestKeyType,
  ParameterInputType
> = {
  model: {
    type: "select",
    default: "",
    choices: OllamaModels,
    parse: z.string().nullish().parse,
  },
  stream: {
    type: "select",
    default: "",
    choices: [{ id: "true", name: "True" }, { id: "false", name: "False" }],
    parse: z.string().nullish().parse,
  },
};

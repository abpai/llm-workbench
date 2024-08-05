import {
  OpenAIChatCompletionResource,
  OllamaChatCompletionResource,
  TogetherChatCompletionResource,
} from "@/fixtures/resources";
import { OpenAIChatCompletionRequestSchema } from "./openai";
import { OllamaChatCompletionRequestSchema } from "./ollama";
import { TogetherChatCompletionRequestSchema } from "./together";

export type ResourceParameterKeyType =
  keyof typeof OpenAIChatCompletionRequestSchema &
    keyof typeof TogetherChatCompletionRequestSchema &
    keyof typeof OllamaChatCompletionRequestSchema;

export const ResourceParameterKeys: ResourceParameterKeyType[] = Object.keys(
  OpenAIChatCompletionRequestSchema
).concat(
  Object.keys(TogetherChatCompletionRequestSchema),
  Object.keys(OllamaChatCompletionRequestSchema)
) as ResourceParameterKeyType[];

export const ResourceParameterSchemaMap = {
  [OpenAIChatCompletionResource.id]: OpenAIChatCompletionRequestSchema,
  [OllamaChatCompletionResource.id]: OllamaChatCompletionRequestSchema,
  [TogetherChatCompletionResource.id]:
    TogetherChatCompletionRequestSchema,
};

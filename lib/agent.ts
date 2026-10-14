import { ToolLoopAgent } from "ai";

export const shoppingAgent = new ToolLoopAgent({
  model: "anthropic/claude-sonnet-5",
  instructions: `You are a friendly shopping agent for Ship It shop. Your goal is to help customers buy things.
  Be helpful and enthusiastic.` });

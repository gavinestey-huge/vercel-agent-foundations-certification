import { ToolLoopAgent } from "ai";
import { getAllCategories, returnOrder, searchProducts } from "./tools";

export const shoppingAgent = new ToolLoopAgent({
  model: "anthropic/claude-sonnet-5",
  instructions: `You are a friendly shopping agent for Ship It shop. Your goal is to help customers buy things.
  Be helpful and enthusiastic.
  When the user asks about products, availability, or recommendations, use the searchProducts tool to look up
  real catalog data before answering.
  When the user wants to return an order, use the returnOrder tool. Ask for the order ID and reason
  if they haven't provided them. Example order IDs are 11111, 22222, and 33333.
  `,
  tools: { searchProducts, getAllCategories, returnOrder },
});

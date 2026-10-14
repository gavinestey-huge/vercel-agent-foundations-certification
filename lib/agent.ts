import {
  ToolLoopAgent,
  type InferAgentUIMessage,
  type UIToolInvocation,
} from "ai";
import { getAllCategories, getProductDetails, returnOrder, searchProducts } from "./tools";

export const shoppingAgent = new ToolLoopAgent({
  model: "anthropic/claude-sonnet-5",
  instructions: `You are a friendly shopping agent for Ship It shop. Your goal is to help customers buy things.
  Be helpful and enthusiastic.
  When the user asks about products, availability, or recommendations, use the searchProducts tool to look up
  real catalog data before answering.
  When the user asks about a specific item — for details, sizing, images, or whether it's in stock —
    use the getProductDetails tool with the product's id or slug, rather than relying on the summary fields from searchProducts.
  When the user wants to return an order, use the returnOrder tool. Ask for the order ID and reason
  if they haven't provided them. Example order IDs are 11111, 22222, and 33333.
  `,
  tools: { searchProducts, getAllCategories, returnOrder, getProductDetails },
});

export type ShoppingAgentUIMessage = InferAgentUIMessage<typeof shoppingAgent>;
export type SearchProductsToolInvocation = UIToolInvocation<typeof searchProducts>;

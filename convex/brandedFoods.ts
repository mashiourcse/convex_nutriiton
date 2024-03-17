import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {
    inputData: v.object({
      calories: v.string(),
      protein: v.string(),
      carbohydrates: v.string(),
      cholesterol: v.string(),
      fat: v.string(),
      fiber: v.string(),
      iron: v.string(),
      calcium: v.string(),
      sodium: v.string(),
      sugars: v.string()
    }),
  },
  handler: async (ctx, args) => {
    // console.log("here!!!!!!");
    let p = Number(args.inputData.protein);
    return await ctx.db
      .query("brandedFoods")
      .filter((q) => q.gte(q.field("protein"), p))
      .take(25);
  },
});

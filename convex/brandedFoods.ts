import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {
    inputData: v.object({
      proteins: v.string(),
      carbs: v.string(),
      fats: v.string(),
      vitamins: v.string(),
      minerals: v.string(),
      water: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    // console.log("here!!!!!!");
    let p = Number(args.inputData.proteins);
    return await ctx.db
      .query("brandedFoods")
      .filter((q) => q.gte(q.field("protein"), p))
      .take(7);
  },
});

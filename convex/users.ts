import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * Create a new user if they don't already exist.
 */
export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    username: v.string(),
    image: v.optional(v.string()),
    bio: v.optional(v.string()),
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();
       await ctx.auth.getUserIdentity();
    if (existingUser) return existingUser;

    const now = Date.now();

    const userId = await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      username: args.username,
      image: args.image,
      bio: args.bio,
      clerkId: args.clerkId,
      createdAt: now,
      updatedAt: now,
      deleted: false,
    });

    return { userId };
  },
});

/**
 * Get a user by Clerk ID.
 */
export const getUserByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    return user;
  },
});

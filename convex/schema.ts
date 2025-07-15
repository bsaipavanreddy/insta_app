import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    username: v.string(),
    image: v.optional(v.string()),
    bio: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
    deleted: v.optional(v.boolean()),
    clerkId: v.string(),
    clerkRoles: v.optional(v.array(v.string())),
    clerkMetadata: v.optional(v.object({})),
    clerkPrivateMetadata: v.optional(v.object({})),
  }).index("by_clerk_id", ["clerkId"]),

  posts: defineTable({
    userId: v.string(),
    imageUrl: v.optional(v.string()),
    storageId: v.id("_storage"),
    caption: v.optional(v.string()),
    likes: v.optional(v.array(v.string())),
    comments: v.optional(v.array(v.string())),
    title: v.string(),
    body: v.string(),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
    deleted: v.optional(v.boolean()),
  }).index("by_user_id", ["userId"]),

  likes: defineTable({
    userId: v.string(),
    postId: v.id("posts"),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
    deleted: v.optional(v.boolean()),
  })
    .index("by_user_id_and_post_id", ["postId", "userId"])
    .index("by_post_id", ["postId"]),

  comments: defineTable({
    userId: v.string(),
    postId: v.id("posts"),
    comment: v.string(),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
    deleted: v.optional(v.boolean()),
  }).index("by_post_id", ["postId"]),

  followers: defineTable({
    followerId: v.string(),
    followingId: v.string(),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
    deleted: v.optional(v.boolean()),
  })
    .index("by_follower_id", ["followerId"])
    .index("by_following_id", ["followingId"])
    .index("by_both", ["followerId", "followingId"]),

  notifications: defineTable({
    receiverId: v.string(),
    senderId: v.string(),
    type: v.union(v.literal("like"), v.literal("comment"), v.literal("follow")),
    postId: v.optional(v.id("posts")),
    message: v.string(),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
    deleted: v.optional(v.boolean()),
  })
    .index("by_receiver_id", ["receiverId"])
    .index("by_sender_id", ["senderId"])
    .index("by_both", ["receiverId", "senderId"]),

  bookmarks: defineTable({
    userId: v.string(),
    postId: v.id("posts"),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
    deleted: v.optional(v.boolean()),
  })
    .index("by_user_id_and_post_id", ["postId", "userId"])
    .index("by_post_id", ["postId"]),
});

// npx convex dev
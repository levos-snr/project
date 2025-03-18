import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { user } from "~/server/db/schema";

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().min(1),
        password: z.string().min(6),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(user).values({
        name: input.name,
        email: input.email,
        password: input.password,
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.query.user.findFirst({
      orderBy: (user, { desc }) => [desc(user.createdAt)],
    });

    return user ?? null;
  }),
});

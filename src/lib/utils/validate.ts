import { z } from "zod";
import type { Workspace } from "../types/types";

export const noteSchema = z.object({
  id: z.string(),
  isMarkdown: z.boolean(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const todoSchema = z.object({
  id: z.string(),
  text: z.string(),
  completed: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const workspaceSchema = z.object({
  id: z.string(),
  authorId: z.string(),
  memberIds: z.array(z.string()).optional(),
  isPublic: z.boolean(),
  url: z.string().optional(),
  notes: z.array(noteSchema).optional(),
  todos: z.array(todoSchema).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export function validateAndFilterWorkspaces(
  workspaces: Workspace[],
): Workspace[] {
  return workspaces.filter((workspace) => {
    const result = workspaceSchema.safeParse(workspace);
    return result.success; // Hanya simpan workspace yang valid
  });
}

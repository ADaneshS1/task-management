import * as z from "zod";

export const TaskSchema = z.object({
  id: z.number("ID has to be number").positive(),
  title: z
    .string("Title is required")
    .min(3, "Title minimum 3 characters")
    .max(100, "Title maximal 3 characters"),
  description: z
    .string("Description is required")
    .min(10, "Description minimum 3 characters")
    .max(100, "Description minimum 3 characters"),
  isDone: z.boolean("isDone is required"),
});

export const TasksSchema = TaskSchema.array();

export type Task = z.infer<typeof TaskSchema>;
export type Tasks = z.infer<typeof TasksSchema>;

import type { Tasks } from "@/components/modules/task/schema";

export const initialDataTasks: Tasks = [
  {
    id: 1,
    title: "Pray",
    description: "Morning prayer routine",
    isDone: true,
  },
  {
    id: 2,
    title: "Eat",
    description: "Breakfast at 8 AM",
    isDone: false,
  },
  {
    id: 3,
    title: "Exercise",
    description: "Quick workout for 20 minutes",
    isDone: true,
  },
  {
    id: 4,
    title: "Rest",
    description: "Take a break and relax",
    isDone: false,
  },
  {
    id: 5,
    title: "Study",
    description: "Learn React for 1 hour",
    isDone: false,
  },
];

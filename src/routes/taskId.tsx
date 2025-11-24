import type { Tasks } from "@/components/modules/task/schema";
import { useParams } from "react-router";

const initialDataTasks: Tasks = [
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

export function TaskId() {
  const params = useParams();
  const { taskId } = params;

  const task = initialDataTasks.find((task) => task.id === Number(taskId));

  if (!task) {
    return (
      <div>
        <h1>Task not found</h1>
      </div>
    );
  }

  return (
    <section className="flex justify-between gap-4 rounded-lg bg-sky-100 p-4">
      <div>
        <h2 className="text-lg font-bold">{task.title}</h2>
        <p>{task.isDone ? "✅ Done" : "📝 Todo"}</p>
      </div>
    </section>
  );
}

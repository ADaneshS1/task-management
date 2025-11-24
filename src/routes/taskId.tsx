import type { Tasks } from "@/components/modules/task/schema";
import { useParams, Link } from "react-router";

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
  const { taskId } = useParams();

  const task = initialDataTasks.find((t) => t.id === Number(taskId));

  if (!task) {
    return (
      <section className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-red-600 mb-2">Task not found</h1>
        <Link to="/" className="text-sky-600 underline">
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-sky-700 mb-4">Task Detail</h1>

      <div className="space-y-3">
        <p className="text-gray-600 text-sm">
          Status:
          <span className="ml-1 font-semibold">
            {task.isDone ? "✅ Done" : "📝 Todo"}
          </span>
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">{task.title}</h2>

        <p className="text-gray-700">{task.description}</p>
      </div>
    </section>
  );
}

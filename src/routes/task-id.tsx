import { useParams, Link } from "react-router";
import { initialDataTasks } from "@/components/modules/task/data";

export function TaskId() {
  const { taskId } = useParams();

  const task = initialDataTasks.find((task) => task.id === Number(taskId));

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
      <h1 className="text-3xl font-bold text-sky-700 mb-4">{task.title}</h1>

      <div className="space-y-3">
        <p className="text-gray-600 text-sm">
          Status:
          <span className="ml-1 font-semibold">
            {task.isDone ? "✅ Done" : "📝 Todo"}
          </span>
        </p>

        <p className="text-gray-700">{task.description}</p>
      </div>
    </section>
  );
}

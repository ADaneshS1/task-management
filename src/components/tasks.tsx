import { Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const dataTasks = [
  { id: 1, title: "Pray", description: "Morning prayer routine", isDone: true },
  { id: 2, title: "Eat", description: "Breakfast at 8 AM", isDone: false },
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

export function Tasks() {
  return (
    <section className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Task Management</h2>

      <ul className="space-y-3">
        {dataTasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            isDone={task.isDone}
          />
        ))}
      </ul>
    </section>
  );
}

export function TaskItem({
  title,
  description,
  isDone,
}: {
  title: string;
  description: string;
  isDone?: boolean;
}) {
  return (
    <li
      className="
        flex items-center justify-between p-4
        bg-blue-50 border border-blue-100 rounded-xl
      "
    >
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="font-semibold text-gray-800">{description}</p>
        <p className="text-sm text-gray-600">
          {isDone ? "✔️ Done" : "📝 Todo"}
        </p>
      </div>

      <div className="flex gap-2">
        {/* VIEW */}
        <Button
          className="
            flex items-center gap-1 
            bg-blue-600 text-white 
            hover:bg-blue-700 
            rounded-full px-3 h-8
          "
        >
          <Eye className="w-4 h-4" />
          View
        </Button>

        {/* DELETE */}
        <Button
          className="
            flex items-center gap-1
            bg-red-600 text-white 
            hover:bg-red-700 
            rounded-full px-3 h-8
          "
        >
          <Trash2 className="w-4 h-4" />
          Delete
        </Button>
      </div>
    </li>
  );
}

import { Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

type Tasks = Task[];

const initialDataTasks: Tasks = [
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
  const [tasks, setTasks] = useState(initialDataTasks);
  function handleDelete() {
    console.log("Delete");
  }

  return (
    <section className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl">
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TaskItem({
  task,
  handleDelete,
}: {
  task: Task;
  handleDelete: () => void;
}) {
  return (
    <section
      className="
        flex items-center justify-between p-4
        bg-blue-50 border border-blue-100 rounded-xl
      "
    >
      <div>
        <p className="text-sm text-gray-600">
          {task.isDone ? "✔️ Done" : "📝 Todo"}
        </p>
        <p className="font-semibold text-gray-800">{task.title}</p>
        <p className="font-semibold text-gray-800">{task.description}</p>
      </div>

      <div className="flex gap-2">
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

        <Button
          onClick={handleDelete}
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
    </section>
  );
}

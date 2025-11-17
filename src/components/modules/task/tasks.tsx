import { EyeIcon, Trash2Icon } from "lucide-react";
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

  function handleDelete(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <section className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Task Management</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} handleDelete={() => handleDelete(task.id)} />
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
        <Button>
          <EyeIcon />
          <span>View</span>
        </Button>

        <Button onClick={handleDelete} variant="destructive">
          <Trash2Icon />
          <span>Delete</span>
        </Button>
      </div>
    </section>
  );
}

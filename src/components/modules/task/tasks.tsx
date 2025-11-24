import { Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  TaskSchema,
  type Task,
  type Tasks,
} from "@/components/modules/task/schema";
import { Link } from "react-router";

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

export function Tasks() {
  const [tasks, setTasks] = useState(initialDataTasks);
  function handleDelete(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function handleCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    const newTask = {
      id: newId,
      title: formData.get("title")?.toString().trim() || "",
      description: formData.get("description")?.toString().trim() || "",
      isDone: false,
    };

    const result = TaskSchema.safeParse(newTask);
    if (!result.success) {
      alert("New title or description invalid");
      return null;
    }

    const updatedTasks: Tasks = [...tasks, newTask];
    setTasks(updatedTasks);

    event.currentTarget.reset();
  }

  return (
    <section className="space-y-8 max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800">Task Management</h2>

      <form method="post" onSubmit={handleCreate} className="space-y-2">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" type="text" name="title" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input id="description" type="text" name="description" required />
        </div>
        <Button type="submit">Add Task</Button>
      </form>

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
  handleDelete?: () => void;
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
        <Button asChild>
          <Link to={`/tasks/${task.id}`}>
            <Eye className="w-4 h-4" />
            <span>View</span>
          </Link>
        </Button>

        {handleDelete && (
          <Button onClick={handleDelete} variant={"destructive"}>
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
        )}
      </div>
    </section>
  );
}

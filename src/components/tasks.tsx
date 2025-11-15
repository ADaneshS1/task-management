import { CheckCircle, Circle } from "lucide-react";

type Task = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

type Tasks = Task[];

const dataTasks: Tasks = [
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
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Tasks</h2>

      <ul className="space-y-3">
        {dataTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
}

export function TaskItem({ task }: { task: Task }) {
  return (
    <li
      className="
        flex items-center gap-3 p-3 rounded-lg bg-gray-100 border border-gray-200
        hover:bg-gray-200 hover:border-gray-300 cursor-pointer
        transition-all duration-200
      "
    >
      <div>
        {task.isDone && <CheckCircle className="text-green-500" />}
        {!task.isDone && <Circle className="text-gray-400" />}
      </div>

      <div>
        <p className="font-medium">{task.title}</p>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>
    </li>
  );
}

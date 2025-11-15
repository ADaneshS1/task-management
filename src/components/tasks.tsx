import { CheckCircle, Circle } from "lucide-react";

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
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Tasks</h2>

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
        flex items-center gap-3 p-3 rounded-lg bg-gray-100 border border-gray-200
        hover:bg-gray-200 hover:border-gray-300 cursor-pointer
        transition-all duration-200
      "
    >
      {isDone ? (
        <CheckCircle className="text-green-500" />
      ) : (
        <Circle className="text-gray-400" />
      )}
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </li>
  );
}

import { CheckCircle, Circle } from "lucide-react";

const dataTasks = [
  { id: 1, title: "Pray", isDone: true },
  { id: 2, title: "Eat", isDone: false },
  { id: 3, title: "Exerceise", isDone: true },
  { id: 4, title: "Rest", isDone: false },
  { id: 5, title: "Study", isDone: false },
];

export function Tasks() {
  return (
    <section className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Tasks</h2>

      <ul className="space-y-3">
        {dataTasks.map((task) => (
          <TaskItem key={task.id} title={task.title} isDone={task.isDone} />
        ))}
      </ul>
    </section>
  );
}

export function TaskItem({
  title,
  isDone,
}: {
  title: string;
  isDone?: boolean;
}) {
  if (isDone) return null;

  return (
    <li className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 border border-gray-200">
      {isDone ? (
        <CheckCircle className="text-green-500" />
      ) : (
        <Circle className="text-gray-400" />
      )}
      {title}
    </li>
  );
}

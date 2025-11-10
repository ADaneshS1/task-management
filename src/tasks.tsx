const dataTasks = [
  { id: 1, title: "Pray", isDone: true },
  { id: 2, title: "Eat", isDone: false },
  { id: 3, title: "Exerceise", isDone: true },
  { id: 4, title: "Rest", isDone: false },
  { id: 5, title: "Study", isDone: false },
];

export function Tasks() {
  return (
    <>
      <h2>Tasks</h2>
      <ul>
        {dataTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
}

// export function TaskItem({
//   title,
//   isDone,
// }: {
//   title: string;
//   isDone?: boolean;
// }) {
//   if (isDone) {
//     return null;
//   }
//   return <li>{title}</li>;
// }

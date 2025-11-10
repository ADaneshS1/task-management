export function Tasks() {
  return <h2>Tasks</h2>;
}

export function TaskItem({
  title,
  isDone,
}: {
  title: string;
  isDone?: boolean;
}) {
  if (isDone) {
    return null;
  }
  return <li>{title}</li>;
}

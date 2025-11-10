import Profile from "./profile";
import { TaskItem, Tasks } from "./tasks";

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Profile />
      <Tasks />
      <ul>
        <TaskItem title="Pray" isDone={true} />
        <TaskItem title="Study" isDone={false} />
        <TaskItem title="exercise" isDone={false} />
      </ul>
    </>
  );
}

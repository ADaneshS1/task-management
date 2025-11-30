import { Tasks } from "@/components/modules/task/tasks";
import { TimeInterval } from "./components/modules/timer/timer-interval";

export function App() {
  return (
    <section>
      <Tasks />
      <TimeInterval/>
    </section>
  );
}

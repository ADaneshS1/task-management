import { ButtonIncrement } from "./components/modules/counter/counter-increment";
import { Tasks } from "./components/tasks";

export default function App() {
  return (
    <section>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Task Management
        </h2>
      </div>
      <ButtonIncrement />
      <Tasks />
    </section>
  );
}

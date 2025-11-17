import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ButtonIncrement() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>Total Count: {count}</p>
      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
}

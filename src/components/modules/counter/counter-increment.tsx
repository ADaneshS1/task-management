import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function CounterIncrement() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? Number(storedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count]);

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

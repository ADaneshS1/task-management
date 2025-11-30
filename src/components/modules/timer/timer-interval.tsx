import { useEffect } from "react";

export function TimeInterval() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer ticked");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>Timer</div>;
}

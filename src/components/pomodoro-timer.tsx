import { useState } from "react";
import { useInterval } from "../hooks/use-interval";

interface PomodoroTimerProps {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: PomodoroTimerProps) {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>
    Olá Mundo {mainTime}!
  </div>;
}

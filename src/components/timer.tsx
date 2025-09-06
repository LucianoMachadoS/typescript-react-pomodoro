import { secondsToMinutes } from "../utils/seconds-to-minutes";

interface ButtonProps {
  mainTime: number
}

export function Timer (props: ButtonProps) {
  return (
    <div className="timer">{secondsToMinutes(props.mainTime)}</div>
  );
}

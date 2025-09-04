import { secondsToTime } from "../utils/seconds-to-time";

interface ButtonProps {
  mainTime: number
}

export function Timer (props: ButtonProps) {
  return (
    <div className="timer">{secondsToTime(props.mainTime)}</div>
  );
}

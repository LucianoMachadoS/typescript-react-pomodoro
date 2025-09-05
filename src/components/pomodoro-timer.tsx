import { useEffect, useState } from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";

// eslint-disable-next-line no-undef
const bellStart = require('../sounds/bell-start.mp3');
// eslint-disable-next-line no-undef
const bellFinish = require('../sounds/bell-finish.mp3');

// eslint-disable-next-line no-undef
const audioStartWorking = new Audio(bellStart);
// eslint-disable-next-line no-undef
const audioFinishWorking = new Audio(bellFinish);


interface PomodoroTimerProps {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: PomodoroTimerProps) {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

  useEffect(() => {
    if(working) document.body.classList.add('working');
    if(resting) document.body.classList.remove('working');
  }, [working]);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, timeCounting ? 1000 : null);

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play();
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);

    if(long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }

    audioFinishWorking.play();
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()}/>
        <Button text="teste" onClick={() => configureRest(false)}/>
        <Button
        className={!working && !resting ? 'hidden' : ''}
        text={timeCounting ? 'Pause' : 'Play'} onClick={() => setTimeCounting(false)}/>
      </div>

      <div className="details">
        <p>Testando</p>
      </div>
    </div>
  );
}

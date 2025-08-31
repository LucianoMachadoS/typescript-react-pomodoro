import { useEffect, useRef } from "react";

export function useInterval <C extends CallableFunction> (callback: C, delay: number | null): void {
  const savedCallback = useRef<C>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick () {
      if(savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = window.setInterval(tick, delay);
      return () => window.clearInterval(id);
    }
  }, [delay]);
}

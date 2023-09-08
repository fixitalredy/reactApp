/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react';

import FilterContext from './FilterContext';

export default function Timer(props) {
  const { time, id, paused } = props;

  const minutes = time.split(':')[0];
  const seconds = time.split(':')[1];
  const [[min, sec], setTimer] = useState([Number(minutes), Number(seconds)]);
  const context = useContext(FilterContext);

  const startHandler = () => {
    context.updateStop(false, id);
  };

  const stopHandler = () => {
    context.updateStop(true, id);
  };
  const countTime = useCallback(() => {
    if (paused) return;
    if (min === 0 && sec === 0) {
      context.updateStop(true, id);
    } else if (sec !== 0) {
      setTimer([min, sec - 1]);
    } else if (min !== 0 && sec === 0) {
      setTimer([min - 1, 59]);
    }
  }, [id, min, paused, sec]);
  const timerIDRef = useRef(null);

  useEffect(() => {
    if (!paused) {
      timerIDRef.current = setInterval(() => countTime(), 1000);
      context.updateTimer(min, sec, id);
    }
    return () => {
      clearInterval(timerIDRef.current);
    };
  }, [countTime, paused]);

  return (
    <>
      <button
        className="icon icon-play"
        type="button"
        aria-label="play"
        onClick={startHandler}
      />
      <button
        className="icon icon-pause"
        type="button"
        aria-label="pause"
        onClick={stopHandler}
      />
      {`${min.toString().padStart(2, '00')}:${sec
        .toString()
        .padStart(2, '00')}`}
    </>
  );
}

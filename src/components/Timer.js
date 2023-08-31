import React, { useState, useEffect } from 'react';

export default function Timer(props) {
  const { time } = props;

  const minutes = time.split(':')[0];
  const seconds = time.split(':')[1];
  const [pause, setPause] = useState(true);
  const [[min, sec], setTimer] = useState([Number(minutes), Number(seconds)]);

  const startHandler = () => {
    setPause(false);
  };
  const stopHandler = () => {
    setPause(true);
  };
  const countTime = () => {
    if (pause) return;
    if (min === 0 && sec === 0) {
      setPause(true);
    } else if (sec !== 0) {
      setTimer([min, sec - 1]);
    } else if (min !== 0 && sec === 0) {
      setTimer([min - 1, 59]);
    }
  };
  useEffect(() => {
    let int;
    if (!pause) {
      int = setInterval(() => countTime(), 1000);
    }

    return () => {
      clearInterval(int);
    };
  });

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

import React, { useState, useEffect } from "react";

const QuestionTimer = ({ timeOut, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeOut);

    return () => {
      clearInterval(timer);
    };
  }, [timeOut, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress
      id="question-time"
      max={timeOut}
      value={remainingTime}
      className={mode}
    ></progress>
  );
};

export default QuestionTimer;

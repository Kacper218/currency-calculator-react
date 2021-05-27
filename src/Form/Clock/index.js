import React, { useState, useEffect } from 'react';
import "./style.css"

const formatDate = (myDate) => myDate.toLocaleDateString("pl-PL", {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const Clock = () => {

  const [myDate, setMyDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMyDate(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="Clock">
      Dzisiaj jest
      {" "}
      {formatDate(myDate)}
    </div>
  );
};


export default Clock;
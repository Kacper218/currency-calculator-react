import React from 'react';
import {useCurrentDate} from "./useCurrentDate";
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
  const myDate = useCurrentDate();

  return (
    <div className="Clock">
      Dzisiaj jest
      {" "}
      {formatDate(myDate)}
    </div>
  );
};

export default Clock;
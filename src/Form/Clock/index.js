import React from 'react';
import { TimeAndDate } from './styled';
import {useCurrentDate} from "./useCurrentDate";

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
    <TimeAndDate>
      Dzisiaj jest
      {" "}
      {formatDate(myDate)}
    </TimeAndDate>
  );
};

export default Clock;
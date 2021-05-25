import React, { useState, useEffect} from 'react';
import "./style.css"


const Clock = () => {

  const [myDate, setMyDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMyDate(myDate => myDate = new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="Clock">
      Dzisiaj jest {myDate.toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long", })} { myDate.toLocaleTimeString()}
    </div>
  );
};


export default Clock;
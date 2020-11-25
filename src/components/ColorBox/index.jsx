import React, { useEffect, useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {};
const COLOR_LIST = ['deeppink', 'goldenrod', 'maroon', 'lightgreen'];
const clock = (date) => {
  const hour = `0${date.getHours()}`.slice(-2);
  const minute = `0${date.getMinutes()}`.slice(-2);
  const second = `0${date.getSeconds()}`.slice(-2);

  return `${hour}:${minute}:${second}`;
};

function ColorBox(props) {
  const [index, setIndex] = useState(0);
  const [timeString, setTimeString] = useState('');
  // useEffect(() => {
  //   // run code side effects
  //   const clockInterval = setInterval(() => {
  //     console.log(clock(date));
  //     setTimeString(clock(date));
  //   }, 1000);
  // }, []);
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const date = new Date();
      const newTimeString = clock(date);
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  const handleClick = () => {
    setIndex((x) => (x + 1) % COLOR_LIST.length);
  };
  return (
    <div className="color-box" onClick={handleClick} style={{ backgroundColor: COLOR_LIST[index] }}>
      <p>Click me!!!</p>
      <span>{timeString}</span>
    </div>
  );
}

export default ColorBox;

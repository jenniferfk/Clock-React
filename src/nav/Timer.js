import React from 'react';
import {useEffect,useState} from "react";
import './navcss.css';

function loadBootstrap() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
  document.head.appendChild(link);

  const script2 = document.createElement('script');
  script2.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  document.head.appendChild(script2);

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
  document.head.appendChild(script);
}

function Timer() {
    useEffect(() => {
        loadBootstrap();
      }, []);
      const [hours, setHours] = useState(0);
      const [minutes, setMinutes] = useState(0);
      const [seconds, setSeconds] = useState(0);
      const [isRunning, setIsRunning] = useState(false);

      const starttimer=()=>{
        setIsRunning(true);
      }
      useEffect(() => {
        let timer;
        if(isRunning){
          timer = setInterval(() => {
            if (hours === 0 && minutes === 0 && seconds === 0) {
              alert('Timer is done!');
              setIsRunning(false);}
              else{
                if (seconds === 0) {
                  if (minutes === 0) {
                    setHours((prevHours) => prevHours - 1);
                    setMinutes(59);
                  } else {
                    setMinutes((prevMinutes) => prevMinutes - 1);
                  }
                  setSeconds(59);
                } else {
                  setSeconds((prevSeconds) => prevSeconds - 1);
                }
              }
            }, 1000);
          } else {
            clearInterval(timer);
          }
          
          return () => clearInterval(timer);
        }, [isRunning, hours, minutes, seconds]);
  return (
    <div className="container-fluid">
      <div className='timerdiv'>
      <table style={{border:0}}className="centered-table">
      <tr>
        <td>Hours:</td>
        <td>Minutes:</td>
        <td>Seconds:</td>
      </tr>
      <tr>
        <td>
        <select id="hours-select"className="selecttimer" name="hours" onChange={(e) => setHours(parseInt(e.target.value, 10))}>
            {Array.from({ length: 24 }, (_, index) => (
            <option className="optionstimer" key={index} value={index}>
              {index}
            </option>
            ))}
            </select>
        </td>
        <td>
        <select id="minutes-select" className="selecttimer"name="minutes" onChange={(e) => setMinutes(parseInt(e.target.value, 10))}>
            {Array.from({ length: 59 }, (_, index) => (
            <option className="optionstimer" key={index} value={index}>
              {index}
            </option>
            ))}
            </select>
        </td>
        <td>
        <select id="seconds-select" className="selecttimer"name="seconds" onChange={(e) => setSeconds(parseInt(e.target.value, 10))}>
            {Array.from({ length: 59 }, (_, index) => (
            <option className="optionstimer" key={index} value={index}>
              {index}
            </option>
            ))}
            </select>
        </td>
      </tr>
      </table>
    </div>
    <div className="timerbttndiv">
      <button className="css-button-shadow--sand"onClick={starttimer}>Start Timer</button>
    </div>
    <div className="timerstartdiv">
    <p>
      <span id="hours">  {String(hours).padStart(2, '0')}</span>:
      <span id="minutes">{String(minutes).padStart(2, '0')}</span>:
      <span id="seconds">{String(seconds).padStart(2, '0')}</span>
    </p>
    </div>
    </div>

  );
}

export default Timer;
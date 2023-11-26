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

function StopWatch() {
    useEffect(() => {
        loadBootstrap();
      }, []);

      const [minutes, setMinutes] = useState(0);
      const [seconds, setSeconds] = useState(0);
      const [isRunning, setIsRunning] = useState(false);
      const startsw = () => {
        setIsRunning(true);
      };
      const stopsw=()=>{
        setIsRunning(false);
      }
      const resetsw=()=>{
        setIsRunning(false);
        setMinutes(0);
        setSeconds(0);
      }
      useEffect(()=>{
        let timer;
      if(isRunning){
        timer=setInterval(()=>{
        if(seconds===59){

          setMinutes((prevMinutes)=>prevMinutes+1);
          setSeconds(0);
        }else{
          setSeconds((prevSeconds)=>prevSeconds+1);
        }},1000);
        
      }else{
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }, [isRunning, seconds]);
      
  return (
    <div className="container-fluid">
    <div className="swdiv">
      <h2 className="swh2">Stopwatch</h2>
      <p><span id="minutes">{String(minutes).padStart(2, '0')}</span>:<span id="seconds">{String(seconds).padStart(2, '0')}</span></p>

      <button  id="button-start" className="css-button-shadow-border-sliding--sand" onClick={startsw}>Start</button>
      <button  id="button-stop"  className="css-button-shadow-border-sliding--sand"onClick={stopsw}>Stop </button>
      <button  id="button-reset" className="css-button-shadow-border-sliding--sand"onClick={resetsw}>Reset</button>

    </div>
    </div>

  );
}

export default StopWatch;
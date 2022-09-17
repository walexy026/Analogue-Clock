import React from "react";
import "./Clock.css";

const Clock = () => {
  return (
    <div className="main">
      <div className="clock">
        <span className="secs-hand"></span>
        <span className="min-hand"></span>
        <span className="hour-hand"></span>
        <span className="middle-dot"></span>
        
        <span className="number one">1</span>
        <span className=" number two">2</span>
        <span className=" number three">3</span>
        <span className="number four">4</span>
        <span className="number five">5</span>
        <span className="number six">6</span>
        <span className="number seven">7</span>
        <span className="number eight">8</span>
        <span className="number nine">9</span>
        <span className="number ten">10</span>
        <span className="number eleven">11</span>
        <span className="number twelve">12</span>
        </div>
      </div>

  );
};

export default Clock;

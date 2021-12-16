import React from "react";
import "./MemoryCard.css";

const MemoryCard = (props) => {
  const innerClass = "MemoryCard__inner";

  return (
    <div className="MemoryCard" onClick={props.clickHandler}>
      <div className={props.isFlipped ? innerClass + " flipped" : innerClass}>
        <div className="MemoryCard__back">
          <img
            src="https://www.digitalcrafts.com/img/logo-wrench-white.png"
            alt="digitalcrafts-logo"
          ></img>
        </div>
        <div className="MemoryCard__front"> {props.symbol} </div>
      </div>
    </div>
  );
};

export default MemoryCard;

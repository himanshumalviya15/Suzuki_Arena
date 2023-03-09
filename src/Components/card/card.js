import { Link } from "react-router-dom";
import Afterflip from "../Afterflip";
import "./card.css";
import "./flip-transition.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import Popupexample from "../flipcard popup/Popup";


function Card({ onClick, title }) {
  const [cardRemain, setCardRemain] = useState(5);
  const flipImg = require("../flipcard-img.jpg");
  const navigate = useNavigate();
  const timeOutFun = (e) => {
    if(title.isCorrect){
      setTimeout(() => window.open(`../afterflip/${title.cardName}`), 400);
    }
    
    // console.log(title);
  };
 
  return (
    <>
     
      <div className="card" onClick={onClick}>
        <div className={`card-back text-on-card-back ${title.classBack}`}>{title.cardName}</div>

        <div className="card-front ">
          <button
            className={`middle card-front ${title.class}`}
            onClick={() => {
              timeOutFun();
            }}
          >
            button
          </button>
          <p
            onClick={() => {
              timeOutFun();
            }}
            className="text-on-card"
          >
            {title.cardName}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;

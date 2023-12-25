import React from "react";
import img from "./img01.png";

const Start = (props) => {
  return (
    <div className="outter">
      <img src={img} />
      <h1>
        나는 <span>{props.name}</span>에 대해 얼마나 알고 있을까?
      </h1>
      <input type="text" placeholder="내 이름" />
      <button>시작하기</button>
    </div>
  );
};

export default Start;

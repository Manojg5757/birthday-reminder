import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="profile">
        <img src={props.img} alt="fgfg" />
      </div>
      <div className="content">
      <h1>{props.name}</h1>
        <p className="bottom">{props.dob}</p>
        </div>
    </div>
  );
};

export default Card;

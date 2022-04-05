import React from "react";
import "./MatrixCard.css";

const MatrixCard = (props) => {
  return (
    <>
      <section className="matrix-box" style={{border: `2px solid ${props.borderColor}`}}>
        <div className="matrix-title">
         {props.title}
          <span className="matrix-title-count">0</span>
        </div>
        <small className="matrix-subtitle">{props.subTitle}</small>
        <div className="matrix-body">
          <form className="matrix-form">
            <input placeholder="Create new task" type="text" />
            <button type="submit">Create task...</button>
          </form>
          <hr />
          <div className="matrix-body-task">Hello</div>
        </div>
      </section>
    </>
  );
};

export default MatrixCard;

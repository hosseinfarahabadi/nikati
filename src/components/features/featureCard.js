import React from "react";

export default function (props) {
  return (
    <div className="feature-box-container ">
      <div className="feature-img-box">
        <img className="feature-box-image" src={props.image} />
      </div>
      <p className="feature-box-title typography-h3">{props.title}</p>
      <p className="feature-box-text typography-body">{props.text}</p>
    </div>
  );
}

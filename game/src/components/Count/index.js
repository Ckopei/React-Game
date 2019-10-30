import React from "react";
import "./style.css";

function Count(props) {
  return <h1 className="count">Correct clicks: {props.count}/9</h1>;
}

export default Count;

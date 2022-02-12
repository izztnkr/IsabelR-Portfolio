import React from "react";
import "./style.css";

function Wrapper(props) {
  return <container className="wrapper">{props.children}</container>;
}

export default Wrapper;

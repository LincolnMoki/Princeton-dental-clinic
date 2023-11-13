import React from "react";
import "./Spinner.css";
function Spinner(props) {
  return (
    <spinner>
      <div id="loading" style={{ display: props.style }}></div>
    </spinner>
  );
}

export default Spinner;

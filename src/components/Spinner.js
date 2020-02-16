import React from "react";
import spinner from "./spinner.gif";

function Spinner() {
  return (
    <>
      <img
        src={spinner}
        alt="Loading..."
        style={{
          width: "200px",
          margin: "auto",
          display: "block",
          gridColumnStart: "2",
          gridColumnEnd: "3"
        }}
      />
    </>
  );
}

export default Spinner;

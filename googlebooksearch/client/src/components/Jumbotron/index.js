import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, textAlign: "center",border:"2px solid black",margin:"30px",padding:"30px" }}
      className="jumbotron"
    >
      <h1>(React) Google Books Search</h1>
      Search for and save book for interest
    </div>
  );
}

export default Jumbotron;

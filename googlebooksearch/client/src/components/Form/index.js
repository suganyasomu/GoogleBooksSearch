import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group" style={{height: 100,border:"2px solid black",margin:"30px",padding:"30px" }}>
      <label>Book Search</label><br></br>
      <label>Book</label><br></br>
      <input className="form-control" {...props} /><br></br>
      <button type="submit" className="btn btn-success" value="Search" style={{padding:"10px",width:"5%" }}>Search</button>
     

    </div>
  );
}

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10,margin:"1px solid red" }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }

export default Input
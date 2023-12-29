import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("enter text here");
  //   text = "new text";//wrong way to change the text
  //   setText ("new text");//correct way
  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    
    console.log("on change");
    setText(event.target.value);
  };
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="container">
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>
          Convert to upper Case
        </button>
      </div>
    </>
  );
}

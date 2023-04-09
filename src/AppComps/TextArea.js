import React, { useState } from "react";
import propTypes from "prop-types";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs; //For accessing PDF fonts from pdfFontrs module in pdfMake library

//Setting inital value in the text area:
function initialValue() {
  return "";
}

//Using the useState hook for text Area:
function TextArea(props) {
  const [text, setText] = useState(() => initialValue());

  const handleChange = (event) => {
    setText(event.target.value);
  };

  //Convert to Uppercase:
  const handleUpperClick = () => {
    setText(text.toUpperCase());
    console.log(text);
    props.showAlert("Text converted to upper case", "Hurray!");
  };

  //Convert to Lowercase:
  const handleLowerClick = () => {
    setText(text.toLowerCase());
    console.log(text);
    props.showAlert("Text converted to lower case", "Awesome!");
  };

  // Extract to PDF:
  const handlePDFExtract = () => {
    const pdfDoc = {
      content: text,
    };
    pdfMake.createPdf(pdfDoc).download("text.pdf");
    props.showAlert("PDF extracted", "HooYah!");
  };

  //Copy the text:
  const handleCopy = () => {
    var text = document.getElementById("editArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  // Extra space handler:
  const handleExtraSpace = () => {
    var spaceHandle = text.split(/[ ]+/);
    setText(spaceHandle.join(" "));
    props.showAlert("Extra spaces has been handled", "Booyah!");
  };

  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "#05042d" }}>
        <h1 className="m-2">{props.title}</h1>
        <div>
          <textarea
            className="form-control mb-3"
            id="editArea"
            rows="10"
            value={text}
            onChange={handleChange}
            placeholder={props.textPlaceholder}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "#05042d",
            }}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-success m-2" disabled = {text.length === 0} onClick={handleUpperClick}>
            {props.convBtnToUpper}
          </button>
          <button className="btn btn-primary m-2" disabled = {text.length === 0} onClick={handleLowerClick}>
            {props.convBtnToLower}
          </button>
          <button className="btn btn-secondary m-2" disabled = {text.length === 0} onClick={handlePDFExtract}>
            Extract to PDF
          </button>
          <button className="btn btn-info m-2" disabled = {text.length === 0} onClick={handleExtraSpace}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-warning m-2" disabled = {text.length === 0} onClick={handleCopy}>
            Copy Data
          </button>
        </div>

        <div className="container my-3">
          <h2>Text Area Summary</h2>
          <p>
            {text.trim().split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length}{" "}
             characters
          </p>
          <p>Time to read: {0.008 * text.split(/\s+/).filter((element)=> {return element.length!==0}).length} minutes</p>
          <h3>Preview</h3>
          <p className="border border-primary lh-base rounded-3 text-break p-3 fst-italic">
            {text.length > 0
              ? text
              : "Wanna play with words? Input something above"}
          </p>
        </div>
      </div>
    </>
  );
}
TextArea.propTypes = {
  title: propTypes.string,
  about: propTypes.string,
};

export default TextArea;

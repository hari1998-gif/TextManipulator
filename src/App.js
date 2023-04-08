import "./App.css";
import Navbar from "./AppComps/Navbar";
import TextArea from "./AppComps/TextArea";
import React, { useState } from "react";
import Alert from "./AppComps/Alert";
import { Routes, Route } from "react-router-dom";
import About from "./AppComps/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#05042d";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="WORD Converter"
        about="About WordConverter"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About mode={mode} />}/>
          
          <Route
            path="/"
            element={
              <TextArea
                title="Text Editor" //props
                textPlaceholder="Enter your text here" //props
                convBtnToUpper="Convert to Uppercase" //props
                convBtnToLower="Convert to Lowercase" //props
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

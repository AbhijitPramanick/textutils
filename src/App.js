import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#055160";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode"; // to enable the title change with the toggle

      //Developers often use the following tricks to change the titlw in some intervals... whoch can attrcat the user's attention... but it is not a good user experience

      // setInterval(() => {
      //   document.title = "Textutils is Amazing";
      // }, 900);
      // setInterval(() => {
      //   document.title = "Refer Textutils to friends";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#8080801a";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="textUtilsX"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputData, setInputData] = useState("");

  const handleInput = (e) => {
    e.target.value = e.target.value.toUpperCase();
    setInputData(e.target.value);
  };

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      alert("Dont enter a number!");
      e.preventDefault(); //rakam girisi engelleniyor
    }
  };

  const handleAreaPaste = (e) => {
    console.log(e);
    e.target.style.fontSize = "30px";
    e.target.style.border = "3px solid red";
    e.target.style.backgroundColor = "lightgrey";

    e.target.value += e.clipboardData.getData("text").toUpperCase();
    e.preventDefault();
  };

  const handleParCopy = (e) => {
    e.preventDefault();
    alert("You cant copy");
  };
  const handleParCut = (e) => {
    e.preventDefault();
    alert("You cant cut");
  };

  return (
    <div className="container text-center">
      <h2 className="display-5 text-danger">Keyboard-Clipboard Event</h2>

      <input
        onChange={handleInput}
        type="text"
        className="form-control"
        onKeyDown={handleKeyDown}
      />

      <div className="text-start mt-4">
        <h6>Copied Input Data:</h6>
        <p onCopy={handleParCopy} onCut={handleParCut}>{inputData.toLowerCase()}</p>
      </div>

      <textarea
        className="form-control mt-4"
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
        onPaste={handleAreaPaste}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;

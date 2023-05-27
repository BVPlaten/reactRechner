import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

interface CalcDisplayProps {
  text: string;
  onTextChange: (newText: string) => void; // Prop für das Setzen des Werts von außen
}

const CalcDisplay: React.FC<CalcDisplayProps> = ({ text }) => {
  const [inputText, setInputText] = useState(text);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleClearClicked = () => {
    setInputText("");
  };

  return (
    <div className="mb-3 d-flex align-items-center">
      <input
        type="text"
        className="form-control mr-2"
        placeholder="Gib deinen Text ein"
        value={inputText}
        onChange={handleChange}
      />
      <Button variant="primary" onClick={handleClearClicked}>
        Löschen
      </Button>
    </div>
  );
};

export default CalcDisplay;

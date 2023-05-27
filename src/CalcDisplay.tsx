import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

interface CalcDisplayProps {
  text: string;
  onTextChange: (newText: string) => void;
  onDeletion: () => void;
}

const CalcDisplay: React.FC<CalcDisplayProps> = ({
  text,
  onTextChange,
  onDeletion
}) => {
  const [inputText, setInputText] = useState(text);

  useEffect(() => {
    setInputText(text); // Aktualisiere den Zustand, wenn der Wert über die Prop geändert wird
  }, [text]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleClearClicked = () => {
    setInputText("");
    onDeletion();
  };

  /*
  useEffect(() => {
    onTextChange(inputText); // Rufe die Prop-Funktion auf, um den Wert von außen zu setzen
  }, [inputText, onTextChange]);
  */

  return (
    <div className="mb-3 d-flex align-items-center">
      <input
        type="text"
        className="form-control mr-2"
        placeholder="Gib deinen Text ein"
        value={inputText}
        onChange={handleChange}
      />
      <Button className="btn btn-primary" onClick={handleClearClicked}>
        Löschen
      </Button>
    </div>
  );
};

export default CalcDisplay;

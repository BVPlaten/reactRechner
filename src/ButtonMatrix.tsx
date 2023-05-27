import React from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";
import CalcButton from "./CalcButton";

interface ButtonMatrixProps {
  onTextChange: (text: string) => void;
}

const ButtonMatrix: React.FC<ButtonMatrixProps> = ({ onTextChange }) => {
  // Beispiel-Daten für die Matrix
  const matrixData = [
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "*"],
    ["0", ",", "=", "/"]
  ];

  return (
    <div className="container">
      {matrixData.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((buttonText, columnIndex) => (
            <div key={columnIndex} className="col">
              <CalcButton
                onTextChange={(buttonText) => onTextChange(buttonText)}
                buttonLettering={buttonText}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonMatrix;

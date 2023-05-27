import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./styles.css";

function isNumeric(value: string): boolean {
  return !isNaN(parseFloat(value)) && isFinite(Number(value));
}

// dieser button aendert seine farbe je nach beschriftung zwischen
// btn btn-success und tn btn-warning
interface CalcButtonProps {
  buttonLettering: string;
  onTextChange: (text: string) => void;
}

const CalcButton: React.FC<CalcButtonProps> = ({
  buttonLettering,
  onTextChange
}) => {
  let styleOfButton: string;

  if (isNumeric(buttonLettering)) {
    styleOfButton = "btn btn-warning btn-block m-2";
  } else {
    styleOfButton = "btn btn-secondary btn-block m-2";
  }
  return (
    <Button
      //className={"btn btn-warning btn-block m-2"}
      className={styleOfButton}
      onClick={() => onTextChange(buttonLettering)}
    >
      {buttonLettering}
    </Button>
  );
};

export default CalcButton;

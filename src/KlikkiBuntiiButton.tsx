import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./styles.css";

function getRandomValue(list: Array<string>) {
  return list[Math.floor(Math.random() * list.length)];
}

function KlikkiBuntiiButton() {
  const [buttStyle, setButtStyle] = useState("btn btn-primary");

  function clickChangeStyle() {
    const newStyle = getRandomValue([
      "btn btn-primary",
      "btn btn-secondary",
      "btn btn-success",
      "btn btn-danger",
      "btn btn-warning",
      "btn btn-info",
      "btn btn-light",
      "btn btn-dark"
    ]);
    setButtStyle(newStyle);
  }

  return (
    <Button className={buttStyle} onClick={clickChangeStyle}>
      KlickiBunti
    </Button>
  );
}

export default KlikkiBuntiiButton;

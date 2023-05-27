import React, { useState } from "react";
import "./styles.css";
import ButtonMatrix from "./ButtonMatrix";
import CalcDisplay from "./CalcDisplay";
import KlikkiBuntiiButton from "./KlikkiBuntiiButton";
import LogicCalculator from "./LogicCalculator";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");

  // handler wird von einer änderung in den buttons aufgerufen
  const handleTextChange = (newText: string) => {
    setText((prevText) => prevText + newText);
    // Der vorherige Zustand (`prevText` in diesem Fall) ist kein spezifischer Name, der vordefiniert oder deklariert werden muss. Es ist ein Argument, das von der Lambda-Funktion automatisch erfasst wird.
    //Die `useState`-Hook-Funktion gibt ein Array zurück, das aus zwei Elementen besteht: dem aktuellen Zustand und einer Funktion zum Aktualisieren des Zustands. Wenn du die `useState`-Hook verwendest und ihr einen initialen Wert übergibst, wird der aktuelle Zustand mit diesem initialen Wert initialisiert.
    //Die Funktion, die den Zustand aktualisiert (in diesem Fall `setText`), erwartet ein Argument, das den neuen Wert darstellt. Allerdings gibt es eine spezielle Eigenschaft dieser Funktion: Wenn du eine Funktion als Argument übergibst, anstatt einen konkreten Wert, erfasst die `setState`-Funktion automatisch den aktuellen Zustand und übergibt ihn dieser Funktion.
    //In der Lambda-Funktion, die du als Argument an `setText` übergibst, wird das Argument `(prevText)` verwendet, um den vorherigen Zustand zu repräsentieren. Du kannst diesen Namen frei wählen - `prevText` ist hier nur ein Beispiel. Du könntest auch `oldText`, `previousText` oder einen anderen Namen verwenden.
    //Das `prevText` in der Lambda-Funktion ist also keine vordefinierte Variable, sondern ein Parameter, der den aktuellen Zustand repräsentiert und von der Lambda-Funktion automatisch erfasst wird. Du kannst es verwenden, um den vorherigen Zustand zu referenzieren und basierend darauf den neuen Zustand zu berechnen.
    //Durch diese Mechanismen ermöglicht es die `setState`-Funktion in Verbindung mit der Lambda-Funktion, den vorherigen Zustand zu erhalten und den neuen Zustand basierend auf diesem vorherigen Zustand zu setzen.
    console.log(`Gesamt Text ${text} ; Eingabe  ${newText}.`);
  };

  // handler für das löschen vom CalcDisplay
  const handleDelete = () => {
    setText("");
    console.log(`Gesamt Text wurde geloescht !`);
  };

  let myTinyMathematician = new LogicCalculator();
  let result = myTinyMathematician.add(2, 3);
  console.log(result);

  return (
    <div className="container">
      <p>
        <br />
        <br />
      </p>
      <CalcDisplay
        text={text}
        onTextChange={handleTextChange}
        onDeletion={handleDelete}
      />
      <p>
        <br />
      </p>
      <ButtonMatrix onTextChange={handleTextChange} />
      <p>
        <br />
      </p>
      <KlikkiBuntiiButton />
    </div>
  );
};

export default App;

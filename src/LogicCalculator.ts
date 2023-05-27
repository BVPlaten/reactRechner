// hier wird eine typescript klasse erstellt die einen calulator
// reralieisert

/*
function handleOperation(operation: string) {
  const operationMap: { [key: string]: () => void } = {
    add: () => {
      console.log("Addition ausführen");
      // Fügen Sie hier den Code für die Addition hinzu
    },
    subtract: () => {
      console.log("Subtraktion ausführen");
      // Fügen Sie hier den Code für die Subtraktion hinzu
    },
    multiply: () => {
      console.log("Multiplikation ausführen");
      // Fügen Sie hier den Code für die Multiplikation hinzu
    },
    divide: () => {
      console.log("Division ausführen");
      // Fügen Sie hier den Code für die Division hinzu
    },
    default: () => {
      console.log("Ungültige Operation");
      // Fügen Sie hier den Code für den Standardfall hinzu
    }
  };

  const selectedOperation = operationMap[operation] || operationMap.default;
  selectedOperation();
}

// Beispielaufrufe
handleOperation("add"); // Ausgabe: "Addition ausführen"
handleOperation("subtract"); // Ausgabe: "Subtraktion ausführen"
handleOperation("multiply"); // Ausgabe: "Multiplikation ausführen"
handleOperation("divide"); // Ausgabe: "Division ausführen"
handleOperation("unknown"); // Ausgabe: "Ungültige Operation"
*/
class LogicCalculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}

export default LogicCalculator;
// Beispielverwendung
/*
const calculator = new Calculator();

console.log(calculator.add(5, 3)); // Ausgabe: 8
console.log(calculator.subtract(5, 3)); // Ausgabe: 2
console.log(calculator.multiply(5, 3)); // Ausgabe: 15
console.log(calculator.divide(10, 2)); // Ausgabe: 5
*/

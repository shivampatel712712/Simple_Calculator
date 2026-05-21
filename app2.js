// app.js

const express = require("express");
const app = express();

const PORT = 3000;

/*
choice:
1 = add
2 = subtract
3 = multiply
4 = division

Example:
http://localhost:3000/calc?choice=1&a=10&b=5
*/

app.get("/calc", (req, res) => {
  const choice = Number(req.query.choice);
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  let result;
  let operation;

  switch (choice) {
    case 1:
      operation = "Addition";
      result = a + b;
      break;

    case 2:
      operation = "Subtraction";
      result = a - b;
      break;

    case 3:
      operation = "Multiplication";
      result = a * b;
      break;

    case 4:
      operation = "Division";

      if (b === 0) {
        return res.status(400).json({
          error: "Division by zero not allowed",
        });
      }

      result = a / b;
      break;

    default:
      return res.status(400).json({
        error: "Invalid choice",
      });
  }

  res.json({
    choice,
    operation,
    a,
    b,
    result,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
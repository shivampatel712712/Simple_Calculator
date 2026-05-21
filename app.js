// app.js

const express = require("express");
const app = express();

const PORT = 3000;

// Addition API
app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    operation: "addition",
    result: a + b,
  });
});

// Subtraction API
app.get("/sub", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    operation: "subtraction",
    result: a - b,
  });
});

// Multiplication API
app.get("/multi", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    operation: "multiplication",
    result: a * b,
  });
});

// Division API
app.get("/division", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (b === 0) {
    return res.status(400).json({
      error: "Division by zero is not allowed",
    });
  }

  res.json({
    operation: "division",
    result: a / b,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
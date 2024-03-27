import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "krishdata",
  port: 5432,
});

const app = express();
const port = 3000;

db.connect();

let quiz = [];

db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
    return;
  }

  quiz = res.rows;
  if (quiz.length > 0) {
    nextQuestion(); // Call nextQuestion after quiz data is populated
  } else {
    console.error("No quiz data available.");
  }

  db.end();
});

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", (req, res) => {
  totalCorrect = 0;
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer ? req.body.answer.trim() : '';
  let isCorrect = false;
  if (currentQuestion && currentQuestion.capital && answer) {
    if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
      totalCorrect++;
      console.log(totalCorrect);
      isCorrect = true;
    }
  } else {
    console.error("Invalid currentQuestion, capital, or answer:", currentQuestion, answer);
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  if (quiz.length > 0) {
    const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
    currentQuestion = randomCountry;
  } else {
    console.error("No quiz data available.");
  }
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

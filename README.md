# Flag Quiz App

This is a web application built with Express.js and PostgreSQL for a Flag Quiz game. Users can test their knowledge of flags by naming the corresponding country.

![Preview](public/images/preview.png)

## Installation

1. Clone the repository:

*  https://github.com/KRISHNAKUMARPS2002/FLAG_QUIZ.git

3. Navigate to the project directory:

* cd flag-quiz

3. Install dependencies:

* npm install

4. Set up PostgreSQL database:
- Create a PostgreSQL database named "world".
- Update the database connection details in `index.js` if necessary.

## Usage

1. Start the application:

* npm start

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to play the quiz.

## Features

- Randomly generates quiz questions from a PostgreSQL database.
- Tracks and displays the user's total score.
- Provides instant feedback on correct and incorrect answers.

## Technologies Used

- Express.js
- PostgreSQL
- HTML/CSS
- JavaScript

## Directory Structure

├── public
│ └── images
│ └── background.jpg
├── index.js
├── package.json
└── README.md



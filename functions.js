import readline from "readline-sync";
import { spielerArr } from "./main";
import {
  questionsHtml,
  questionsCss,
  questionsJavascript,
} from "./questionList";

const GREEN = "\u001B[1m\u001B[32m",
  RED = "\u001B[1m\u001B[31m",
  YELLOW = "\u001B[1m\u001B[33m",
  ANSI = "\u001B[39m\u001B[22m";

export function chooseCategory() {
  const categoryNum = readline.questionInt(
    `${GREEN}
Choose a quiz topic: ${ANSI} 
${YELLOW}
 1. HTML
 2. CSS
 3. JavaScript
${ANSI}
You choose a category: `
  );
  console.clear();

  let res;

  switch (categoryNum) {
    case 1:
      res = makeQuestion(questionsHtml);
      break;
    case 2:
      res = makeQuestion(questionsCss);
      break;
    case 3:
      res = makeQuestion(questionsJavascript);
      break;
    default:
      console.log("Wrong category number! Try again!");
      chooseCategory();
  }
  return res;
}

function makeQuestion(category) {
  let wasQuestion = []; // array for questions that already were
  let result = 0;
  let num = 1;

  while (wasQuestion.length < category.length) {
    let index = Math.floor(Math.random() * category.length); // next question index
    const { question, choices, correctAnswer } = category[index];

    if (!wasQuestion.includes(index)) {
      console.log(`\n${YELLOW}${num}. ${question}${ANSI}`);
      const shuffleArr = shuffleArray(choices); // shuffle answers
      shuffleArr.forEach((item, number) => {
        console.log(number + 1 + ".", item);
      });

      const userInput = readline.question(
        `${YELLOW}Enter your answer (1-${shuffleArr.length}): ${ANSI}`
      );
      const userChoiceIndex = parseInt(userInput) - 1;
      const userChoice = shuffleArr[userChoiceIndex];

      if (userChoice === correctAnswer) {
        result++;
        console.log(`${GREEN}Correct answer!${ANSI}`);
      } else {
        console.log(
          `${RED}Wrong answer!${ANSI}\nThe correct answer is: ${GREEN}${correctAnswer}${ANSI}`
        );
      }

      num++;
      wasQuestion.push(index);
    }
  }

  console.log(
    `\n${YELLOW}The round is complete!. Your result: ${result}/${category.length}${ANSI}`
  );
  return result;
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function createPlayer(name) {
  let players = {};
  players = { name, punktzahl: 0 };
  return players;
}

export function showResults() {
  console.log(`\n${GREEN}The quiz is complete. Player results:${ANSI}`);
  let max = 0;
  let winner;
  spielerArr.forEach((player) => {
    console.log(`${player.name}: ${YELLOW}${player.punktzahl}${ANSI}`);
    if (player.punktzahl > max) {
      max = player.punktzahl;
      winner = player.name;
    }
  });

  console.log(`\n${GREEN}Winner: ${winner.toUpperCase()}!${ANSI}`);
  console.log(`\n${GREEN}Thanks for playing!\n${ANSI}`);
}


// Albert's Timer
class Timer {
  constructor() {
    this.timerInterval = null;
    this.seconds = 20;
    this.minutes = 0;
    this.hours = 0;
  }

  start() {
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.timerInterval);
  }

  update() {
    this.seconds--;

    if (this.seconds < 0) {
      this.stop();
    
      return;
    }

    let timeDisplay = "";
    // if (this.hours > 0) {
    //   timeDisplay += this.hours + " Std ";
    // }
    // if (this.minutes > 0) {
    // timeDisplay += this.minutes + " Min ";
    // }
    if (this.seconds < 10) {
      timeDisplay += "0" + this.seconds + " Sek";
    } else {
      timeDisplay += this.seconds + " Sek";
    }

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(timeDisplay);
  }
}

// Beispiel
const timer1 = new Timer();
timer1.start();

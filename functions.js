import readline from "readline-sync";
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
    `
Choose a quiz topic:
${YELLOW}
 1. HTML
 2. CSS
 3. JavaScript
${ANSI}
You choose a category: `
  );
  console.clear();

  switch (categoryNum) {
    case 1:
      makeQuestion(questionsHtml);
      break;
    case 2:
      makeQuestion(questionsCss);
      break;
    case 3:
      makeQuestion(questionsJavascript);
      break;
    default:
      console.log("Wrong category number! Try again!");
      chooseCategory();
  }
}

function makeQuestion(category) {
  let wasQuestion = []; // array for questions that already were
  let result = 0;

  while (wasQuestion.length < category.length) {
    let index = Math.floor(Math.random() * category.length); // next question index
    const { question, choices, correctAnswer } = category[index];

    if (!wasQuestion.includes(index)) {
      console.log(`\n${YELLOW}${question}${ANSI}`);
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

      wasQuestion.push(index);
    }
  }

  console.log(
    `\n${YELLOW}The quiz is complete. Your result: ${result}/${category.length}${ANSI}`
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const startPage = document.getElementById("start-overlay");
const categoriesOverlay = document.getElementById("categories-overlay");
const defaultAnswer = document.getElementById("default");

let spielerAnzahl = 0;
const spielerArr = [];
let playerNum = 0;
let categoryNum = 0;

function ctgNum(value) {
  categoryNum = value;
  categoriesOverlay.style.display = "none";
  switch (categoryNum) {
    case "1":
      makeQuestion("./src/js/ctg1.js");
      break;
    case "2":
      makeQuestion("./src/js/ctg2.js");
      break;
    case "3":
      makeQuestion("./src/js/ctg3.js");
      break;
    default:
      console.log("Wrong category number! Try again!");
  }
}

async function makeQuestion(category) {
  const response = await fetch(category);
  const text = await response.text();
  const questionArr = await eval(text);
  console.log(questionArr);

  let wasQuestion = []; // accumulator for questions that already were
  let result = 0; // result accumulator
  const timer = new Timer();

  const questionOutput = document.getElementById("questions");
  const answersContainer = document.getElementById("answers-container");
  const answerOutput1 = document.getElementById("answer1");
  const answerOutput2 = document.getElementById("answer2");
  const answerOutput3 = document.getElementById("answer3");

  const newQuestionArr = shuffleArray(questionArr);
  let correctAnswerGlobal;

  nextQuestion(); // first internal function

  function nextQuestion() {
    let index;
    // if the index already existed, generate it again
    do {
      index = Math.floor(Math.random() * newQuestionArr.length);
      if (!wasQuestion.includes(index)) break;
    } while (true);

    const { question, choices, correctAnswer } = newQuestionArr[index];
    correctAnswerGlobal = correctAnswer;
    // show question
    questionOutput.innerText = question;
    const shuffleAnswers = shuffleArray(choices); // shuffle answers
    // show answers and set values
    answerOutput1.innerText = shuffleAnswers[0];
    answerOutput1.value = shuffleAnswers[0];
    answerOutput2.innerText = shuffleAnswers[1];
    answerOutput2.value = shuffleAnswers[1];
    answerOutput3.innerText = shuffleAnswers[2];
    answerOutput3.value = shuffleAnswers[2];

    wasQuestion.push(index); // save already used indexes
    timer.start();

    // If the round is complete
    if (wasQuestion.length === questionArr.length) {
      timer.stop();
      questionOutput.innerText =
        "Die Runde ist fertig! \nDein Ergebnis: " + result;
      answersContainer.style.display = "none";

      setTimeout(() => {
        spielerArr[playerNum].punktzahl = result; // save round result
        playerNum++;
        if (playerNum === spielerArr.length) {
          questionOutput.innerText = "Das Spiel ist aus!\n";
          showWinner(questionOutput);
        } else {
          // reset all setting for next player
          categoriesOverlay.style.display = "flex";
          document.getElementById("topic").innerText =
            spielerArr[playerNum].name + "\nChoose a quiz topic:";
          answersContainer.style.display = "flex";
          wasQuestion = [];
          result = 0;
          answerOutput1.removeEventListener("click", getAnswer);
          answerOutput2.removeEventListener("click", getAnswer);
          answerOutput3.removeEventListener("click", getAnswer);
          defaultAnswer.removeEventListener("click", getAnswer);
        }
      }, 3000);
    }
  }

  // wait for click of button
  answerOutput1.addEventListener("click", getAnswer);
  answerOutput2.addEventListener("click", getAnswer);
  answerOutput3.addEventListener("click", getAnswer);
  defaultAnswer.addEventListener("click", getAnswer);

  // second internal function
  function getAnswer(e) {
    let answer = e.target.value;
    timer.stop();
    console.log(answer);
    // block multi-click
    answersContainer.style.pointerEvents = "none";
    // check answer
    if (answer === correctAnswerGlobal) {
      questionOutput.innerText = "Richtig!";
      questionOutput.style.color = "green";
      e.target.style.background = "green";
      result++;
    } else {
      questionOutput.innerText =
        "Falsch! \nRichtige Antwort: " + correctAnswerGlobal;
      questionOutput.style.color = "red";
      e.target.style.background = "red";
    }
    // wait 3 second, then ask next question
    setTimeout(() => {
      // reset CSS settings
      questionOutput.style.color = "";
      answersContainer.style.pointerEvents = "auto";
      e.target.style.background = "";
      nextQuestion();
    }, 2000);
  }
}

// -------- global functions ---------

function spielerZahl(value) {
  spielerAnzahl = value;
  startPage.style.display = "none";
  playerName();
}

function playerName() {
  for (let i = 0; i < spielerAnzahl; i++) {
    let obj = {};
    obj.name = "Spieler " + (i + 1);
    obj.punktzahl = 0;
    spielerArr.push(obj);
  }
  console.log(spielerArr);
  document.getElementById("topic").innerText =
    spielerArr[playerNum].name + "\nChoose a quiz topic:";
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showWinner(questionOutput) {
  let max = 0;
  let winner;
  spielerArr.forEach((player) => {
    questionOutput.innerText += `\n${player.name}: ${player.punktzahl} Punkte`;
    if (player.punktzahl > max) {
      max = player.punktzahl;
      winner = player.name;
    }
  });
  questionOutput.innerText += ("\n\nSieger: " + winner).toLocaleUpperCase();
}

const timerContainer = document.getElementById("timer");

// --------- Albert's Timer ----------
class Timer {
  constructor() {
    this.timerInterval = null;
    this.seconds = 20;
  }

  start() {
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => this.update(), 1000);
    timerContainer.innerText = "20 Sek";
  }

  stop() {
    clearInterval(this.timerInterval);
    if (this.seconds < 0) defaultAnswer.click();
    this.seconds = 20;
    timerContainer.innerText = "";
  }

  update() {
    this.seconds--;

    if (this.seconds < 0) {
      this.stop();
      return;
    }

    let timeDisplay = "";

    // set format to 00:00
    if (this.seconds < 10) {
      timeDisplay += "0" + this.seconds + " Sek";
    } else {
      timeDisplay += this.seconds + " Sek";
    }

    timerContainer.innerText = timeDisplay;
  }
}

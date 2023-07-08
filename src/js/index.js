// ui code

let buttonsOverlay = document.getElementById("buttons-overlay");

let spielerAnzahl = 0;
const spielerArr = [];
let playerNum = 0;

function spielerZahl(value) {
  spielerAnzahl = value;
  console.log(spielerAnzahl);
  buttonsOverlay.style.display = "none";
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
}

let categoriesOverlay = document.getElementById("categories-overlay");
let categoryNum = 0;

function ctgNum(value) {
  categoryNum = value;
  console.log(categoryNum);
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
  const questionArr = eval(text);
  console.log(questionArr);

  let wasQuestion = []; // array for questions that already were
  let result = 0;

  let questionOutput = document.getElementById("questions");
  let answerOutput1 = document.getElementById("answer1");
  let answerOutput2 = document.getElementById("answer2");
  let answerOutput3 = document.getElementById("answer3");

  let newQuestionArr = shuffleArray(questionArr);
  let correctAnswerGlobal;

  //---
  function nextQuestion() {
    questionOutput.style.color = "";

    let index;
    do {
      index = Math.floor(Math.random() * newQuestionArr.length);
      if (!wasQuestion.includes(index)) break;
    } while (true);

    const { question, choices, correctAnswer } = newQuestionArr[index];
    correctAnswerGlobal = correctAnswer;
    questionOutput.innerText = question;
    const shuffleAnswers = shuffleArray(choices); // shuffle answers
    answerOutput1.innerText = shuffleAnswers[0];
    answerOutput1.value = shuffleAnswers[0];
    answerOutput2.innerText = shuffleAnswers[1];
    answerOutput2.value = shuffleAnswers[1];
    answerOutput3.innerText = shuffleAnswers[2];
    answerOutput3.value = shuffleAnswers[2];

    wasQuestion.push(index);

    if (wasQuestion.length === questionArr.length) {
      questionOutput.innerText = "Fertig! \nDein Ergebnis: " + result;
      document.getElementById("answers-container").style.display = "none";

      setTimeout(() => {
        spielerArr[playerNum].punktzahl = result;
        playerNum++;
        if (playerNum === spielerArr.length) {
          questionOutput.innerText = "Das Spiel ist aus!\n";
          showWinner(questionOutput);
        } else {
          categoriesOverlay.style.display = "flex";
          document.getElementById("answers-container").style.display = "flex";
          wasQuestion = []; // array for questions that already were
          result = 0;
          answerOutput1.removeEventListener("click", getAnswer);
          answerOutput2.removeEventListener("click", getAnswer);
          answerOutput3.removeEventListener("click", getAnswer);
        }
      }, 3000);
    }
  }
  nextQuestion();

  answerOutput1.addEventListener("click", getAnswer);
  answerOutput2.addEventListener("click", getAnswer);
  answerOutput3.addEventListener("click", getAnswer);

  function getAnswer(e) {
    let answer = e.target.value;
    console.log(answer);
    if (answer === correctAnswerGlobal) {
      questionOutput.innerText = "Richtig!";
      questionOutput.style.color = "green";
      result++;
    } else {
      questionOutput.innerText =
        "Falsch! \nRichtige Antwort: " + correctAnswerGlobal;
      questionOutput.style.color = "red";
    }
    setTimeout(nextQuestion, 0);
  }
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

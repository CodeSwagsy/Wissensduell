const questionsJavascript = [
  {
    question:
      "Welches Schlüsselwort wird verwendet, um eine Variable in JavaScript zu deklarieren?",
    choices: ["let", "int", "string"],
    correctAnswer: "let",
  },
  {
    question: "Welche Art von Sprache ist JavaScript?",
    choices: ["Programmiersprache", "Markup-Sprache", "Skriptsprache"],
    correctAnswer: "Skriptsprache",
  },
  {
    question: "Wie kann man eine Meldung in der Konsole ausgeben?",
    choices: ["console.log()", "print()", "alert()"],
    correctAnswer: "console.log()",
  },
  {
    question:
      "Welches Symbol wird verwendet, um eine Zeichenkette (String) in JavaScript zu kennzeichnen?",
    choices: ['"', "'", "`"],
    correctAnswer: '"',
  },
  {
    question: "Wie kann man eine Funktion in JavaScript definieren?",
    choices: [
      "function myFunction()",
      "def myFunction()",
      "myFunction() = function",
    ],
    correctAnswer: "function myFunction()",
  },
  {
    question:
      "Welches Zeichen wird verwendet, um eine Einzelzeilen-Kommentar in JavaScript zu beginnen?",
    choices: ["//", "/*", "#"],
    correctAnswer: "//",
  },
  {
    question:
      "Welches Zeichen wird verwendet, um eine Mehrzeilen-Kommentar in JavaScript zu beginnen und zu beenden?",
    choices: ["/*", "<!--", "//"],
    correctAnswer: "/*",
  },
  {
    question:
      "Welcher Operator wird verwendet, um den Rest einer Division zu berechnen?",
    choices: ["%", "/", "*"],
    correctAnswer: "%",
  },
  {
    question: "Wie kann man eine Schleife in JavaScript beenden?",
    choices: ["break", "return", "exit"],
    correctAnswer: "break",
  },
  {
    question:
      "Welcher Operator wird verwendet, um den Typ und den Wert einer Variable zu überprüfen?",
    choices: ["==", "===", "="],
    correctAnswer: "===",
  },
  {
    question: "Wie kann man auf ein Element in HTML mit JavaScript zugreifen?",
    choices: [
      "getElementById()",
      "querySelector()",
      "getElementsByClassName()",
    ],
    correctAnswer: "getElementById()",
  },
  {
    question:
      "Welche Methode wird verwendet, um eine Zeichenkette in JavaScript in Kleinbuchstaben umzuwandeln?",
    choices: ["toLowerCase()", "toUpperCase()", "convertToLowerCase()"],
    correctAnswer: "toLowerCase()",
  },
  {
    question: "Wie kann man eine leere Array-Variable in JavaScript erstellen?",
    choices: ["[]", "{}", "emptyArray()"],
    correctAnswer: "[]",
  },
  {
    question:
      "Welches Schlüsselwort wird verwendet, um eine Ausnahme (Exception) in JavaScript zu werfen?",
    choices: ["throw", "catch", "try"],
    correctAnswer: "throw",
  },
  {
    question:
      "Wie kann man prüfen, ob eine Variable in JavaScript vom Typ 'undefined' ist?",
    choices: [
      "typeof variable === 'undefined'",
      "variable === null",
      "variable == undefined",
    ],
    correctAnswer: "typeof variable === 'undefined'",
  },
  {
    question:
      "Welche Methode wird verwendet, um die Länge einer Zeichenkette in JavaScript zu ermitteln?",
    choices: ["length()", "size()", "length"],
    correctAnswer: "length",
  },
  {
    question:
      "Welche Methode wird verwendet, um einen Teil einer Zeichenkette in JavaScript zurückzugeben?",
    choices: ["substring()", "slice()", "substr()"],
    correctAnswer: "substring()",
  },
  {
    question:
      "Welche Methode wird verwendet, um ein Element am Ende eines Arrays hinzuzufügen?",
    choices: ["push()", "pop()", "append()"],
    correctAnswer: "push()",
  },
  {
    question:
      "Welche Methode wird verwendet, um ein Element am Anfang eines Arrays hinzuzufügen?",
    choices: ["unshift()", "shift()", "prepend()"],
    correctAnswer: "unshift()",
  },
  {
    question:
      "Welche Methode wird verwendet, um ein Element aus einem Array zu entfernen?",
    choices: ["splice()", "remove()", "delete()"],
    correctAnswer: "splice()",
  },
];

function returnArr() {
  return questionsJavascript;
}
returnArr();

const questionsCss = [
  {
    question: "Wie ändert man die Hintergrundfarbe eines Elements in CSS?",
    choices: ["background-color", "color", "text-color"],
    correctAnswer: "background-color",
  },
  {
    question: "Wie ändert man die Schriftgröße eines Elements in CSS?",
    choices: ["font-size", "text-size", "size"],
    correctAnswer: "font-size",
  },
  {
    question: "Wie zentriert man ein Element horizontal in CSS?",
    choices: ["margin: 0 auto", "text-align: center", "align: center"],
    correctAnswer: "margin: 0 auto",
  },
  {
    question: "Wie fügt man einen Rahmen um ein Element in CSS hinzu?",
    choices: ["border", "outline", "frame"],
    correctAnswer: "border",
  },
  {
    question: "Wie fügt man einen Schatten zu einem Element in CSS hinzu?",
    choices: ["box-shadow", "shadow", "element-shadow"],
    correctAnswer: "box-shadow",
  },
  {
    question: "Wie ändert man die Ausrichtung des Textes in CSS?",
    choices: ["text-align", "align", "text-justify"],
    correctAnswer: "text-align",
  },
  {
    question: "Wie ändert man die Breite und Höhe eines Elements in CSS?",
    choices: ["width und height", "size", "dimensions"],
    correctAnswer: "width und height",
  },
  {
    question: "Wie ändert man die Transparenz eines Elements in CSS?",
    choices: ["opacity", "transparent", "visibility"],
    correctAnswer: "opacity",
  },
  {
    question: "Wie ändert man den Zeilenabstand in CSS?",
    choices: ["line-height", "spacing", "line-spacing"],
    correctAnswer: "line-height",
  },
  {
    question: "Wie positioniert man ein Element absolut in CSS?",
    choices: ["position: absolute", "position: fixed", "position: relative"],
    correctAnswer: "position: absolute",
  },
  {
    question: "Wie ändert man die Textfarbe eines Elements in CSS?",
    choices: ["color", "text-color", "font-color"],
    correctAnswer: "color",
  },
  {
    question: "Wie ändert man den Abstand zwischen den Buchstaben in CSS?",
    choices: ["letter-spacing", "spacing", "word-spacing"],
    correctAnswer: "letter-spacing",
  },
  {
    question: "Wie erstellt man eine animierte Transition in CSS?",
    choices: ["transition", "animate", "transform"],
    correctAnswer: "transition",
  },
  {
    question: "Wie zentriert man einen Text vertikal in CSS?",
    choices: [
      "line-height: height",
      "vertical-align: middle",
      "text-align: center",
    ],
    correctAnswer: "vertical-align: middle",
  },
  {
    question: "Wie ändert man die Textdekoration in CSS?",
    choices: ["text-decoration", "decoration", "underline"],
    correctAnswer: "text-decoration",
  },
  {
    question: "Wie ändert man den Zeichenabstand in CSS?",
    choices: ["letter-spacing", "spacing", "word-spacing"],
    correctAnswer: "letter-spacing",
  },
  {
    question: "Wie fügt man einen Hintergrund zu einem Element in CSS hinzu?",
    choices: ["background-image", "image", "background-url"],
    correctAnswer: "background-image",
  },
  {
    question: "Wie ändert man die Ausrichtung eines Hintergrundbildes in CSS?",
    choices: ["background-position", "image-position", "background-align"],
    correctAnswer: "background-position",
  },
  {
    question: "Wie fügt man eine Animation zu einem Element in CSS hinzu?",
    choices: ["@keyframes", "animation", "animate"],
    correctAnswer: "animation",
  },
  {
    question: "Wie erstellt man abgerundete Ecken an einem Element in CSS?",
    choices: ["border-radius", "corner-radius", "rounded-corners"],
    correctAnswer: "border-radius",
  },
];

function returnArr() {
  return questionsCss;
}
returnArr();

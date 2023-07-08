let questionsHtml = [
  {
    question: "Was steht für HTML ?",
    choices: [
      "Hypertext Markup Language",
      "Hyper Text Markup Logic",
      "High Text Making Language",
    ],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "Wie erstellt man eine Überschrift erster Ordnung in HTML ?",
    choices: ["<heading>", "<h1>", "<title>"],
    correctAnswer: "<h1>",
  },
  {
    question: "Wie fügt man einen Link in HTML ein ?",
    choices: ["<link>", "<a>", "<href>"],
    correctAnswer: "<a>",
  },
  {
    question: "Wie fügt man ein Bild in HTML ein ?",
    choices: ["<img>", "<image>", "<picture>"],
    correctAnswer: "<img>",
  },
  {
    question: "Wie erstellt man eine ungeordnete Liste in HTML?",
    choices: ["<ul>", "<ol>", "<li>"],
    correctAnswer: "<ul>",
  },
  {
    question: "Wie fügt man einen Zeilenumbruch in HTML ein?",
    choices: ["<br>", "<break>", "<nl>"],
    correctAnswer: "<br>",
  },
  {
    question: "Wie erstellt man ein Formular in HTML?",
    choices: ["<form>", "<input>", "<submit>"],
    correctAnswer: "<form>",
  },
  {
    question: "Wie fügt man eine Tabelle in HTML ein?",
    choices: ["<table>", "<tr>", "<td>"],
    correctAnswer: "<table>",
  },
  {
    question: "Wie kommentiert man Code in HTML?",
    choices: ["<!-- comment -->", "// comment", "/* comment */"],
    correctAnswer: "<!-- comment -->",
  },
  {
    question: "Wie bindet man eine externe CSS-Datei in HTML ein?",
    choices: ["<link>", "<style>", "<css>"],
    correctAnswer: "<link>",
  },
  {
    question: "Wie erstellt man eine geordnete Liste in HTML?",
    choices: ["<ol>", "<ul>", "<li>"],
    correctAnswer: "<ol>",
  },
  {
    question: "Wie erstellt man eine Schaltfläche in HTML?",
    choices: ["<button>", "<input type=button>", "<a>"],
    correctAnswer: "<button>",
  },
  {
    question: "Wie erstellt man ein Dropdown-Menü in HTML?",
    choices: ["<select>", "<option>", "<dropdown>"],
    correctAnswer: "<select>",
  },
  {
    question: "Wie erstellt man eine Checkbox in HTML?",
    choices: ["<checkbox>", "<input type=checkbox>", "<check>"],
    correctAnswer: "<input type=checkbox>",
  },
  {
    question: "Wie fügt man eine horizontale Linie in HTML ein?",
    choices: ["<hr>", "<line>", "<hline>"],
    correctAnswer: "<hr>",
  },
  {
    question: "Wie erstellt man einen Absatz in HTML?",
    choices: ["<p>", "<para>", "<paragraph>"],
    correctAnswer: "<p>",
  },
  {
    question: "Wie erstellt man einen Abschnitt in HTML?",
    choices: ["<section>", "<div>", "<article>"],
    correctAnswer: "<section>",
  },
  {
    question: "Wie fügt man ein Video in HTML ein?",
    choices: ["<video>", "<media>", "<movie>"],
    correctAnswer: "<video>",
  },
  {
    question: "Wie fügt man ein Bild mit alternativem Text in HTML ein?",
    choices: [
      "<img src=bild.jpg alt=Alternativer Text>",
      "<image src=bild.jpg alt=Alternativer Text>",
      "<picture src=bild.jpg alt=Alternativer Text>",
    ],
    correctAnswer: "<img src=bild.jpg alt=Alternativer Text>",
  },
  {
    question:
      "Wie erstellt man einen Hyperlink, der in einem neuen Tab geöffnet wird?",
    choices: [
      "<a href=linkziel.html target=_blank>Linktext</a>",
      "<a href=linkziel.html target=_self>Linktext</a>",
      "<a href=linkziel.html target=_parent>Linktext</a>",
    ],
    correctAnswer: "<a href=linkziel.html target=_blank>Linktext</a>",
  },
];

function returnArr() {
  return questionsHtml;
}
returnArr();

import { question, keyInSelect } from "readline-sync";
import {
  chooseCategory,
  shuffleArray,
  createPlayer,
  showResults,
} from "./functions";

export const spielerArr = [];
let spielerList = "";

console.log("\nWillkommen beim Wissensduell");

const spielerAnzahl =
  keyInSelect(
    ["Ein Spieler", "Zwei Spieler", "Drei Spieler", "Vier Spieler"],
    "Wieviele Spieler möchten mitspielen?"
  ) + 1;
if (spielerAnzahl === 0) {
  console.log("\nDas Spiel ist aus. Tschüss!\n");
  process.exit();
}

for (let i = 1; i <= spielerAnzahl; i++) {
  let spielerName = question(`\nWie lautet der Name von Spieler ${i}: `);
  while (!spielerName) {
    spielerName = question(`\nWie lautet der Name von Spieler ${i}: `);
  }
  const playerObj = createPlayer(spielerName);
  spielerArr.push(playerObj);
  spielerList += spielerName + ", ";
}

console.log(
  `\nFolgende Spieler spielen also mit: ${spielerList.slice(0, -2)}\n`
);

shuffleArray(spielerArr);

spielerArr.forEach((spieler) => {
  console.log(`${spieler.name} beginnt.`);
  spieler.punktzahl = chooseCategory();
});

showResults();

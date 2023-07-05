// ESM syntax is supported.
export {};

import { question, keyInSelect } from "readline-sync";
import { shuffle, createPlayer } from "./functions";

const spielerNamen = [];

console.log("\nWillkommen beim Wissensduell");

const spielerAnzahl =
  keyInSelect(
    ["Ein Spieler", "Zwei Spieler", "Drei Spieler", "Vier Spieler"],
    "Wieviele Spieler möchten mitspielen?"
  ) + 1;

for (let i = 1; i <= spielerAnzahl; i++) {
  const spielerName = question(`\nWie lautet der Name von Spieler ${i}: `);
  spielerNamen.push(spielerName);
}

console.log(`\nFolgende Spieler spielen also mit: ${spielerNamen.join(" ")}\n`);

shuffle(spielerNamen);

const spielerObjekt = createPlayer(spielerNamen);

console.log(`${spielerNamen[0]} beginnt.`);
console.log(spielerNamen);
console.log(spielerObjekt);

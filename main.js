// ESM syntax is supported.
export {};

import { question, keyInSelect } from "readline-sync";

const spielerNamen = [];

console.log("\nWillkommen beim Wissensduell");

const spielerAnzahl =
  keyInSelect(
    ["Ein Spieler", "Zwei Spieler", "Drei Spieler", "Vier Spieler"],
    "Wieviele Spieler möchten mitspielen?"
  ) + 1;

for (let i = 1; i <= spielerAnzahl; i++) {
  const spielerName = question(`Wie lautet der Name von Spieler ${i}: `);
  spielerNamen.push(spielerName);
}

console.log(spielerNamen[0]);
console.log(spielerNamen[1]);
console.log(spielerNamen[2]);
console.log(spielerNamen[3]);

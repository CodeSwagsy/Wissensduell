export let shuffle = (spielerNamen) => {
  for (let i = spielerNamen.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [spielerNamen[i], spielerNamen[j]] = [spielerNamen[j], spielerNamen[i]];
  }
  return spielerNamen;
};

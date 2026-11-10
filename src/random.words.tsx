const words = [
  "Flugzeug",
  "Auto",
  "Mond",
  "Haus",
  "Computer",
  "Apfel",
  "Baum",
  "Hund",
  "Katze",
  "Sonne",
  "Wolke",
  "Stern",
];

export const randomNumber = Array.from({ length: 8 }, () => ({
  word: words[Math.floor(Math.random() * words.length)],
  number: Math.floor(Math.random() * 10) + 1,
}));

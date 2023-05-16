const shipTypes = [
  { type: "carrier", length: 5 },
  { type: "battleship", length: 4 },
  { type: "cruiser", length: 3 },
  { type: "submarine", length: 3 },
  { type: "destroyer", length: 2 },
];

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function ifLegal(x, y, l) {
  return x + l < 10 && y + l < 10 && x > -1 && y > -1 ? true : false;
}

function randLoc() {
  return Math.floor(Math.random() * 10);
}

function randDir() {
  let num = Math.floor(Math.random() * 2);
  return num > 0 ? "h" : "v";
}

export { shipTypes, arrayEquals, ifLegal, randDir, randLoc };

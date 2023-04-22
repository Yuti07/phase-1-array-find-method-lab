// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
console.log(superbowlWin(games));
function superbowlWin(record) {
    const winRecord = record.find((game) => game.result === "W");
    return winRecord ? winRecord.year : undefined;
  }



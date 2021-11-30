const code1 = function (year, month, day) {
  let ymd = year.slice(-2) + month + day;
  let numStr = parseInt(ymd * 686572);
  return numStr.toString().slice(-6);
};

const code2 = function (year, month, day) {
  let ymd = year.slice(-2) + month + day;
  let numStr = parseInt(ymd * 283848);
  return numStr.toString().slice(-6);
};

const code3 = function (year, month, day) {
  let yParse = parseInt(year.slice(-2));
  let mParse = parseInt(month);
  let dParse = parseInt(day);
  return (yParse * mParse * dParse * 8888).toString().slice(-6);
};

module.exports = {
  code1,
  code2,
  code3,
};

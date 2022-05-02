const ftoc = function (f) {
  const c = (f + 40) / 1.8 - 40
  return Number.isInteger(c) ? c : +c.toFixed(1);
};

const ctof = function (c) {
  const f = c * 1.8 + 32
  return Number.isInteger(f) ? f : +f.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

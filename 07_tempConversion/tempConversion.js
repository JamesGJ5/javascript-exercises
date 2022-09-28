const round1DecimalPlace = x => Math.round(x * 10) / 10;

const ftoc = function(f) {
  c = (f - 32) * 5 / 9;
  return round1DecimalPlace(c);
};

const ctof = function(c) {
  f = (c * 9 / 5) + 32;
  return round1DecimalPlace(f);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

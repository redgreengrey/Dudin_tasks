const squareEveryDigit = (function () {
  const getSquareByDoubleSign = function (x) {
    x = x.toString().split("");

    for (let i = 0; i < x.length; i++) {
      x[i] = x[i] ** 2;
    }

    const result = x.join("");

    return +result;
  };

  const getNumsByMathPower = function (number, power) {
    return Number(
      number
        .toString()
        .split("")
        .map((elem) => Math.pow(elem, power))
        .join("")
    );
  };

  const getNumsByArrayFrom = function (x) {
    return +Array.from(x.toString(), (v) => v * v).join("");
  };

  return {
    getSquareByDoubleSign,
    getNumsByMathPower,
    getNumsByArrayFrom,
  };
})();

console.log(squareEveryDigit.getNumsByArrayFrom(123));
console.log(squareEveryDigit.getNumsByMathPower(222, 3));
console.log(squareEveryDigit.getSquareByDoubleSign(333));

(function (x) {
  x = x.toString().split("");

  for (let i = 0; i < x.length; i++) {
    x[i] = x[i] ** 2;
  }

  const result = x.join("");

  return +result;
})(444);

(function (x) {
  const result = Number(
    x
      .toString()
      .split("")
      .map((elem) => elem * elem)
      .join("")
  );

  return result;
})(123);

(function (x) {
  const result = +Array.from(x.toString(), (v) => v * v).join("");

  return result;
})(23);

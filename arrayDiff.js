(function (a, b) {
  if (a.length === 0) {
    return [];
  }
  if (b.length === 0) {
    return a;
  }

  let result = a;

  for (let i = 0; i < b.length; i++) {
    result = result.filter((el) => el !== b[i]);
  }

  return result;
})([1, 2, 2, 2, 3], [2]);

((a, b) => {
  return a.filter((x) => !b.includes(x));
})([1, 2, 5], [2, 3, 4]);

(function (a1, a2) {
  const a2Set = new Set(a2);

  return a1.filter(function (x) {
    return !a2Set.has(x);
  });
})([1, 2], [2]);

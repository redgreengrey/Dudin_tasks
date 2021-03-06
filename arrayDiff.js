const arrayDiff = (function () {
  const getDifferenceByForLoop = function (a, b) {
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
  };

  const getDifferenceByIncludes = function (a, b) {
    return a.filter((x) => !b.includes(x));
  };

  const getDifferenceBySet = function (a, b) {
    const bSet = new Set(b);

    return a.filter(function (x) {
      return !bSet.has(x);
    });
  };

  return {
    getDifferenceByForLoop,
    getDifferenceByIncludes,
    getDifferenceBySet,
  };
})();

console.log(arrayDiff.getDifferenceByForLoop([1, 2, 3], [3, 4]));
console.log(arrayDiff.getDifferenceByIncludes([1, 2, 3], [3, 4]));
console.log(arrayDiff.getDifferenceBySet([1, 2, 3], [3, 4]));

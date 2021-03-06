const alphabetPosition = (function () {
  const alphabetObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const getNumbersByMap = function (text) {
    text = text.toLocaleLowerCase().replace(/[^A-Za-z]/gi, "");

    return text
      .split("")
      .map((l) => alphabetObject[l])
      .join(" ");
  };

  const getNumbersByCharcode = function (text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let code = text.toUpperCase().charCodeAt(i);
      if (code > 64 && code < 91) {
        result += code - 64 + " ";
      }
    }

    return result.slice(0, result.length - 1);
  };

  const getNumbersByIndex = function (text) {
    let bytes = text.split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for (let i = 0, len = text.length; i < len; i++) {
      bytes[i] = alphabet.indexOf(bytes[i].toLowerCase()) + 1;
    }

    const result = bytes
      .filter((n) => {
        if (n > 0) return n;
      })
      .join(" ");

    return result;
  };

  return {
    getNumbersByMap,
    getNumbersByCharcode,
    getNumbersByIndex,
  };
})();

console.log(alphabetPosition.getNumbersByMap("type some text"));
console.log(alphabetPosition.getNumbersByCharcode("type some text"));
console.log(alphabetPosition.getNumbersByIndex("type some text"));

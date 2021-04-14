function getStatsList(store) {
  return [
    { label: "Здоровье", color: "#e74c3c", width: () => store.getHp },
    { label: "Жажда", color: "#3498DB", width: () => store.getDrinking },
    { label: "Голод", color: "#E67E22", width: () => store.getHunger },
    { label: "Усталость", color: "#95A5A6", width: () => store.getTiredness },
  ];
}

function getControlsList(store) {
  return [
    {
      action: () => store.eat(),
      label: "есть",
      color: "#e74c3c",
      hoverColor: "#C0392B",
    },
    {
      action: () => store.drink(),
      label: "пить",
      color: "#3498DB",
      hoverColor: "#2980B9",
    },
    {
      action: () => store.relax(),
      label: "отдыхать",
      color: "#E67E22",
      hoverColor: "#D35400",
    },
    {
      action: () => store.doSome(),
      label: "работать",
      color: "#95A5A6",
      hoverColor: "#7F8C8D",
    },
  ];
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export { randomInteger, getStatsList, getControlsList };

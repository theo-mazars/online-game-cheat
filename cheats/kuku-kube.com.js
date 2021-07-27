// https://kuku-kube.com/
let sps, rareColor;

setInterval(() => {
  sps = Array.from(document.querySelectorAll("#box>span"));
  [rareColor] = Object.entries(
    sps.reduce((acc, cur) => {
      const color = cur.style.backgroundColor;
      acc[color] ??= 0;
      acc[color]++;
      return acc;
    }, {})
  ).sort(function (a, b) {
    return a[1] - b[1];
  });

  document
    .querySelector(`[style*="background-color: ${rareColor[0]}"]`)
    .click();
}, 1);

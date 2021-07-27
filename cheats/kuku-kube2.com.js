// https://kuku-kube2.com/
var sps, rareColor;
const doc = document.querySelector("iframe").contentDocument;

setInterval(() => {
  sps = Array.from(doc.querySelectorAll("#box>span"));
  [rareColor1, rareColor2] = Object.entries(
    sps.reduce((acc, cur) => {
      const color = cur.style.backgroundColor;
      acc[color] ??= 0;
      acc[color]++;
      return acc;
    }, {})
  ).sort(function (a, b) {
    return a[1] - b[1];
  });

  doc.querySelector(`[style*="background-color: ${rareColor1[0]}"]`).click();
  doc.querySelector(`[style*="background-color: ${rareColor2[0]}"]`).click();
}, 1);

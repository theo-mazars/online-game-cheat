// https://orteil.dashnet.org/cookieclicker/

function spawnCheat() {
  for (var i in Game.shimmerTypes) {
    var me = Game.shimmerTypes[i];
    me.time++;
    var newShimmer = new Game.shimmer(i);
    newShimmer.spawnLead = 1;
    if (Game.Has("Distilled essence of redoubled luck") && Math.random() < 0.01)
      var newShimmer = new Game.shimmer(i);
    me.spawned = 1;
  }
  document.querySelectorAll(".shimmer").forEach((elem) => elem.click());
  document.querySelectorAll(".crate.upgrade").forEach((elem) => elem.click());
  document
    .querySelectorAll(".product.unlocked.disabled")
    .forEach((elem) => elem.click());
}

setInterval(() => spawnCheat(), 250);

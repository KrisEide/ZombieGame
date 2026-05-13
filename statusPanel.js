"use strict";

function updateStatusPanel() {
  const pistolStatus = document.getElementById("pistolStatus");
  const bagAmmoStatus = document.getElementById("bagAmmoStatus");
  const firstAidStatus = document.getElementById("firstAidStatus");
  const knifeStatusEl = document.getElementById("knifeStatus");

  if (!pistolStatus || !bagAmmoStatus || !firstAidStatus || !knifeStatusEl) {
    return;
  }

  try {
    if (!player) return;
  } catch {
    return;
  }

  if (player.hasShotGun) {
    pistolStatus.innerText = `Hagle: ${player.ammoShotGun}`;
    bagAmmoStatus.innerText = `Sekk: ${player.shotGunAmmoSekk}`;
  } else {
    pistolStatus.innerText = `Pistol: ${player.ammoPistol}`;
    bagAmmoStatus.innerText = `Sekk: ${player.ammoSekk}`;
  }

  firstAidStatus.innerText = `Førstehjelp: ${player.førstehjelpsskrin}`;

  if (!player.hasKnife) {
    knifeStatusEl.innerText = "Kniv: ingen";
  } else if (player.knifeUses >= 7) {
    knifeStatusEl.innerText = "Kniv: klar";
  } else if (player.knifeUses >= 4) {
    knifeStatusEl.innerText = "Kniv: slitt";
  } else {
    knifeStatusEl.innerText = "Kniv: svak";
  }
}

setInterval(updateStatusPanel, 200);

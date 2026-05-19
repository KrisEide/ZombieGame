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

  const totalKnives = (player.hasKnife ? 1 : 0) + player.extraKnives.length;

  if (player.hasMachete) {
    if (player.macheteUses >= 7) {
      knifeStatusEl.innerText = `Machete: Skarp`;
    } else if (player.macheteUses >= 4) {
      knifeStatusEl.innerText = `Machete: Slitt`;
    } else {
      knifeStatusEl.innerText = `Machete: Sprukket`;
    }
  } else {
    const totalKnives = (player.hasKnife ? 1 : 0) + player.extraKnives.length;

    if (!player.hasKnife) {
      knifeStatusEl.innerText = `Kniver: ${totalKnives}`;
    } else if (player.knifeUses >= 7) {
      knifeStatusEl.innerText = `Kniver: ${totalKnives} | Skarp`;
    } else if (player.knifeUses >= 4) {
      knifeStatusEl.innerText = `Kniver: ${totalKnives} | Slitt`;
    } else {
      knifeStatusEl.innerText = `Kniver: ${totalKnives} | Sprukket`;
    }
  }
}

setInterval(updateStatusPanel, 200);

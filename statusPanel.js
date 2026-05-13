"use strict";

function updateStatusPanel() {
  const ammoStatus = document.getElementById("ammoStatus");
  const firstAidStatus = document.getElementById("firstAidStatus");
  const knifeStatusEl = document.getElementById("knifeStatus");

  if (!ammoStatus || !firstAidStatus || !knifeStatusEl) return;

  // Hvis player ikke er laget enda, stopp funksjonen
  try {
    if (!player) return;
  } catch {
    return;
  }

  // Ammo-visning
  if (player.hasShotGun) {
    ammoStatus.innerText = `Hagle: ${player.ammoShotGun} | Sekk: ${player.shotGunAmmoSekk}`;
  } else {
    ammoStatus.innerText = `Pistol: ${player.ammoPistol} | Sekk: ${player.ammoSekk}`;
  }

  // Førstehjelp
  firstAidStatus.innerText = `Førstehjelp: ${player.førstehjelpsskrin}`;

  // Knivstatus
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

// Oppdaterer panelet automatisk flere ganger i sekundet.
// Da slipper du å legge updateStatusPanel() inn overalt i koden.
setInterval(updateStatusPanel, 200);

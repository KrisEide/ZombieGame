"use strict";

// -------- første valg ------------------

async function policeStation() {
  console.log("Politistasjonen valgt");
  currentEncounterLocation = "policeStation";
  disableCombatButtons();

  setGameImage("Bilder/PoliceStation1.png");
  story.innerText += "\n\nDu går mot politistasjonen...";
  await tid(3);

  story.innerText += "\n\nBygget ser forlatt ut - men det er spor etter kamp.";
  await tid(3);
  story.innerText += "\n\nHvor vil du gå?";

  showImageChoices([
    {
      image: "Bilder/sidevei.png",
      title: "Gå inn en sidedør",
      action: policeStationSideEntrance,
    },
    {
      image: "Bilder/policeStation_armory.png",
      title: "Finn våpenlageret",
      action: policeStationArmory,
    },
    {
      image: "Bilder/jail1.png",
      title: "Undersøk fengselcellene",
      action: policeStationCells,
    },
  ]);
}

/* ---------- 1) Sideinngang med 2-valg ---------- */
async function policeStationSideEntrance() {
  setGameImage("Bilder/sidevei.png");
  story.innerText += "\n\nDu sniker deg rundt og finner en sideinngang.";
  await tid(4);

  story.innerText +=
    "\n\nDøra står på gløtt. Du går inn og havner i et lagerrom.";
  await tid(3);

  story.innerText += "\n\nEn zombie står bøyd over et skap!";
  await tid(3);

  story.innerText += "\n\nHva gjør du?";
  await tid(4);

  zombie.hp = 10;
  enableCombatButtons();

  afterZombieDeathHandler = async () => {
    story.innerText +=
      "\n\nDu ser en dør som er åpen som leder videre inn og en trapp ned";
    await tid(5);

    showImageChoices([
      {
        image: "Bilder/mainroom.png",
        title: "Gå videre inn",
        action: continueInnside,
      },
      {
        image: "Bilder/KjellerPolitistasjon.png",
        title: "Gå ned trappen",
        action: policeStationBasement,
      },
    ]);
  };
}

/* --- Valg 1: Bakgaten --- */
async function continueInnside() {
  story.innerText += "\n\nDu forlater lageret og går inn i hovedrommet";
  await tid(3);

  story.innerText += "\n\nDu ser inngansdøren til politistasjonen.";
  await tid(3);

  story.innerText += "\n\nVidere ser du våpenlageret og fenselcellene.";
  await tid(3);

  story.innerText += "\n\nHvor går du nå?";
  await tid(3);

  showImageChoices([
    {
      image: "Bilder/policeStation_armory.png",
      title: "Våpenlageret",
      action: policeStationArmory,
    },
    {
      image: "Bilder/jail1.png",
      title: "Undersøk fengselcellene",
      action: policeStationCells,
    },
  ]);
}

/* --- Valg 2: Forlatt hus --- */
async function policeStationBasement() {
  story.innerText += "\n\nDu går ned trappen til kjelleren";
  await tid(4);

  story.innerText +=
    "\n\nEtter noe trinn legger du merke til vann på trappetrinnene.";
  await tid(5);

  story.innerText +=
    "\n\nLenger nede ser du at kjelleren står delvis under vann.";
  await tid(5);

  story.innerText += "\n\nDet kan være noe verdifult her";
  await tid(4);

  story.innerText += "\n\nDu vasser forsiktig ut.";
  await tid(3);

  story.innerText += "\n\nVannet når nesten opp til livet.";
  await tid(3);

  story.innerText += "\n\nDet er overraskende kaldt.";
  await tid(3);

  story.innerText += "\n\nDet er stummende mørkt her nede.";
  await tid(3);

  story.innerText += "\n\nDu drar frem lommelykten";
  await tid(3);
  setGameImage("Bilder/kjeller2.png");

  story.innerText +=
    "\n\nStrålen kutter gjennom mørket og avslører en korridor som strekker seg lenger innover.";
  await tid(5);

  story.innerText +=
    "\n\nDu trekker deg frem gjennom korridoren. Vannet skvulper rundt beina dine, og lommelykten fanger glimt av rustne rør og støvete skap langs veggene";
  await tid(6);

  story.innerText += "\n\nDu trekker deg frem gjennom korridoren.";
  await tid(4);

  story.innerText +=
    "\n\nVannet skvulper rundt beina dine, og lommelykten fanger glimt av rustne rør og hyller langs veggene";
  await tid(5);

  story.innerText += "\n\nEn guffen følelse kryper langs ryggraden.";
  await tid(3);

  story.innerText +=
    "\n\nLyden av egne skritt i vannet blir til ekko, og du kan ikke riste følelsen av at noe følger med.";
  await tid(6);

  story.innerText += "\n\nDu vasser dypere inn mellom hyllene.";
  await tid(5);
  setGameImage("Bilder/kjeller4.png");

  story.innerText += "\n\nDu stopper opp.";
  await tid(2);

  story.innerText += "\n\nVar det et plask bak deg?";
  await tid(2);

  story.innerText +=
    "\n\nHjertet banker hardt. Lommelykten flakker over vannflaten.";
  await tid(4);

  story.innerText += "\n\nMen alt er stille.";
  await tid(3);

  story.innerText +=
    "\n\nHelt innesrt i korridoren lyser du på en dør. Skiltet er enkelt: 'Lager 3'.";
  await tid(5);

  story.innerText += "\n\nDu drar opp døren. ";
  await tid(3);

  story.innerText += "\n\nDen er tung å få opp";
  await tid(3);

  story.innerText += "\n\nDu lyser inn";
  await tid(3);

  story.innerText += "\n\nRekker av hyller. Esker på esker.";
  await tid(4);

  story.innerText += "\n\nDette må ha vært et bevislager.";
  await tid(3);

  story.innerText += "\n\nDu leter i eskene.";
  await tid(2);

  story.innerText += "\n\nDu finner ammo i flere av de";
  await tid(3);

  // loot grad 5. Jackpot.
  const ammoFunnet = 13;
  player.ammoSekk += ammoFunnet;

  story.innerText += `\n\nDu tar med deg ${ammoFunnet} ammo `;
  await tid(4);

  story.innerText +=
    "\n\nEn urolig følelse gjør at du ikke vil bli her nede lenger";
  await tid(4);

  story.innerText += "\n\nDu trekker deg tilbake";
  await tid(3);

  story.innerText += "\n\nDu finner trappen og går ut";
  await tid(5);
  finishEncounter();
}

// -------------------------------------
/* ---------- 2) Våpenlager ---------- */
async function policeStationArmory() {
  setGameImage("Bilder/policeStation_armory.png");
  story.innerText += "\n\nDu følger skiltene mot våpenlageret.";
  await tid(2);

  story.innerText += "\n\nDøren står på gløtt. Du åpner.";
  await tid(3);

  story.innerText += "\n\nEn forferdelig stank treffer deg";
  await tid(3);

  story.innerText += "\n\nNoe dødt som har ligget for lenge.";
  await tid(4);

  story.innerText += "\n\nNoen har allerede raidet det meste... men ikke alt!";
  await tid(2);

  // Lite bakholdsangrep
  story.innerText +=
    "\n\nBak deg - raske skritt! En zombie kaster seg mot deg!";
  await tid(3);

  story.innerText += "\n\nHva gjør du?";
  await tid(2);

  zombie.hp = 10;
  enableCombatButtons();

  afterZombieDeathHandler = async () => {
    story.innerText += "\n\nStillhet";
    await tid(3);

    story.innerText += "\n\nDu sjekker hyller og skap.";
    await tid(3);

    //loot grad 2

    const extraAmmo = 5;
    player.ammoSekk += extraAmmo;
    story.innerText += `\nDu finner ${extraAmmo} ammo i en metallboks.`;
    story.innerText += `\nAmmo i sekken: ${player.ammoSekk}`;
    await tid(5);

    // Liten sjanse på en ekstra kniv

    const rull = Math.floor(Math.random() * 100);
    if (rull < 40) {
      story.innerText += `\nDu finner også en feltkniv!`;
      pickUpNewKnife();
    }

    await tid(3);
    story.innerText += "\n\nDu forlater våpenlageret.";
    await tid(1);
    finishEncounter();
  };
}

// --------------------------------------
/* ---------- 3) FenselCellene ---------- */
async function policeStationCells() {
  setGameImage("Bilder/policeStation_cells.png");
  story.innerText += "\n\nDu går ned korridoren mot cellene.";
  await tid(2);

  story.innerText += "\n\nDører slamrer svakt i trekken. Noen celler er åpne.";
  await tid(3);

  // Stemning uten kamp – lite funn
  story.innerText +=
    "\n\nBak gitteret i en celle sitter en zombie fastlenket. Den når deg ikke.";
  await tid(5);

  story.innerText += "\n\nI et skap finner du en liten forsyningspose.";
  await tid(2);

  //loot grad 2

  player.førstehjelpsskrin += 2;
  story.innerText += `\nDu finner 2 førstehjelpsskrin!`;
  await tid(3);

  story.innerText += "\n\nFornøyd drar du tilbake.";
  await tid(3);

  finishEncounter();
}

"use strict";

const visitedSupplyRunPlace = { gas: false, office: false, police: false };

/* ---------------------------------------------------------
       ------------------ SUPPLY RUN --------------------------- */

function setGameImage(src) {
  const img = document.getElementById("gameImage");
  if (img) {
    img.src = src;
  }
}

function disableCombatButtons() {
  combatEnabled = false;
  ["shoot", "useKnife", "reload", "useFirstAid", "checkInventory"].forEach(
    (id) => {
      const btn = document.getElementById(id);
      if (btn) btn.disabled = true;
    },
  );
}

function enableCombatButtons() {
  combatEnabled = true;
  ["shoot", "useKnife", "reload", "useFirstAid", "checkInventory"].forEach(
    (id) => {
      const btn = document.getElementById(id);
      if (btn) btn.disabled = false;
    },
  );
}

function supplyRun() {
  disableCombatButtons();
  story.innerText =
    "Det er en rolig dag, ingen zombier å se. Du bestemmer deg for å lete etter forsyninger.\n\nHvor går du? (trykk på bilde)";

  const choices = [];

  if (!visitedSupplyRunPlace.office) {
    choices.push({
      image: "Bilder/Office12.png",
      title: "Office building",
      action: () => {
        visitedSupplyRunPlace.office = true;
        officeBuilding();
      },
    });
  }

  if (!visitedSupplyRunPlace.gas) {
    choices.push({
      image: "Bilder/gasStation1.png",
      title: "Bensinstasjon",
      action: () => {
        visitedSupplyRunPlace.gas = true;
        gasStation();
      },
    });
  }

  if (!visitedSupplyRunPlace.police) {
    choices.push({
      image: "Bilder/PoliceStation1.png",
      title: "Politistasjonen",
      action: () => {
        visitedSupplyRunPlace.police = true;
        policeStation();
      },
    });
  }

  showImageChoices(choices);
}

function showImageChoices(choices) {
  const container = document.getElementById("pictureChoiceContainer");
  container.classList.add("choice-active");

  //Fjerner hovedbilde
  const currentImg = document.getElementById("gameImage");
  if (currentImg) currentImg.remove();

  //Fjerner tidligere valg om de er der
  document
    .querySelectorAll(".image-choice-button")
    .forEach((btn) => btn.remove());

  //Legger til nye valg
  choices.forEach((choice) => {
    const newPictureButtons = document.createElement("button");
    newPictureButtons.classList.add("image-choice-button");

    const imgButton = document.createElement("img");
    imgButton.src = choice.image;
    imgButton.alt = choice.title;
    imgButton.title = choice.title;

    newPictureButtons.appendChild(imgButton);

    newPictureButtons.onclick = () => {
      //Fjerner alle velgknapper
      document
        .querySelectorAll(".image-choice-button")
        .forEach((newPictureButtons) => newPictureButtons.remove());

      //denne vil fjerne css-grid layoiten som ødelegger for hovedbilde.
      container.classList.remove("choice-active");

      const newImg = document.createElement("img");
      newImg.id = "gameImage";
      newImg.src = choice.image;
      newImg.alt = choice.title;
      newImg.classList.add("mainPicture");

      //kjører den valgte handlingen
      container.appendChild(newImg);

      choice.action();
    };

    container.appendChild(newPictureButtons);
  });
}

function finishEncounter() {
  story.innerText += "\n\nDu drar tilbake.";
  currentEncounterLocation = null;
  setTimeout(() => {
    nesteDag();
    enableButtons();
  }, 6000);
}

//----------------------------------
// ---------- GAS STATION ----------
//----------------------------------

// -----------------------------
//0.5 på vei til bensinstasjonen

async function gasStation() {
  console.log("Bensinstasjonen valgt");
  currentEncounterLocation = "gasStation";
  story.innerText += "\n\nDu går mot bensinstasjonen";

  await tid(2);
  story.innerText += "\n\nVeien til bensinstasjonen er stille.";
  await tid(3);
  story.innerText +=
    "\n\nDu ser at gresset har trengt seg opp gjennom sprekkene i fortauet.";
  await tid(4);
  story.innerText += "\n\nDu ser bensinstasjonen..";

  await tid(3);
  story.innerText += "\n\nDu hører en gurglende ubehagelig lyd";
  await tid(3);

  story.innerText += "\n\ndu snur deg brått å ser en zombie komme mot deg.";
  setGameImage("Bilder/utenforstasjon.png");
  await tid(3);
  story.innerText += "\n\nDen halter, den er svakere enn de andre";
  await tid(3);
  zombie.hp = 6;
  enableCombatButtons();

  story.innerText += "\n\n hva gjør du?";

  afterZombieDeathHandler = async () => {
    // Ikke nullstill currentEncounterLocation her hvis du planlegger flere encounters inne i stasjonen.
    story.innerText += "\n\nDu hører ingen flere zombier.";
    await tid(3);
    story.innerText += "\nHvor går du nå?";

    //1.0 hvor går du?

    showImageChoices([
      {
        image: "Bilder/Gåinn.png",
        title: "gå inn",
        action: gasStationInside,
      },
      {
        image: "Bilder/Bakstasjonen.png",
        title: "gå bak bensinstasjonen",
        action: gasStationBehind,
      },
      {
        image: "Bilder/Skogsti.png",
        title: "Følg en skogsti ved bensinstasjonen",
        action: gasStationForestPath,
      },
    ]);
  };
}
// -----------------------
//1.0 du har valg å gå inn.
async function gasStationInside() {
  setGameImage("Bilder/bensinstasjoninne.png");
  story.innerText += "\nDu skyver opp glassdøren og går inn";
  await tid(3);

  story.innerText += "\n\nAlt som ligger i hyllene er muggen mat";
  await tid(3);

  story.innerText += "\n\nDu tråkker forbi glassgård på gulvet";
  await tid(3);

  story.innerText += "\n\nEn knirkelyd fra bakgrommet får deg til å stoppe";
  await tid(3);

  story.innerText += "\n\nDu tar frem pistolen";
  await tid(3);

  story.innerText += "\n\nDu åpner døren";
  await tid(3);

  story.innerText += "\n\nDet er ingenting der";
  await tid(3);

  story.innerText += "\n\nDu senker pistolen og fortsetter å lete";
  await tid(3);

  story.innerText +=
    "\n\nDu roter gjennom hyllene, men finner bare tomme esker og støv";
  await tid(4);

  story.innerText += "\n\nDu forlater bensinstasjonen";
  await tid(3);

  //loot? 0 loot her.

  finishEncounter();
}

//---------------------
//1.0 du har valgt å gå rundt på baksiden.
async function gasStationBehind() {
  story.innerText += "\n\nDu smyger deg stille rundt bensinstasjonen";
  await tid(4);

  story.innerText += "\n\nDu ser noen biler";
  await tid(2);

  story.innerText +=
    "\n\nDu har ofte funnet zombier inne i biler så du tar frem pistolen";
  await tid(5);

  story.innerText += "\n\nDu ser en varebil i overraskende god stand";
  await tid(4);

  story.innerText += "\n\nDu åpner lasterommet";
  await tid(4);

  story.innerText += "\n\nDu ser en zombie våkne til live";
  await tid(3);

  story.innerText += "\n\nHva gjør du?";

  zombie.hp = 10;
  enableCombatButtons();

  // Hva som skjer etter at denne zombien dør:
  afterZombieDeathHandler = async () => {
    story.innerText += "\n\nDu leter gjennom lasterommet";
    await tid(5);

    //loot
    story.innerText += "\n\nAlt du finner er 1 patron.";
    await tid(3);
    player.ammoSekk += 1;
    story.innerText += `\n\nAmmo i sekken: ${player.ammoSekk}`;
    await tid(4);
    story.innerText += "\n\nHva vil du gjøre nå?";

    //2.0 hva gjør du
    showImageChoices([
      {
        text: "Klatre opp stige 2.0",
        image: "Bilder/stige.png",
        title: "Klatre opp til taket",
        action: gasStationRooftop,
      },
      {
        text: "Leite i bilene 2.0",
        image: "Bilder2/carsBehind.png",
        title: "Sjekk resten av bilene",
        action: gasStationSearchCars,
      },
    ]);
  };
}

//----------------------
//2.0 du klatrer på taket
async function gasStationRooftop() {
  story.innerText += "\n\nDu klatrer opp på taket. ";
  await tid(4);

  story.innerText += "\n\nDu ser ingen zombier";
  await tid(3);

  story.innerText += "\n\nDu leter rundt i pappesker og annet rot";
  await tid(4);

  story.innerText += "\n\nIngenting av verdi";
  await tid(3);

  story.innerText += "\n\nDu tar et siste blikk over taket";
  await tid(3);

  story.innerText += "\n\nDu klatrer ned stigen og drar tilbake";
  await tid(4);

  finishEncounter();
}

//En "winning-condtion" handling. Masse ammo
//------------------------
//3.0 du fortsetter å lete blant bilene
async function gasStationSearchCars() {
  story.innerText += "\n\nDu leter gjennom flere biler";
  await tid(4);

  story.innerText += "\n\nDe fleste har ikke noe verdifult";
  await tid(4);

  story.innerText += "\n\nDu ser en siste bil litt lenger unna";
  await tid(4);

  story.innerText += "\n\nDen er i bedre stand enn de forrige";
  await tid(4);

  story.innerText += "\n\nDørene er låste";
  await tid(5);

  story.innerText += "\n\nNoe tar tak i anklen din!";
  await tid(4);

  story.innerText += "\n\ndu skvetter til og detter bakover";
  await tid(4);

  story.innerText += "\n\nEn zombie krabber på deg fra undersiden av bilen";
  await tid(4);

  story.innerText += "\n\nDu prøver å dytte den av deg";
  await tid(4);

  story.innerText += "\n\nDu prøver desperat å ikke bli bitt";
  await tid(4);

  story.innerText += "\n\nDu kaster deg bakover og får reist deg opp";
  await tid(5);

  story.innerText += "\n\nHva gjør du?";
  await tid(4);

  zombie.hp = 10;
  enableCombatButtons();

  afterZombieDeathHandler = async () => {
    await tid(3);
    story.innerText += "\n\nDu blir stående og puste tungt etter kampen.";
    await tid(4);
    story.innerText += "\n\nKroppen verker.";
    await tid(2);

    story.innerText += "\n\nDu tvinger deg selv til å sjekke bilen.";
    await tid(4);

    story.innerText += "\nDu åpner hanskerommet med skjelvende hender.";
    await tid(4);

    story.innerText += "\nInni ligger en pakke med tolv patroner.";
    await tid(4);

    player.ammoSekk += 12;
    story.innerText += `\nAmmo i sekken: ${player.ammoSekk}`;
    await tid(4);

    story.innerText += "\nI setet ligger en gammel sekk.";
    await tid(4);

    story.innerText +=
      "\nDu roter oppi den og trekker frem et førstehjelpsskrin.";
    await tid(4);

    player.førstehjelpsskrin += 1;
    story.innerText += `\nFørstehjelpsskrin: ${player.førstehjelpsskrin}`;
    await tid(5);

    story.innerText +=
      "\nMed nye forsyninger, men kroppen fortsatt sliten, trekker du deg.";
    await tid(7);

    finishEncounter();
  };
}

//1. Du følger skogstien
async function gasStationForestPath() {
  story.innerText += "\n\nDu følger stien ved bensinstasjonen...";
  await tid(4);

  story.innerText += "\n\nEtter en stund kommer du til et kryss midt i skogen.";
  setGameImage("Bilder/cross.png");
  await tid(6);

  story.innerText +=
    "\n\nTre stier leder i forskjellige retninger. Skiltene er uleselige.";
  await tid(6);

  story.innerText +=
    "\n\nEn svak vind rusker i tretoppene, men ellers er det stille.";
  await tid(6);

  story.innerText += "\n\nHvilken vei går du?";

  showImageChoices([
    {
      image: "Bilder/rettFrem.png",
      title: "Fortsett rett frem",
      action: forestPathForward,
    },
    {
      image: "Bilder/venstre.png",
      title: "Gå til venstre",
      action: forestPathLeft,
    },
    {
      image: "Bilder/høyre.png",
      title: "Gå til høyre",
      action: forestPathRight,
    },
  ]);
}

async function forestPathForward() {
  story.innerText += "\n\nDu fortsetter rett frem langs stien...";
  await tid(4);

  story.innerText += "\n\nTrærne tynnes ut og du ser en forlatt speiderleir.";
  await tid(6);
  setGameImage("Bilder/speiderleir.png");
  story.innerText +=
    "\n\nTelt ligger halvkollapset, en vimpel klaprer i vinden.";
  await tid(5);

  story.innerText += "\n\nEn mumling fra et telt.";
  await tid(3);
  story.innerText += "\n\nnoe rører på seg.";
  await tid(3);

  story.innerText += "\n\nDet kommer en zombie frem fra teltet.";
  await tid(4);
  setGameImage("Bilder3/Zombiefromtent.png");

  zombie.hp = 10;
  enableCombatButtons();
  story.innerText += "\n\nHva gjør du?";

  afterZombieDeathHandler = async () => {
    story.innerText += "\n\nDu ser forsiktig inn i teltene";
    await tid(4);
    // Loot
    const ammoFunnet = 6;
    player.ammoSekk += ammoFunnet;
    story.innerText += `\nDu finner ${ammoFunnet} ammo i en våt sekk.`;

    await tid(5);

    // Ekstra kniv sjanse

    if (Math.random() < 0.3) {
      // 30% kniv
      story.innerText += "\nI en verktøykasse finner du en speiderkniv.";
      pickUpNewKnife();
      await tid(5);
    }

    if (Math.random() < 0.2) {
      // 20% medkit
      story.innerText += "\nI en sidelomme ligger et førstehjelpsskrin.";
      player.førstehjelpsskrin += 1;
      story.innerText += `\nFørstehjelpsskrin: ${player.førstehjelpsskrin}`;
      await tid(5);
    }

    story.innerText += "\n\nLeiren er ellers tom. Du vender nesen tilbake.";
    await tid(6);
    finishEncounter();
  };
}

//2. Vei til venstre
// 2. Vei til venstre – Elv og bro
async function forestPathLeft() {
  story.innerText += "\n\nDu tar veien til venstre...";
  await tid(3);

  story.innerText +=
    "\n\nDu hører elva før du ser den. En gammel trebro henger skjevt.";
  await tid(4);
  setGameImage("Bilder/elv.png");
  story.innerText += "\n\nEt lavt stønn kommer fra buskene.";
  await tid(2);

  story.innerText += "\n\nEn svak zombie kommer ut på broen.";
  await tid(3);

  story.innerText += "\n\nDen går sakte. Den ser ikke særlig farlig ut.";
  await tid(3);

  zombie.hp = 5;
  enableCombatButtons();
  story.innerText += "\n\nHva gjør du?";

  afterZombieDeathHandler = async () => {
    story.innerText +=
      "\n\nBroa knirker, men holder. På motsatt side står en gammel sekk.";
    await tid(5);

    //loot? 2 FS
    player.førstehjelpsskrin += 2;
    story.innerText += "\nDu finner 2 førstehjelpsskrin i sekken";
    await tid(4);

    player.ammoSekk += 1;
    story.innerText += "\nDu finner 1 patron på bakken som ser brukbar ut";
    await tid(4);

    story.innerText += "\n\nDu snur og går tilbake samme vei.";
    await tid(5);
    finishEncounter();
  };
}

// 2. Vei til høyre – Jakttårn
async function forestPathRight() {
  story.innerText += "\n\nDu tar veien til høyre...";
  await tid(4);
  setGameImage("Bilder/jakttarn.png");
  story.innerText += "\n\nMellom granene reiser et gammelt jakttårn seg.";
  await tid(3);
  story.innerText += "\n\nDu nærmer deg - en zombie kommer frem under trappa!";
  await tid(3);
  setGameImage("Bilder3/zombievedtårnet.png");

  zombie.hp = 10;
  enableCombatButtons();
  story.innerText += "\n\nHva gjør du?";

  afterZombieDeathHandler = async () => {
    story.innerText += "\n\nDet blir stille igjen.";
    await tid(3);

    story.innerText += "\n\nDu klatrer forsiktig opp i jakttårnet.";
    await tid(5);

    story.innerText += "\n\nDu finner en machete i en boks.";
    await tid(4);
    setGameImage("Bilder3/macheteITårnet.png");

    pickUpMachete(13);
    await tid(4);

    story.innerText +=
      "\n\nBladet er tungt og skarpt, den er i overraskende god stand";
    await tid(5);

    story.innerText +=
      "\n\nUtsikten er god, men du finner ingenting annet av verdi.";
    await tid(4);

    story.innerText += "\n\nDu klatrer ned igjen og drar tilbake.";
    await tid(5);

    finishEncounter();
  };
}

"use strict";

/// <reference path="index.html"/>

let day7DeathMessage = null;
let day7DeathImage = null;

function gameOverImg(src) {
  day7DeathImage = src;
}

function gameOverTxt(txt) {
  day7DeathMessage = txt;
}

// En påminnelse av hvordan gameOver() funker --------------

//   function gameOver(deathMessage = "") {
//   const gameImg = document.getElementById("gameImage");
//   if (isItGameOver) return;
//   isItGameOver = true;
//   disableButtons(); //stopper alle knappene siden spiller har tapt.
//   story.innerText += `\n\n${deathMessage}`;

//   if (day7DeathMessage) {
//     story.innerText += `\n\n${deathMessage}`;
//     day7DeathMessage = null;
//   }

//   //bytter til GAME OVER-bilde
//   if (gameImg) {
//     gameImg.src = "Bilder/GAME_OVER.png";
//   }
// }

async function day7TheEnd() {
  day.innerText = "|| Dag 7 - Siste dag ||";
  animateDayChange();
  disableCombatButtons();

  //intro dag 7 starter.
  story.innerText = "";
  await tid(4);
  story.innerText = "Helikopter lyden river deg ut av søvnen.";
  await tid(7);
  story.innerText += "\n\nHelikoptere er her, mye tidligere enn du trodde.";

  await tid(3);
  story.innerText += "\n\nDu griper sekken.";

  await tid(2);
  story.innerText += "\n\nDu spurter etter lyden.";
  await tid(2);
  story.innerText +=
    "\n\nMålet i dag er klart: bli med helikopteret til Safe-Zone.";
  await tid(7);
  story.innerText +=
    "\n\nEn skikkelse lenger nede i gaten lager en lyd og kommer mot deg.";
  setGameImage("Bilder/zombie_alley.png");
  await tid(6);

  story.innerText += "\n\nDu kommer ikke forbi zombien du må drepe den.";
  await tid(3);
  zombie.hp = 14;
  enableCombatButtons();
  story.innerText += "\n\nHva gjør du?";

  //-- 1 game over mulighet
  //gameOverImg("Bilder/gameOverTest.png");

  afterZombieDeathHandler = async () => {
    gameOverTxt(null);
    disableCombatButtons();

    setGameImage("Bilder/run2.png");
    story.innerText += "\n\nDu river deg løs og løper videre.";

    await tid(7);
    story.innerText += "\n\nDu følger helikopterlyden, ut av byen.";
    await tid(5);
    story.innerText += "\n\nHelikopterlyden kommer nærmere, du ser det!";
    await tid(3);
    setGameImage("Bilder/helikopter3.png");
    await tid(4);
    story.innerText += "\n\nKan det være sant, er jeg reddet?";
    await tid(3);
    story.innerText += "\n\nVent.";
    await tid(5);
    story.innerText += "\n\nNoe er galt.";
    await tid(3);
    story.innerText += "\n\nHelikopteret vingler.";
    await tid(3);
    story.innerText += "\n\nDet er ute av kontroll.";
    await tid(5);
    story.innerText += "\n\nDet skjer.";
    await tid(3);
    story.innerText += "\n\nEn skarp skrening, en skrikende metalllyd.";
    await tid(3);
    story.innerText += "\n\nog så et smell som løfter støv og varme.";
    await tid(4);
    story.innerText += "\n\nDu stanser. Målløs. Din eneste redning brenner.";
    await tid(5);
    setGameImage("Bilder/helikopter5.png");
    story.innerText += "\n\nDu faller på kne, er det over?.";
    await tid(8);
    story.innerText += "\n\n..Du tviler på om noen i helikopteret overlevde.";
    await tid(5);
    story.innerText += "\n\nDu må sjekke!";
    await tid(3);
    story.innerText += "\n\nDu går nærmere vraket.";
    await tid(3);
    setGameImage("Bilder/helikopter6.png");
    story.innerText += "\n\nTo skillekser i flammer vakler seg ut fra vraket.";
    await tid(6);

    story.innerText += "\n\nPilotene.";
    await tid(3);
    story.innerText += "\n\nDe ble til zombier i luften.";
    await tid(3);
    story.innerText +=
      "\n\nDu gjør deg klar til kamp mot de to pilot zombiene.";
    await tid(3);
    story.innerText += "\n\nHva gjør du?";
    enableCombatButtons();
    //-- 2 game over mulighet.

    zombie.hp = 12;

    //-- første zombie fra helikoptere dør.
    afterZombieDeathHandler = async () => {
      disableCombatButtons();
      story.innerText += "\n\nEn zombie nede, nå til neste!";
      await tid(4);
      enableCombatButtons();
      zombie.hp = 12;
      story.innerText += "\n\nHva gjør du?";

      //-- andre zombie fra helikopteret dør.
      afterZombieDeathHandler = async () => {
        disableCombatButtons();
        story.innerText += "\n\nStillhet.";
        setGameImage("Bilder/deadzombies.png");
        await tid(6);
        story.innerText += "\n\nBare knitring fra vraket.";
        await tid(4);
        story.innerText +=
          "\n\nDu ser en brukbra kniv på den ene pilot zombien.";
        pickUpNewKnife();
        await tid(4);
        story.innerText += "\n\nDu leter gjennom vraket.";
        await tid(5);

        story.innerText +=
          "\n\nBak i vraket ligger rester av esker, svidd og ødelagt.";
        await tid(4);
        story.innerText +=
          "\n\n I en av dem finner du 3 patroner som fortsatt kan brukes.";
        await tid(5);

        //additional ammo
        player.ammoSekk += 3;
        await tid(2);
        story.innerText +=
          "\n\nEt førstehjelpsskrin ligger klemt under et sete.";
        player.førstehjelpsskrin += 1;
        await tid(5);
        story.innerText += "\n\nDu går lenger frem i vraket, inn til cockpit.";
        await tid(4);
        story.innerText += "\n\nDu finner et kart.";
        await tid(4);
        story.innerText += "\n\nSafe Zone er merket med en rød sirkel.";
        await tid(4);
        story.innerText +=
          "\n\nDu følger linjen med fingrene. Det er nærmere enn du trodde.";
        await tid(4);
        story.innerText += "\n\nDet er fortsatt håp.";
        await tid(4);
        story.innerText +=
          "\n\nDu må studere kartet og finne den tryggeste veien.";
        await tid(4);
        story.innerText +=
          "\n\nRøyken og flammene fra helikopteret har stagnert.";
        await tid(4);
        story.innerText += "\n\nDu velger å campe ved vraket.";
        await tid(6);

        nesteDag();
      };
    };
  };
}

// ------------------------------------------------
// ----- dag 8. veien til Safe Zone kapittel 2-----
// ------------------------------------------------

async function day7TheEndChapter2() {
  day.innerText = "|| Dag 8 - Safe Zone ||";
  animateDayChange();
  disableCombatButtons();
  await tid(4);

  //-------------------------------------------
  setGameImage("Bilder/camphelikopter2.png");
  story.innerText =
    "\n\nDu våkner ved helikoptervraket. Det er kaldt i luften.";
  await tid(4);
  story.innerText += "\n\nKartet ligger brettet ved siden av deg.";
  await tid(4);
  story.innerText += "\n\nDu studerte det grundig i går kveld.";
  await tid(4);
  story.innerText += "\n\nDu fant en trygg rute helt frem til Safe zone.";
  await tid(5);
  story.innerText +=
    "\n\nPlanen er klar: holde deg til denne ruten, unngå bråk og komme frem i livet.";
  await tid(6);
  story.innerText +=
    "\n\nMens du pakker, kommer du borti en løs boks på veggplaten og en walkie talkie faller ned.";
  await tid(5);
  story.innerText +=
    "\n\nDu tar den opp, snur på bryterne og prøver å få liv i den.";
  await tid(4);
  story.innerText += "\n\nmen alt du hører er skurr og knitring.";
  await tid(6);
  story.innerText +=
    "\n\nSå, plutselig, bryter en desperat stemme gjennom støyen.";
  await tid(4);
  story.innerText += "\n\n «Portene holder ikke… trenger forsterkning NÅ!»";
  await tid(5);
  story.innerText += "\n\nDu stivner.";
  await tid(4);
  story.innerText += "\n\nDe trenger hjelp ved Safe-Zone.";
  await tid(4);
  story.innerText += "\n\nPlanen din var trygg - men ikke rask";
  await tid(4);
  story.innerText += "\n\nDu må velge:";
  await tid(3);
  story.innerText += "\n\nholde deg til den trygge ruten, eller.";
  await tid(4);
  story.innerText += "\n\nTa en kortere vei og komme frem raskere.";
  await tid(4);
  story.innerText += "\n\nHva velger du?";

  showImageChoices([
    {
      image: "Bilder/saferoute.png",
      title: "Den trygge ruten",
      action: safeRoute,
    },
    {
      image: "Bilder/rask.png",
      title: "Den raske ruten",
      action: fastRoute,
    },
  ]);
}

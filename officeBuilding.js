"use strict";

//-------------------------------------
// ---------- OFFICE BUILDING ----------
//--------------------------------------

async function officeBuilding() {
  console.log("Kontorbygget valgt");
  currentEncounterLocation = "officeBuilding";
  disableCombatButtons();

  setGameImage("Bilder/office1.png");
  story.innerText +=
    "\nDu går mot kontorbygget for å lete etter forsyninger...";
  await tid(5);

  story.innerText += "\n\nHvor vil du gå videre?";
  await tid(5);

  showImageChoices([
    {
      image: "Bilder/office_stairs_up.png",
      title: "Gå oppover i bygget",
      action: officeUpstairs,
    },
    {
      image: "Bilder/office_lobby.png",
      title: "Se deg rundt i første etasje",
      action: officeFirstFloor,
    },
    {
      image: "Bilder/office_basement.png",
      title: "Gå ned til kjelleren",
      action: officeBasement,
    },
  ]);
}

async function officeUpstairs() {
  setGameImage("Bilder/office_stairs_up.png");
  story.innerText += "\n\nDu går opp trappen...";
  await tid(2);

  story.innerText += "\n\ndu tar frem pistolen og lister deg videre.";
  await tid(3);

  story.innerText +=
    "\n\nAlle dørene er ødelagt. Du ser grundig gjennom rommene.";
  await tid(4);

  story.innerText += "\n\nI enden av korridoren står en lukket dør.";
  await tid(5);

  story.innerText += "\n\n Du åpner den, forsiktig...";
  await tid(5);

  story.innerText += "\n\nTo zombier kommer mot deg!";
  setGameImage("Bilder2/tozombier.png");
  await tid(6);

  story.innerText += "\n\nDu konsentrerer deg på den nærmeste først.";
  await tid(3);

  zombie.hp = 10;

  story.innerText += "\n\nHva gjør du?";
  enableCombatButtons();
  await tid(4);

  afterZombieDeathHandler = async () => {
    await tid(4);
    story.innerText += "\n\nDen andre zombien kaster seg mot deg.";
    await tid(3);

    story.innerText += "\n\nDu velter nesten i bakken.";
    await tid(4);

    story.innerText += "\n\nDu dytter den unna, våpnet hevet.";
    await tid(4);

    story.innerText += "\n\nHva gjør du nå?";
    await tid(4);
    enableCombatButtons();

    zombie.hp = 10;

    afterZombieDeathHandler = async () => {
      story.innerText += "\n\nKroppene ligger urørlige på gulvet.";
      await tid(6);

      //loot - office andre etasje.
      story.innerText += "\n\nDu finner 4 ammo i rommet.";
      player.ammoSekk += 4;
      await tid(5);

      story.innerText += "\n\nDu finner også et førstehjelsskrin.";
      player.førstehjelpsskrin += 1;
      await tid(5);

      story.innerText += "\n\nHvor går du videre?";
      await tid(4);

      story.innerText += "\n\nFortsett opp til taket av bygningen.";
      await tid(4);

      story.innerText += "\n\nEller let mer i etasjen du er i.";
      await tid(5);

      //dra tilbake eller gå videre?

      showImageChoices([
        {
          image: "Bilder2/moterom.png",
          title: "Fortsett videre i etasjen",
          action: officeMeetingRoom,
        },
        {
          image: "Bilder2/tak1.png",
          title: "Gå opp til taket",
          action: officeRoof,
        },
      ]);
    };
  };
}

async function officeMeetingRoom() {
  story.innerText +=
    "\n\nDu åpner en dør og trer inn i et stort møterom med glassvegger.";
  await tid(6);

  story.innerText +=
    "\n\nLukten av kaffe som har stått altfor lenge henger fortsatt i lufta.";
  await tid(6);
  setGameImage("Bilder2/kontor1.png");

  story.innerText +=
    "\n\nDu smyger deg langs veggen. Et glass knaser under skoen din.";
  await tid(6);

  story.innerText += "\n\nStillhet. Så et lite metallisk klirr fra bordenden.";
  await tid(4);

  story.innerText += "\n\nPå enden av bordet står en svart konferansekoffert.";
  await tid(5);
  setGameImage("Bilder2/koffert.png");

  story.innerText +=
    "\n\nI motsetning til resten av rommet er den nesten merkelig ren.";
  await tid(5);

  story.innerText += "\n\nDu lar hånden gli over lokket.";
  await tid(4);

  story.innerText += "\n\nStøvet rundt har lagt seg som en ramme.";
  await tid(5);

  story.innerText +=
    "\n\nSelve kofferten ser ut som om noen nylig har berørt den.";
  await tid(5);

  story.innerText += "\n\nLåsen er sprukket, men lokket sitter fast. ";
  await tid(4);
  story.innerText += "\n\nDu drar i håndtaket. Ingenting.";
  await tid(4);

  story.innerText += "\n\nDu prøver å riste den - den gir ikke etter.";
  await tid(5);

  story.innerText += "\n\nEt hul klirr høres innenfra, metall mot metall.";
  await tid(5);

  story.innerText +=
    "\n\nMed knokene hvite griper du låsen og forsøker å vri den opp.";
  await tid(5);

  story.innerText += "\n\nDen gir ikke etter. Fingrene verker.";
  await tid(4);

  story.innerText += "\n\nFrustrert dytter du kofferten ned på gulvet.";
  await tid(4);

  story.innerText +=
    "\n\nLyden av metall som treffer teppet gir et ubehagelig ekko i rommet.";
  await tid(5);

  story.innerText +=
    "\n\nDu leter febrilsk etter noe å bruke – et stolbein, et bordhjørne, hva som helst.";
  await tid(6);

  story.innerText += "\n\nDu finner et metallrør.";
  await tid(4);

  story.innerText += "\n\ndu setter metallrøret mot hengselet og presser.";
  await tid(4);

  story.innerText += "\n\nKofferten rikker seg ikke.";
  await tid(4);

  story.innerText += "\n\nDu biter tennene sammen, hever foten og sparker til.";
  await tid(4);

  story.innerText +=
    "\n\nLokket spretter halvveis opp med et hult smell, som om rommet holder pusten.";
  await tid(6);

  story.innerText += "\n\nDu bøyer deg ned og trekker opp lokket.";
  await tid(4);

  story.innerText += "\n\nØynene dine møter mørket inni.";
  await tid(4);

  story.innerText += "\n\npapirbunker, gamle ledninger";
  await tid(4);

  // Loot: 2 kniver
  story.innerText +=
    "\n\nUnder en bunke notatblokker ligger to store kniver - blanke og skarpe.";
  pickUpNewKnife();
  pickUpNewKnife();
  await tid(6);

  story.innerText += "\nKnivene er dine. Kofferten kan dra til helvete.";
  await tid(5);

  story.innerText += "\nDu sniker deg tilbake";
  await tid(4);

  finishEncounter();
}

//Loot?  5 ammo.

async function officeRoof() {
  story.innerText += "\n\nDu fortsetter oppover i bygget";
  await tid(4);

  story.innerText +=
    "\n\nDu presser den tunge døren til taket opp med skulderen.";
  await tid(5);

  story.innerText +=
    "\n\nDen gir etter med et skrap. Kald vind river i klærne.";
  await tid(5);

  story.innerText += "\n\nGrusen knaser under føttene.";
  await tid(4);

  story.innerText += "\n\nAntenner og ventilasjonskasser kaster lange skygger.";
  await tid(5);

  story.innerText +=
    "\n\nDu holder deg lav og beveger deg mellom de største kassene.";
  await tid(5);

  story.innerText +=
    "\n\nNoe blafrer i vinden - en slitt plastpose som har hektet seg fast i en rist.";
  await tid(6);

  story.innerText +=
    "\n\nBak risten skimter du en liten verktøykasse, rusten og våt.";
  await tid(5);

  story.innerText += "\n\nLåsen er knekt.";
  await tid(3);

  story.innerText +=
    "\n\nDu lirker lokket opp og kjenner lukten av olje og metall.";
  await tid(5);

  // Loot: 5 ammo
  player.ammoSekk += 5;
  story.innerText += "\n\nI bunnen ligger en plastpose surret med gaffatape.";
  await tid(5);

  story.innerText +=
    "\n\nDu river den opp: fem patroner ruller ut i hånden din.";
  story.innerText += `\n\nAmmo i sekken: ${player.ammoSekk}`;
  await tid(6);

  story.innerText += "\n\nIngen andre tegn til liv her oppe.";
  await tid(4);

  finishEncounter();
}

// Loot? 2 kniver

// 2) Første etasje -> +5 ammo, +1 førstehjelpsskrin -> hjem
async function officeFirstFloor() {
  setGameImage("Bilder/office_lobby.png");
  story.innerText += "\n\nDu bestemmer deg for å bli i første etasje.";
  await tid(4);

  story.innerText += "\n\nDet er rotete her.";
  await tid(3);

  story.innerText += "\n\nDet har vært folk her før.";
  await tid(3);

  story.innerText += "\n\nDu går videre.";
  await tid(3);

  story.innerText +=
    "\n\nDu finner et rom med en sovepose på gulvet og tomme hermetikkbokser.";
  await tid(4);

  story.innerText +=
    "\n\nVed siden av soveposen står det en sekk. Du leter gjennom den...";
  await tid(4);

  story.innerText += "\n\nDu finner et førstehjelpsskrin.";
  await tid(5);

  // LOOT — 1 FS

  player.førstehjelpsskrin += 1;

  story.innerText += `\nFørstehjelpsskrin: ${player.førstehjelpsskrin}`;
  await tid(2);

  story.innerText += "\n\nDu drar tilbake til campen.";
  await tid(2);

  finishEncounter();
}

// 3) Kjelleren -> skummel runde, ingen kamp -> hjem
async function officeBasement() {
  setGameImage("Bilder/office_basement.png");
  story.innerText += "\n\nDu går ned trappen til kjelleren.";
  await tid(4);

  story.innerText += "\n\nDu tar frem lommelykten.";
  await tid(5);

  story.innerText += "\n\nDu skvetter til!";
  await tid(2);

  story.innerText += "\n\nEn død zombie på gulvet.";
  await tid(3);

  story.innerText += "\n\nDu tar frem pistolen og lister deg videre.";
  await tid(4);

  story.innerText += "\n\nDet er kjølig.";
  await tid(3);

  story.innerText += "\n\nEn guffen følelse kommer over deg.";
  await tid(5);

  story.innerText += "\n\nDu hører en dunkelyd.";
  await tid(3);

  story.innerText += "\n\nLommelykten treffer en rad med gamle skap...";
  await tid(4);

  story.innerText += "\n\nEtt av dem rister spesielt mye.";
  await tid(4);

  story.innerText += "\n\n Du ser forsiktig inn...";
  await tid(4);

  story.innerText +=
    "\n\nEn zombie sitter fast. Du lar den være og lister deg videre.";
  await tid(5);

  story.innerText +=
    "\n\nDu lyser rundt i kjelleren, men finner ingenting annet enn mørke og rå lukt";
  await tid(5);

  story.innerText +=
    "\n\nKlokken tikker — det begynner å bli sent. Du gir opp letingen og drar tilbake.";
  await tid(5);

  //loot/zombie?

  finishEncounter();
}

"use strict";

//-------------------------------------
// ---------- OFFICE BUILDING ----------
//--------------------------------------

async function officeBuilding() {
  console.log("Kontorbygget valgt");
  currentEncounterLocation = "officeBuilding";
  disableCombatButtons();

  setGameImage("Bilder/Office12.png");
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
  await tid(4);

  setGameImage("Bilder2/kontor1.png");
  story.innerText +=
    "\n\nLukten av gammel kaffe og støv henger fortsatt i lufta.";
  await tid(4);

  story.innerText +=
    "\n\nDu smyger deg langs veggen. Glass knaser under skoen din.";
  await tid(3);

  story.innerText +=
    "\n\nVed siden av en veltet stol ligger et førstehjelpsskrin.";
  player.førstehjelpsskrin += 1;
  await tid(4);

  story.innerText += `\n\nFørstehjelpsskrin: ${player.førstehjelpsskrin}`;
  await tid(4);

  story.innerText += "\n\nEt lite metallisk klirr får deg til å stoppe.";
  await tid(3);

  setGameImage("Bilder2/koffert.png");
  story.innerText += "\n\nPå enden av bordet står en svart konferansekoffert.";
  await tid(4);

  story.innerText += "\n\nDen er støvete, men merkene rundt den ser ferske ut.";
  await tid(4);

  story.innerText += "\n\nLåsen er sprukket, men lokket sitter fortsatt fast.";
  await tid(4);

  story.innerText +=
    "\n\nDu finner et metallrør på gulvet og presser det inn ved hengselet.";
  await tid(4);

  story.innerText +=
    "\n\nEt hardt rykk. Et metallisk knekk. Lokket spretter opp.";
  await tid(4);

  story.innerText +=
    "\n\nInni ligger gamle papirer, ledninger og noe langt pakket inn i en skitten klut.";
  await tid(5);

  story.innerText += "\n\nDu drar kluten til side og finner en machete.";
  pickUpMachete();
  setGameImage("Bilder3/Machetekoffert.png");
  await tid(6);

  story.innerText +=
    "\n\nBladet er tungt og skarpt nok, men sporene etter tidligere bruk er tydelige.";
  await tid(5);

  story.innerText += "\n\nDu tar det du fant og sniker ned trappen";
  await tid(5);

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

  story.innerText += "\n\nI bunnen ligger en plastpose surret med gaffatape.";
  await tid(5);

  story.innerText +=
    "\n\nDu river den opp: fem patroner ruller ut i hånden din.";
  // Loot: 5 ammo
  player.ammoSekk += 5;
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

  story.innerText += "\n\nLuften blir kaldere, og du tar frem lommelykten.";
  await tid(4);

  story.innerText += "\n\nDu skvetter til!";
  await tid(2);

  setGameImage("Bilder3/BasementDeadZombie.png");
  story.innerText += "\n\nEn død zombie ligger midt i gangen.";
  await tid(4);

  story.innerText += "\n\nDu holder pistolen mot hodet dens.";
  await tid(3);

  story.innerText += "\n\nDen rører seg ikke.";
  await tid(3);

  story.innerText += "\n\nDu går forsiktig videre.";
  await tid(4);

  story.innerText += "\n\nEn dump lyd kommer fra mørket.";
  await tid(3);

  story.innerText += "\n\nLommelykten treffer en rad med gamle skap.";
  setGameImage("Bilder3/Lommelyktpåskap.png");
  await tid(4);

  story.innerText += "\n\nEtt av skapene rister.";
  await tid(3);

  story.innerText += "\n\nEn råtten hånd slår ut gjennom sprekken i skapdøren.";
  await tid(3);
  setGameImage("Bilder3/zombieskap.png");

  story.innerText += "\n\nDu hopper bakover og holder nesten på å skyte.";
  await tid(4);

  story.innerText += "\n\nMen zombien sitter fast.";
  await tid(3);

  story.innerText +=
    "\n\nSkapdøren knirker. Den kan komme seg løs hvis du blir her lenge nok.";
  await tid(5);

  story.innerText += "\n\nDu lyser raskt rundt i kjelleren.";
  await tid(3);

  story.innerText +=
    "\n\nMugg. Ødelagte stoler. Gamle mapper. Ingenting verdt risikoen.";
  setGameImage("Bilder3/Mugg.png");
  await tid(4);

  story.innerText += "\n\nDette stedet er ikke verdt et eneste skudd.";
  await tid(4);

  story.innerText += "\n\nDu trekker deg tilbake og drar tilbake til campen.";
  await tid(5);

  //loot/zombie?

  finishEncounter();
}

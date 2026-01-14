/// <reference path="index.html"/>
let kills = 1;

async function safeRoute() {
  day.innerText = "|| Dag 8 - Safe Zone ||";
  animateDayChange();
  disableCombatButtons();
  story.innerText = "";

  await tid(4);
  story.innerText = "Du holder deg til ruten du fant.";
  await tid(5);
  story.innerText += "\n\nFærre zombier, men det er tryggere.";
  await tid(5);
  story.innerText +=
    "\n\nStemmen fra walkie-talkien kverner fortsatt i hodet ditt: Safe-Zone trenger hjelp.";
  await tid(6);
  story.innerText += "\n\nDu tar en avstikker inn i skogen.";
  await tid(5);
  story.innerText +=
    "\n\nDu har tenkt til å komme deg ut på en motorvei på den andre siden";
  await tid(5);

  // --- Første zombie ---

  story.innerText += "\n\nStien slynger seg dypere inn i skogen.";
  await tid(5);
  story.innerText +=
    "\n\nTrærne står tett, og en råtten lukt driver på vinden.";
  await tid(5);
  story.innerText += "\n\nDu hører knasing av kvister foran deg.";
  await tid(4);
  setGameImage("Bilder/zombie_sti.png");
  story.innerText +=
    "\n\nEn enslig zombie vakler frem fra skyggene. Blodet renner fra kjeven.";
  zombie.hp = 14; // 12? 14?
  await tid(4);
  enableCombatButtons();
  story.innerText += "\n\nHva gjør du?";

  afterZombieDeathHandler = async () => {
    disableCombatButtons();
    await tid(3);
    story.innerText += "\n\nZombien faller livløs ned i gresset.";
    await tid(5);
    story.innerText += "\n\nDu tørker svetten av pannen og fortsetter videre.";
    await tid(6);

    // --- Motorvei etter zombie 1 ---
    setGameImage("Bilder/motorvei1.png");
    story.innerText += "\n\nSkogen åpner seg";
    await tid(4);
    story.innerText += "\n\ndu trår ut på motorveien";
    await tid(6);
    story.innerText +=
      "\n\nVeibanen er stille, men sporene etter kaos er overalt.";
    await tid(6);
    story.innerText += "\n\nMørke blodspor trekker seg over asfalten.";
    await tid(6);
    story.innerText +=
      "\n\nRustne biler står forlatt, noen med dørene åpne som om eierne flyktet i panikk.";
    await tid(6);
    story.innerText += "\n\nStillheten er uhyggelig.";
    await tid(4);
    story.innerText += "\n\nFør den brytes.";
    await tid(3);

    // --- Andre zombie --- SISTE ZOMBIE FØR SHOTGUN.
    setGameImage("Bilder/zombieroad1.png");
    story.innerText +=
      "\n\nEn zombie kravler ut gjennom frontruten på en knust bil.";
    await tid(6);
    story.innerText +=
      "\n\nDen løfter hodet mot deg, øynene matte, klærne dryppende av blod.";
    zombie.hp = 15; // 15?
    await tid(4);
    enableCombatButtons();
    story.innerText += "\n\nHva gjør du?";

    afterZombieDeathHandler = async () => {
      disableCombatButtons();
      story.innerText +=
        "\n\nZombien ligger vridd over panseret, stille for alltid.";
      await tid(6);
      story.innerText +=
        "\n\nDu trekker pusten dypt og ser videre oppover motorveien.";
      await tid(6);

      // --- Militær lastebil og shotgun ---
      setGameImage("Bilder/lastebil.png");
      story.innerText +=
        "\n\nNoen hundre meter lenger fremme står en forlatt militærlastebil på tvers av veien.";
      await tid(8);
      story.innerText +=
        "\n\nBakdøren henger åpen, innholdet spredt utover asfalten.";
      await tid(6);
      story.innerText += "\n\nDu klatrer opp og leter blant kasser og utstyr.";
      await tid(6);

      setGameImage("Bilder/shotguneske.png");
      story.innerText +=
        "\n\nI en trekasse ligger en hagle. Tung. Kald. Klar til bruk";
      player.ammoShotGun = 2;
      await tid(6);
      story.innerText +=
        "\n\nVed siden av finner du flere esker med patroner. Du fyller magasinet og stapper resten i sekken.";
      player.shotGunAmmoSekk = 40;
      updateRangedCombatIconShotgun();
      await tid(7);
      story.innerText += "\n\n(shotgun ammo i sekken: 40.)";
      await tid(4);
      story.innerText += "\n\nDette er akkurat det du trengte.";
      await tid(5);
      story.innerText += "\n\nEn gamechanger.";
      await tid(4);
      story.innerText += "\n\nDu hopper ned fra bilen og trekker pusten.";
      await tid(5);
      story.innerText += "\n\nEt siste stykke venter.";
      await tid(4);

      story.innerText += "\n\nVeien foran deg er stille - men ikke lenge";
      await tid(5);

      //bilde av zombie som kommer, første zombie etter hagla er funnet.
      setGameImage("Bilder/firstZombieShotgun.png");
      story.innerText += "\n\nEn zombie velter ut fra grøfta, rett foran deg..";
      await tid(4);

      story.innerText += "\n\nDu hever hagla, for første gang.";
      await tid(3);
      setGameImage("Bilder/firstZombieShotgun.png");
      await tid(3);

      // første zombie etter du fant hagla.
      enableCombatButtons();
      story.innerText += "\n\nHva gjør du?";
      afterZombieDeathHandler = async () => {
        await tid(7);
        story.innerText +=
          "\n\nDu kjenner slaget i skuldra. Hagla svarte brutalt - akkurat som forventet.";
        await tid(5);

        // --- Pusterom før neste zombie ---

        story.innerText += "\n\nDu går videre langs motorveien.";
        await tid(4);
        ("\n\nStillheten Kommer tilbake.");
        await tid(4);

        setGameImage("Bilder/motorvei_gårvidere.png");
        story.innerText += "\n\nVind blåser løse papirark over asfalten.";
        await tid(4);
        story.innerText +=
          "\n\nDu tråkker over glasskår, lyden knaser under støvlene.";
        await tid(5);
        story.innerText +=
          "\n\nAlt minner deg om hvor mange som aldri kom frem.";
        await tid(5);
        story.innerText +=
          "\n\nEn veltet lastebil hviler kjevt ved siden av veien";
        await tid(4);
        ("\n\nStillheten brytes av lyder innenfra.");
        await tid(4);

        story.innerText += "\n\nPlutselig velter en zombie frem,";
        await tid(4);
        setGameImage("Bilder/veltet_lastebil_zombie.png");
        zombie.hp = 10;
        enableCombatButtons();
        await tid(4);
        story.innerText += "\n\nHva gjør du?";
        afterZombieDeathHandler = async () => {
          story.innerText += "\n\nDu trekker pusten og fortsetter, raskere nå.";
          await tid(7);

          story.innerText += "\n\nI horisonten reiser Safe-Zone seg.";
          await tid(5);
          story.innerText +=
            "\n\nSkudd og skrik fyller luften. Du strammer grepet rundt hagla og øker tempoet.";
          await tid(6);
          story.innerText +=
            "\n\nDu kommer frem. En massiv mur av tømmerstokker bundet sammen med stål.";
          await tid(6);
          setGameImage("Bilder/safeZone_shotgun_first.png");
          await tid(5);
          story.innerText +=
            "\n\nZombier klorer desperat på portene. Kroppene henger allerede i piggtråd langs veggen.";
          await tid(7);
          story.innerText +=
            "\n\nPå innsiden ser du folk med rifler som fyrer ned mot mengden utenfor.";
          await tid(6);

          // ---------- KAMP VED PORTEN ---------

          story.innerText +=
            "\n\nEn av zombiene bryter gjennom rekken og stormer rett mot deg!";
          await tid(4);
          story.innerText += "\n\nHva gjør du?";
          enableCombatButtons();
          zombie.hp = 10;

          //1 zombie død
          afterZombieDeathHandler = async () => {
            disableCombatButtons();
            story.innerText +=
              "\n\nZombien ligger stille, men en ny kommer mot deg fra mengden!";
            await tid(5);
            story.innerText += "\n\nHva gjør du?";
            zombie.hp = 10;
            enableCombatButtons();

            // 2 zombier død
            afterZombieDeathHandler = async () => {
              disableCombatButtons();
              story.innerText +=
                "\n\nDe levende på innsiden skriker og skyter desperat ned i mengden.";
              await tid(6);
              story.innerText += "\n\nKruttrøyken henger i lufta.";
              await tid(3);
              story.innerText += "\n\nEn til er på vei mot deg.";
              await tid(3);
              story.innerText += "\n\nHva gjør du?";
              zombie.hp = 10;
              enableCombatButtons();

              // 3 zombier død
              afterZombieDeathHandler = async () => {
                disableCombatButtons();
                story.innerText +=
                  "\n\nDu rykker hagla opp igjen. En til kommer , kjeven drypper av blod!";
                await tid(6);
                story.innerText += "\n\nHva gjør du?";
                zombie.hp = 10;
                enableCombatButtons();

                // 4 zombier død
                afterZombieDeathHandler = async () => {
                  disableCombatButtons();
                  story.innerText +=
                    "\n\nSkuddet dundrer. Du kjenner skuldra verke - men en til stormer rett mot deg!";
                  await tid(5);
                  story.innerText += "\n\nHva gjør du?";
                  zombie.hp = 10;
                  enableCombatButtons();

                  //SLUTTEN--------------------------------------------
                  // 5 og siste zombie dør

                  afterZombieDeathHandler = async () => {
                    disableCombatButtons();
                    story.innerText +=
                      "\n\nKruttrøyken henger i lufta. De siste faller foran deg.";
                    await tid(6);

                    story.innerText +=
                      "\n\nFra innsiden høres et rop: «Åpne portene - han er med oss!»";
                    await tid(6);

                    story.innerText +=
                      "\n\nPortene glir opp. Du krysser terskelen - blodig, men levende.";
                    await tid(6);
                    story.innerText +=
                      "\n\nFolk ser på deg med frykt og respekt. Du er fremme.";
                    await tid(6);
                    story.innerText += "\n\nGRATULERER, DU KOM FREM I LIVET";
                    setGameImage("Bilder/GRATULERER_SHOTGUN.png");
                  };
                };
              };
            };
          };
        };
      };
    };
  };
}

async function fastRoute() {
  disableCombatButtons();

  story.innerText = "\n\nDu velger den raske veien.";
  await tid(4);
  story.innerText += "\nDu presser tempoet.";
  await tid(3);
  story.innerText += "\nKampen ved safe-zonen er allerede i gang.";
  await tid(3);

  story.innerText += "\n\nÅkeren foran deg ender i en gammel grusvei.";
  await tid(4);
  story.innerText +=
    "\nEt skjevt treskilt: «EVAKUERINGSRUTE» - pilen peker rett frem.";
  await tid(5);
  story.innerText += "\nDu følger pilen. Dette er veien!";
  await tid(4);

  story.innerText += "\n\nVeien stopper i et sperreverk av betong og piggtråd.";
  await tid(5);
  story.innerText += "\nEt karanteneskilt blafrer i vinden.";
  await tid(3);
  story.innerText += "\nEn zombie kommer mot deg";
  await tid(3);
  setGameImage("Bilder/FastRoute1.png");
  enableCombatButtons();
  story.innerText += "\nHva gjør du?";

  zombie.hp = 10;

  afterZombieDeathHandler = async () => {
    // -----------felt-sykehusområdet ------------
    disableCombatButtons();
    await tid(4);
    story.innerText += "\nEt felt-sykehusområde ligger forlatt.";
    await tid(3);
    story.innerText += "\nTeltduker blafrer.";
    await tid(3);
    story.innerText += "\nDet lukter desinfeksjon og jord.";
    await tid(3);
    story.innerText += "\nEn zombie drar føttene etter seg mellom bårene.";
    await tid(4);
    setGameImage("Bilder/FastRoute2.png");
    await tid(2);
    enableCombatButtons();
    story.innerText += "\nHva gjør du?";
    await tid(3);

    zombie.hp = 12;

    afterZombieDeathHandler = async () => {
      disableCombatButtons();
      await tid(4);
      story.innerText += "\n\nDu fortsetter videre gjennom leiren.";
      await tid(3);
      story.innerText += "\n\nDu snubler frem, pusten brenner i lungene.";
      await tid(3);
      story.innerText += "\n\nDu ser en grønn militærkasse.";
      await tid(3);
      story.innerText += "\n\n«DECON / BURN UNIT»";
      await tid(3);
      story.innerText += "\n\nEn flammekaster!";
      await tid(3);
      setGameImage("Bilder/FastRoute3.png");
      await tid(2);
      story.innerText += "\nDu stivner et øyeblikk.";
      await tid(3);
      story.innerText += "\nHjertet hamrer.";
      await tid(3);
      story.innerText += "\nDette er akkurat det du trengte.";
      await tid(3);

      story.innerText +=
        "\n\nFør du rekker å sjekke den ut hører du en zombie.";
      await tid(3);
      story.innerText += "\nZombien vakler mot deg.";
      await tid(3);
      setGameImage("Bilder/FastRoute4.png");
      await tid(3);
      story.innerText += "\nDu sukker tungt og retter deg opp.";
      await tid(4);
      story.innerText +=
        "\nDu er sliten, kroppen verker, men du hever våpenet.";
      await tid(4);
      enableCombatButtons();
      story.innerText += "\nHva gjør du?";
      await tid(3);

      zombie.hp = 12;

      afterZombieDeathHandler = async () => {
        disableCombatButtons();
        //----------- finner flammekaster ----------------

        story.innerText += "\nZombien faller.";
        await tid(3);

        story.innerText += "\nDu skanner området.";
        await tid(3);
        story.innerText += "\nStillhet.";
        await tid(3);
        story.innerText += "\nDu retter blikket tilbake mot flammekasteren.";
        await tid(3);
        story.innerText +=
          "\nDu løfter den. Tung, stabil. Beholderen klunker - full.";
        await tid(5);
        hasFlameThrower = true;
        updateRangedCombatIconFlamethrower();
        story.innerText +=
          "\nDu kjenner varmen bare av å holde den. Dette blir brutalt.";
        await tid(4);
        story.innerText += "\nDette blir brutalt.";
        await tid(4);
        story.innerText +=
          "\n\nDu begynner å gå igjen, flammekasteren tung over skulderen.";
        await tid(5);

        //--------- Siste strekting --------------------
        story.innerText += "\n\nMurene til Safe-Zone reiser seg i horisonten.";
        await tid(4);
        story.innerText += "\nSkudd og skrik bærer i vinden.";
        await tid(4);
        story.innerText +=
          "\nDu strammer grepet rundt flammekasteren og øker tempoet.";
        await tid(4);

        story.innerText += "\nSå ser du det tydelig.";
        await tid(4);
        setGameImage("Bilder/FastRoute5.png");

        story.innerText += "\n\nPorten er omringet av zombier.";
        await tid(4);
        story.innerText += "\n\nDe kaster seg mot tømmerstokkene.";
        await tid(4);
        story.innerText += "\n\nDet er kaos.";
        await tid(3);

        story.innerText +=
          "\nFra toppen av muren skyter forsvarerne ned i mengden.";
        await tid(5);
        story.innerText += "\nDe er for få og for slitne.";
        await tid(4);
        story.innerText += "\nDu har nådd frem i siste liten.";
        await tid(4);

        await useFlamethrowerFinale();
      };
    };
  };
}

//-----------------------------------------
//----- FLAMTHROWER SEKVENS ---------------
//-----------------------------------------

async function useFlamethrowerFinale() {
  disableButtons();
  setGameImage("Bilder/flame3.png");
  await tid(4);

  story.innerText = "\n\nDet kommer zombier mot deg, hva gjør du?";
  await ventPåAktivering();

  // Startsekvens

  story.innerText += "\n\nDu river av sikringen på flammekasteren.";
  await tid(4);

  story.innerText += "\nDu.";
  await tid(1);
  story.innerText += "\nTrykker.";
  await tid(1);
  story.innerText += "\ninn.";
  await tid(1);
  story.innerText += "\navtrekkeren.";
  await tid(2);

  // Ildstormen

  story.innerText +=
    "\nEn sammenhengende søyle av ild flommer ut og fyller mengden med zombier.";
  await tid(4);

  await killcountFive();
  await tid(4);
  setGameImage("Bilder/flame4.png");

  story.innerText +=
    "\n\nZombiene velter inn i flammen - de stanser, nøler, rykker bakover som om selve natten tok fyr.";
  await tid(4);
  await killcountFive();
  await tid(3);
  story.innerText +=
    "\n\nDu svinger munningen i brede buer, og alt foran deg blir til glødende skygger.";
  await tid(4);
  await killcountFive();
  await tid(3);
  story.innerText +=
    "\n\nNoen få kommer nær. Du presser dem tilbake med et nytt, hardt drag av flamme.";
  await tid(4);
  await killcountFive();
  await tid(2);

  // Intensiveringen
  story.innerText += "\n\nRop fra veggen: «Hold linja! Hold linja!»";
  await tid(5);
  story.innerText +=
    "\n\nDu låser grepet, pumper mer drivstoff inn i stormen av zombier.";

  await tid(6);
  setGameImage("Bilder/Flame1.png");
  await killcountFast();

  story.innerText +=
    "\n\nLukten av brent plast, vått treverk og aske. Du hoster, men slipper ikke avtrekkeren.";
  await tid(6);
  await killcountSlow();
  story.innerText +=
    "\n\nEn gruppe bryter ut til siden. Du vender deg, sveiper - tomrommet bak dem fylles av glør.";
  await tid(3);
  await killcountFive();
  await tid(2);

  // Redningsøyeblikk
  story.innerText +=
    "\n\nRundt deg ligger brente kropper. Resten vakler frem fra røyken.";
  await tid(2);
  setGameImage("Bilder/Flame5.png");
  await tid(4);
  await killcountFive();
  await tid(3);
  story.innerText +=
    "\n\nDu låser grepet på flammekasteren, åpner ventilen og presser dem tilbake med et nytt, hardt drag.";
  await tid(4);
  await killcountFiveLast();
  await tid(5);

  // Vendepunktet
  story.innerText +=
    "\n\nMørket foran deg trekker seg tilbake. Lydene endrer seg - fra storm til glør.";
  await tid(4);

  story.innerText += "\nDu senker flammekasteren bare et øyeblikk, lytter.";
  await tid(3);
  story.innerText += "\nIngen nye steg.";
  await tid(3);
  story.innerText += "\nBare knitringen fra det som var en horde.";
  await tid(3);

  // Avslutning

  story.innerText += "\nDu puster ut.";
  await tid(3);
  story.innerText += "\nSvetten renner.";
  await tid(3);

  story.innerText += "\nNoen hever hånden fra barrikaden. «Klart.»";
  await tid(5);
  story.innerText += "\nDu nikker tilbake. Aske virvler. Safe-zonen står.";
  await tid(6);
  story.innerText += "\n\nGRATULERER, DU KOM FREM I LIVET!";
  setGameImage("Bilder/GRATULERER_SHOTGUN.png");
  await tid(40);
}

async function killcountFive() {
  await tid(0.6);
  story.innerText += "\n\nKill count: " + kills;
  kills++;
  await tid(0.6);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.6);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.6);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.6);
  story.innerText += "\nKill count: " + kills;
  kills++;
}

async function killcountFiveLast() {
  await tid(0.7);
  story.innerText += "\n\nKill count: " + kills;
  kills++;
  await tid(0.9);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(1.1);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(1.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(1.5);
  story.innerText += "\nKill count: " + kills;
  kills++;
}

async function killcountSlow() {
  await tid(0.1);
  story.innerText += "\n\nKill count: " + kills;
  kills++;
  await tid(0.1);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.1);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nZill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;

  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.4);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.5);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.6);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.7);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.7);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.7);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.7);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.7);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.7);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.7);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.7);
  story.innerText += "\nKill count: " + kills;
  await tid(3);
  //33 kills 1/3 til 100.
}

async function killcountFast() {
  kills++;

  await tid(1.0);
  story.innerText += "\n\nKill count: " + kills;
  kills++;
  await tid(0.9);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.8);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.7);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.6);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.5);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.4);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.3);
  story.innerText += "\nKill count: " + kills;
  kills++;

  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.2);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.1);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.1);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.1);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.1);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.1);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.1);
  story.innerText += "\nKill count: " + kills;
  kills++;
  await tid(0.1);
  story.innerText += "\nKill count: " + kills;
  await tid(5);

  //33 kills 1/3 til 100.
}

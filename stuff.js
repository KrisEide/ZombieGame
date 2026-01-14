async function killcount() {
  let kills = 0;

  kills++;

  await tid(0.5);
  story.innerText += "\n\nKill count:" + kills;
}

async function useFlamethrowerFinale() {
  disableButtons();

  // Startsekvens
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  killcount();
  story.innerText +=
    "\n\nDu river av sikringen på flammekasteren og kjenner varmen slå mot ansiktet.";
  await tid(2);
  story.innerText +=
    "\nBarrikaden knirker. Skrik fra innsiden. Tramping fra utsiden.";
  await tid(2);
  story.innerText += "\nDu trykker inn avtrekkeren.";
  await tid(1);

  // Ildstormen
  story.innerText +=
    "\nEn sammenhengende søyle av ild flommer ut og fyller portåpningen.";
  await tid(2);
  story.innerText +=
    "\nZombiene velter inn i flammen - de stanser, nøler, rykker bakover som om selve natten tok fyr.";
  await tid(2);
  story.innerText +=
    "\nDu svinger munningen i brede buer, og alt foran deg blir til glødende skygger.";
  await tid(2);
  story.innerText +=
    "\nNoen få kommer nær. Du presser dem tilbake med et nytt, hardt drag av flamme.";
  await tid(2);

  // Intensiveringen
  story.innerText += "\nRopegap fra veggen: «Hold linja! Hold linja!»";
  await tid(2);
  story.innerText +=
    "\nDu klatrer frem på sandsekkene, låser grepet, pumper mer drivstoff inn i stormen.";
  await tid(2);
  story.innerText +=
    "\nLukten av brent plast, vått treverk og aske. Du hoster, men slipper ikke avtrekkeren.";
  await tid(2);
  story.innerText +=
    "\nEn gruppe bryter ut til siden. Du vender deg, sveiper - tomrommet bak dem fylles av glør.";
  await tid(2);

  // Redningsøyeblikk
  story.innerText +=
    "\nTo overlevende snubler i porten. Du dekker dem med et kort, presist belte av ild og gir dem et nikk videre inn.";
  await tid(2);
  story.innerText +=
    "\nBak deg tar noen tak i en såret og sleper ham til feltsykehuset. Du hører raske, rolige stemmer.";
  await tid(2);

  // Vendepunktet
  story.innerText +=
    "\nMørket foran deg trekker seg tilbake. Lydene endrer seg – fra storm til glør.";
  await tid(2);
  story.innerText +=
    "\nDu senker våpenet bare et øyeblikk, lytter. Ingen nye steg. Bare knitringen fra det som var en horde.";
  await tid(2);

  // Avslutning
  story.innerText +=
    "\nDu puster ut. En siste kort puls av flamme for å rense stillheten.";
  await tid(2);
  story.innerText += "\nNoen hever hånden fra barrikaden. «Klart.»";
  await tid(1);
  story.innerText += "\nDu nikker tilbake. Aske virvler. Safe-zonen står.";
  await tid(2);
}

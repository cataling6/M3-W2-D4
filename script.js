const viaggi = [
  {
    id: 1,
    img: "./assets/destinazioni/Parigi.jpg",
    prezzo: 500,
    destinazione: "Parigi",
    dataPartenza: "2023-01-15",
    dataRitorno: "2023-01-20",
    descrizione: "Esplora la città dell'amore e visita la Torre Eiffel.",
    periodo: "invernale",
    css: "parigi",
  },
  {
    id: 2,
    img: "./assets/destinazioni/new-york.webp",
    prezzo: 1100,
    destinazione: "New York",
    dataPartenza: "2023-12-20",
    dataRitorno: "2024-01-05",
    descrizione: "Scopri la Grande Mela e visita Times Square e Central Park.",
    periodo: "invernale",
    css: "ny",
  },
  {
    id: 3,
    img: "./assets/destinazioni/bcn.webp",
    prezzo: 400,
    destinazione: "Barcellona",
    dataPartenza: "2023-05-05",
    dataRitorno: "2023-05-10",
    descrizione: "Goditi il sole sulla spiaggia di Barceloneta e visita la Sagrada Familia.",
    periodo: "estivo",
    css: "bcn",
  },
  {
    id: 4,
    img: "./assets/destinazioni/tokyo.webp",
    prezzo: 600,
    destinazione: "Tokyo",
    dataPartenza: "2023-07-15",
    dataRitorno: "2023-07-22",
    descrizione: "Esplora la cultura giapponese e prova deliziosi piatti sushi.",
    periodo: "estivo",
    css: "tokyo",
  },
  {
    id: 5,
    img: "./assets/destinazioni/roma.jpg",
    prezzo: 450,
    destinazione: "Roma",
    dataPartenza: "2023-05-10",
    dataRitorno: "2023-05-17",
    descrizione: "Ammira il Colosseo e assapora la cucina italiana autentica.",
    periodo: "estivo",
    css: "roma",
  },

  {
    id: 6,
    img: "./assets/destinazioni/havana.avif",
    prezzo: 1450,
    destinazione: "Havana",
    dataPartenza: "2023-01-10",
    dataRitorno: "2023-01-27",
    descrizione: "Ammira il Colosseo e assapora la cucina italiana autentica.",
    periodo: "inverale",
    css: "hvn",
  },
  {
    id: 7,
    img: "./assets/destinazioni/porto-rico.jpg",
    prezzo: 1200,
    destinazione: "Puerto Rico",
    dataPartenza: "2023-02-02",
    dataRitorno: "2023-02-14",
    descrizione: "Ammira il Colosseo e assapora la cucina italiana autentica.",
    periodo: "invernale",
    css: "pr",
  },
  {
    id: 8,
    img: "./assets/destinazioni/bucarest.webp",
    prezzo: 650,
    destinazione: "Bucarest",
    dataPartenza: "2023-08-10",
    dataRitorno: "2023-08-17",
    descrizione: "Ammira il Colosseo e assapora la cucina italiana autentica.",
    periodo: "estivo",
    css: "bcr",
  },

  {
    id: 9,
    img: "./assets/destinazioni/amsterdam.jpg",
    prezzo: 1000,
    destinazione: "Amsterdam",
    dataPartenza: "2023-08-10",
    dataRitorno: "2023-08-27",
    descrizione: "Ammira il Colosseo e assapora la cucina italiana autentica.",
    periodo: "estivo",
    css: "amt",
  },
  {
    id: 10,
    img: "./assets/destinazioni/Copparo.JPG",
    prezzo: 10000,
    destinazione: "Copparo",
    dataPartenza: "2023-06-02",
    dataRitorno: "2023-06-14",
    descrizione: "Venite a trovarmi",
    periodo: "estivo",
    css: "cpp",
  },
];

const offerta = [];
const periodo = [];
const offertaAppend = document.querySelector("#offerte > div.row");
const estivoAppend = document.querySelector("#estivo > div.row");

//::begin mi prendo i 4 viaggi meno cari presentandoli come offerta
viaggi.sort(function (a, b) {
  return a.prezzo - b.prezzo;
});

for (let i = 0; i < 4; i++) {
  offerta.push(viaggi[i]);
}
//::end mi prendo i 4 viaggi meno cari presentandoli come offerta

//:: begin stampo i 4 viaggi in offerta:
for (let i = 0; i < offerta.length; i++) {
  offertaAppend.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="card">
                <img src="${offerta[i].img}" class="card-img-top" alt="${offerta[i].destinazione}" />
                <div class="card-body">
                  <h4 class="card-title"><span>${offerta[i].destinazione}</span></h4>
                  <p class="card-text">Dal: <span>${offerta[i].dataPartenza}</span></p>
                  <p class="card-text">Al: <span>${offerta[i].dataRitorno}</span></p>
                  <div class="align-content-center justify-content-center d-flex"><a href="#" class="btn btn-outline-info">Scopri offerta</a></div>
                </div>
              </div>
            </div>`;
}
//:: fine stampo i 4 viaggi in offerta:

//::begin mi prendo e mi stampo i 6 viaggi estivi cercando per perido:
for (let i = 0; i < viaggi.length; i++) {
  if (viaggi[i].periodo === "estivo") {
    periodo.push(viaggi[i]);
  }
}

for (let i = 0; i < periodo.length; i++) {
  estivoAppend.innerHTML += `<div class="col-xl-2 col-md-4 col-sm-6 col-6">
                <div class="card">
                  <img src="${periodo[i].img}" class="card-img-top" alt="${periodo[i].destinazione}" />
                  <div class="card-body">
                    <h4 class="card-title"><span>${periodo[i].destinazione}</span></h4>
                    <p class="card-text">Dal: <span>${periodo[i].dataPartenza}</span></p>
                    <p class="card-text">Al: <span>${periodo[i].dataRitorno}</span></p>
                    <div class="align-content-center justify-content-center d-flex"><a href="#" class="btn btn-outline-info">Scopri offerta</a></div>
                  </div>
                </div>
              </div>`;
}

//::fine mi prendo e mi stampo i 6 viaggi estivi cercando per perido;

//:begin lastminute
let viaggiLastMinute = [];
//mi scelgo in modo casuale  x (in quyesto caso 4) destinazioni da usare per i last minute
function lastMinute() {
  // creo una coppia dell'array di partenza per poter gestire ed evitare di avere 1 destinazione scelta piu di una votla
  let viaggi2 = viaggi.slice();
  viaggiLastMinute = [];

  for (let i = 0; i < 4; i++) {
    //viaggiLastMinute.push(viaggi[Math.floor(Math.random() * viaggi.length)]);
    let indiceCasuale = Math.floor(Math.random() * viaggi2.length);
    let elemento = viaggi2.splice(indiceCasuale, 1)[0];
    viaggiLastMinute.push(elemento);
  }
}

lastMinute();

const lastMinuteContainer = document.querySelector("#last-minute");

for (let i = 0; i < viaggiLastMinute.length; i++) {
  lastMinuteContainer.innerHTML += `<div class="col-6 col-lg-3 p-1 mt-2">
          <div class="card ${viaggiLastMinute[i].css} border-0"><label class="bg-blur text-center text-bg-danger">${viaggiLastMinute[i].destinazione}</label><img src="./assets/last_minute.png" class="last-minute-logo" alt="" /></div>
        </div>`;
}
let lastMinuteDiv = document.querySelector(".last-minute");
lastMinuteDiv.style.color = "blue";

//::end lastminute

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
    descrizione: "Esplora la cultura caraibica",
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
    descrizione: "Esplora la cultura caraibica",
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
    descrizione: "Visita la terra di Dracula",
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
    descrizione: "La terra dei funghi allucinogeni",
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
                  <div class="align-content-center justify-content-center d-flex"><input type="button" onclick="openModal('${offerta[i].id}')" class="btn btn-outline-info col-12" data-bs-toggle="modal" data-bs-target="#modalCard"  value="Scopri offerta"></div>
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
                    <div class="align-content-center justify-content-center d-flex"><input type="button" onclick="openModal('${periodo[i].id}')" class="btn btn-outline-info col-12" data-bs-toggle="modal" data-bs-target="#modalCard"  value="Scopri offerta"></div>
                  </div>
                </div>
              </div>`;
} //data-bs-toggle="modal" data-bs-target="#modalCard"

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

//::end lastminute
annunciTotal();
//::begin delete cards
const deleteCards = document.querySelector("#deleteCards");
deleteCards.addEventListener("click", function () {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].remove();
  }
  annunciTotal();
});
//::end delete cards

//::begin conta annunci
function annunciTotal() {
  let totalCards = document.querySelectorAll(".card");
  totalCards = totalCards.length;
  const applyNr = document.querySelector("#totale");
  applyNr.innerHTML = `${totalCards} Annunci totali + 1 offerta del giorno`;
}
//::end conta annunci

//::begin modalCard
const openModal = function (id) {
  let found;
  console.log(id);
  for (let i = 0; i < viaggi.length; i++) {
    if (id == viaggi[i].id) {
      found = viaggi[i];
      break;
    }
  }
  const modalBody = document.querySelector("#modalTarget");
  modalBody.innerHTML = `
  <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${found.destinazione}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
  <div id="carouselExampleRide" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="./assets/destinazioni/${found.css}/1.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./assets/destinazioni/${found.css}/2.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./assets/destinazioni/${found.css}/3.jpg" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <ul>
              <li>Prezzo: ${found.prezzo}</li>
              <li>Descrizione: ${found.descrizione}</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            <button type="button" class="btn btn-primary">Prenota</button>
          </div>`;
};
//:end modalCard

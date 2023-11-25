const viaggi = [
  {
    id: 1,
    img: "",
    prezzo: 500,
    destinazione: "Parigi",
    dataPartenza: "2023-01-15",
    dataRitorno: "2023-01-20",
    descrizione: "Esplora la città dell'amore e visita la Torre Eiffel.",
  },
  {
    id: 2,
    img: "",
    prezzo: 1100,
    destinazione: "New York",
    dataPartenza: "2023-02-10",
    dataRitorno: "2023-02-18",
    descrizione: "Scopri la Grande Mela e visita Times Square e Central Park.",
  },
  {
    id: 3,
    img: "",
    prezzo: 400,
    destinazione: "Barcellona",
    dataPartenza: "2023-03-05",
    dataRitorno: "2023-03-10",
    descrizione: "Goditi il sole sulla spiaggia di Barceloneta e visita la Sagrada Familia.",
  },
  {
    id: 4,
    img: "",
    prezzo: 600,
    destinazione: "Tokyo",
    dataPartenza: "2023-04-15",
    dataRitorno: "2023-04-22",
    descrizione: "Esplora la cultura giapponese e prova deliziosi piatti sushi.",
  },
  {
    id: 5,
    img: "",
    prezzo: 450,
    destinazione: "Roma",
    dataPartenza: "2023-05-10",
    dataRitorno: "2023-05-17",
    descrizione: "Ammira il Colosseo e assapora la cucina italiana autentica.",
  },

  {
    id: 6,
    img: "",
    prezzo: 1450,
    destinazione: "Havana",
    dataPartenza: "2023-01-10",
    dataRitorno: "2023-01-27",
    descrizione: "Ammira il Colosseo e assapora la cucina italiana autentica.",
  },
  {
    id: 7,
    img: "",
    prezzo: 1200,
    destinazione: "Puerto Rico",
    dataPartenza: "2023-03-02",
    dataRitorno: "2023-03-14",
    descrizione: "Ammira il Colosseo e assapora la cucina italiana autentica.",
  },
  {
    id: 8,
    img: "",
    prezzo: 650,
    destinazione: "Bucarest",
    dataPartenza: "2023-08-10",
    dataRitorno: "2023-08-17",
    descrizione: "Ammira il Colosseo e assapora la cucina italiana autentica.",
  },

  {
    id: 9,
    img: "",
    prezzo: 1000,
    destinazione: "Amsterdam",
    dataPartenza: "2023-08-10",
    dataRitorno: "2023-08-27",
    descrizione: "Ammira il Colosseo e assapora la cucina italiana autentica.",
  },
  {
    id: 10,
    img: "",
    prezzo: 10000,
    destinazione: "Copparo",
    dataPartenza: "2023-06-02",
    dataRitorno: "2023-06-14",
    descrizione: "Venite a trovarmi",
  },
];

let offerta = [];
const rowAppend = document.querySelector(".row");

//::begin mi prendo i 4 viaggi meno cari presentandoli come offerta
viaggi.sort(function (a, b) {
  return a.prezzo - b.prezzo;
});

for (let i = 0; i < 4; i++) {
  offerta.push(viaggi[i]);
}
//::end mi prendo i 4 viaggi meno cari presentandoli come offerta

rowAppend.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 col-6">
            <div class="card">
              <img src="./assets/42-56717526.webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">Destinazione</h4>
                <p class="card-text">Dal:</p>
                <p class="card-text">Al:</p>
                <div class="align-content-center justify-content-center d-flex"><a href="#" class="btn btn-primary">Scopri offerta</a></div>
              </div>
            </div>
          </div>`;

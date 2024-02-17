let utSkfirt = "";
function billettKjøp() {
    let filmNavn = document.getElementById("filmId").value;
    let feilFilm = document.getElementById("feilInnputFilm");
    let antall = document.getElementById("innAntall").value;
    let feilAntall = document.getElementById("feilInnputAntall");
    let fornavn = document.getElementById("innFornavn").value;
    let feilFornavn = document.getElementById("feilInputFornavn");
    let etternavn = document.getElementById("innEtternavn").value;
    let feilEtternavn = document.getElementById("feilInputEtternavn");
    let telefonnr = document.getElementById("innTelefonnr").value;
    let feilTelefonnr = document.getElementById("feilInputTelefonnr");
    let epost = document.getElementById("innEpost").value;
    let feilEpost = document.getElementById("feilInputEpost");

    let gyldig = filmNavn.selectedIndex !== 0 && /^\d+$/.test(antall) &&
        /^[a-zA-Z]+$/.test(fornavn) && /^[a-zA-Z]+$/.test(etternavn)
        && /^\d{8,10}$/.test(telefonnr) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epost);

    while (!gyldig) {
        document.getElementById("feilInnputFilm").innerText = "Velg en film"
        document.getElementById("feilInnputAntall").innerText = "Skriv inn antallet"
        document.getElementById("feilInputFornavn").innerText = "Skriv inn fornavnet ditt som bokstaver"
        document.getElementById("feilInputEtternavn").innerText = "Skriv inn etternavnet ditt som bokstaver"
        document.getElementById("feilInputTelefonnr").innerText = "Skriv inn telefonnummeret ditt på mellom 8 og 10 sifre"
        document.getElementById("feilInputEpost").innerText = "Skriv inn en gyldig e-post"
        klargjøre();
    }

    const filmArray = [];
    const filmInformasjon = {
        filmNavn: filmNavn,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    }
    filmArray.push(filmInformasjon)

    utSkfirt += "<tr>";
    for (let i in filmArray) {
        utSkfirt += "<th>" + filmArray[i].filmNavn + "</th>" + "<th>" + filmArray[i].antall + "</th>" +
            "<th>" + filmArray[i].fornavn + "</th>" + "<th>" + filmArray[i].etternavn + "</th>" +
            "<th>" + filmArray[i].telefonnr + "</th>" + "<th>" + filmArray[i].epost + "</th>";
    }
    utSkfirt += "</tr>"

    document.getElementById("valgtFilm").innerHTML = utSkfirt;
    klargjøre(feilFilm, feilAntall, feilFornavn, feilEtternavn, feilTelefonnr, feilEpost);
}
function klargjøre(film, antall, fornavn, etternavn, telefonnr, epost) {
    document.getElementById("formId").reset();
    film.innerText = "";
    antall.innerText = "";
    fornavn.innerText = "";
    etternavn.innerText = "";
    telefonnr.innerText = "";
    epost.innerText = "";
}
function slettFilm() {
    utSkfirt = ""
    document.getElementById("valgtFilm").innerHTML = utSkfirt;
}
function analizujSkladINCI(inciText, bazaKategorii, regulyRegex) {
  if (!regulyRegex) {
    regulyRegex = [];
  }

  function normalizuj(nazwa) {
    if (typeof nazwa !== 'string') return '';
    return nazwa
      .toLowerCase()
      .replace(/^\+\/-\s*/, '')
      .replace(/\s*\(.*?\)\s*/g, '')
      .replace(/\.$/, '')
      .replace(/^\s+|\s+$/g, '');
  }

  var mapaSkladnikow = {};
  var tymczasoweGrupy = {};

  if (bazaKategorii && typeof bazaKategorii === 'object') {
    for (var kategoria in bazaKategorii) {
      if (!Object.prototype.hasOwnProperty.call(bazaKategorii, kategoria)) continue;
      if (kategoria === 'nieznalezione') continue;

      tymczasoweGrupy[kategoria] = [];
      var lista = bazaKategorii[kategoria];

      if (lista && typeof lista.length === 'number') {
        for (var i = 0; i < lista.length; i++) {
          var znormalizowany = normalizuj(lista[i]);
          if (znormalizowany) {
            mapaSkladnikow[znormalizowany] = kategoria;
          }
        }
      }
    }
  }

  if (regulyRegex && typeof regulyRegex.length === 'number') {
    for (var r = 0; r < regulyRegex.length; r++) {
      var regula = regulyRegex[r];
      if (regula && regula.kategoria && regula.kategoria !== 'nieznalezione' && !tymczasoweGrupy[regula.kategoria]) {
        tymczasoweGrupy[regula.kategoria] = [];
      }
    }
  }

  tymczasoweGrupy.nieznalezione = [];

  if (typeof inciText === 'string' && inciText.replace(/^\s+|\s+$/g, '').length > 0) {
    var surowaLista = inciText.split(/,(?![^(]*\))/);

    for (var s = 0; s < surowaLista.length; s++) {
      var oryginalnySkladnik = surowaLista[s].replace(/^\s+|\s+$/g, '');
      if (!oryginalnySkladnik) continue;

      var czystySkladnik = normalizuj(oryginalnySkladnik);

      if (Object.prototype.hasOwnProperty.call(mapaSkladnikow, czystySkladnik)) {
        var znalezionaKategoria = mapaSkladnikow[czystySkladnik];
        tymczasoweGrupy[znalezionaKategoria].push(oryginalnySkladnik);
        continue;
      }

      var dopasowanoRegex = false;
      if (regulyRegex && typeof regulyRegex.length === 'number') {
        for (var j = 0; j < regulyRegex.length; j++) {
          var reg = regulyRegex[j];
          if (reg && reg.wzorzec && typeof reg.wzorzec.test === 'function' && reg.wzorzec.test(czystySkladnik)) {
            tymczasoweGrupy[reg.kategoria].push(oryginalnySkladnik);
            dopasowanoRegex = true;
            break;
          }
        }
      }

      if (!dopasowanoRegex) {
        tymczasoweGrupy.nieznalezione.push(oryginalnySkladnik);
      }
    }
  }

  var wynikStringi = {};
  for (var klucz in tymczasoweGrupy) {
    if (Object.prototype.hasOwnProperty.call(tymczasoweGrupy, klucz)) {
      wynikStringi[klucz] = tymczasoweGrupy[klucz].join(', ');
    }
  }

  return wynikStringi;
}



const aZle = getInciBad();
const aMplastik = getMikroplastik();
const aSilikon = getSilikon();
const aKontrow = getKontrowersje();
const aAlergeny = getAlergeny();

let mojaBazaINCI = {
silikony: aSilikon,
uwagi: aKontrow,
akrylany: aMplastik,
banned: aZle,
alergeny: aAlergeny
};




/*
const mojaBazaINCI = {
  silikony_1_cykliczne: ["Cyclopentasiloxane", "Cyclotetrasiloxane", "Cyclohexasiloxane"],
  silikony_2A_zywice_PEG: ["Polysilicone-11", "Trimethylsiloxysilicate", "PEG-12 Dimethicone"],
  silikony_3_lekkie: ["Dimethicone", "Trisiloxane", "Caprylyl Methicone"],
  akrylany_3A_starsze: ["Carbomer", "Acrylates/C10-30 Alkyl Acrylate Crosspolymer"],
  konserwanty_syntetyczne: ["Phenoxyethanol", "Methylparaben"]
};*/

const mojeRegulyRegex = [
  {
    kategoria: "etoksylaty_auto_regex",
    wzorzec: /(\b(bis-)?(peg|ppg)-\d+|\bpolysorbate\b|\bpoloxamer\b|\bnonoxynol|\boctoxynol|[a-z]+eth-\d+)/i
  }
];

/*
const skladDoAnalizy = `
  Aqua (Water), Caprylic/Capric Triglyceride, Glycerin, Dimethicone,
  Polysilicone-11, Carbomer, PEG-55 Propylene Glycol Oleate, Phenoxyethanol.
`;

const wynik = analizujSkladINCI(skladDoAnalizy, mojaBazaINCI, mojeRegulyRegex);
console.log(wynik);
*/


/*
{
  "silikony_1_cykliczne": "",
  "silikony_2A_zywice_PEG": "Polysilicone-11",
  "silikony_3_lekkie": "Dimethicone",
  "akrylany_3A_starsze": "Carbomer",
  "konserwanty_syntetyczne": "Phenoxyethanol",
  "etoksylaty_auto_regex": "PEG-55 Propylene Glycol Oleate",
  "nieznalezione": "Aqua (Water), Caprylic/Capric Triglyceride, Glycerin"
}
*/

/*
const wynik = analizujSkladINCI(skladDoAnalizy, mojaBazaINCI, mojeRegulyRegex);

// Tylko konserwanty syntetyczne jako string:
const konserwantySyntetyczne = wynik.konserwanty_syntetyczne; // np. "Phenoxyethanol"

// Jeśli masz kilka grup konserwantów i chcesz je połączyć w jeden string:
const wszystkieKonserwanty = [
  wynik.konserwanty_syntetyczne,
  wynik.konserwanty_zielona_strefa
]
  .filter(Boolean) // usuwa puste stringi ""
  .join(', ');
*/

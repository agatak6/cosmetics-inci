function analizujSkladINCI(inciText, bazaKategorii, regulyRegex = []) {
  const normalizuj = (nazwa) => {
    if (typeof nazwa !== 'string') return '';
    return nazwa
      .toLowerCase()
      .replace(/^\+\/-\s*/, '')
      .replace(/\s*\(.*?\)\s*/g, '')
      .replace(/\.$/, '')
      .trim();
  };

  const mapaSkladnikow = new Map();
  const tymczasoweGrupy = {};

  // 1. Inicjalizacja grup tymczasowych dla list dokładnych (bez Object.entries i destrukturyzacji)
  if (bazaKategorii && typeof bazaKategorii === 'object') {
    for (const kategoria in bazaKategorii) {
      if (!Object.prototype.hasOwnProperty.call(bazaKategorii, kategoria)) continue;
      if (kategoria === 'nieznalezione') continue;

      tymczasoweGrupy[kategoria] = [];
      const lista = bazaKategorii[kategoria];

      if (Array.isArray(lista)) {
        for (let i = 0; i < lista.length; i++) {
          const znormalizowany = normalizuj(lista[i]);
          if (znormalizowany) {
            mapaSkladnikow.set(znormalizowany, kategoria);
          }
        }
      }
    }
  }

  // 2. Inicjalizacja grup tymczasowych dla reguł Regex
  if (Array.isArray(regulyRegex)) {
    for (let i = 0; i < regulyRegex.length; i++) {
      const regula = regulyRegex[i];
      if (regula && regula.kategoria && regula.kategoria !== 'nieznalezione' && !tymczasoweGrupy[regula.kategoria]) {
        tymczasoweGrupy[regula.kategoria] = [];
      }
    }
  }

  // 3. Grupa na składniki niepasujące do żadnej listy ani reguły
  tymczasoweGrupy.nieznalezione = [];

  if (typeof inciText === 'string' && inciText.trim().length > 0) {
    const surowaLista = inciText
      .split(/,(?![^(]*\))/)
      .map(item => item.trim())
      .filter(item => item.length > 0);

    for (let i = 0; i < surowaLista.length; i++) {
      const oryginalnySkladnik = surowaLista[i];
      const czystySkladnik = normalizuj(oryginalnySkladnik);

      if (mapaSkladnikow.has(czystySkladnik)) {
        const znalezionaKategoria = mapaSkladnikow.get(czystySkladnik);
        tymczasoweGrupy[znalezionaKategoria].push(oryginalnySkladnik);
        continue;
      }

      let dopasowanoRegex = false;
      if (Array.isArray(regulyRegex)) {
        for (let j = 0; j < regulyRegex.length; j++) {
          const regula = regulyRegex[j];
          if (regula && regula.wzorzec instanceof RegExp && regula.wzorzec.test(czystySkladnik)) {
            tymczasoweGrupy[regula.kategoria].push(oryginalnySkladnik);
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

  // 4. Konwersja każdej tablicy na pojedynczy string
  const wynikStringi = {};
  for (const kategoria in tymczasoweGrupy) {
    if (Object.prototype.hasOwnProperty.call(tymczasoweGrupy, kategoria)) {
      wynikStringi[kategoria] = tymczasoweGrupy[kategoria].join(', ');
    }
  }

  return wynikStringi;
}


const aZle = getInciBad();
const aMplastik = getMikroplastik();
const aSilikon = getSilikon();
const aKontrow = getKontrowersje();
const aAlergeny = getAlergeny();

const mojaBazaINCI = {
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

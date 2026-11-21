/**
 * Analizuje skład INCI i zwraca dla każdej kategorii (oraz 'nieznalezione')
 * osobny string z dopasowanymi składnikami rozdzielonymi ", ".
 *
 * @param {string} inciText - Surowy tekst składu INCI.
 * @param {Object.<string, string[]>} bazaKategorii - Obiekt z listami nazw INCI dla każdej grupy.
 * @param {Array<{kategoria: string, wzorzec: RegExp}>} [regulyRegex=[]] - Opcjonalne reguły Regex.
 * @returns {Object.<string, string>} Obiekt, gdzie każdą kategorią jest string (np. "Dimethicone, Polysilicone-11").
 */
function analizujSkladINCI(inciText, bazaKategorii, regulyRegex = []) {
  const normalizuj = (nazwa) => {
    return nazwa
      .toLowerCase()
      .replace(/^\+\/-\s*/, '')     // Usuwa "+/- " przed barwnikami (np. "+/- CI 16035")
      .replace(/\s*\(.*?\)\s*/g, '') // Usuwa dopiski w nawiasach (np. "Aqua (Water)" -> "aqua")
      .replace(/\.$/, '')            // Usuwa kropkę na końcu składu
      .trim();
  };

  const mapaSkladnikow = new Map();
  const tymczasoweGrupy = {};

  // 1. Inicjalizacja grup tymczasowych dla list dokładnych
  for (const [kategoria, lista] of Object.entries(bazaKategorii)) {
    tymczasoweGrupy[kategoria] = [];
    for (const skladnik of lista) {
      mapaSkladnikow.set(normalizuj(skladnik), kategoria);
    }
  }

  // 2. Inicjalizacja grup tymczasowych dla reguł Regex
  for (const regula of regulyRegex) {
    if (!tymczasoweGrupy[regula.kategoria]) {
      tymczasoweGrupy[regula.kategoria] = [];
    }
  }

  // 3. Grupa na składniki niepasujące do żadnej listy ani reguły
  tymczasoweGrupy.nieznalezione = [];

  if (typeof inciText === 'string' && inciText.trim().length > 0) {
    const surowaLista = inciText
      .split(/,(?![^(]*\))/)
      .map(item => item.trim())
      .filter(item => item.length > 0);

    for (const oryginalnySkladnik of surowaLista) {
      const czystySkladnik = normalizuj(oryginalnySkladnik);

      // Priorytet 1: Dokładne dopasowanie z list
      if (mapaSkladnikow.has(czystySkladnik)) {
        const znalezionaKategoria = mapaSkladnikow.get(czystySkladnik);
        tymczasoweGrupy[znalezionaKategoria].push(oryginalnySkladnik);
        continue;
      }

      // Priorytet 2: Dopasowanie przez reguły Regex
      let dopasowanoRegex = false;
      for (const regula of regulyRegex) {
        if (regula.wzorzec.test(czystySkladnik)) {
          tymczasoweGrupy[regula.kategoria].push(oryginalnySkladnik);
          dopasowanoRegex = true;
          break;
        }
      }

      // Priorytet 3: Składnik spoza list i reguł
      if (!dopasowanoRegex) {
        tymczasoweGrupy.nieznalezione.push(oryginalnySkladnik);
      }
    }
  }

  // 4. Konwersja każdej tablicy na pojedynczy string
  const wynikStringi = {};
  for (const [kategoria, tablica] of Object.entries(tymczasoweGrupy)) {
    wynikStringi[kategoria] = tablica.join(', ');
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

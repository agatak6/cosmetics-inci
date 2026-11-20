const CLEAN_AT_SEPHORA_LIST = [
  "Parfum", "Fragrance", "Musk Ketone", "Hexamethylindanopyran",
  "Acetyl Hexamethyl Tetralin", "Acetyl Hexamethyl Indan",
  "2-Bromo-2-Nitropropane-1,3-Diol", "5-Bromo-5-Nitro-1,3-Dioxane",
  "Benzylhemiformal", "Diazolidinyl Urea", "DMDM Hydantoin", "Formaldehyde",
  "Imidazolidinyl Urea", "Methenamine", "Quaternium-15",
  "Sodium Hydroxymethylglycinate", "Methanediol", "Methylene Glycol",
  "Glyoxal", "Methylchloroisothiazolinone", "Methylisothiazolinone",
  "Methylparaben", "Ethylparaben", "Propylparaben", "Butylparaben",
  "Isobutylparaben", "Isopropylparaben", "Benzylparaben", "Resorcinol",
  "Triclosan", "Triclocarban", "Paraffinum Liquidum", "Mineral Oil",
  "Hydrogenated Mineral Oil", "Petrolatum", "Paraffin", "Retinyl Palmitate",
  "Acetone", "Butoxyethanol", "Toluene", "Sodium Lauryl Sulfate",
  "Sodium Laureth Sulfate", "Talc", "Ethyl Acrylate", "Ethyl Methacrylate",
  "Butyl Methacrylate", "Methyl Methacrylate", "Hydroxypropyl Methacrylate",
  "Tetrahydrofurfuryl Methacrylate", "Trimethylolpropane Trimethacrylate",
  "Benzophenone", "Benzophenone-1", "Benzophenone-2", "Benzophenone-3",
  "Oxybenzone", "Benzophenone-4", "Benzophenone-5", "Benzophenone-6",
  "Benzophenone-7", "Benzophenone-8", "Benzophenone-9", "Benzophenone-10",
  "Benzophenone-11", "Benzophenone-12", "Methyl Benzophenone",
  "Stearaminocarbonyl Benzophenone-4", "Trimethylbenzophenone",
  "VA/Crotonates/Methacryloxybenzophenone-1 Copolymer",
  "Ethylhexyl Methoxycinnamate", "Octinoxate", "Octyl Methoxycinnamate",
  "Octocrylene", "BHA", "BHT", "Cyclotetrasiloxane", "Cyclopentasiloxane",
  "Cyclohexasiloxane", "Cyclomethicone", "Aluminum Chloride",
  "Aluminum Chlorohydrate", "Aluminum Chlorohydrex",
  "Aluminum Dichlorohydrate", "Aluminum Sesquichlorohydrate",
  "Aluminum Zirconium Octachlorohydrate",
  "Aluminum Zirconium Octachlorohydrex Gly",
  "Aluminum Zirconium Pentachlorohydrate",
  "Aluminum Zirconium Pentachlorohydrex Gly",
  "Aluminum Zirconium Tetrachlorohydrate",
  "Aluminum Zirconium Tetrachlorohydrex Gly",
  "Aluminum Zirconium Trichlorohydrate",
  "Aluminum Zirconium Trichlorohydrex Gly", "Diethanolamine",
  "Ethanolamine", "Monoethanolamine", "Triethanolamine", "EDTA",
  "Ethylenediaminetetraacetic Acid", "Disodium EDTA",
  "Calcium Disodium EDTA", "Tetrasodium EDTA", "Trisodium EDTA", "PTFE",
  "Polytetrafluoroethylene", "Perfluorodecalin", "Perfluorohexane",
  "Perfluoroperhydrophenanthrene", "Perfluorodimethylcyclohexane",
  "Perfluorononylethyl Dimethicone", "Perfluorononyl Dimethicone",
  "Perfluorooctyl Triethoxysilane", "Polyperfluoromethylisopropyl Ether",
  "Polyperfluoroethoxymethoxy Difluoroethyl PEG Phosphate",
  "C9-15 Fluoroalcohol Phosphate",
  "Ammonium C6-16 Perfluoroalkylethyl Phosphate",
  "DEA-C8-18 Perfluoroalkylethyl Phosphate", "Perfluorooctanoic Acid",
  "PFOA", "Perfluorooctane Sulfonate", "PFOS",
  "Methyl Perfluorobutyl Ether", "Methyl Perfluoroisobutyl Ether",
  "Ethyl Perfluorobutyl Ether", "Ethyl Perfluoroisobutyl Ether",
  "Trifluoropropyl Dimethicone", "Trifluoropropyl Cyclopentasiloxane",
  "Trifluoropropyl Cyclotetrasiloxane"
];

const normalize = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

/**
 * Wyszukuje w składzie INCI składniki z listy Clean at Sephora (+ PFAS).
 * @param {string} inciText - Pełny skład INCI jako ciąg znaków (np. z pola textarea).
 * @param {object} [options]
 * @param {boolean} [options.detectAnyPfas=true] - Czy łapać też inne związki po frazach perfluoro/polyfluoro/fluoroalcohol/trifluoropropyl.
 * @returns {{ matches: Array<{ matchedAs: string, foundInInci: string, reason: string }>, hasMatches: boolean }}
 */
function findBannedCleanAtSephoraIngredients(inciText, { detectAnyPfas = true } = {}) {
  if (!inciText || typeof inciText !== "string") {
    return { matches: [], hasMatches: false };
  }

  const normalizedListMap = new Map(
    CLEAN_AT_SEPHORA_LIST.map((item) => [normalize(item), item])
  );

  // Dzielimy po przecinkach, średnikach lub nowych liniach
  const tokens = inciText
    .split(/[,;\n\r]+/)
    .map((part) => part.trim())
    .filter(Boolean);

  const pfasPattern = /(perfluoro|polyfluoro|fluoroalcohol|trifluoropropyl)/i;
  const seen = new Set();
  const matches = [];

  for (const rawToken of tokens) {
    // Usuwamy ewentualne nawiasy z dodatkowymi informacjami na końcu tokenu, np. "Parfum (Fragrance)"
    const withoutParens = rawToken.replace(/\(.*?\)/g, " ").trim();
    const candidates = Array.from(
      new Set([normalize(rawToken), normalize(withoutParens)].filter(Boolean))
    );

    for (const candidate of candidates) {
      if (normalizedListMap.has(candidate)) {
        const canonicalName = normalizedListMap.get(candidate);
        const key = `list:${canonicalName}`;
        if (!seen.has(key)) {
          seen.add(key);
          matches.push({
            matchedAs: canonicalName,
            foundInInci: rawToken,
            reason: "Lista Clean at Sephora + PFAS"
          });
        }
      } else if (detectAnyPfas && pfasPattern.test(candidate)) {
        const key = `pfas:${candidate}`;
        if (!seen.has(key)) {
          seen.add(key);
          matches.push({
            matchedAs: rawToken,
            foundInInci: rawToken,
            reason: "Wykryto wzorzec związku PFAS"
          });
        }
      }
    }
  }

  return {
    matches,
    hasMatches: matches.length > 0
  };
}

// --- Przykładowe użycie z polem tekstowym (<textarea id="inci-input">) ---
const textarea = document.getElementById("inci-input");
if (textarea) {
  const result = findBannedCleanAtSephoraIngredients(textarea.value);
  console.log("Czy znaleziono składniki z listy:", result.hasMatches);
  console.log("Dopasowania:", result.matches);
}

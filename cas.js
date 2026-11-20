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

function normalizeIngredient(str) {
  return String(str || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function findBannedCleanAtSephoraIngredients(inciText, options) {
  var opts = options || {};
  var detectAnyPfas = opts.detectAnyPfas !== undefined ? opts.detectAnyPfas : true;

  if (!inciText || typeof inciText !== "string") {
    return { matches: [], hasMatches: false };
  }

  var normalizedListMap = {};
  for (var i = 0; i < CLEAN_AT_SEPHORA_LIST.length; i++) {
    var item = CLEAN_AT_SEPHORA_LIST[i];
    normalizedListMap[normalizeIngredient(item)] = item;
  }

  var tokens = inciText
    .split(/[,;\n\r]+/)
    .map(function (part) {
      return part.trim();
    })
    .filter(function (part) {
      return Boolean(part);
    });

  var pfasPattern = /(perfluoro|polyfluoro|fluoroalcohol|trifluoropropyl)/i;
  var seen = {};
  var matches = [];

  for (var t = 0; t < tokens.length; t++) {
    var rawToken = tokens[t];
    var withoutParens = rawToken.replace(/\(.*?\)/g, " ").trim();
    var candidates = [normalizeIngredient(rawToken)];
    var normWithoutParens = normalizeIngredient(withoutParens);

    if (normWithoutParens && candidates.indexOf(normWithoutParens) === -1) {
      candidates.push(normWithoutParens);
    }

    for (var c = 0; c < candidates.length; c++) {
      var candidate = candidates[c];
      if (!candidate) continue;

      if (Object.prototype.hasOwnProperty.call(normalizedListMap, candidate)) {
        var canonicalName = normalizedListMap[candidate];
        var listKey = "list:" + canonicalName;
        if (!seen[listKey]) {
          seen[listKey] = true;
          matches.push({
            matchedAs: canonicalName,
            foundInInci: rawToken,
            reason: "Lista Clean at Sephora + PFAS"
          });
        }
      } else if (detectAnyPfas && pfasPattern.test(candidate)) {
        var pfasKey = "pfas:" + candidate;
        if (!seen[pfasKey]) {
          seen[pfasKey] = true;
          matches.push({
            matchedAs: rawToken,
            foundInInci: rawToken,
            reason: "Wykryto wzorzec zwiazku PFAS"
          });
        }
      }
    }
  }

const returnText = matches.length > 0 ? "" + matches.join(", ") : "";

  return returnText;
}

/*
var textarea = document.getElementById("inci-input");
if (textarea) {
  var result = findBannedCleanAtSephoraIngredients(textarea.value);
  console.log("Czy znaleziono skladniki z listy:", result.hasMatches);
  console.log("Dopasowania:", result.matches);
}*/

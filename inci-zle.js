function getInciBad(){

const bad_inci = [
//  BK - ksiazki
"methylisothiazolinone",
"methylchloroisothiazolinone",
"2-bromo-2-nitropropane-1,3-diol",
"5-bromo-5-nitro-1,3-dioxane",
"2-bromo-2-nitropropane", "2-bromo-2-nitropropane-1", "5-bromo-5-nitro-1",
"diazolidinyl urea", "imidazolidinyl urea",
"dmdm hydantoin",  
"sodium hydroxymethylglycinate",
"quaternium-15",
//skladnik farb
"p-phenylenediamine",
//zle alkohole
"alcohol denat", "alcohol", "isopropyl alcohol",
//ewg
"bht", "bha",
"butylated hydroxyanisole", "butylated hydroxytoluene",
"triethanolamine",
//akryl
"polyacrylamide", 
//inne 
"talc", "talcum magnesium silicate",
// SLS, SLES
"sodium laureth sulfate", "sodium lauryl sulfate",
/*  ------- */
//parabeny
"ethylparaben", "methylparaben", "paraben", "propylparaben",
// filtry
"benzophenone",
"ethylhexyl methoxycinnamate",
// inne
"benzylhemiformal",
"sodium hydroxymethylglycinate"

];

return bad_inci;

}
/* -------------------------- */
// Kontrowersyjne 
function getKontrowersje(){

const bad_inci = [
"tetrasodium edta", "trisodium edta",
"tromethamine", 
//inne
"aluminum chloride", "aluminum chlorohydrate",

"bis-aminopropyl diglycol dimaleate",

//parafina
"paraffin", "paraffinum liquidum", "parafinum liquidum", "ceresin", "petrolatum","mineral oil",
  ];
return bad_inci;

}

function getSilikon(){
const silikon = [
"cetyl peg/ppg-10/1 dimethicone",
"dimethicone/peg-10/15 crosspolymer",
"peg-10 dimethicone", "peg-12 dimethicone",
"peg/ppg-10/1 dimethicone", "peg/ppg-18/18 dimethicone",
"dimethicone/vinyl dimethicone crosspolymer",
"vinyl dimethicone/methicone silsesquioxane crosspolymer"
];
return silikon;
}



/* ------------------------------------------------------- */
//polimery syntetyczne
function getMikroplastik(){

const mikroplastik = [
  "polyethylene", "polypropylene", "polyamide", "nylon", "polyester", "polyacrylamide", 
  "acrylates copolymer", 
  "acrylates crosspolymer", 
  "acrylates/c10-30 alkyl acrylate crosspolymer",
  "methyl methacrylate crosspolymer",
  "polyacrylate",
  "polyurethane",
  "polyacrylate crosspolymer-6",
  "polymethyl methacrylate",
  "sodium acrylates copolymer",
  "styrene/acrylates copolymer",
//potencjalny plastik
"acrylamide/sodium acryloyldimethyltaurate copolymer",    
  "acrylates/dimethicone copolymer", "acrylates/octylacrylamide copolymer", "acrylates/polytrimethylsiloxymethacrylate copolymer", 
  "allyl methacrylates crosspolymer", "ammonium acryloyldimethyltaurate vp copolymer", 
  "ammonium acryloyldimethyltaurate/beheneth-25 methacrylate crosspolymer", 
"ammonium acryloyldimethyltaurate/carboxyethyl acrylate crosspolymer", 
  "ammonium acryloyldimethyltaurate/vp copolymer", "ammonium polyacrylate", "ammonium polyacryloyldimethyl taurate", 
  "ethylene/acrylic acid copolymer", "glyceryl acrylate/acrylic acid copolymer", "glyceryl polyacrylate", 
  "hydroxyethyl acrylate/sodium acryloyldimethyl taurate copolymer", "lauryl methacrylate/glycol dimethacrylate crosspolymer", 
  "sodium acrylate / sodium acryloyldimethyl taurate copolymer", "sodium acrylate/sodium acryloyldimethyl taurate copolymer", 
  "sodium polyacrylate", "sodium polyacrylate starch",
// stale mikroplastiki / tworzywa
"nylon-12", "nylon-6", "nylon-66",
"polyester", "polyester-1", "polyester-11",
"polyethylene", "polyethylene terephthalate",
"polypropylene",
"ethylene/propylene copolymer",
"ethylene/va copolymer",
"polyvinyl alcohol",
"polyquaternium-7",
"polyurethane", "polyurethane-14", "polyurethane-35", "polyurethane2",
"pvp",
"vp/eicosene copolymer", "vp/va copolymer","poloxamer 338",
"polyamide"
];

return mikroplastik;
}


function getAlergeny(){

const alergeny = [
"alpha-isomethyl ionone",
"amyl cinnamal",
"benzyl alcohol",
"benzyl benzoate",
"benzyl cinnamate",
"benzyl salicylate",
"cinnamal",
"cinnamyl alcohol",
"citral",
"citronellol",
"coumarin",
"d-limonene",
"eugenol",
"farnesol",
"geraniol",
"hexyl cinnamal",
"hydroxycitronellal",
"limonene",
"linalool",
"linalyl acetate",
"parfum (fragrance)",
"parfum",
"parfum(fragrance)",
"parfum/fragrance",
"menthol",
"raspberry ketone",
"phenethyl alcohol",
"phenoxyethanol",
"phenylethyl alcohol",
"potasium sorbate",
"potassium sorbate",
"lauramidopropyl betaine", 
"snail secretion filtrate"
];

return alergeny;
}

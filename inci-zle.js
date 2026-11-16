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
"sodium hydroxymethylglycinate",
"castor oil/ipdi copolymer",
"tipa-laureth sulfate",
"cocamide mea",
"polyaminopropyl biguanide",
"ppg-12/smdi copolymer",
"ppg-51/smdi copolymer",
"isostearamide mipa",
"myristalkonium chloride",
"quaternium-14",
"isopropyl cloprostenate",
"hypochlorous acid"
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
//parafina i inne pochodne ropy naftowej
"paraffin", "paraffinum liquidum", "parafinum liquidum", "ceresin", "petrolatum","mineral oil",
"ozokerite",
"cera microcristallina (microcrystalline wax)",
"cera microcristallina", 
"synthetic beeswax",
"synthetic wax",
"hydrogenated poly(c6-20 olefin)",
"trimethylpentanediol/adipic acid copolymer",
"carbomer",
"babassu oil glycereth-8 esters",
"methyl salicylate",
"dilinoleic acid/butanediol copolymer",
/* Zwiazki etoksylowane */
"c12-13 pareth-3",
"c12-13 pareth-9",
"c12-14 Pareth-12",
"ceteareth-12",
"ceteareth-20",
"ceteareth-25",
"ceteareth-30",
"ceteareth-60 myristyl glycol",
"ceteth-2",
"ceteth-10 phosphate",
"ceteth-20",
"deceth-7",
"disodium laureth sulfosuccinate",
"glycereth-26",
"glycereth-26 phosphate",
"glycereth-2 cocoate",
"glycereth-7 caprylate/caprate",
"laureth-2",
"laureth-3",
"lauryl peg-10 tris (trimethylsiloxy)silylethyl dimethicone",
"octyldodeceth-16",
//PEG / PPG derivatives 
"peg-10 olive glycerides",
"peg-10 phytosterol",
"peg-100 stearate",
"peg-120 methyl glucose dioleate",
"peg-150 distearate",
"peg-30 dipolyhydroxystearate",
"peg-6 caprylic/capric glycerides",
"peg-60 hydrogenated castor oil",
"peg-75 shea butter glycerides",
"peg-8",
"peg-12 dimethicone",
"peg-75 stearate",
"peg-7 glyceryl cocoate",
"peg-20 glyceryl triisostearate",
"ppg-26-buteth-26",
"peg-5 ethylhexanoate",
"peg-40 hydrogenated castor oil",
"peg-7 caprylic/capric glycerides",
"peg-4 dilaurate",
"peg-5 pentaerythrityl ether",
"peg-7 glyceryl",
"ppg-11 stearyl ether",
"ppg-13-decyltetradeceth-24",
"ppg-3 benzyl ether myristate",
"ppg-5 pentaerythrityl ether",
"ppg-5-ceteth-20",
//
"poloxamer 124",
"poloxamer 184",
"polysorbate 20",
"polysorbate 60",
"polysorbate 80",
"sodium glycereth-1 polyphosphate",
"sodium trideceth sulfate",
"sorbeth-30 tetraisostearate",
"sorbeth-30 tetraoleate",
"steareth-2",
"steareth-20",
"steareth-21",
"trideceth-6",
"trideceth-7",
"trideceth-8",
"trideceth-9",
"trideceth-12",
"trilaureth-4 phosphate",
"homosalate",
"distearyldimonium chloride",
"lauryl methyl gluceth-10 hydroxypropyldimonium chloride",
//Moga tworzyc nitrozoaminy
"aminomethyl propanol",
"aminomethyl propanediol",
// olej palmowy
"elaeis guineensis oil",
"elaeis guineensis (palm) oil",
"elaeis guineensis (palm) kernel oil"
  ];
return bad_inci;

}

/* -------------------------- */

function getSilikon(){
const silikon = [
"cetyl peg/ppg-10/1 dimethicone",
"dimethicone/peg-10/15 crosspolymer",
"peg-10 dimethicone", 
"peg-12 dimethicone",
"peg/ppg-10/1 dimethicone", 
"peg/ppg-18/18 dimethicone",
"dimethicone/vinyl dimethicone crosspolymer",
"vinyl dimethicone/methicone silsesquioxane crosspolymer",
// ---
"cyclopentasiloxane",
"cyclohexasiloxane",
"bis-peg-12 dimethicone",
"dimethicone crosspolymer",
"polymethylsilsesquioxane",
"dimethiconol",
 "dimethicone",
"dimethiconol behenate",
"trisiloxane", "phenylisopropyl dimethicone",
"polysilicone-11",
"polysilicone-29",
"silicone quaternium-18",
"methyl trimethicone", 
"caprylyl methicone", 
"diphenylsiloxy phenyl trimethicone", 
"cetyl diglyceryl tris(trimethylsiloxy)silylethyl dimethicone",
"phenylpropyldimethylsiloxysilicate",
"stearoxymethicone/dimethicone copolymer"
];
return silikon;
}



/* ------------------------------------------------------- */
//polimery syntetyczne
function getMikroplastik(){

const mikroplastik = [
  "polybutene", "polyethylene", "polypropylene", "polyamide", "nylon", "polyester", "polyacrylamide", 
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
"hydroxyethyl acrylate/sodium acryloyldimethyltaurate copolymer",
// stale mikroplastiki / tworzywa
"nylon-12", "nylon-6", "nylon-66",
"polyester", "polyester-1", "polyester-11",
"polyethylene", "polyethylene terephthalate",
"polypropylene",
"ethylene/propylene copolymer",
"ethylene/va copolymer",
"polyvinyl alcohol",
"polyquaternium-7",
"polyquaternium-37",
"polyurethane", "polyurethane-14", "polyurethane-35", "polyurethane2",
"pvp",
"vp/eicosene copolymer", "vp/va copolymer","poloxamer 338",
"polyamide",
"hdi/trimethylol hexyllactone crosspolymer",
"poly c10-30 alkyl acrylate",
"sodium polyacryloyl dimethyl taurate",
"styrene/isoprene copolymer",
"polyquaternium-10",
"polyquaternium-55",
"vp/methacrylamide/vinyl imidazole copolymer",
"sodium polyacryloyldimethyl taurate",
"sodium acryloyldimethyltaurate/vp crosspolymer",
"acrylates/stearyl methacrylate copolymer",
"potassium sodium polyacrylate",
"amp-acrylates/allyl methacrylate copolymer",
"acrylamidopropyltrimonium chloride/acrylate copolymer",
"lauryl methacrylate/glycol dimethacrylate copolymer",
"ethylene/propylene/styrene copolymer", 
"butylene/ethylene/styrene copolymer",
"hydrogenated poly(c6-14 olefin)", "hydrogenated styrene/isoprene copolymer"
];

return mikroplastik;
}


function getAlergeny(){

const alergeny = [
"alpha pinene", 
"alpha-isomethyl ionone",
"amyl cinnamal",
"amyl salicylate",
"benzyl alcohol",
"benzyl benzoate",
"benzyl cinnamate",
"benzyl salicylate",
"benzyl silicate",
"carvone",
"cinnamal",
"cinnamyl alcohol",
"citral",
"citronellol",
"coumarin",
"d-limonene",
"eugenol",
"farnesol",
"geraniol",
"gernayl acetate", 
"hexyl cinnamal",
"hydroxycitronellal",
"limonene",
"linalool",
"linalyl acetate",
"menthol",
"parfum (fragrance)",
"parfum",
"parfum(fragrance)",
"parfum/fragrance",
"parfum (fragrance)",
"parfum",
"parfum(fragrance)",
"parfum/fragrance",
"fragrance (parfum)",
"raspberry ketone",
"rose ketones",
"phenethyl alcohol",
"phenoxyethanol",
"phenylethyl alcohol",
"pinene-beta",
"potasium sorbate",
"potassium sorbate",
"lauramidopropyl betaine", 
"snail secretion filtrate",
"cocamidopropyl dimethylamine",
"cocamidopropyl betaine"
];

return alergeny;
}

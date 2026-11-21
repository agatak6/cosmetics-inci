const bad_inci = [
//skladnik farb
"p-phenylenediamine",
//zle alkohole
"alcohol denat", 
"alcohol", 
"isopropyl alcohol",
//ewg
"bht", "bha",
"butylated hydroxyanisole", 
"butylated hydroxytoluene",
"triethanolamine",
//akryl
"polyacrylamide", 
//inne 
"talc", 
"talcum magnesium silicate",
/*  ------- */
//parabeny
"paraben", 
// filtry
"benzophenone",
"ethylhexyl methoxycinnamate",
// inne
"benzylhemiformal",
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
"hypochlorous acid",
// SLS
"sodium lauryl sulfate"
];

konserwanty_red = ["dmdm hydantoin", "imidazolidinyl urea", "diazolidinyl urea", "quaternium-15", "bronopol", 
"2-bromo-2-nitropropane-1,3-diol",
"2-bromo-2-nitropropane-1",
"2-bromo-2-nitropropane",
"5-bromo-5-nitro-1,3-dioxane",
"5-bromo-5-nitro-1",
"sodium hydroxymethylglycinate", "methylisothiazolinone", "methylchloroisothiazolinone", "benzisothiazolinone", "methyldibromo glutaronitrile",
"methylparaben", "ethylparaben", "propylparaben", "butylparaben", "isobutylparaben", "isopropylparaben", "benzylparaben", "sodium methylparaben", "sodium propylparaben", "sodium ethylparaben"];

/* -------------------------- */

/* Lista 1: Etoksylowane siarczany, parethy i alkilofenole (Czerwona Flaga — Wysoka: ryzyko podrażnień + 1,4-dioksan + ekotoksyczność alkilofenoli)*/
let etoksylaty_red = ["sodium laureth sulfate", "ammonium laureth sulfate", "sodium myreth sulfate", "sodium trideceth sulfate", "sodium c12-15 pareth sulfate", "magnesium laureth sulfate", "tea-laureth sulfate", "c11-15 pareth-7", "c12-13 pareth-9", "c12-15 pareth-12", "nonoxynol-9", "nonoxynol-10", "octoxynol-9", "octoxynol-10"];

/* Lista 2: Klasyczne emulgatory, solubilizatory i zagęstniki PEG- / PPG- / -eth / Polysorbate (Czerwona Flaga — Średnia: łagodniejsze na skórze, ale pełna etoksylacja i potencjał promotora przenikania)*/
let etoksylaty_orange = ["peg-40 hydrogenated castor oil", "peg-60 hydrogenated castor oil", "peg-100 stearate", "peg-20 stearate", "peg-40 stearate", "peg-150 distearate", "peg-150 pentaerythrityl tetrastearate", "peg-120 methyl glucose dioleate", "peg-7 glyceryl cocoate", "peg-200 hydrogenated glyceryl palmate", "peg-6 caprylic/capric glycerides", "peg-8 caprylic/capric glycerides", "peg-30 dipolyhydroxystearate", "peg-10 dimethicone", "peg-12 dimethicone", "polysorbate 20", "polysorbate 40", "polysorbate 60", "polysorbate 80", "polysorbate 85", "ceteareth-12", "ceteareth-20", "ceteareth-25", "ceteareth-30", "steareth-2", "steareth-20", "steareth-21", "oleth-5", "oleth-10", "oleth-20", "laureth-3", "laureth-4", "laureth-7", "laureth-9", "laureth-23", "isoceteth-20", "ceteth-10", "ceteth-20", "beheneth-10", "beheneth-25", "trideceth-6", "trideceth-7", "trideceth-8", "trideceth-9", "trideceth-12", "ppg-15 stearyl ether", "ppg-26-buteth-26", "ppg-3 benzyl ether myristate", "ppg-14 butyl ether", "ppg-5-ceteth-20", "glycereth-26", "methyl gluceth-10", "methyl gluceth-20", "sorbeth-30 tetraoleate", "peg-20 glyceryl triisostearate"];

/* Lista 3: Poloksamery i czyste polimery glikolu polietylenowego (Czerwona Flaga — Niska: bardzo dobra tolerancja dermatologiczna, odrzucane wyłącznie za syntezę z tlenku etylenu)*/
let etoksylaty_yellow = ["poloxamer 184", "poloxamer 188", "poloxamer 407", "poloxamer 124", "peg-4", "peg-6", "peg-8", "peg-12", "peg-32", "peg-75", "peg-90m", "peg-14m", "peg-180", "peg-400"];

let etoksylaty_inne = [
//PEG / PPG derivatives 
"peg-10 olive glycerides",
"peg-10 phytosterol",
"peg-75 shea butter glycerides",
"peg-75 stearate",
"peg-5 ethylhexanoate",
"peg-7 caprylic/capric glycerides",
"peg-4 dilaurate",
"peg-5 pentaerythrityl ether",
"peg-7 glyceryl",
"ppg-11 stearyl ether",
"ppg-13-decyltetradeceth-24",
"ppg-5 pentaerythrityl ether",
/* Zwiazki etoksylowane */
"c12-13 pareth-3",
"c12-14 pareth-12",
"ceteareth-60 myristyl glycol",
"ceteth-2",
"ceteth-10 phosphate",
"deceth-7",
"disodium laureth sulfosuccinate",
"glycereth-26 phosphate",
"glycereth-2 cocoate",
"glycereth-7 caprylate/caprate",
"laureth-2",
"lauryl peg-10 tris (trimethylsiloxy)silylethyl dimethicone",
"octyldodeceth-16",
"babassu oil glycereth-8 esters",
"sodium glycereth-1 polyphosphate",
"trilaureth-4 phosphate",
"lauryl methyl gluceth-10 hydroxypropyldimonium chloride",

];

let ingr_orange = [
"tetrasodium edta", "trisodium edta",
"tromethamine", 
//inne
"aluminum chloride", "aluminum chlorohydrate",
"bis-aminopropyl diglycol dimaleate",
//parafina i inne pochodne ropy naftowej
"paraffin", 
"paraffinum liquidum", 
"parafinum liquidum", 
"ceresin", 
"petrolatum",
"mineral oil",
"ozokerite",
"cera microcristallina (microcrystalline wax)",
"cera microcristallina", 
"synthetic beeswax",
"synthetic wax",
"hydrogenated poly(c6-20 olefin)",
"trimethylpentanediol/adipic acid copolymer",
"methyl salicylate",
"dilinoleic acid/butanediol copolymer",
//
"polysorbate 20",
"polysorbate 60",
"polysorbate 80",
"sorbeth-30 tetraisostearate",
"homosalate",
"distearyldimonium chloride",
//Moga tworzyc nitrozoaminy
"aminomethyl propanol",
"aminomethyl propanediol",
// olej palmowy
"elaeis guineensis oil",
"elaeis guineensis (palm) oil",
"elaeis guineensis (palm) kernel oil"
  ];

/* wyjatki */
let mikroplastik_exc = ["carbomer"];

let konserwanty_orange = ["Chlorphenesin", "Iodopropynyl Butylcarbamate", "Triclosan", "Triclocarban", "o-Cymen-5-ol"];

/* -------------------------- */
// Kontrowersyjne 
function getKontrowersje(){
const inci_warnings = [...etoksylaty_orange, ...etoksylaty_yellow, ...etoksylaty_inne, ...ingr_orange, ...mikroplastik_exc, ...konserwanty_orange];
return inci_warnings;
}

/* Silikony cykliczne i lotne (Czerwona Flaga — Krytyczna / Zakazane lub ograniczane przez REACH w UE) */
let silikony_red = [
"cyclopentasiloxane", 
"cyclotetrasiloxane", 
"cyclohexasiloxane", 
"cyclomethicone", 
"cyclotrisiloxane", 
"cycloheptasiloxane"
];

/* PEG-silikony, żywice silikonowe i elastomery usieciowane (Czerwona Flaga — Średnia/Wyższa: ryzyko 1,4-dioksanu w wersjach PEG, skrajna trwałość elastomerów lub nośniki D5/D6) */
let silikony_orange = [
"trimethylsiloxysilicate", 
"polymethylsilsesquioxane", 
"dimethicone crosspolymer", 
"dimethicone/vinyl dimethicone crosspolymer", 
"vinyl dimethicone/methicone silsesquioxane crosspolymer", "bis-peg-18 methyl ether dimethyl silane", "peg-12 dimethicone", "peg-10 dimethicone", "peg-8 dimethicone", "peg/ppg-18/18 dimethicone", "peg/ppg-20/15 dimethicone", "lauryl peg-9 polydimethylsiloxyethyl dimethicone", "cetyl peg/ppg-10/1 dimethicone", "dimethicone/peg-10/15 crosspolymer", "peg/ppg-10/1 dimethicone", "bis-peg-12 dimethicone", "lauryl peg-10 tris(trimethylsiloxy)silylethyl dimethicone",
];

/* Ciężkie silikony bez PEG (Czerwona Flaga — Średnia/Niska: główny problem to brak biodegradacji i nadbudowa build-up na włosach) */
let silikony_yellow = [
"polysilicone-11", "dimethiconol", "amodimethicone", "cetearyl methicone", "cetyl dimethicone", "stearyl dimethicone", "stearoxy dimethicone", "behenoxy dimethicone", "bis-aminopropyl dimethicone", "trimethylsilylamodimethicone", "silicone quaternium-16", "silicone quaternium-18", "silicone quaternium-22"

];

/* Silikony lekkie liniowe i niecykliczne (Bezpieczne dla skóry, ale syntetyczne i niebiodegradowalne) */
let silikony_light = [
"dimethicone", "trisiloxane", "disiloxane", "caprylyl methicone", "phenyl trimethicone", "diphenyl dimethicone", "trimethyl pentaphenyl trisiloxane", "hexamethyldisiloxane", "methyl trimethicone", "ethyl trisiloxane", "simethicone"
];


let silikony_inne = [
// --- jeszcze nie przypisane do kategorii
"dimethiconol behenate",
"phenylisopropyl dimethicone",
"polysilicone-29",
"diphenylsiloxy phenyl trimethicone", 
"cetyl diglyceryl tris(trimethylsiloxy)silylethyl dimethicone",
"phenylpropyldimethylsiloxysilicate",
"stearoxymethicone/dimethicone copolymer",
"amodimethicone/silsesquioxane copolymer",
"bis-cetearyl amodimethicone",
"bis-stearyl dimethicone",
"c20-24 alkyl dimethicone",
"cetearyl dimethicone crosspolymer",
"divinyldimethicone",
"divinyldimethicone/dimethicone crosspolymer",
"hydrolyzed vegetable protein pg-propyl silanetriol",
"methicone",
"polypropylsilsesquioxane",
"silsesquioxane crosspolymer",
"trimethylsiloxysilicate/dimethiconol crosspolymer"
];

/* -------------------------- */

function getSilikon(){
const silikon = [...silikony_orange, ...silikony_yellow, ...silikony_light, ...silikony_inne];

return silikon;
}


function getInciBad(){
let bad_combo = [...bad_inci, ...silikony_red, ...etoksylaty_red, ...konserwanty_red];
return bad_combo;
}

/* ------------------------------------------------------- */
//polimery syntetyczne

/* Monomery i oligomery reaktywne (Czerwona Flaga — Krytyczna / Silne alergeny kontaktowe, lakiery hybrydowe i kleje) */
let akrylany_red = ["hema", "hydroxyethyl methacrylate", "di-hema trimethylhexyl dicarbamate", "ethyl methacrylate", "methyl methacrylate", "isobornyl acrylate", "hydroxypropyl methacrylate", "tetrahydrofurfuryl methacrylate", "butyl methacrylate", "isobutyl methacrylate", "trimethylolpropane triacrylate", "pentaerythrityl tetraacrylate", "urethane acrylate", "urethane methacrylate", "epoxy acrylate", "peg-4 dimethacrylate", "triethylene glycol dimethacrylate"];

/* Stałe mikrosfery, brokaty i opacifiery (Czerwona Flaga — Średnia / Zakaz mikroplastiku UE REACH, niebiodegradowalne cząstki stałe)*/
let akrylany_marron = ["polymethyl methacrylate", "polyethyl methacrylate", "polybutyl methacrylate", "acrylates copolymer", "acrylates crosspolymer", "methyl methacrylate crosspolymer", "ethylhexyl acrylate/methyl methacrylate copolymer", "lauryl methacrylate/glycol dimethacrylate crosspolymer", "allyl methacrylates crosspolymer", "styrene/acrylates copolymer", "styrene/acrylates/ammonium methacrylate copolymer", "ammonium acrylates copolymer", "va/crotonates/vinyl neodecanoate copolymer", "octylacrylamide/acrylates/butylaminoethyl methacrylate copolymer"];

/* Zagęstniki żelowe — Starsze generacje i etoksylowane (Czerwona Flaga — Niska z alertem czystości: ryzyko TEA, 1,4-dioksanu lub styrenu)*/
let akrylany_orange = ["acrylates/c10-30 alkyl acrylate crosspolymer", "acrylates/steareth-20 methacrylate copolymer", "acrylates/steareth-20 itaconate copolymer", "acrylates/beheneth-25 methacrylate copolymer", "acrylates/palmeth-25 acrylate copolymer", "acrylates/ceteth-20 itaconate copolymer", "sodium styrene/acrylates copolymer", "acrylates/aminoacrylates/c10-30 alkyl peg-20 itaconate copolymer", "peg-150/decyl alcohol/smdi copolymer", "polyquaternium-37"];

/* Zagęstniki żelowe — Nowoczesne, wstępnie zneutralizowane i bez PEG (Czerwona Flaga — Niska: wysoka czystość skórna, odrzucane wyłącznie za brak biodegradacji)*/
let akrylany_yellow = ["ammonium acryloyldimethyltaurate/vp copolymer", "ammonium acryloyldimethyltaurate/beheneth-25 methacrylate crosspolymer", "hydroxyethyl acrylate/sodium acryloyldimethyl taurate copolymer", "sodium polyacrylate", "sodium polyacrylate starch", "polyacrylate-13", "polyacrylate crosspolymer-6", "polyacrylate crosspolymer-11", "sodium acrylates copolymer", "sodium acrylates crosspolymer-2", "glyceryl acrylate/acrylic acid copolymer", "pvm/ma decadiene crosspolymer", "acrylates/vinyl isodecanoate crosspolymer"];

let mikroplastik_inne = [
"polybutene", "polyamide", "nylon", "polyacrylamide", 
"polyacrylate", "polyurethane",
//potencjalny plastik
"acrylamide/sodium acryloyldimethyltaurate copolymer",   
"acrylates/dimethicone copolymer", "acrylates/octylacrylamide copolymer", "acrylates/polytrimethylsiloxymethacrylate copolymer", 
"ammonium acryloyldimethyltaurate/carboxyethyl acrylate crosspolymer", 
"ammonium polyacrylate", "ammonium polyacryloyldimethyl taurate", 
"ethylene/acrylic acid copolymer", "glyceryl polyacrylate", 
"sodium acrylate / sodium acryloyldimethyl taurate copolymer", "sodium acrylate/sodium acryloyldimethyl taurate copolymer", 
"sodium polyacrylate", "sodium polyacrylate starch",
"hydroxyethyl acrylate/sodium acryloyldimethyltaurate copolymer",
// stale mikroplastiki / tworzywa
"nylon-12", "nylon-6", "nylon-66",
"polyester", "polyester-1", "polyester-11",
"polyethylene", "polyethylene terephthalate",
"polypropylene", "ethylene/propylene copolymer", "ethylene/va copolymer",
"polyvinyl alcohol", "polyquaternium-7",
"polyurethane-14", "polyurethane-35", "polyurethane2", "pvp",
"vp/eicosene copolymer", "vp/va copolymer","poloxamer 338",
"hdi/trimethylol hexyllactone crosspolymer", "poly c10-30 alkyl acrylate",
"sodium polyacryloyl dimethyl taurate", "styrene/isoprene copolymer",
"polyquaternium-10", "polyquaternium-55",
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
"hydrogenated poly(c6-14 olefin)", "hydrogenated styrene/isoprene copolymer",
"styrene/vp copolymer",
"hydrogenated ­styrene/isoprene ­copolymer",
"polyquaternium-28",
"polyquaternium-51",
"polyquaternium-80",
"trimethylpentanediol/adipic acid/glycerin crosspolymer",
"maleated soybean oil glyceryl/ octyldodecanol polymer"
];



function getMikroplastik(){
const mikroplastik = [...akrylany_red, ...akrylany_marron, ...akrylany_orange, ...akrylany_yellow, ...mikroplastik_inne];

return mikroplastik;
}

let alergeny_red = ["alpha-pinene", "alpha pinene", "beta-pinene", "pinene-beta", "alpha-isomethyl ionone", "amyl cinnamal", "amyl salicylate", "anethole", "anise alcohol", "benzyl benzoate", "benzyl cinnamate", "benzyl salicylate", "benzyl silicate", "carvone", "cinnamal", "cinnamyl alcohol", "citral", "citronellol", "coumarin", "d-limonene", "limonene", "eugenol", "farnesol", "geraniol", "hexyl cinnamal", "hydroxycitronellal", "linalool", "menthol", "raspberry ketone", "rose ketones"];

let alergeny_orange = ["parfum", "fragrance", "parfum (fragrance)", "fragrance (parfum)", 
"parfum (fragrance)",
"parfum",
"parfum(fragrance)",
"parfum/fragrance",
"parfum (fragrance)",
"parfum",
"parfum(fragrance)",
"parfum/fragrance",
"fragrance (parfum)",
"cocamidopropyl dimethylamine", "cocamidopropyl betaine", "lauramidopropyl betaine"];

let alergeny_yellow = [
"benzyl alcohol", "phenoxyethanol", "potasium sorbate", "potassium sorbate", "phenethyl alcohol", "phenylethyl alcohol", "geranyl acetate", "gernayl acetate", "linalyl acetate", "snail secretion filtrate"
];

function getAlergeny(){

const alergeny = [...alergeny_red, ...alergeny_orange, ...alergeny_yellow];

return alergeny;
}

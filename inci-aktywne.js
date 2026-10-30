let inciAktywne =[
["Alpha-Glucan Oligosaccharide", "alpha-glucan oligosaccharide", "prebiotyk; wspiera mikrobiom i wzmacnia barierę ochronną."],
["Egzosomy z lactobacillus extracellular", "lactobacillus extracellular vesicles", "Korzyści: szybka regeneracja i gojenie, działanie anti-aging, głębokie ukojenie (idealne przy trądziku, AZS i cerze naczynkowej), wzmocnienie odporności skóry."]
]


function getInciAktywne(){
return inciAktywne;
}

function getAktywne(){
  akt_inci = ["retinol","retinal",
"bakuchiol","caffeine","niacinamide", "adenosine","bisabolol","astaxanthin",
"adenosine triphosphate",
"camellia sinensis leaf extract epigallocatechin gallate",
"copper pca", "cupric chloride",
"cannabigerol", "carnitine"
];
  return akt_inci;
}
/* rozjasniajace */
function getAktywne1(){
        akt_inci = [
"acetyl cysteine",
"acetyl glucosamine",
"arbutin",
"alpha-arbutin",
"α-arbutin",
"azelaic acid",
"glutathione",
"kojic acid",
"phytic acid",
"potassium azeloyl diglycinate",
"resveratrol",
"thioctic acid", 
"diglucosyl gallic acid",
"hexylresorcinol",
"diacetyl boldine",
"undecylenoyl phenylalanine",
"phenyethyl resorcinol",
"dimethylmethoxy chromanyl palmitate"
];
        return akt_inci;
}

function getAktywneAzs(){
 akt_inci = [
"beta-glucan", 
"sodium carboxymethyl betaglucan",
"allantoin",
"dipotassium glycyrrhizate",
"glycyrrhetinic acid",
"bisabolol",
"epigallocatechin gallate",
"rosmarinyl glucoside", 
"caffeyl glucoside",
"gallyl glucoside",
"propyl gallate", 
//prebiotyki
"xylitol","rhamnose","glucomannan",
"alpha-glucan oligosaccharide",
"levan","inulin","oat","barley", 
"wheat bran", "corn",
"cannabidiol",
//ekstrakt z wakroty azjatyckiej
"asiaticoside","madecassic acid",
"madecassoside", "asiatic acid"
];
 return akt_inci;
}

function getWlosy(){
  wlosy = [
"copper tripeptide-1",
"apigenin",
"isoflavones",
"niacinamide",
"glutathione",
"peptide follistatin",
"caffeine",
"peptides",
"gluconolactone",
"glycyrrhetinic acid",
//czynniki wzrostu
"growth factors","epidermal growth factor",
"sphinganine",
"creatine",
"baicalin",
"malus domestica", 
"arginine", 
"methionine", 
"cysteine", 
"cystine",
"pyridoxine hcl",
"capsaicin",
"aminopyrimidine",
"methyl nicotinate",
"diaminopyrimidine oxide"
]
return wlosy;
}
let inciAktywne =[
["Witamina E", "mixed tocopherols, tocopherol acetate", "Działa jako silny antyoksydant, chroni lipidy naskórka przed utlenianiem, nawilża i wzmacnia barierę ochronną."],
["Alpha-Glucan Oligosaccharide", "alpha-glucan oligosaccharide", "prebiotyk; wspiera mikrobiom i wzmacnia barierę ochronną."],
["Egzosomy z lactobacillus extracellular", "lactobacillus extracellular vesicles", "Korzyści: szybka regeneracja i gojenie, działanie anti-aging, głębokie ukojenie (idealne przy trądziku, AZS i cerze naczynkowej), wzmocnienie odporności skóry."],
["Egzosomy z kalusa wąkrotki azjatyckiej", "centella asiatica callus extracellular vesicles", "Zaawansowany składnik biotechnologiczny (egzosomy); wykazuje silne działanie regenerujące, łagodzące, przeciwzapalne oraz stymulujące odnowę komórkową i produkcję kolagenu."],
["Alfa-glukozylrutyna", "alpha glucosylrutin", "Wysoko rozpuszczalna i stabilna forma rutyny; działa silnie antyoksydacyjnie, wzmacnia naczynia krwionośne, zapobiega fotostarzeniu i chroni lipidy skóry przed utlenianiem."],
["Trokserutyna", "troxerutin", "Pochodna rutyny o doskonałym działaniu na układ naczyniowy; zmniejsza przepuszczalność i kruchość naczyń krwionośnych, redukuje obrzęki, działa przeciwzapalnie oraz łagodzi rumień (idealna dla cery naczynkowej i z trądzikiem różowatym)."],
["Kurkumina", "curcumin", "Polifenol o bardzo silnym działaniu przeciwzapalnym, antyoksydacyjnym i przeciwbakteryjnym; wyrównuje koloryt skóry, rozjaśnia przebarwienia oraz łagodzi stany zapalne w trądziku."],
["Fizetyna", "fisetin", "Silny antyoksydant z grupy flawonoidów o działaniu senolitycznym (zwalczającym starzenie komórkowe); chroni kolagen przed degradacją, łagodzi stany zapalne i poprawia elastyczność skóry."],
["Riboza", "ribose", "Naturalny cukier zaangażowany w syntezę ATP w komórkach; dotlenia skórę, stymuluje produkcję kolagenu i elastyny oraz redukuje widoczność zmarszczek i objawy zmęczenia."],
["Naringina", "naringin", "Flawonoid o działaniu przeciwzapalnym, antyoksydacyjnym i wzmacniającym naczynia krwionośne; łagodzi podrażnienia i chroni skórę przed negatywnym wpływem czynników zewnętrznych."],
["Glukozylnaringina", "glucosyl naringin", "Działa silnie antyoksydacyjnie, poprawia mikrokrążenie, zmniejsza obrzęki oraz redukuje oznaki zmęczenia i cienie pod oczami."],
["Kwas oleanolowy", "oleanolic acid", "Reguluje sebum, działa przeciwbakteryjnie i przeciwzapalnie; zapobiega nadmiernemu przetłuszczaniu się skóry i powstawaniu niedoskonałości."],
["Menachinon-7 (Witamina K2)", "menaquinone-7", "Aktywna forma witaminy K; poprawia mikrokrążenie, łagodzi zaczerwienienia, wzmacnia ścianki naczyń krwionośnych i pomaga w redukcji cieni pod oczami oraz sińców."],
["Dinukleotyd nikotynoamidoadeninowy (NAD)", "nicotinamide adenine dinucleotide", "Kluczowy koenzym wspomagający metabolizm komórkowy i odnowę DNA; intensywnie regeneruje, opóźnia procesy starzenia komórkowego i przywraca skórze witalność."],
["Dysmutaza ponadtlenkowa (SOD)", "superoxide dismutase", "Jedna z najsilniejszych enzymatycznych substancji antyoksydacyjnych; neutralizuje najbardziej niszczycielskie wolne rodniki, chroni komórki przed fotostarzeniem i redukuje stany zapalne."],
["Diglicynian azeloilopotasowy", "potassium azeolyl diglycinate", "Nowoczesna pochodna kwasu azelainowego; reguluje wydzielanie sebum, rozjaśnia przebarwienia, łagodzi stany zapalne i poprawia elastyczność cery mieszanej oraz tłustej."],
["Sarkozyna", "sarcosine", "Naturalny aminokwas regulujący pracę gruczołów łojowych; skutecznie zmniejsza wydzielanie sebum, matuje skórę i zwęża rozszerzone pory."],
  ["Glicyryzynian amonu", "ammonium glycyrrhizate", "Aktywny składnik pozyskiwany z korzenia lukrecji; wykazuje silne właściwości przeciwzapalne, kojące i łagodzące. Skutecznie redukuje zaczerwienienia, podrażnienia, obrzęki oraz świąd skóry, a także pomaga w regulacji wydzielania sebum i pielęgnacji cery wrażliwej lub problematycznej."],
  ["Methyl diisopropyl propionamide", "methyl diisopropyl propionamide", "Substancja chłodząca i odświeżająca (pochodna mentolu); zapewnia długotrwałe, przyjemne uczucie chłodu na skórze bez wywoływania podrażnień i pieczenia oraz bez charakterystycznego mentolowego zapachu."]
]


function getInciAktywne(){
return inciAktywne;
}

function getAktywne(){
  akt_inci = [
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
let aktywneComplex = [
["Ecoskin", "alpha-glucan oligosaccharide, polymnia sonchifolia root juice, maltodextrin, lactobacillus", "Stymuluje właściwości obronne skóry. Pomaga regulować ilość bakterii przyczyniających się do jej nadmiernego przetłuszczania."]
];

let complex_1 = [
//----------Provital---------------
["Melavoid", "boerhavia diffusa root extract, propanediol, aqua","opis"],
["STRIOVER™", "aqua, glycerin, astragalus membranaceus root extract, codonopsis pilosula extract, potassium sorbate, sodium benzoate", ""],
["Tens’Up™", "cichorium intybus (chicory) root oligosaccharides, aqua, glycerin, caesalpinia spinosa gum, sodium benzoate, gluconolactone, calcium gluconate", "Składa się z cukrów pozyskiwanych z korzenia cykorii. Składnik aktywny o wyraźnym efekcie liftingu, o działaniu natychmiastowym. Zwiększa syntezę kolagenu. Po regularnym stosowaniu skóra wygląda na napiętą, jędrną i bez oznak zmęczenia. Przywraca skórze blask. Umożliwia gładszą aplikację makijażu."],
["Tens’Up™", "cichorium intybus root oligosaccharides, aqua, glycerin, caesalpinia spinosa gum, sodium benzoate, gluconolactone, calcium gluconate", "Składa się z cukrów pozyskiwanych z korzenia cykorii. Składnik aktywny o wyraźnym efekcie liftingu, o działaniu natychmiastowym. Zwiększa syntezę kolagenu. Po regularnym stosowaniu skóra wygląda na napiętą, jędrną i bez oznak zmęczenia. Przywraca skórze blask. Umożliwia gładszą aplikację makijażu."],
//----------------Givaudan--------------
["Agefinity™", "glycerin, aqua, sodium mannose phosphate, mannose", ""],
["Axolight", "aqua, hydrolyzed wheat flour", ""],
["Erasyal®", "aqua, glycerin, disodium acetyl glucosamine phosphate, caffeyl glucoside", ""],
["Hydrintense™", "sea aqua, propanediol, porphyridium cruentum extract", ""],
["Inoveol®", "aqua, caffeyl glucoside", ""],
["Inoveol® EGCG ", "aqua, epigallocatechin gallatyl glucoside", "Nowoczesny, wyjątkowo stabilny składnik kosmetyczny pozyskiwany z zielonej herbaty, który działa jak silny antyoksydant – neutralizuje wolne rodniki, detoksykuje skórę, łagodzi podrażnienia i spowalnia procesy starzenia."],
["Inoveol® OLEU", "aqua, oleuropeinyl glucoside", ""],
["Neodermyl®", "glycerin, aqua, methylglucoside phosphate, copper lysinate/prolinate", "Zaawansowany składnik aktywny stosowany w kosmetykach przeciwzmarszczkowych, nazywany często beziniekcyjnym wypełniaczem. Dostarcza fibroblastom energii oraz budulca do produkcji kolagenu i elastyny, co poprawia jędrność oraz sprężystość skóry."],
["Neurophroline™", "aqua, propanediol, tephrosia purpurea seed extract", ""],
["NovHyal® Biotech G", "glycerin, aqua, disodium acetyl glucosamine phosphate", ""],
["Redens’In", "commiphora mukul resin extract, sodium hyaluronate", ""],
["Redensyl","glycerin, aqua, sodium metabisulfite, larix europaea wood extract, glycine, zinc chloride, camellia sinensis leaf extract","opis"],
["Sensityl™", "aqua, phaeodactylum tricornutum extract, pentylene glycol", ""],
["Tightenyl™", "glycerin, aqua, disodium acetyl glucosamine phosphate, sodium glucuronate, magnesium sulfate", ""],
["Unichondrin ATP", "butylene glycol, hydrolyzed vegetable protein, adenosine triphosphate, sodium chondroitin sulfate", ""],
["Whitesphere Premium", "glycyrrhiza glabra (licorice) root extract, magnesium ascorbyl phosphate, undaria pinnatifida extract", ""],
["Yogurtene®", "maltodextrin, lactobacillus/streptococcus thermophilus/soybean extract ferment", ""],
["Yogurtene®", "inulin, yogurt powder", ""],
//---------------Evonik----------------
["RHEASOME®", "aqua, glycerin, lecithin, glycolipids, ceramide np, phytosphingosine, cholesterol, benzyl alcohol, benzoic acid, dehydroacetic acid, sodium benzoate, tocopherol", ""],
//--------------Sederma-----------------
["AVOCADIN™ HU25", "persea gratissima (avocado) oil, phytosterols, olea europaea (olive) fruit oil", "Avocadin HU25 jest bogaty w niezbędne nienasycone kwasy tłuszczowe, witaminy i fitosterole, na bazie oleju awokado i oliwy z oliwek. Łatwo się wchłania. Redukuje dyskomfort, zaczerwienienia i odwodnienie. Składniki aktywne regulują stan zapalny, wpływają na odnowę płaszcza hydrolipidowego oraz ochronę tkanek przed wysuszeniem i szkodliwym działaniem słońca."],
["AVOCADIN™ HU25", "persea gratissima oil, phytosterols, olea europaea fruit oil", "Avocadin HU25 jest bogaty w niezbędne nienasycone kwasy tłuszczowe, witaminy i fitosterole, na bazie oleju awokado i oliwy z oliwek. Łatwo się wchłania. Redukuje dyskomfort, zaczerwienienia i odwodnienie. Składniki aktywne regulują stan zapalny, wpływają na odnowę płaszcza hydrolipidowego oraz ochronę tkanek przed wysuszeniem i szkodliwym działaniem słońca."],
["Dermaxyl™ by Sederma", "c12-15 alkyl benzoate, tribehenin, ceramide ng, peg-10 phytosterol, palmitoyl hexapeptide-12", "Połączenie heksapeptydu i ceramidu, które zapobiega starzeniu i odbudowuje barierę skórną, głęboko nawilża, dzięki czemu zmarszczki stają się zredukowane, a skóra wygładzona."],
["SEBULESS™ ", "maltodextrin, syringa vulgaris (lilac) extract", ""],
["SEBULESS™ ", "maltodextrin, syringa vulgaris extract", ""],
//-------------Fision--------------------
["Fision® ActiveBright", "aqua, hydrolyzed oat protein, alpha-arbutin, sodium metabisulfite", ""],
["Fision® AquaShield", "aqua, acetamide mea, hydrolyzed keratin, panthenol, glycerin, sorbitol, sodium cocoyl collagen amino acids, cocoyl sarcosine, wheat germ acid, triticum vulgare (wheat) germ oil, polysorbate 20, linoleic acid, linolenic acid, tocopherol, simmondsia chinensis (jojoba) seed oil, tocopheryl acetate, polysorbate 80, hydrolyzed glycosaminoglycans", ""],
["Fision® EcoLatum S", "ricinus communis (castor) seed oil, hydrogenated castor oil, copernicia cerifera (carnauba) wax", ""],
["Fision® EcoSil", "hydrogenated ethylhexyl olivate, hydrogenated olive oil unsaponifiables", "Emolient do pielęgnacji włosów i skóry, jest naturalną alternatywą dla silikonów. Ułatwia rozczesywanie włosów na mokro, wzmacnia połysk włosów uszkodzonych przez promieniowanie UV."],
["Fision® GlowPlex", "aqua, niacinamide, pisum sativum (pea) seed extract, chenopodium quinoa seed extract, benzyl alcohol, potassium sorbate, sodium benzoate", ""],
["Fision® Hair PF", "aqua, butylene glycol, hydrolyzed rice protein, panthenol, panthenyl hydroxypropyl steardimonium chloride, arctium lappa root extract, hedera helix (ivy) extract, trigonella foenum-graecum seed extract", ""],
["Fision® Hydrate", "aqua, sodium pca, wheat amino acids, panthenol, glycerin, sodium hyaluronate, hydroxyproline", ""],
["Fision® Hydrate Pro", "aqua, sodium pca, panthenol, glycerin, sodium hyaluronate, proline, hydroxyproline", ""],
["Fision® HydraTress", "aqua, panthenol, hydrolyzed quinoa, glycerin, pisum sativum (pea) seed extract, 1-2-hexanediol, sodium hyaluronate", ""],
["Fision® Instant Lift", "aqua, hydrolyzed soy protein, acacia senegal gum, xanthan gum, sodium benzoate", "Tworzy lekką powłokę, która napina się, gdy woda odparowuje, aby unieść skórę. Pozostawia skórę jędrniejszą, młodziej wyglądającą i bardziej promienną. Krem z tym składnikiem stanowi dobrą bazę pod makijaż do codziennego użytku."],
["Fision® KeraVeg18", "aqua, wheat amino acids, soy amino acids, arginine hcl, serine, threonine, benzyl alcohol, potassium sorbate, sodium benzoate", "Roślinny zamiennik keratyny. Wzmacnia włosy, poprawia ich elastyczność i rozczesywanie, ogranicza puszenie i elektryzowanie oraz wspiera ochronę włosów poddawanych zabiegom fryzjerskim lub stylizacji cieplnej."],
["Fision® WrinkleFix", "aqua, hydrolyzed rice protein, hydrolyzed pea protein, glycine, proline, hydrolyzed sodium hyaluronate", ""],
// ------------ Vytrus ------------
["Photobiome","gossypium herbaceum (cotton) seed extract, punica granatum seed extract, trehalose, fructooligosaccharides","Funkcja: Ochronna przed promieniowaniem UV, ujędrniająca, poprawiająca koloryt, poprawiająca elastyczność, przeciwzmarszczkowa"],
["Photobiome","gossypium herbaceum (cotton) callus culture/punica granatum callus culture lysate","opis"],
//Clarivine
["Baolift","adansonia digitata callus culture lysate, glycerin, pentylene glycol, phytic acid, aqua","Składnik, który aktywuje w skórze molekularne mechanizmy pojawiające się podczas ćwiczeń fizycznych, poprawiając napięcie mięśni i uzyskać efekt liftingu skóry."],
//Quora noni biomics
//Quora Noni
["Elaya Renova","olea europaea (olive) leaf extract, cyclodextrin","pielęgnacja włosów, pobudzająca wzrost włosów, regenerująca skórę głowy"],
["Nectaria Lithops", "lithops pseudotruncatella callus lysate, glycerin, pentylene glycol, cyamopsis tetragonoloba (guar) gum, xanthan gum, phytic acid, aqua", "Zwiększa syntezę witaminy D, co pomaga przywrócić młodzieńczy wygląd skóry. Poprawia mikrokrążenie. Regeneruje skórę po opalaniu. Działa przeciwstarzeniowo i antyoksydacyjnie."],
["Deobiome Noni","morinda citrifolia fruit extract, maltodextrin","Naturalny deodorant. Redukuje nieprzyjemne zapachy, zachowując równowagę i ochronę mikrobioty skóry."],
//Kannabia Sense
//Olea Vitae
//Sarcoslim Re-shape
//Turmeria Zen
["Capilia Longa","curcuma longa (turmeric) root extract, aqua, pentylene glycol, phytic acid","opis"],
["Capilia Longa","curcuma longa root extract, aqua, pentylene glycol, phytic acid","opis"],
["Capilia Longa","curcuma longa (turmeric) callus culture conditioned media, aqua, pentylene glycol, phytic acid","opis"],
//Centella Reversa
//Sensia Carota
//Luminia Granatum
["Arabian Cotton","gossypium herbaceum (cotton) seed extract","Oferuje szerokie spektrum ochrony przed promieniowaniem UV/VIS/HEV/IR, zwiększając żywotność komórkową i chroniąc przed uszkodzeniami."],
// -------------- Lipotec ----------------
["Lapagyl™", "brassica campestris (rapeseed) seed oil, tabebuia impetiginosa bark extract, polyglyceryl-3 diisostearate", ""],
["Lapagyl™", "brassica campestris seed oil, tabebuia impetiginosa bark extract, polyglyceryl-3 diisostearate", ""],
["Lipochroman™ Molecule", "dimethylmethoxy chromanol", ""],
//--------------Spec-Chem Industry Inc---
["EGF Plus", "sh-oligopeptide-1, mannitol, glycerin, phenoxyethanol, ethylhexylglycerin, aqua", ""],
["SpecPed® GHK2-Cu", "copper tripeptide-1/bis(tripeptide-1) copper acetate, aqua, glycerin, caprylyl glycol, ethylhexylglycerin", ""],
["SpecPed® GHK2-Cu", "bis(tripeptide-1) copper acetate, aqua, glycerin, caprylyl glycol, ethylhexylglycerin", ""],
["SpecKare® AQUA CMD Blend", "aqua, laminaria digitata extract, hydrogenated lecithin, ceramide eop, ceramide ns, ceramide np, ceramide as, ceramide ap, cholesterol, 1,2-hexanediol", ""],
//------------------------------------
["Restart PRO", "aqua, itaconic acid, arginine, panthenol, linum usitatissimum (linseed) seed extract, salvia hispanica seed extract, polyglyceryl-10 laurate, benzyl alcohol, xylitol, caprylic acid", ""],
["Restart PRO", "aqua, itaconic acid, arginine, panthenol, linum usitatissimum seed extract, salvia hispanica seed extract, polyglyceryl-10 laurate, benzyl alcohol, xylitol, caprylic acid", ""],
["H-VIT PLUS", "aqua, glycerin, rose extract, glycyrrhiza glabra (licorice) rhizome/root, cichorium intybus (chicory) leaf extract, hydrolyzed rhodophyceae extract, panthenol, linoleic acid, xylitol, caprylic acid, disodium edta, caprylyl glycol, menthol, biotin", "Kompleks ekstraktów roślinnych, biotyny, pantenolu i mentolu, który działa odbudowująco na skórę głowy i redukując przetłuszczanie. Nadaje się do produktów dla mężczyzn."],
["H-VIT PLUS", "aqua, glycerin, rose extract, glycyrrhiza glabra rhizome/root, cichorium intybus leaf extract, hydrolyzed rhodophyceae extract, panthenol, linoleic acid, xylitol, caprylic acid, disodium edta, caprylyl glycol, menthol, biotin", "Kompleks ekstraktów roślinnych, biotyny, pantenolu i mentolu, który działa odbudowująco na skórę głowy i redukując przetłuszczanie. Nadaje się do produktów dla mężczyzn."],
["Relipidium™ by BASF", "hydrolyzed yeast protein, butylene glycol, pentylene glycol", "utrzymuje naturalną równowagę mikrobiomu skóry. Uzupełnia niedobór ceramidów w suchej skórze oraz stymuluje produkcję lipidów, celem poprawy i utrzymania integralności bariery ochronnej."],
["LOX-AGE™", "aqua, cichorium intybus (chicory) leaf extract, hexylene glycol, caprylyl glycol, xanthan gum", "Ekstrakt z liści cykorii jest stosowany jako składnik serum zwężających pory, odmładzających, wygładzających, przeciwzmarszczkowych, nawilżających i restrukturyzujących naskórek."],
["LOX-AGE™", "aqua, cichorium intybus leaf extract, hexylene glycol, caprylyl glycol, xanthan gum", "Ekstrakt z liści cykorii jest stosowany jako składnik serum zwężających pory, odmładzających, wygładzających, przeciwzmarszczkowych, nawilżających i restrukturyzujących naskórek."],
["AHA Phytocomplex", "aqua, citric acid, lactic acid, tartaric acid, glucose, citrus limon (lemon) peel oil, acer saccharum (sugar maple) extract", ""],
["AHA Phytocomplex", "aqua, citric acid, lactic acid, tartaric acid, glucose, citrus limon peel oil, acer saccharum extract", ""],
["Fision® PentaFruit V", "aqua, lactic acid, glycolic acid, vaccinium myrtillus fruit extract, saccharum officinarum (sugarcane) extract, citric acid, citrus aurantium dulcis (orange) fruit extract, citrus limon (lemon) fruit extract, acer saccharum (sugar maple) extract, tartaric acid, malic acid", ""],
["Fision® PentaFruit V", "aqua, lactic acid, glycolic acid, vaccinium myrtillus fruit extract, saccharum officinarum extract, citric acid, citrus aurantium dulcis fruit extract, citrus limon fruit extract, acer saccharum extract, tartaric acid, malic acid", ""],
["Multifruit Extract", "aqua, lactic acid, glycolic acid, citric acid, citrus aurantium dulcis (orange) fruit extract, malic acid, tartaric acid, acer saccharum (sugar maple) extract, vaccinium myrtillus fruit extract, citrus limon (lemon) fruit extract", ""],
["Multifruit Extract", "aqua, lactic acid, glycolic acid, citric acid, citrus aurantium dulcis fruit extract, malic acid, tartaric acid, acer saccharum extract, vaccinium myrtillus fruit extract, citrus limon fruit extract", ""],
["Amino Acid Complex (B)", "aqua, butylene glycol, lysine, histidine, arginine, aspartic acid, threonine, serine, glutamic acid, proline, alanine, valine, isoleucine, leucine, tyrosine, phenylalanine", ""],
["Amino Acid Complex", "lysine, histidine, arginine, aspartic acid, threonine, serine, glutamic acid, proline, glycine, alanine, valine, methionine, isoleucine, leucine, tyrosine, phenylalanine, cysteine", "Kompleks aminokwasów. Składnik nawilżający i przeciwstarzeniowy. Zapewnia odżywianie komórek skóry i aktywuje fibroblasty."],
["Kwas ursolowy", "ursolic acid", "Znajduje się w rozmarynie i jest dobrze znany ze swoich właściwości przeciwzapalnych. Zwiększa wytrzymałość bariery skórnej i stymuluje produkcję ceramidów."],
["SymCalmin®", "butylene glycol, pentylene glycol, hydroxyphenyl propamidobenzoic acid", "Syntetyczny składnik (awenantramid), zainspirowany kojącą mocą owsa, który działa łagodząco i przeciwświądowo. Jest stosowany w produktach dla skóry wrażliwej i skłonnej do podrażnień, aby zmniejszyć uczucie dyskomfortu i swędzenia."],
["Cosmowax", "cetearyl alcohol, ceteareth-20", "Wosk emulgujący – kombinacja emulgatorów i stabilizatorów pochodzenia roślinnego. Stabilizator emulsji skuteczny przy ekstremalnych wartościach pH. Cetearyl alcohol tworzy warstwę okluzyjną."],
["Cosmowax", "cetearyl alcohol (and) ceteareth 20", "Wosk emulgujący – kombinacja emulgatorów i stabilizatorów pochodzenia roślinnego. Stabilizator emulsji skuteczny przy ekstremalnych wartościach pH. Cetearyl alcohol tworzy warstwę okluzyjną."],
["Ecodermine™", "glycerin, lactitol, xylitol", "Zwalcza problemy skórne wynikające z zaburzenia równowagi mikrobiologicznej, pomagając zachować naturalne mechanizmy obronne skóry. Selektywnie chroni i przywraca mikroflorę skóry."],
["Venuceane™", "thermus thermophillus ferment, glycerin", "Zapewnia nie tylko ochronę przed promieniowaniem UV, ale jest również wysoce skuteczny w walce ze starzeniem się skóry pod wpływem podczerwieni (IR). Ta aktywna substancja przeciwstarzeniowa, pochodząca z głębin morskich, regeneruje komórki skóry uszkodzone na skutek promieniowania, stymuluje produkcję ochronnych lipidów oraz zmniejsza stan zapalny. Sprawia, że istniejące zmarszczki, plamy i niedoskonałości stają się znacznie mniej widoczne."],
["Konserwant Geogard® ECT", "benzyl alcohol, salicylic acid, glycerin, sorbic acid", "Jest to konserwant zgodny z ECOCERT i COSMOS."],
["PROTAROL™ AFS", "cetearyl alcohol, peg-40 hydrogenated castor oil, stearalkonium chloride, dipalmitoylethyl dimonium chloride", "Wysoce skuteczna samoemulgująca baza balsamowa do przygotowywania wysokiej jakości masek i odżywek do włosów."],
["PROTAROL™ AFS", "cetearyl alcohol & stearalkonium chloride & behen-trimonium chloride & peg-40 hydrogenated castor oil", "Wysoce skuteczna samoemulgująca baza balsamowa do przygotowywania wysokiej jakości masek i odżywek do włosów."],
["Luteosfery", "xanthophylls, lysolecithin", "Luteina zawarta sferach lipidowych pomaga chronić skórę przed szkodliwym działaniem światła niebieskiego (emitowanego przez telefony i laptopy)."],
["Luteosfery AA", "calendula officinalis flower extract, lecithin, cholesterol, glyceryl behenate", "Sfery transportują składniki aktywne przez barierę naskórkową, której normalnie by nie pokonały. Źródłem luteiny jest ekstrakt z nagietka. Luteina pomaga chronić skórę przed szkodliwym działaniem światła niebieskiego (emitowanego przez telefony i laptopy)."],
["AMINO ACID COMPLEX", "aqua, proline, glycine, alanine, valine, isoleucine, leucine, tyrosine, phenylalanine, butylene glycol, lysine, histidine, arginine, aspartic acid, threonine, serine, glutamic acid", "Mieszanka aminokwasów o składzie zbliżonym do skóry. Utrzymuje odpowiedni poziom nawodnienia warstwy rogowej naskórka i dostarcza składników odżywczych do komórek skóry. Chroni kolagen i zapobiega starzeniu się skóry."],
["Amino acid 500L", "sodium pca, arginine, aspartic acid, pca, glycine, alanine, serine, valine, proline, threonine, isoleucine, histidine, phenylalanine, sodium lactate, phenoxyethanol, aqua", "Mieszanka aminokwasów i PCA. Działa jako humektant, środek odżywczy, kondycjonujący, nabłyszczający, regenerujący i nawilżający. Nadaje się do wysokiej jakości preparatów do pielęgnacji włosów i skóry."],
["Filtrat z fermentacji olejów i korzeni ziołowych", "pseudozyma epicola/argania spinosa kernel oil/olive fruit oil/sunflower seed oil/(angelica gigas/licorice/lithospermum erythrorhizon) root ferment extract filtrate", "To innowacyjna baza serum, która dzięki procesowi fermentacji posiada znacznie mniejszą cząsteczkę niż tradycyjne oleje. Gwarantuje to błyskawiczne wchłanianie bez tłustego filmu oraz głębszy transport składników aktywnych, przy jednoczesnym silnym nawilżeniu i regeneracji bariery ochronnej skóry."]
];

function getAktywneComplex(){
return aktywneComplex;
}

function getComplex1(){
return complex_1;
}

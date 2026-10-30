/*
* SKŁADNIKI SPECJALNE: AZS, NK ORAZ DEDYKOWANE DO PIELĘGNACJI WŁOSÓW
*/

// --- CZĘŚĆ AZS ---
let ekstraktyAZS = [
  ["Ekstrakt z bylicy rocznej", "artemisia annua extract", "Jest ceniony za silne właściwości przeciwutleniające i przeciwzapalne. Zawiera artemizynę, która może wspomagać ochronę skóry przed stresem oksydacyjnym i łagodzić podrażnienia."],
  ["Ekstrakt z Liści Bylicy Princeps", "artemisia princeps leaf extract", "Ekstrakt z liści bylicy Princeps (Mugwort) ma silne właściwości przeciwzapalne, łagodzące i antyoksydacyjne. Jest idealny dla skóry wrażliwej, podrażnionej, atopowej, ponieważ zmniejsza zaczerwienienia i swędzenie."],
  ["Kwas Azjatykowy", "asiatic acid", "Kwas azjatykowy jest jednym z aktywnych związków (triterpenów) pozyskiwanych z wąkroty azjatyckiej. Ma silne właściwości regenerujące, gojące, przeciwzapalne i stymulujące syntezę kolagenu i elastyny. Wzmacnia barierę skórną."],
  ["Azjatykozyd", "asiaticoside", "Azjatykozyd jest glikozydem triterpenowym z wąkroty azjatyckiej. Działa silnie regenerująco, gojąco, przeciwzapalnie i antyoksydacyjnie. Wspomaga syntezę kolagenu i poprawia mikrokrążenie, przyspieszając naprawę skóry."],
  ["Ekstrakt z Otrębów Owsa", "avena sativa (oat) bran extract, avena sativa bran extract", "Ekstrakt z otrębów owsa jest bogaty w beta-glukan, awenantramidy i lipidy. Działa silnie nawilżająco, łagodząco, przeciwzapalnie i ochronnie. Idealny dla skóry wrażliwej, suchej i atopowej."],
  ["Ekstrakt z Ziarna Owsa", "avena sativa (oat) kernel extract, avena sativa kernel extract", "Ekstrakt z ziarna owsa jest ceniony za właściwości łagodzące, nawilżające, kojące i przeciwzapalne. Idealny dla skóry wrażliwej, suchej i podrażnionej, zmniejsza zaczerwienienia i swędzenie."],
  ["Ekstrakt z Owsa", "avena sativa extract, avena sativa meal extract", "Ekstrakt z owsa jest ceniony za właściwości łagodzące, nawilżające, kojące i przeciwzapalne. Idealny dla skóry atopowej, wrażliwej, suchej i podrażnionej, ponieważ zmniejsza zaczerwienienia i swędzenie. Działa również nawilżająco i ochronnie, tworząc delikatny film na skórze."],
  ["Ekstrakt ze Słomy Owsa", "avena sativa straw extract", "Ekstrakt ze słomy owsa jest bogaty w składniki nawilżające i łagodzące. Działa kojąco na skórę, zmniejsza podrażnienia i zapewnia delikatne nawilżenie."],
  ["Ferment Bacillus", "bacillus ferment", "Ferment Bacillus to składnik pochodzenia probiotycznego, który może wspomagać procesy regeneracyjne skóry, działać delikatnie złuszczająco (enzymatycznie) i wspierać zdrowy mikrobiom."],
  ["Ferment Bacillus Subtilis", "bacillus subtilis ferment", "Ferment Bacillus subtilis to probiotyczny składnik, który wspiera barierę ochronną skóry, działa regenerująco i może pomagać w złuszczaniu martwych komórek naskórka, poprawiając gładkość skóry."],
  ["Filtrat Fermentacji Bacillus/Kwasu Foliowego", "bacillus/folic acid ferment filtrate extract", "Filtrat z fermentacji Bacillus i kwasu foliowego. Kwas foliowy (witamina B9) wspomaga regenerację komórek i syntezę DNA. Ten składnik działa rewitalizująco, przeciwstarzeniowo i wspomaga odnowę skóry."],
  ["Lizat Fermentacyjny Bifida", "bifida ferment lysate", "Lizat fermentacyjny Bifida to probiotyczny składnik, który wzmacnia barierę ochronną skóry, wspomaga jej regenerację i chroni przed stresem środowiskowym. Działa łagodząco i poprawia ogólny stan mikrobiomu skóry."],
  ["Ekstrakt z Ogórecznika Lekarskiego", "borago officinalis extract", "Ekstrakt z ogórecznika (często w formie oleju z nasion) jest bogaty w kwas gamma-linolenowy (GLA), nienasycony kwas tłuszczowy. Działa silnie regenerująco, nawilżająco i przeciwzapalnie. Jest doskonały dla skóry suchej, wrażliwej, z egzemą czy atopowym zapaleniem skóry, ponieważ wzmacnia barierę lipidową."],
  ["Ekstrakt z Kwiatów/Liści/Łodyg Cardiospermum Halicacabum", "cardiospermum halicacabum flower/leaf/vine extract", "Ekstrakt z Cardiospermum halicacabum (pnącza sercowatego) jest znany z silnych właściwości łagodzących, przeciwzapalnych i przeciwświądowych. Idealny dla skóry atopowej, wrażliwej i skłonnej do alergii."],
  ["Ekstrakt z Wąkroty Azjatyckiej / Cica", "centella asiatica extract, centella asiatica (gotu kola) extract, centella asiatica flower/leaf/stem extract, centella leaf extract, centella asiatica leaf extract, centella asiatica leaf cell extract", "Ekstrakt z wąkroty azjatyckiej to bardzo popularny składnik o silnych właściwościach regenerujących, łagodzących i przeciwzapalnych. Wspomaga produkcję kolagenu, przyspiesza gojenie ran, zmniejsza zaczerwienienia i wzmacnia barierę skórną."],
  ["Kultura Komórek Merystematycznych Wąkroty Azjatyckiej", "centella asiatica meristem cell culture", "Kultura komórek merystematycznych wąkroty azjatyckiej to innowacyjny składnik, który dostarcza skoncentrowanych substancji bioaktywnych. Działa silnie regenerująco, przeciwstarzeniowo, stymuluje odnowę komórkową i wzmacnia barierę skórną."],
  ["Ekstrakt z korzenia lukrecji", "glycyrrhiza glabra (licorice) root extract, glycyrrhiza glabra root extract, dipotassium glycyrrhizinate, glycyrrhiza uralensis root extract, licorice root extract", "Polecany przy AZS składnik łagodzący, który w badaniach przypomina działanie maści steroidowych."],
  ["Ferment Lactobacillus", "lactobacillus ferment", "Ferment Lactobacillus to probiotyczny składnik, który wspiera zdrowy mikrobiom skóry. Wzmacnia barierę ochronną, działa łagodząco, przeciwzapalnie i chroni skórę przed czynnikami zewnętrznymi."],
  ["Lizat Fermentacyjny Lactobacillus", "lactobacillus ferment lysate", "Lizat fermentacyjny Lactobacillus (fragmenty komórek bakterii probiotycznych) działa wzmacniająco na barierę ochronną skóry, wspomaga jej mikrobiom i pomaga w regeneracji. Działa łagodząco i poprawia ogólny stan skóry."],
  ["Filtrat Fermentacji Lactobacillus/Arundinaria Gigantea (Bambus)", "lactobacillus/arundinaria gigantea ferment filtrate", "Filtrat powstały z fermentacji bambusa przez Lactobacillus. Łączy nawilżające i wzmacniające właściwości bambusa z probiotycznym działaniem, wspierając mikrobiom i barierę skórną."],
  ["Ferment z Lactobacillus/Ekstrakt z Wąkroty Azjatyckiej", "lactobacillus/centella asiatica extract ferment", "To fermentacja ekstraktu z wąkroty azjatyckiej przez bakterie Lactobacillus. Zwiększa biodostępność składników aktywnych, potęgując działanie regenerujące, łagodzące, przeciwzapalne i wzmacniające barierę skórną."],
  ["Filtrat z Fermentacji Lactobacillus/Kolagen", "lactobacillus/collagen ferment filtrate", "To połączenie probiotycznych bakterii Lactobacillus i kolagenu. Działa silnie nawilżająco, wspiera regenerację skóry i wzmacnia jej barierę. Może poprawiać elastyczność i gładkość skóry."],
  ["Filtrat Fermentacji Lactobacillus/Korzenia Marchwi", "lactobacillus/daucus carota sativa root ferment filtrate", "Filtrat powstały z fermentacji korzenia marchwi przez Lactobacillus. Dostarcza skórze witamin, antyoksydantów i wspiera jej mikrobiom, działając odżywczo i ochronnie."],
  ["Ferment Lactobacillus/Cząstki Mleka/Oleju Sojowego", "lactobacillus/milk solids/glycine soja (soybean) oil ferment", "Ferment powstały z mleka i oleju sojowego przez Lactobacillus. Bogaty w lipidy, białka i probiotyki. Działa intensywnie odżywczo, nawilżająco i wzmacnia barierę skórną."],
  ["Filtrat z Fermentacji Lactobacillus/Korzenia Żeń-szenia", "lactobacillus/panax ginseng root ferment filtrate", "Ten składnik łączy rewitalizujące właściwości żeń-szenia z korzyściami probiotyków. Działa energetyzująco, przeciwstarzeniowo, wzmacnia odporność skóry i wspiera jej regenerację."],
  ["Filtrat z Fermentacji Soku Gruszkowego Lactobacillus", "lactobacillus/pear juice fermentation filtrate", "Powstały z fermentacji soku gruszkowego przez Lactobacillus, ten filtrat działa nawilżająco, rozświetlająco i może wspierać delikatne złuszczanie skóry, poprawiając jej gładkość i koloryt."],
  ["Ekstrakt z Fermentowanej Dyni Lactobacillus", "lactobacillus/pumpkin ferment extract, lactobacillus/pumpkin fruit ferment filtrate", "Ten ekstrakt to wynik fermentacji dyni przez Lactobacillus. Łączy enzymatyczne właściwości dyni (delikatne złuszczanie) z korzyściami probiotycznymi, poprawiając teksturę skóry i jej odnowę."],
  ["Ekstrakt z Owoców Granatu Lactobacillus", "lactobacillus/punica granatum fruit extract, lactobacillus/fermented pomegranate extract", "Łączy właściwości antyoksydacyjne i regenerujące granatu z korzyściami probiotyków. Działa przeciwstarzeniowo, rozjaśniająco, nawilżająco i wspiera barierę ochronną skóry."],
  ["Ferment Ryżowy Lactobacillus", "lactobacillus/rice ferment, lactobacillus/rice ferment filtrate", "Ten ferment ryżowy, dzięki Lactobacillus, jest bogaty w aminokwasy, witaminy i minerały. Działa nawilżająco, rozświetlająco i odżywczo na skórę, poprawiając jej teksturę i koloryt."],
  ["Ekstrakt z Fermentacji Lactobacillus/Kory Wierzby Purpurowej", "lactobacillus/salix purpurea bark ferment extract", "To fermentacja ekstraktu z kory wierzby purpurowej (źródło salicylanów) przez bakterie Lactobacillus. Działa delikatnie złuszczająco (naturalny BHA), przeciwzapalnie i antybakteryjnie."],
  ["Ekstrakt z Fermentowanej Soi Lactobacillus", "lactobacillus/soybean ferment extract, lactobacillus/soymilk ferment filtrate", "Ekstrakt z fermentowanej soi dostarcza skórze peptydy, aminokwasy i izoflawony. Działa nawilżająco, odżywczo, antyoksydacyjnie i poprawia elastyczność skóry."],
  ["Filtrat Fermentacji Leuconostoc/Korzenia Rzodkiewki", "leuconostoc/radish root ferment filtrate", "To naturalny konserwant pochodzenia roślinnego, powstały z fermentacji korzenia rzodkiewki. Ma również właściwości nawilżające i antybakteryjne."],
  ["Kwas Madekasowy", "madecassic acid", "Kwas madekasowy to kolejny aktywny związek (triterpen) z wąkroty azjatyckiej. Ma silne właściwości przeciwzapalne, regenerujące i gojące. Zmniejsza zaczerwienienia, łagodzi podrażnienia i wspomaga odbudowę skóry."],
  ["Madekasozyd", "madecassoside", "Madekasozyd jest glikozydem triterpenowym z wąkroty azjatyckiej. Działa silnie przeciwzapalnie, łagodząco i regenerująco. Jest szczególnie skuteczny w zmniejszaniu zaczerwienień i podrażnień."],
  ["Ekstrakt z Kwiatów Wiesiołka Dwuletniego", "oenothera biennis (evening primrose) flower extract, oenothera biennis root extract", "Ekstrakt z wiesiołka jest bogaty w kwas gamma-linolenowy (GLA). Działa silnie nawilżająco, regenerująco i przeciwzapalnie, idealny dla skóry suchej, wrażliwej i atopowej."],
  ["Ekstrakt z Liści Pachnotki Zwyczajnej", "perilla frutescens leaf extract, perilla ocymoides leaf extract", "Bogaty w kwasy tłuszczowe omega-3, flawonoidy i polifenole. Działa silnie antyoksydacyjnie, przeciwzapalnie i łagodząco. Idealny dla skóry wrażliwej i atopowej."],
  ["Fermenty Saccharomyces", "saccharomyces ferment filtrate, saccharomyces ferment lysate filtrate, saccharomyces lysate extract, saccharomyces/xylinum/black tea ferment, saccharomyces/copper ferment, saccharomyces/iron ferment, saccharomyces/magnesium ferment, saccharomyces/silicon ferment, saccharomyces/zinc ferment", "Kombucha i bio-fermenty minerałowe. Działają silnie regenerująco, ujędrniająco, nawilżająco, regulują sebum oraz chronią mikrobiom i wspomagają metabolizm komórkowy."]
];

// --- CZĘŚĆ NK ---
let ekstraktyNK = [
  ["Ekstrakt z Nasion Szarłatu Zwieszonego", "amaranthus caudatus seed extract, amaranthus caudatus extract", "Bogaty w skwalen, nienasycone kwasy tłuszczowe i tokoferole (witamina E). Działa silnie odżywczo, nawilżająco i przeciwutleniająco. Poprawia elastyczność i gładkość skóry."],
  ["Ekstrakt z liści mącznicy lekarskiej", "arctostaphylos uva ursi extract, arctostaphylos uva-ursi leaf extract", "Naturalne źródło arbutyny, która wykazuje silne działanie rozjaśniające przebarwienia oraz wyrównujące koloryt skóry. Posiada również właściwości ściągające i przeciwbakteryjne."],
  ["Ekstrakt z nasion arnoty właściwej / achiote", "bixa orellana (achiote) seed extract, bixa orellana seed extract", "Składnik bogaty w bitysynę (karotenoid) oraz antyoksydanty, który chroni skórę przed stresem oksydacyjnym i promieniowaniem UV. Zmniejsza widoczność porów i reguluje produkcję sebum."],
  ["Ekstrakt z Buddlei Dawida / Omżynu Dawida", "buddleja davidii extract", "Ekstrakt z buddlei jest ceniony za swoje właściwości przeciwutleniające i ochronne przed uszkodzeniami spowodowanymi światłem niebieskim i UV. Pomaga chronić DNA komórkowe."],
  ["Ekstrakt z masła shea", "butyrospermum parkii (shea) butter extract", "Skojarzona, wysoce skoncentrowana frakcja masła shea, bogata w lipidowe składniki odżywcze oraz phytosterole. Działa intensywnie natłuszczająco, zmiękczająco i łagodząco."],
  ["Estrakt z nagietka", "calendula officinalis (marigold) flower extract, calendula officinalis flower extract, calendula officinalis extract", "Słynie ze swych właściwości kojących, przeciwzapalnych, przeciwgrzybiczych, odkażających i pobudzających krążenie. Wspomaga regenerację i gojenie się tkanek."],
  ["Ekstrakt z porostu islandzkiego", "cetraria islandica extract", "Wyciąg bogaty w polisacharydy (m.in. licheninę) oraz kwasy porostowe, który tworzy na skórze ochronny, nawilżający film i działa silnie antybakteryjnie oraz przeciwzapalnie."],
  ["Ekstrakt z Chrząstnicy Kędzierzawej / Czerwona Alga", "chondrus crispus extract, chondrus crispus (carrageenan) extract, chondrus crispus powder", "Ekstrakt z chrząstnicy kędzierzawej to polisacharyd (karagen), który działa jako silny humektant (nawilżacz). Tworzy na skórze delikatny, ochronny film."],
  ["Ekstrakt z Czystka Szarego", "cistus incanus extract, cistus incanus flower/leaf/stem extract", "Ekstrakt z czystka szarego jest bardzo bogaty w polifenole, dzięki czemu jest silnym antyoksydantem. Chroni skórę przed wolnymi rodnikami i wzmacnia barierę ochronną."],
  ["Ekstrakt z owoców arbuza", "citrullus lanatus (aquamelon) fruit extract, citrullus lanatus (watermelon) fruit extract, citrullus lanatus fruit extract", "Wyciąg bogaty w silny antyoksydant likopen, witaminę C oraz aminokwasy. Zapewnia intensywne nawilżenie i ochronę przed wolnymi rodnikami."],
  ["Ekstrakt z Mandarynki Satsuma", "citrus unshiu leaf extract, citrus unshiu peel extract", "Ekstrakt z mandarynki Satsuma jest ceniony za swoje właściwości rozjaśniające i wyrównujące koloryt skóry. Pomaga zmniejszać przebarwienia."],
  ["Ekstrakt z Eclipta Prostrata", "eclipta prostrata extract, eclipta prostrata leaf extract", "Szeroko stosowany w Ajurwedzie. W pielęgnacji włosów wzmacnia cebulki, a w pielęgnacji skóry działa antyoksydacyjnie, przeciwzapalnie i regenerująco."],
  ["Indyjski agrest", "emblica officinalis (amla) fruit extract", "Wybitny antyoksydant, który nie tylko odmładza, ale ma unikalną cechę – stabilizuje witaminę C w formule."],
  ["Ekstrakt z Grzyba Fomes Officinalis", "fomes officinalis (mushroom) extract", "Ekstrakt z huby modrzewiowej ma silne właściwości ściągające i zwężające pory. Jest doskonały dla skóry tłustej i z rozszerzonymi porami."],
  ["Ekstrakt z Oczaru Wirginijskiego", "hamamelis virginiana (witch hazel) extract, hamamelis virginiana leaf extract", "Ceniony za swoje silne właściwości ściągające, przeciwzapalne i antyoksydacyjne. Działa tonizująco, zmniejsza pory i łagodzi podrażnienia."],
  ["Ekstrakt z Korzenia Irysa Florenckiego", "iris florentina root extract", "Ekstrakt z korzenia irysa florenckiego jest bogaty w izoflawony. Działa przeciwstarzeniowo, poprawia elastyczność skóry i wspomaga jej regenerację."],
  ["Ekstrakt z owoców drzewa kiełbasianego", "kigelia africana fruit extract", "Wyciąg bogaty w saponiny steroidowe oraz kwas rozmarynowy. Wykazuje silne działanie ujędrniające, napinające i stymuluje mikrokrążenie."],
  ["Ekstrakt z Liści Leptospermum Scoparium (Manuka)", "leptospermum scoparium leaf extract", "Ekstrakt z liści manuka ma silne właściwości antybakteryjne, przeciwzapalne i oczyszczające. Idealny dla skóry problematycznej i trądzikowej."],
  ["Ekstrakt z lilii białej (Cebulki / Kwiatów)", "lilium candidum bulb extract, lilium candidum flower extract", "Działa nawilżająco, zmiękczająco, kojąco, antyoksydacyjnie i rozjaśniająco. Pomaga wyrównać koloryt cery i chroni przed fotostarzeniem."],
  ["Ekstrakt z Owoców Goji", "lycium barbarum fruit extract", "Superfood bogaty w witaminy (C, A), minerały i silne antyoksydanty. Działa przeciwstarzeniowo, nawilżająco i rozświetlająco."],
  ["Ekstrakt z Miodli Indyjskiej (Neem)", "melia azadirachta flower extract, melia azadirachta leaf extract, melia azadirachta extract", "Ma właściwości antybakteryjne, przeciwgrzybicze i przeciwzapalne. Wspomaga oczyszczanie skóry problematycznej."],
  ["Ekstrakt z Morwy Białej", "morus alba extract, morus alba root extract, morus alba bark extract, morus alba leaf extract", "Ceniony za właściwości rozjaśniające, przeciwzapalne i antyoksydacyjne. Pomaga redukować przebarwienia."],
  ["Ekstrakt z Owoców Camu Camu", "myrciaria dubia fruit extract", "Jedno z najbogatszych źródeł witaminy C na świecie. Działa silnie antyoksydacyjnie, rozjaśniająco, stymuluje produkcję kolagenu."],
  ["Ekstrakt z Lotosu Orzechodajnego", "nelumbo nucifera extract, nelumbo nucifera leaf extract, nelumbo nucifera flower extract, nelumbo nucifera callus culture extract, nelumbo nucifera germ extract, nelumbo nucifera root extract", "Wszechstronny składnik bogaty w przeciwutleniacze. Działa nawilżająco, odżywczo, łagodząco, ściągająco, przeciwstarzeniowo i regenerująco."],
  ["Ekstrakt z kwiatów lilii wodnej białej", "nymphaea alba flower extract", "Wyciąg bogaty w flawonoidy i garbniki. Działa silnie nawilżająco, kojąco i przeciwzapalnie. Łagodzi podrażnienia i zaczerwienienia."],
  ["Ekstrakt z planktonu", "plankton extract", "Wyciąg z mikroorganizmów morskich, bogaty w białka i aminokwasy. Wspomaga metabolizm komórkowy, zwiększa energię w skórze i chroni DNA."],
  ["Ekstrakt z Liści Babki Lancetowatej", "plantago lanceolata leaf extract", "Znany z właściwości gojących, przeciwzapalnych i antybakteryjnych. Przyspiesza regenerację skóry i łagodzi podrażnienia."],
  ["Ekstrakt z Owoców Granatu", "punica granatum fruit extract, punica granatum seed cell culture lysate", "Bogaty w kwas elagowy i punicalaginę. Działa silnie przeciwstarzeniowo, regenerująco, nawilżając i ujędrniająco."],
  ["Ekstrakt z Korzenia Ruscus Aculeatus (Ruszczyk Kolczasty)", "ruscus aculeatus root extract", "Znany z właściwości wzmacniających naczynia krwionośne, zmniejszających obrzęki i poprawiających mikrokrążenie."],
  ["Ekstrakt z Undaria Pinnatifida (Wakame)", "undaria pinnatifida extract, undaria pinnatifida cell culture extract", "Bogaty w fucoidan. Działa silnie nawilżająco, przeciwzapalnie, antyoksydacyjnie i stymuluje odnowę komórkową."]
];

// --- CZĘŚĆ HAIR / WŁOSY ---
let ekstraktyWlosy = [
  ["Ekstrakt z bambusa zwyczajnego", "bambusa vulgaris extract", "Jest bogatym źródłem naturalnej krzemionki, która skutecznie wzmacnia osłabione i łamliwe łodygi włosów. W kosmetykach do pielęgnacji wygładza pasma, nadaje im elastyczność oraz zwiększa ich odporność na uszkodzenia mechaniczne."],
  ["Ekstrakt z liści herbaty chińskiej / zielonej herbaty", "camellia sinensis leaf extract", "Działa silnie antyoksydacyjnie i przeciwzapalnie, chroniąc skórę głowy oraz włosy przed stresem oksydacyjnym i promieniami UV. Pomaga regulować wydzielanie sebum, zapobiegając przetłuszczaniu się włosów."],
  ["Ekstrakt z skrzypu polnego", "equisetum arvense extract", "Jeden z najpopularniejszych składników przeciwdziałających wypadaniu włosów. Wzmacnia cebulki, stymuluje wzrost nowych włosów (baby hair) oraz poprawia ogólną strukturę łodygi."],
  ["Ekstrakt z liści miłorzębu japońskiego", "ginkgo biloba leaf extract", "Poprawia mikrokrążenie w skórze głowy, co przekłada się na lepsze dotlenienie i odżywienie cebulek włosowych. Chroni mieszki włosowe przed starzeniem."],
  ["Ekstrakt z liści orzecha włoskiego", "juglans regia leaf extract", "Wykazuje silne właściwości ściągające, antybakteryjne i przeciwgrzybicze. Pomaga w walce z łupieżem i przetłuszczaniem. Delikatnie przyciemnia włosy."],
  ["Ekstrakt z lespedezy dwubarwnej", "lespedeza bicolor extract", "Działa antyoksydacyjnie, chroni przed stresem komórkowym, wspiera regenerację skóry głowy i ogranicza procesy miniaturyzacji mieszków włosowych."],
  ["Ekstrakt z lespedezy głowiastej", "lespedeza capitata extract", "Pomaga w regulowaniu procesów biologicznych skóry głowy. Działa ochronnie, kojąco oraz wspiera mikrokrążenie wokół mieszków włosowych."],
  ["Ekstrakt z komórek macierzystych jabłoni domowej", "malus domestica callus culture extract", "Opóźnia starzenie się komórek skóry oraz mieszków włosowych. Pomaga zachować żywotność cebulek, przedłużając fazę wzrostu włosa (anagen)."],
  ["Ekstrakt z nasion prosa", "panicum miliaceum seed extract", "Bogaty w witaminy, minerały oraz kwas krzemowy. Odżywia i regeneruje strukturę włosa od nasady aż po końce, wzmacniając cebulki."],
  ["Ekstrakt z kory śliwy afrykańskiej", "prunus africana bark extract", "Hamuje aktywność enzymu 5-alfa-reduktazy odpowiedzialnego za łysienie androgenowe. Chroni mieszki włosowe i zapobiega nadmiernemu wypadaniu włosów."],
  ["Pęcherzyki zewnątrzkomórkowe z róży damasceńskiej", "rosa damascena extracellular vesicles", "Zaawansowany składnik biotechnologiczny. Głęboko nawilża, łagodzi podrażnienia skalpu oraz wykazuje działanie silnie regenerujące."],
  ["Ekstrakt z liści rozmarynu", "rosmarinus officinalis leaf extract", "Stymuluje krążenie w skórze głowy, pobudzając wzrost włosów. Wykazuje działanie antybakteryjne, przeciwgrzybicze i reguluje łojotok."],
  ["Ekstrakt z korzenia myszopłocha kolczastego / ruszczyka", "ruscus aculeatus root extract", "Wzmacnia naczynia krwionośne i stymuluje mikrokrążenie w skórze głowy, ułatwiając transport składników odżywczych bezpośrednio do cebulek."],
  ["Ekstrakt z owoców palmy sabałowej", "serenoa serrulata fruit extract", "Blokuje przekształcanie testosteronu w DHT, hamując łysienie androgenowe. Zmniejsza wypadanie włosów i reguluje wydzielanie sebum."],
  ["Ekstrakt z nasion ostropestu plamistego", "silybum marianum seed extract", "Zawiera sylimarynę o działaniu antyoksydacyjnym i przeciwzapalnym. Chroni włosy i skórę głowy przed szkodliwym wpływem środowiska oraz regeneruje skalp."],
  ["Ekstrakt z liści pokrzywy zwyczajnej", "urtica dioica leaf extract", "Klasyczny składnik o działaniu tonizującym, przeciwłupieżowym i regulującym sebum. Dostarcza minerałów i wzmacnia cebulki."],
  ["Ekstrakt z korzenia imbiru", "zingiber officinale root extract", "Działa rozgrzewająco i silnie pobudza krążenie krwi w skórze głowy, stymulując mieszki włosowe do pracy. Posiada właściwości odkażające."]
];

/*
* OPOWIEDNIK SKŁADNIKÓW Z CZĘŚCI HAIR / WŁOSY I ICH DZIAŁANIE NA SKÓRĘ TWARZY
*/

let ekstraktyTwarz = [
  ["Ekstrakt z bambusa zwyczajnego", "bambusa vulgaris extract", "Na twarz działa wygładzająco, matująco i wzmacniająco. Dzięki wysokiej zawartości krzemionki poprawia elastyczność wotkiem naczyniowym, dodaje skórze witalności i wykazuje działanie lekko ściągające."],
  ["Ekstrakt z liści herbaty chińskiej / zielonej herbaty", "camellia sinensis leaf extract", "Działa potężnie antyoksydacyjnie, przeciwzapalnie i kojąco na skórę twarzy. Zwęża pory, wspomaga gojenie zmian trądzikowych, zmniejsza zaczerwienienia oraz chroni cerę przed fotostarzeniem."],
  ["Ekstrakt z skrzypu polnego", "equisetum arvense extract", "Działa na skórę twarzy remineralizująco, ujędrniająco i uszczelniająco na naczynia krwionośne. Utrzymuje elastyczność naskórka, reguluje produkcję sebum oraz wspomaga regenerację cery trądzikowej i zmęczonej."],
  ["Ekstrakt z liści miłorzębu japońskiego", "ginkgo biloba leaf extract", "Jest wybitnym składnikiem dla cery naczynkowej i pod oczy. Poprawia mikrokrążenie, redukuje obrzęki i cienie pod oczami, ujędrnia oraz chroni komórki przed starzeniem oksydacyjnym."],
  ["Ekstrakt z liści orzecha włoskiego", "juglans regia leaf extract", "Na skórze twarzy wykazuje działanie silnie antybakteryjne, ściągające i tonizujące. Pomaga oczyszczać pory, łagodzić stany zapalne w trądziku oraz działa delikatnie napinająco."],
  ["Ekstrakt z lespedezy dwubarwnej", "lespedeza bicolor extract", "W pielęgnacji twarzy działa jako tarcza antyoksydacyjna i chroni komórki skóry przed stresem oksydacyjnym, promieniami UV oraz zanieczyszczeniami środowiskowymi (anti-pollution)."],
  ["Ekstrakt z lespedezy głowiastej", "lespedeza capitata extract", "Podczas aplikacji na twarz wspomaga mikrokrążenie, koi podrażnienia i redukuje objawy zmęczenia skóry, przywracając jej zdrowy i wypoczęty wygląd."],
  ["Ekstrakt z komórek macierzystych jabłoni domowej", "malus domestica callus culture extract", "Działa wybitnie przeciwstarzeniowo na skórę twarzy. Chroni komórki macierzyste naskórka, opóźnia powstawanie zmarszczek, zwiększa witalność i wspomaga regenerację komórkową."],
  ["Ekstrakt z nasion prosa", "panicum miliaceum seed extract", "Na twarz działa silnie odżywczo, nawilżająco i odbudowująco. Bogactwo krzemu i witamin wspiera syntezę kolagenu, poprawiając gęstość oraz strukturalną elastyczność naskórka."],
  ["Ekstrakt z kory śliwy afrykańskiej", "prunus africana bark extract", "Stosowany na skórę twarzy działa przeciwzapalnie, łagodząco i ściągająco. Ze względu na działanie antyandrogenne pomaga redukować trądzik hormonalny oraz nadmierny łojotok."],
  ["Pęcherzyki zewnątrzkomórkowe z róży damasceńskiej", "rosa damascena extracellular vesicles", "Głęboko regeneruje naskórek na poziomie komórkowym, intensywnie nawilża, wygładza drobne zmarszczki, stymuluje odnowę tkankową i skutecznie gasi stany zapalne skóry wrażliwej."],
  ["Ekstrakt z liści rozmarynu", "rosmarinus officinalis leaf extract", "Działa silnie odkażająco, antybakteryjnie i antyoksydacyjnie. Świetnie sprawdza się w pielęgnacji cery tłustej i trądzikowej, odświeża, tonizuje oraz pobudza drenaż limfatyczny twarzy."],
  ["Ekstrakt z korzenia myszopłocha kolczastego / ruszczyka", "ruscus aculeatus root extract", "Obowiązkowy składnik dla cery naczynkowej i reaktywnej. Wzmacnia ścianki naczyń krwionośnych, zmniejsza rumień, redukuje opuchliznę wokół oczu i wyrównuje koloryt twarzy."],
  ["Ekstrakt z owoców palmy sabałowej", "serenoa serrulata fruit extract", "Bardzo skutecznie reguluje pracę gruczołów łojowych na twarzy. Zmniejsza przetłuszczanie się skóry, zapobiega powstawaniu zaskórników i wspomaga leczenie trądziku."],
  ["Ekstrakt z nasion ostropestu plamistego", "silybum marianum seed extract", "Dzięki obecności sylimaryny silnie chroni skórę twarzy przed wolnymi rodnikami i promieniami UV. Regeneruje barierę hydrolipidową, działa przeciwzapalnie i spowalnia procesy starzenia."],
  ["Ekstrakt z liści pokrzywy zwyczajnej", "urtica dioica leaf extract", "Na skórze twarzy działa tonizująco, ściągająco i oczyszczająco. Jest pomocny przy cerze tłustej i trądzikowej, łagodzi drobne stany zapalne oraz dostarcza minerałów odżywczych."],
  ["Ekstrakt z korzenia imbiru", "zingiber officinale root extract", "Silnie stymuluje mikrokrążenie twarzy, przywracając cerze zdrowy koloryt i promienny blask. Działa przeciwzapalnie, antybakteryjnie i ujędrniająco, wspomagając walkę z niedoskonałościami."]
];

function getEkstraktyAZS(){
return ekstraktyAZS;
}

function getEkstraktyNK(){
return ekstraktyNK;
}

function getEkstraktyWlosy(){
return ekstraktyAZS;
}

function getEkstraktyTwarz(){
return ekstraktyNK;
}

(this["webpackJsonpblockly-react-component-example"]=this["webpackJsonpblockly-react-component-example"]||[]).push([[116],{60:function(t,T,s){var _,a,i;a=[s(1)],void 0===(i="function"===typeof(_=function(t){return(t={Msg:{}}).Msg.ADD_COMMENT="Lis\xe4\xe4 kommentti",t.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE="Ei voida poistaa muuttujaa '%1' koska se on osa funktion m\xe4\xe4ritelm\xe4\xe4 '%2'",t.Msg.CHANGE_VALUE_TITLE="Muuta arvoa:",t.Msg.CLEAN_UP="Siivoa lohkot",t.Msg.COLLAPSED_WARNINGS_WARNING="Supistetut lohkot sis\xe4lt\xe4v\xe4t varoituksia.",t.Msg.COLLAPSE_ALL="Sulje lohkot",t.Msg.COLLAPSE_BLOCK="Sulje lohko",t.Msg.COLOUR_BLEND_COLOUR1="v\xe4ri 1",t.Msg.COLOUR_BLEND_COLOUR2="v\xe4ri 2",t.Msg.COLOUR_BLEND_HELPURL="https://meyerweb.com/eric/tools/color-blend/#:::rgbp",t.Msg.COLOUR_BLEND_RATIO="suhde",t.Msg.COLOUR_BLEND_TITLE="sekoitus",t.Msg.COLOUR_BLEND_TOOLTIP="Sekoittaa kaksi v\xe4ri\xe4 kesken\xe4\xe4n annetussa suhteessa (0.0 - 1.0).",t.Msg.COLOUR_PICKER_HELPURL="https://fi.wikipedia.org/wiki/V%C3%A4ri",t.Msg.COLOUR_PICKER_TOOLTIP="Valitse v\xe4ri paletista.",t.Msg.COLOUR_RANDOM_HELPURL="http://randomcolour.com",t.Msg.COLOUR_RANDOM_TITLE="satunnainen v\xe4ri",t.Msg.COLOUR_RANDOM_TOOLTIP="Valitse v\xe4ri sattumanvaraisesti.",t.Msg.COLOUR_RGB_BLUE="sininen",t.Msg.COLOUR_RGB_GREEN="vihre\xe4",t.Msg.COLOUR_RGB_HELPURL="http://www.december.com/html/spec/colorper.html",t.Msg.COLOUR_RGB_RED="punainen",t.Msg.COLOUR_RGB_TITLE="v\xe4ri, jossa on",t.Msg.COLOUR_RGB_TOOLTIP="Luo v\xe4ri, jossa on tietty m\xe4\xe4r\xe4 punaista, vihre\xe4\xe4 ja sinist\xe4. Kaikkien arvojen tulee olla v\xe4lill\xe4 0 - 100.",t.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks",t.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK="poistu silmukasta",t.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE="jatka silmukan seuraavaan toistoon",t.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK="Poistu sisemm\xe4st\xe4 silmukasta.",t.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE="Ohita loput t\xe4st\xe4 silmukasta ja siirry seuraavaan toistoon.",t.Msg.CONTROLS_FLOW_STATEMENTS_WARNING="Varoitus: T\xe4t\xe4 lohkoa voi k\xe4ytt\xe4\xe4 vain silmukan sis\xe4ll\xe4.",t.Msg.CONTROLS_FOREACH_HELPURL="https://github.com/google/blockly/wiki/Loops#for-each",t.Msg.CONTROLS_FOREACH_TITLE="kullekin kohteelle %1 listassa %2",t.Msg.CONTROLS_FOREACH_TOOLTIP="Aseta muuttujan %1 arvoksi kukin listan kohde vuorollaan ja suorita joukko lausekkeita.",t.Msg.CONTROLS_FOR_HELPURL="https://github.com/google/blockly/wiki/Loops#count-with",t.Msg.CONTROLS_FOR_TITLE="laske %1 V\xe4li %2-%3 %4:n v\xe4lein",t.Msg.CONTROLS_FOR_TOOLTIP='Aseta muuttujaan "%1" arvot alkuarvosta loppuarvoon annetun askeleen v\xe4lein ja suorita joka askeleella annettu koodilohko.',t.Msg.CONTROLS_IF_ELSEIF_TOOLTIP='Lis\xe4\xe4 ehto "jos" lohkoon.',t.Msg.CONTROLS_IF_ELSE_TOOLTIP='Lis\xe4\xe4 lopullinen "muuten" lohko "jos" lohkoon.',t.Msg.CONTROLS_IF_HELPURL="https://github.com/google/blockly/wiki/IfElse",t.Msg.CONTROLS_IF_IF_TOOLTIP='Lis\xe4\xe4, poista tai j\xe4rjestele osioita t\xe4ss\xe4 "jos" lohkossa.',t.Msg.CONTROLS_IF_MSG_ELSE="muuten",t.Msg.CONTROLS_IF_MSG_ELSEIF="muuten jos",t.Msg.CONTROLS_IF_MSG_IF="jos",t.Msg.CONTROLS_IF_TOOLTIP_1="Jos arvo on tosi, suorita lauseke.",t.Msg.CONTROLS_IF_TOOLTIP_2="Jos arvo on tosi, suorita ensimm\xe4inen lohko lausekkeita. Muuten suorita toinen lohko lausekkeita.",t.Msg.CONTROLS_IF_TOOLTIP_3="Jos ensimm\xe4inen arvo on tosi, suorita ensimm\xe4inen lohko lausekkeita. Muuten, jos toinen arvo on tosi, suorita toinen lohko lausekkeita.",t.Msg.CONTROLS_IF_TOOLTIP_4="Jos ensimm\xe4inen arvo on tosi, suorita ensimm\xe4inen lohko lausekkeita. Muuten, jos toinen arvo on tosi, suorita toinen lohko lausekkeita. Jos mik\xe4\xe4n arvoista ei ole tosi, suorita viimeinen lohko lausekkeita.",t.Msg.CONTROLS_REPEAT_HELPURL="https://en.wikipedia.org/wiki/For_loop",t.Msg.CONTROLS_REPEAT_INPUT_DO="tee",t.Msg.CONTROLS_REPEAT_TITLE="toista %1 kertaa",t.Msg.CONTROLS_REPEAT_TOOLTIP="Suorita joukko lausekkeita useampi kertaa.",t.Msg.CONTROLS_WHILEUNTIL_HELPURL="https://github.com/google/blockly/wiki/Loops#repeat",t.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL="toista kunnes",t.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE="toista niin kauan kuin",t.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL="Niin kauan kuin arvo on ep\xe4tosi, suorita joukko lausekkeita.",t.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE="Niin kauan kuin arvo on tosi, suorita joukko lausekkeita.",t.Msg.DELETE_ALL_BLOCKS="Poistetaanko kaikki %1 lohkoa?",t.Msg.DELETE_BLOCK="Poista lohko",t.Msg.DELETE_VARIABLE="Poista muuttuja '%1'",t.Msg.DELETE_VARIABLE_CONFIRMATION="Poistetaanko %1 k\xe4ytt\xf6\xe4 muuttujalta '%2'?",t.Msg.DELETE_X_BLOCKS="Poista %1 lohkoa",t.Msg.DISABLE_BLOCK="Passivoi lohko",t.Msg.DUPLICATE_BLOCK="Kaksoiskappale",t.Msg.DUPLICATE_COMMENT="Kahdenna kommentti",t.Msg.ENABLE_BLOCK="Aktivoi lohko",t.Msg.EXPAND_ALL="Laajenna lohkot",t.Msg.EXPAND_BLOCK="Laajenna lohko",t.Msg.EXTERNAL_INPUTS="Ulkoiset sy\xf6tteet",t.Msg.HELP="Apua",t.Msg.INLINE_INPUTS="Tuo sy\xf6tteet",t.Msg.IOS_CANCEL="Peruuta",t.Msg.IOS_ERROR="Virhe",t.Msg.IOS_OK="OK",t.Msg.IOS_PROCEDURES_ADD_INPUT="+ Lis\xe4\xe4 sy\xf6te",t.Msg.IOS_PROCEDURES_ALLOW_STATEMENTS="Salli lausekkeet",t.Msg.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR="T\xe4ll\xe4 toiminnolla on p\xe4\xe4llekk\xe4isi\xe4 sy\xf6tteit\xe4.",t.Msg.IOS_PROCEDURES_INPUTS="SY\xd6TTEET",t.Msg.IOS_VARIABLES_ADD_BUTTON="Lis\xe4\xe4",t.Msg.IOS_VARIABLES_ADD_VARIABLE="+ Lis\xe4\xe4 muuttuja",t.Msg.IOS_VARIABLES_DELETE_BUTTON="Poista",t.Msg.IOS_VARIABLES_EMPTY_NAME_ERROR="Et voi k\xe4ytt\xe4\xe4 tyhj\xe4\xe4 muuttujan nime\xe4.",t.Msg.IOS_VARIABLES_RENAME_BUTTON="Nime\xe4 uudelleen",t.Msg.IOS_VARIABLES_VARIABLE_NAME="Muuttujan nimi",t.Msg.LISTS_CREATE_EMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#create-empty-list",t.Msg.LISTS_CREATE_EMPTY_TITLE="Luo tyhj\xe4 lista",t.Msg.LISTS_CREATE_EMPTY_TOOLTIP="Palauta tyhj\xe4 lista, pituus 0",t.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD="lista",t.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP="List\xe4\xe4, poista tai j\xe4rjestele uudestaan osioita t\xe4ss\xe4 lohkossa.",t.Msg.LISTS_CREATE_WITH_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",t.Msg.LISTS_CREATE_WITH_INPUT_WITH="luo lista",t.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP="Lis\xe4\xe4 kohde listaan.",t.Msg.LISTS_CREATE_WITH_TOOLTIP="Luo lista, jossa on mik\xe4 tahansa m\xe4\xe4r\xe4 kohteita.",t.Msg.LISTS_GET_INDEX_FIRST="ensimm\xe4inen",t.Msg.LISTS_GET_INDEX_FROM_END="nro (lopusta laskien)",t.Msg.LISTS_GET_INDEX_FROM_START="nro",t.Msg.LISTS_GET_INDEX_GET="hae",t.Msg.LISTS_GET_INDEX_GET_REMOVE="hae ja poista",t.Msg.LISTS_GET_INDEX_LAST="viimeinen",t.Msg.LISTS_GET_INDEX_RANDOM="satunnainen",t.Msg.LISTS_GET_INDEX_REMOVE="poista",t.Msg.LISTS_GET_INDEX_TAIL="",t.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST="Palauta ensimm\xe4inen kohde listalta.",t.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM="Palauta kohde annetusta kohdasta listaa.",t.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST="Palauttaa listan viimeisen kohteen.",t.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM="Palauttaa satunnaisen kohteen listalta.",t.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST="Poistaa ja palauttaa ensimm\xe4isen kohteen listalta.",t.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM="Poistaa ja palauttaa kohteen listan annetusta kohdasta.",t.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST="Poistaa ja palauttaa viimeisen kohteen listalta.",t.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM="Poistaa ja palauttaa satunnaisen kohteen listalta.",t.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST="Poistaa ensimm\xe4isen kohteen listalta.",t.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM="Poistaa kohteen listalta annetusta kohtaa.",t.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST="Poistaa viimeisen kohteen listalta.",t.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM="Poistaa satunnaisen kohteen listalta.",t.Msg.LISTS_GET_SUBLIST_END_FROM_END="p\xe4\xe4ttyen kohtaan (lopusta laskien)",t.Msg.LISTS_GET_SUBLIST_END_FROM_START="p\xe4\xe4ttyen kohtaan",t.Msg.LISTS_GET_SUBLIST_END_LAST="viimeinen",t.Msg.LISTS_GET_SUBLIST_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-a-sublist",t.Msg.LISTS_GET_SUBLIST_START_FIRST="hae osalista alkaen alusta",t.Msg.LISTS_GET_SUBLIST_START_FROM_END="hae osalista alkaen kohdasta (lopusta laskien)",t.Msg.LISTS_GET_SUBLIST_START_FROM_START="hae osalista alkaen kohdasta",t.Msg.LISTS_GET_SUBLIST_TAIL="",t.Msg.LISTS_GET_SUBLIST_TOOLTIP="Luo kopio m\xe4\xe4r\xe4tyst\xe4 kohden listaa.",t.Msg.LISTS_INDEX_FROM_END_TOOLTIP="Numero %1 tarkoittaa listan viimeist\xe4 kohdetta.",t.Msg.LISTS_INDEX_FROM_START_TOOLTIP="Numero %1 tarkoittaa listan ensimm\xe4ist\xe4 kohdetta.",t.Msg.LISTS_INDEX_OF_FIRST="etsi ensimm\xe4inen esiintym\xe4 kohteelle",t.Msg.LISTS_INDEX_OF_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list",t.Msg.LISTS_INDEX_OF_LAST="etsi viimeinen esiintym\xe4 kohteelle",t.Msg.LISTS_INDEX_OF_TOOLTIP="Palauttaa kohteen ensimm\xe4isen/viimeisen esiintym\xe4n kohdan listassa. Palauttaa %1 jos kohdetta ei l\xf6ydy.",t.Msg.LISTS_INLIST="listassa",t.Msg.LISTS_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#is-empty",t.Msg.LISTS_ISEMPTY_TITLE="%1 on tyhj\xe4",t.Msg.LISTS_ISEMPTY_TOOLTIP="Palauttaa tosi, jos lista on tyhj\xe4.",t.Msg.LISTS_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Lists#length-of",t.Msg.LISTS_LENGTH_TITLE="%1:n pituus",t.Msg.LISTS_LENGTH_TOOLTIP="Palauttaa listan pituuden.",t.Msg.LISTS_REPEAT_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",t.Msg.LISTS_REPEAT_TITLE="luo lista, jossa kohde %1 toistuu %2 kertaa",t.Msg.LISTS_REPEAT_TOOLTIP="Luo listan, jossa annettu arvo toistuu m\xe4\xe4r\xe4tyn monta kertaa.",t.Msg.LISTS_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Lists#reversing-a-list",t.Msg.LISTS_REVERSE_MESSAGE0="%1 takaperin",t.Msg.LISTS_REVERSE_TOOLTIP="Palauta k\xe4\xe4nnetty kopio listasta.",t.Msg.LISTS_SET_INDEX_HELPURL="https://github.com/google/blockly/wiki/Lists#in-list--set",t.Msg.LISTS_SET_INDEX_INPUT_TO="kohteeksi",t.Msg.LISTS_SET_INDEX_INSERT="lis\xe4\xe4 kohtaan",t.Msg.LISTS_SET_INDEX_SET="aseta",t.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST="Lis\xe4\xe4 kohteen listan k\xe4rkeen.",t.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM="Lis\xe4\xe4 kohteen annettuun kohtaan listassa.",t.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST="Lis\xe4\xe4 kohteen listan loppuun.",t.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM="Lis\xe4\xe4 kohteen satunnaiseen kohtaan listassa.",t.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST="Asettaa listan ensimm\xe4isen kohteen.",t.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM="Asettaa kohteen annettuun kohtaan listassa.",t.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST="Asettaa listan viimeisen kohteen.",t.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM="Asettaa satunnaisen kohteen listassa.",t.Msg.LISTS_SORT_HELPURL="https://github.com/google/blockly/wiki/Lists#sorting-a-list",t.Msg.LISTS_SORT_ORDER_ASCENDING="nouseva",t.Msg.LISTS_SORT_ORDER_DESCENDING="laskeva",t.Msg.LISTS_SORT_TITLE="lajittele %1 %2 %3",t.Msg.LISTS_SORT_TOOLTIP="Lajittele kopio luettelosta.",t.Msg.LISTS_SORT_TYPE_IGNORECASE="aakkosj\xe4rjestyksess\xe4, v\xe4litt\xe4m\xe4tt\xe4 kirjainkoosta",t.Msg.LISTS_SORT_TYPE_NUMERIC="numeerinen",t.Msg.LISTS_SORT_TYPE_TEXT="aakkosj\xe4rjestys",t.Msg.LISTS_SPLIT_HELPURL="https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists",t.Msg.LISTS_SPLIT_LIST_FROM_TEXT="tee lista tekstist\xe4",t.Msg.LISTS_SPLIT_TEXT_FROM_LIST="tee listasta teksti",t.Msg.LISTS_SPLIT_TOOLTIP_JOIN="Yhdist\xe4 luettelon tekstit yhdeksi tekstiksi, erotettuina v\xe4limerkill\xe4.",t.Msg.LISTS_SPLIT_TOOLTIP_SPLIT="Jaa teksti osiin erotinmerkin perusteella ja j\xe4rjest\xe4 osat listaksi.",t.Msg.LISTS_SPLIT_WITH_DELIMITER="erottimen kanssa",t.Msg.LOGIC_BOOLEAN_FALSE="ep\xe4tosi",t.Msg.LOGIC_BOOLEAN_HELPURL="https://github.com/google/blockly/wiki/Logic#values",t.Msg.LOGIC_BOOLEAN_TOOLTIP="Palauttaa joko tosi tai ep\xe4tosi.",t.Msg.LOGIC_BOOLEAN_TRUE="tosi",t.Msg.LOGIC_COMPARE_HELPURL="https://fi.wikipedia.org/wiki/Ep%C3%A4yht%C3%A4l%C3%B6",t.Msg.LOGIC_COMPARE_TOOLTIP_EQ="Palauta tosi, jos sy\xf6tteet ovat kesken\xe4\xe4n samat.",t.Msg.LOGIC_COMPARE_TOOLTIP_GT="Palauttaa tosi, jos ensimm\xe4inen sy\xf6te on suurempi, kuin toinen.",t.Msg.LOGIC_COMPARE_TOOLTIP_GTE="Palauttaa tosi, jos ensimm\xe4inen sy\xf6te on suurempi tai yht\xe4 suuri, kuin toinen.",t.Msg.LOGIC_COMPARE_TOOLTIP_LT="Palauttaa tosi, jos ensimm\xe4inen sy\xf6te on pienempi, kuin toinen.",t.Msg.LOGIC_COMPARE_TOOLTIP_LTE="Palauttaa tosi, jos ensimm\xe4inen sy\xf6te on pienempi tai yht\xe4 suuri, kuin toinen.",t.Msg.LOGIC_COMPARE_TOOLTIP_NEQ="Palauttaa tosi, jos sy\xf6tteet eiv\xe4t ole kesken\xe4\xe4n samoja.",t.Msg.LOGIC_NEGATE_HELPURL="https://github.com/google/blockly/wiki/Logic#not",t.Msg.LOGIC_NEGATE_TITLE="ei %1",t.Msg.LOGIC_NEGATE_TOOLTIP="Palauttaa tosi, jos sy\xf6te on ep\xe4tosi. Palauttaa ep\xe4tosi, jos sy\xf6te on tosi.",t.Msg.LOGIC_NULL="ei mit\xe4\xe4n",t.Msg.LOGIC_NULL_HELPURL="https://en.wikipedia.org/wiki/Nullable_type",t.Msg.LOGIC_NULL_TOOLTIP='Palauttaa "ei mit\xe4\xe4n"-arvon.',t.Msg.LOGIC_OPERATION_AND="ja",t.Msg.LOGIC_OPERATION_HELPURL="https://github.com/google/blockly/wiki/Logic#logical-operations",t.Msg.LOGIC_OPERATION_OR="tai",t.Msg.LOGIC_OPERATION_TOOLTIP_AND="Palauttaa tosi, jos kummatkin sy\xf6tteet ovat tosia.",t.Msg.LOGIC_OPERATION_TOOLTIP_OR="Palauttaa tosi, jos ainakin yksi sy\xf6tteist\xe4 on tosi.",t.Msg.LOGIC_TERNARY_CONDITION="testi",t.Msg.LOGIC_TERNARY_HELPURL="https://en.wikipedia.org/wiki/%3F:",t.Msg.LOGIC_TERNARY_IF_FALSE="jos ep\xe4tosi",t.Msg.LOGIC_TERNARY_IF_TRUE="jos tosi",t.Msg.LOGIC_TERNARY_TOOLTIP='Tarkistaa testin ehdon. Jos ehto on tosi, palauttaa "jos tosi" arvon, muuten palauttaa "jos ep\xe4tosi" arvon.',t.Msg.MATH_ADDITION_SYMBOL="+",t.Msg.MATH_ARITHMETIC_HELPURL="http://fi.wikipedia.org/wiki/Aritmetiikka",t.Msg.MATH_ARITHMETIC_TOOLTIP_ADD="Palauttaa kahden luvun summan.",t.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE="Palauttaa jakolaskun osam\xe4\xe4r\xe4n.",t.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS="Palauttaa kahden luvun erotuksen.",t.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY="Palauttaa kertolaskun tulon.",t.Msg.MATH_ARITHMETIC_TOOLTIP_POWER="Palauttaa ensimm\xe4isen luvun korotettuna toisen luvun potenssiin.",t.Msg.MATH_ATAN2_HELPURL="https://en.wikipedia.org/wiki/Atan2",t.Msg.MATH_ATAN2_TITLE="atan(X:%1,Y:%2)",t.Msg.MATH_ATAN2_TOOLTIP="Palauta pisteen (X,Y) arkustangentti v\xe4lill\xe4 -180\u2013180.",t.Msg.MATH_CHANGE_HELPURL="https://fi.wikipedia.org/wiki/Yhteenlasku",t.Msg.MATH_CHANGE_TITLE="muuta %1 arvolla %2",t.Msg.MATH_CHANGE_TOOLTIP="Lis\xe4\xe4 arvo muuttujaan '%1'.",t.Msg.MATH_CONSTANT_HELPURL="https://en.wikipedia.org/wiki/Mathematical_constant",t.Msg.MATH_CONSTANT_TOOLTIP="Palauttaa jonkin seuraavista vakioista: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), neli\xf6juuri(2) (1.414\u2026), neli\xf6juuri(\xbd) (0.707\u2026), or \u221e (\xe4\xe4ret\xf6n).",t.Msg.MATH_CONSTRAIN_HELPURL="https://en.wikipedia.org/wiki/Clamping_(graphics)",t.Msg.MATH_CONSTRAIN_TITLE="rajoita %1 v\xe4hint\xe4\xe4n %2 enint\xe4\xe4n %3",t.Msg.MATH_CONSTRAIN_TOOLTIP="Rajoittaa arvon annetulle suljetulle v\xe4lille.",t.Msg.MATH_DIVISION_SYMBOL="\xf7",t.Msg.MATH_IS_DIVISIBLE_BY="on jaollinen luvulla",t.Msg.MATH_IS_EVEN="on parillinen",t.Msg.MATH_IS_NEGATIVE="on negatiivinen",t.Msg.MATH_IS_ODD="on pariton",t.Msg.MATH_IS_POSITIVE="on positiivinen",t.Msg.MATH_IS_PRIME="on alkuluku",t.Msg.MATH_IS_TOOLTIP="Tarkistaa onko numero parillinen, pariton, alkuluku, kokonaisluku, positiivinen, negatiivinen, tai jos se on jaollinen toisella luvulla. Palauttaa tosi tai ep\xe4tosi.",t.Msg.MATH_IS_WHOLE="on kokonaisluku",t.Msg.MATH_MODULO_HELPURL="https://en.wikipedia.org/wiki/Modulo_operation",t.Msg.MATH_MODULO_TITLE="%1 \xf7 %2 jakoj\xe4\xe4nn\xf6s",t.Msg.MATH_MODULO_TOOLTIP="Palauttaa jakolaskun jakoj\xe4\xe4nn\xf6ksen.",t.Msg.MATH_MULTIPLICATION_SYMBOL="\u22c5",t.Msg.MATH_NUMBER_HELPURL="https://fi.wikipedia.org/wiki/Luku",t.Msg.MATH_NUMBER_TOOLTIP="Luku.",t.Msg.MATH_ONLIST_HELPURL="",t.Msg.MATH_ONLIST_OPERATOR_AVERAGE="keskiarvo luvuista",t.Msg.MATH_ONLIST_OPERATOR_MAX="suurin luvuista",t.Msg.MATH_ONLIST_OPERATOR_MEDIAN="keskiluku luvuista",t.Msg.MATH_ONLIST_OPERATOR_MIN="pienin luvuista",t.Msg.MATH_ONLIST_OPERATOR_MODE="tyyppiarvo luvuista",t.Msg.MATH_ONLIST_OPERATOR_RANDOM="satunnainen valinta luvuista",t.Msg.MATH_ONLIST_OPERATOR_STD_DEV="keskihajonta luvuista",t.Msg.MATH_ONLIST_OPERATOR_SUM="summa luvuista",t.Msg.MATH_ONLIST_TOOLTIP_AVERAGE="Palauttaa aritmeettisen keskiarvon annetuista luvuista.",t.Msg.MATH_ONLIST_TOOLTIP_MAX="Palauttaa suurimman annetuista luvuista.",t.Msg.MATH_ONLIST_TOOLTIP_MEDIAN="Palauttaa annettujen lukujen keskiluvun.",t.Msg.MATH_ONLIST_TOOLTIP_MIN="Palauttaa pienimm\xe4n annetuista luvuista.",t.Msg.MATH_ONLIST_TOOLTIP_MODE="Palauttaa luettelon yleisimmist\xe4 luvuista annetussa listassa.",t.Msg.MATH_ONLIST_TOOLTIP_RANDOM="Palauttaa satunnaisesti valitun luvun annetuista luvuista.",t.Msg.MATH_ONLIST_TOOLTIP_STD_DEV="Palauttaa annettujen lukujen keskihajonnan.",t.Msg.MATH_ONLIST_TOOLTIP_SUM="Palauttaa kaikkien annettujen lukujen summan.",t.Msg.MATH_POWER_SYMBOL="^",t.Msg.MATH_RANDOM_FLOAT_HELPURL="https://fi.wikipedia.org/wiki/Satunnaisluku",t.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM="satunnainen murtoluku",t.Msg.MATH_RANDOM_FLOAT_TOOLTIP="Palauttaa satunnaisen luvun oikealta puoliavoimesta v\xe4list\xe4 [0.0, 1.0).",t.Msg.MATH_RANDOM_INT_HELPURL="https://fi.wikipedia.org/wiki/Satunnaisluku",t.Msg.MATH_RANDOM_INT_TITLE="Palauttaa satunnaisen kokonaisluvun v\xe4lilt\xe4 %1-%2",t.Msg.MATH_RANDOM_INT_TOOLTIP="Palauttaa satunnaisen kokonaisluvun kahden annetun arvon suljetulta v\xe4lilt\xe4.",t.Msg.MATH_ROUND_HELPURL="https://fi.wikipedia.org/wiki/Py%C3%B6rist%C3%A4minen",t.Msg.MATH_ROUND_OPERATOR_ROUND="py\xf6rist\xe4",t.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN="py\xf6rist\xe4 alasp\xe4in",t.Msg.MATH_ROUND_OPERATOR_ROUNDUP="py\xf6rist\xe4 yl\xf6sp\xe4in",t.Msg.MATH_ROUND_TOOLTIP="Py\xf6rist\xe4\xe4 luvun yl\xf6s- tai alasp\xe4in.",t.Msg.MATH_SINGLE_HELPURL="https://fi.wikipedia.org/wiki/Neli%C3%B6juuri",t.Msg.MATH_SINGLE_OP_ABSOLUTE="itseisarvo",t.Msg.MATH_SINGLE_OP_ROOT="neli\xf6juuri",t.Msg.MATH_SINGLE_TOOLTIP_ABS="Palauttaa luvun itseisarvon.",t.Msg.MATH_SINGLE_TOOLTIP_EXP="Palauttaa e potenssiin luku.",t.Msg.MATH_SINGLE_TOOLTIP_LN="Palauttaa luvun luonnollisen logaritmin.",t.Msg.MATH_SINGLE_TOOLTIP_LOG10="Palauttaa luvun kymmenkantaisen logaritmin.",t.Msg.MATH_SINGLE_TOOLTIP_NEG="Palauttaa numeron vastaluvun.",t.Msg.MATH_SINGLE_TOOLTIP_POW10="Palauttaa 10 potenssiin luku.",t.Msg.MATH_SINGLE_TOOLTIP_ROOT="Palauttaa luvun neli\xf6juuren.",t.Msg.MATH_SUBTRACTION_SYMBOL="-",t.Msg.MATH_TRIG_ACOS="acos",t.Msg.MATH_TRIG_ASIN="asin",t.Msg.MATH_TRIG_ATAN="atan",t.Msg.MATH_TRIG_COS="cos",t.Msg.MATH_TRIG_HELPURL="https://fi.wikipedia.org/wiki/Trigonometrinen_funktio",t.Msg.MATH_TRIG_SIN="sin",t.Msg.MATH_TRIG_TAN="tan",t.Msg.MATH_TRIG_TOOLTIP_ACOS="Palauttaa luvun arkuskosinin.",t.Msg.MATH_TRIG_TOOLTIP_ASIN="Palauttaa luvun arkussinin.",t.Msg.MATH_TRIG_TOOLTIP_ATAN="Palauttaa luvun arkustangentin.",t.Msg.MATH_TRIG_TOOLTIP_COS="Palauttaa asteluvun (ei radiaanin) kosinin.",t.Msg.MATH_TRIG_TOOLTIP_SIN="Palauttaa asteluvun (ei radiaanin) sinin.",t.Msg.MATH_TRIG_TOOLTIP_TAN="Palauttaa asteluvun (ei radiaanin) tangentin.",t.Msg.NEW_COLOUR_VARIABLE="Luo v\xe4rimuuttuja...",t.Msg.NEW_NUMBER_VARIABLE="Luo numeromuuttuja...",t.Msg.NEW_STRING_VARIABLE="Luo merkkijonomuuttuja...",t.Msg.NEW_VARIABLE="Luo muuttuja...",t.Msg.NEW_VARIABLE_TITLE="Uuden muuttujan nimi:",t.Msg.NEW_VARIABLE_TYPE_TITLE="Uuden muuttujan tyyppi:",t.Msg.ORDINAL_NUMBER_SUFFIX="",t.Msg.PROCEDURES_ALLOW_STATEMENTS="salli kommentit",t.Msg.PROCEDURES_BEFORE_PARAMS="parametrit:",t.Msg.PROCEDURES_CALLNORETURN_HELPURL="https://fi.wikipedia.org/wiki/Aliohjelma",t.Msg.PROCEDURES_CALLNORETURN_TOOLTIP="Suorittaa k\xe4ytt\xe4j\xe4n m\xe4\xe4rittelem\xe4 funktio '%1'.",t.Msg.PROCEDURES_CALLRETURN_HELPURL="https://fi.wikipedia.org/wiki/Aliohjelma",t.Msg.PROCEDURES_CALLRETURN_TOOLTIP="Suorittaa k\xe4ytt\xe4j\xe4n m\xe4\xe4rittelem\xe4n funktion '%1' ja k\xe4ytt\xe4\xe4 sen tuotosta.",t.Msg.PROCEDURES_CALL_BEFORE_PARAMS="parametrit:",t.Msg.PROCEDURES_CREATE_DO="Luo '%1'",t.Msg.PROCEDURES_DEFNORETURN_COMMENT="Kuvaile t\xe4m\xe4 funktio...",t.Msg.PROCEDURES_DEFNORETURN_DO="",t.Msg.PROCEDURES_DEFNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",t.Msg.PROCEDURES_DEFNORETURN_PROCEDURE="tee jotain",t.Msg.PROCEDURES_DEFNORETURN_TITLE="tehd\xe4ksesi",t.Msg.PROCEDURES_DEFNORETURN_TOOLTIP="Luo funktio, jolla ei ole tuotosta.",t.Msg.PROCEDURES_DEFRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",t.Msg.PROCEDURES_DEFRETURN_RETURN="palauta",t.Msg.PROCEDURES_DEFRETURN_TOOLTIP="Luo funktio, jolla ei ole tuotosta.",t.Msg.PROCEDURES_DEF_DUPLICATE_WARNING="Varoitus: t\xe4ll\xe4 funktiolla on sama parametri useamman kerran.",t.Msg.PROCEDURES_HIGHLIGHT_DEF="Korosta funktion m\xe4\xe4ritelm\xe4",t.Msg.PROCEDURES_IFRETURN_HELPURL="http://c2.com/cgi/wiki?GuardClause",t.Msg.PROCEDURES_IFRETURN_TOOLTIP="Jos arvo on tosi, palauta toinen arvo.",t.Msg.PROCEDURES_IFRETURN_WARNING="Varoitus: t\xe4t\xe4 lohkoa voi k\xe4ytt\xe4\xe4 vain funktion m\xe4\xe4rityksess\xe4.",t.Msg.PROCEDURES_MUTATORARG_TITLE="sy\xf6tteen nimi:",t.Msg.PROCEDURES_MUTATORARG_TOOLTIP="Lis\xe4\xe4 sis\xe4\xe4ntulon funktioon.",t.Msg.PROCEDURES_MUTATORCONTAINER_TITLE="sy\xf6tteet",t.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP="Lis\xe4\xe4, poista tai j\xe4rjestele uudelleen t\xe4m\xe4n toiminnon tulot.",t.Msg.REDO="Tee uudelleen",t.Msg.REMOVE_COMMENT="Poista kommentti",t.Msg.RENAME_VARIABLE="Nime\xe4 uudelleen muuttuja...",t.Msg.RENAME_VARIABLE_TITLE="Nime\xe4 uudelleen kaikki '%1' muuttujaa:",t.Msg.TEXT_APPEND_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",t.Msg.TEXT_APPEND_TITLE="muuttujaan %1 lis\xe4\xe4 teksti %2",t.Msg.TEXT_APPEND_TOOLTIP="Lis\xe4\xe4 teksti\xe4 muuttujaan '%1'.",t.Msg.TEXT_CHANGECASE_HELPURL="https://github.com/google/blockly/wiki/Text#adjusting-text-case",t.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE="pienet kirjaimet",t.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE="isot alkukirjaimet",t.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE="isot kirjaimet",t.Msg.TEXT_CHANGECASE_TOOLTIP="Palauttaa kopion tekstist\xe4 eri kirjainkoossa.",t.Msg.TEXT_CHARAT_FIRST="hae ensimm\xe4inen kirjain",t.Msg.TEXT_CHARAT_FROM_END="Hae kirjain nro (lopusta laskien)",t.Msg.TEXT_CHARAT_FROM_START="Hae kirjain nro",t.Msg.TEXT_CHARAT_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-text",t.Msg.TEXT_CHARAT_LAST="hae viimeinen kirjain",t.Msg.TEXT_CHARAT_RANDOM="hae satunnainen kirjain",t.Msg.TEXT_CHARAT_TAIL="",t.Msg.TEXT_CHARAT_TITLE="tekstiss\xe4 %1 %2",t.Msg.TEXT_CHARAT_TOOLTIP="Palauttaa annetussa kohdassa olevan kirjaimen.",t.Msg.TEXT_COUNT_HELPURL="https://github.com/google/blockly/wiki/Text#counting-substrings",t.Msg.TEXT_COUNT_MESSAGE0="laske m\xe4\xe4r\xe4 '%1' '%2' sis\xe4ll\xe4",t.Msg.TEXT_COUNT_TOOLTIP="Laske kuinka monta kertaa jokin teksti esiintyy jossakin toisessa tekstiss\xe4.",t.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP="Lis\xe4\xe4 kohteen tekstiin.",t.Msg.TEXT_CREATE_JOIN_TITLE_JOIN="liit\xe4",t.Msg.TEXT_CREATE_JOIN_TOOLTIP="Lis\xe4\xe4, poista tai uudelleen j\xe4rjest\xe4 osioita t\xe4ss\xe4 lohkossa.",t.Msg.TEXT_GET_SUBSTRING_END_FROM_END="kirjaimeen nro (lopusta laskien)",t.Msg.TEXT_GET_SUBSTRING_END_FROM_START="kirjaimeen nro",t.Msg.TEXT_GET_SUBSTRING_END_LAST="viimeiseen kirjaimeen",t.Msg.TEXT_GET_SUBSTRING_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text",t.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT="merkkijonosta",t.Msg.TEXT_GET_SUBSTRING_START_FIRST="hae osa alkaen ensimm\xe4isest\xe4 kirjaimesta",t.Msg.TEXT_GET_SUBSTRING_START_FROM_END="hae osa alkaen kirjaimesta nro (lopusta laskien)",t.Msg.TEXT_GET_SUBSTRING_START_FROM_START="hae osa alkaen kirjaimesta nro",t.Msg.TEXT_GET_SUBSTRING_TAIL="",t.Msg.TEXT_GET_SUBSTRING_TOOLTIP="Palauttaa m\xe4\xe4r\xe4tyn osan tekstist\xe4.",t.Msg.TEXT_INDEXOF_HELPURL="https://github.com/google/blockly/wiki/Text#finding-text",t.Msg.TEXT_INDEXOF_OPERATOR_FIRST="etsi ensimm\xe4inen esiintym\xe4 merkkijonolle",t.Msg.TEXT_INDEXOF_OPERATOR_LAST="etsi viimeinen esiintym\xe4 merkkijonolle",t.Msg.TEXT_INDEXOF_TITLE="tekstiss\xe4 %1 %2 %3",t.Msg.TEXT_INDEXOF_TOOLTIP="Palauttaa ensin annetun tekstin ensimm\xe4isen/viimeisen esiintym\xe4n osoitteen toisessa tekstiss\xe4. Palauttaa osoitteen %1 jos teksti\xe4 ei l\xf6ytynyt.",t.Msg.TEXT_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Text#checking-for-empty-text",t.Msg.TEXT_ISEMPTY_TITLE="%1 on tyhj\xe4",t.Msg.TEXT_ISEMPTY_TOOLTIP="Palauttaa tosi, jos annettu teksti on tyhj\xe4.",t.Msg.TEXT_JOIN_HELPURL="https://github.com/google/blockly/wiki/Text#text-creation",t.Msg.TEXT_JOIN_TITLE_CREATEWITH="luo teksti",t.Msg.TEXT_JOIN_TOOLTIP="Luo merkkijonon liitt\xe4m\xe4ll\xe4 yhteen mink\xe4 tahansa m\xe4\xe4r\xe4n kohteita.",t.Msg.TEXT_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",t.Msg.TEXT_LENGTH_TITLE="%1:n pituus",t.Msg.TEXT_LENGTH_TOOLTIP="Palauttaa annetussa tekstiss\xe4 olevien merkkien m\xe4\xe4r\xe4n (v\xe4lily\xf6nnit mukaan lukien).",t.Msg.TEXT_PRINT_HELPURL="https://github.com/google/blockly/wiki/Text#printing-text",t.Msg.TEXT_PRINT_TITLE="tulosta %1",t.Msg.TEXT_PRINT_TOOLTIP="Tulostaa annetun tekstin, numeron tai muun arvon.",t.Msg.TEXT_PROMPT_HELPURL="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user",t.Msg.TEXT_PROMPT_TOOLTIP_NUMBER="Kehottaa k\xe4ytt\xe4j\xe4\xe4 sy\xf6tt\xe4m\xe4\xe4n numeron.",t.Msg.TEXT_PROMPT_TOOLTIP_TEXT="Kehottaa k\xe4ytt\xe4j\xe4\xe4 sy\xf6tt\xe4m\xe4\xe4n teksti\xe4.",t.Msg.TEXT_PROMPT_TYPE_NUMBER="k\xe4ytt\xe4en annettua viesti\xe4, kehottaa sy\xf6tt\xe4m\xe4\xe4n numeron",t.Msg.TEXT_PROMPT_TYPE_TEXT="k\xe4ytt\xe4en annettua viesti\xe4, kehottaa sy\xf6tt\xe4m\xe4\xe4n teksti\xe4",t.Msg.TEXT_REPLACE_HELPURL="https://github.com/google/blockly/wiki/Text#replacing-substrings",t.Msg.TEXT_REPLACE_MESSAGE0="Korvaa teksti %1 tekstill\xe4 %2 tekstiss\xe4 %3",t.Msg.TEXT_REPLACE_TOOLTIP="Korvaa tietyn tekstin ilmentym\xe4t tekstin sis\xe4ll\xe4.",t.Msg.TEXT_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Text#reversing-text",t.Msg.TEXT_REVERSE_MESSAGE0="%1 takaperin",t.Msg.TEXT_REVERSE_TOOLTIP="Muuttaa tekstin kirjainten j\xe4rjestyksen toisin p\xe4in.",t.Msg.TEXT_TEXT_HELPURL="https://fi.wikipedia.org/wiki/Merkkijono",t.Msg.TEXT_TEXT_TOOLTIP="Kirjain, sana tai rivi teksti\xe4.",t.Msg.TEXT_TRIM_HELPURL="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces",t.Msg.TEXT_TRIM_OPERATOR_BOTH="poistaa v\xe4lily\xf6nnit kummaltakin puolelta",t.Msg.TEXT_TRIM_OPERATOR_LEFT="poistaa v\xe4lily\xf6nnit vasemmalta puolelta",t.Msg.TEXT_TRIM_OPERATOR_RIGHT="poistaa v\xe4lily\xf6nnit oikealta puolelta",t.Msg.TEXT_TRIM_TOOLTIP="Palauttaa kopion tekstist\xe4 siten, ett\xe4 v\xe4lily\xf6nnit on poistettu yhdest\xe4 tai molemmista p\xe4ist\xe4.",t.Msg.TODAY="T\xe4n\xe4\xe4n",t.Msg.UNDO="Kumoa",t.Msg.UNNAMED_KEY="nimet\xf6n",t.Msg.VARIABLES_DEFAULT_NAME="kohde",t.Msg.VARIABLES_GET_CREATE_SET="Luo 'aseta %1'",t.Msg.VARIABLES_GET_HELPURL="https://github.com/google/blockly/wiki/Variables#get",t.Msg.VARIABLES_GET_TOOLTIP="Palauttaa muuttujan arvon.",t.Msg.VARIABLES_SET="aseta %1 arvoksi %2",t.Msg.VARIABLES_SET_CREATE_GET="Luo 'hae %1'",t.Msg.VARIABLES_SET_HELPURL="https://github.com/google/blockly/wiki/Variables#set",t.Msg.VARIABLES_SET_TOOLTIP="Asettaa muutujan arvoksi annetun sy\xf6tteen.",t.Msg.VARIABLE_ALREADY_EXISTS="Muuttuja nimelt\xe4\xe4n '%1' on jo olemassa.",t.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE="Muuttuja nimelt\xe4 '%1' on jo olemassa toiselle tyypille: '%2'.",t.Msg.WORKSPACE_ARIA_LABEL="Blocklyn ty\xf6n\xe4kym\xe4",t.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT="Sano jotakin...",t.Msg.CONTROLS_FOREACH_INPUT_DO=t.Msg.CONTROLS_REPEAT_INPUT_DO,t.Msg.CONTROLS_FOR_INPUT_DO=t.Msg.CONTROLS_REPEAT_INPUT_DO,t.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF=t.Msg.CONTROLS_IF_MSG_ELSEIF,t.Msg.CONTROLS_IF_ELSE_TITLE_ELSE=t.Msg.CONTROLS_IF_MSG_ELSE,t.Msg.CONTROLS_IF_IF_TITLE_IF=t.Msg.CONTROLS_IF_MSG_IF,t.Msg.CONTROLS_IF_MSG_THEN=t.Msg.CONTROLS_REPEAT_INPUT_DO,t.Msg.CONTROLS_WHILEUNTIL_INPUT_DO=t.Msg.CONTROLS_REPEAT_INPUT_DO,t.Msg.LISTS_CREATE_WITH_ITEM_TITLE=t.Msg.VARIABLES_DEFAULT_NAME,t.Msg.LISTS_GET_INDEX_HELPURL=t.Msg.LISTS_INDEX_OF_HELPURL,t.Msg.LISTS_GET_INDEX_INPUT_IN_LIST=t.Msg.LISTS_INLIST,t.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST=t.Msg.LISTS_INLIST,t.Msg.LISTS_INDEX_OF_INPUT_IN_LIST=t.Msg.LISTS_INLIST,t.Msg.LISTS_SET_INDEX_INPUT_IN_LIST=t.Msg.LISTS_INLIST,t.Msg.MATH_CHANGE_TITLE_ITEM=t.Msg.VARIABLES_DEFAULT_NAME,t.Msg.PROCEDURES_DEFRETURN_COMMENT=t.Msg.PROCEDURES_DEFNORETURN_COMMENT,t.Msg.PROCEDURES_DEFRETURN_DO=t.Msg.PROCEDURES_DEFNORETURN_DO,t.Msg.PROCEDURES_DEFRETURN_PROCEDURE=t.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,t.Msg.PROCEDURES_DEFRETURN_TITLE=t.Msg.PROCEDURES_DEFNORETURN_TITLE,t.Msg.TEXT_APPEND_VARIABLE=t.Msg.VARIABLES_DEFAULT_NAME,t.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM=t.Msg.VARIABLES_DEFAULT_NAME,t.Msg.MATH_HUE="230",t.Msg.LOOPS_HUE="120",t.Msg.LISTS_HUE="260",t.Msg.LOGIC_HUE="210",t.Msg.VARIABLES_HUE="330",t.Msg.TEXTS_HUE="160",t.Msg.PROCEDURES_HUE="290",t.Msg.COLOUR_HUE="20",t.Msg.VARIABLES_DYNAMIC_HUE="310",t.Msg})?_.apply(T,a):_)||(t.exports=i)}}]);
//# sourceMappingURL=116.a9615337.chunk.js.map
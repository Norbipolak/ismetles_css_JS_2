/*
Vezérélési szerkezetek
    * ciklusok 
    * elágazások 

Elágazások 
    if 
    switch 
*/

var homerseklet = 20;

if(homerseklet < 0) {
    console.log("Nagyon hideg van!");
} else {
    console.log("Nincsen nagyon hideg!");
}
//vagy ha azt szeretnék, hogy kevesebb zárójel legyen benne, akkor lehet ezt igy is ->
if (homerseklet < 0) console.log("Nagyon hideg van");
else console.log("Nincsen nagyon hideg");

/*
ezt még lehet úgy is, hogy van benne több állítás, tehát else ig-ág
És akkor itt több feltételt is meg lehet határozni, itt pl. csak a hőmérséklet van nézve, de lehet úgy is, hogy 
több fajta ilyen feltételt vizsgálunk, aminek meg kell felelnie
*/
if(homerseklet < 0) {
    console.log("nagyon hideg van");
} else if(homerseklet >= 0 && homerseklet < 10) {
    console.log("mérsékelten hideg idő van");
} else if(homerseklet >= 10 && homerseklet < 20){
    console.log("őszi időjárás");
} else if(homerseklet >= 20 && homerseklet < 25){
    console.log("tavaszi időjárás");
} else {
    console.log("nyári időjárás");
}

/*
At if, az vár nekünk egy boolean értéket, tehát az állítás, ami meg van határozva az true vagy false lehet és abba az ágba megy bele ahol 
true, vagy ahol elöször true

If van legelől, utána következik az else if vagy/meg az else, de ezek nem kötelezőek, lehet csak egy if-unk és kész
*/

//Switch

var kedvencSzin = "piros";

/*
Színtaktikailag, hogy müködik a switch
1. Elöszőr meg kell határozni, hogy mire készítünk switch-et, ebben az esetben a kedvencSzin változóra, ezért 
-> switch(kedvencSzin)
2. Meghatározunk case-eket, ezt olyan formában, hogy case, annak megadjuk, hogy mi az itteni case és a legvégén :!!!!!!!!!!!!!!!!!!!!!
3. Ha megírtuk a case-t akkor azt le kell zárni, mindegyiket egy break-vel
*/

switch(kedvencSzin){
    case "kék":
        console.log("A felhasználó kedvenc színe a kék");
    break;
    case "zöld":
        console.log("A felhasználó kedvenc színe a zöld");
    break;
    case "sárga":
        console.log("A felhasználó kedvenc színe a sárga");
    break;
    case "piros":
        console.log("A felhasználó kedvenc színe a piros");
    break;
}



/*
Különbségek a switch és az if között!!!!!!!!!
1. Az if egy logaikai értéket vár a zárójelben pl. homerseklet < 0
a case-ben pedig nem egy logikai érték van, hanem egy konkrét érték -> "kék" ami lehet egy string is egy number is vagy egy boolean,
akkor viszont két ága lehet csak a switchnek 

A switch az egyetlen változó értékét vizsgálja és pontos egyezőséget keres 
!!!!!
Az if az több változó értékét is tudja vizsgálni és a végén, amit az if-nek a zárójelében belerakunk az egy boolean kifejezés lesz 
vagy true vagy false!!!!!!!!!!!!!!
És azért ez egy nagy különbség, mert amit itt csináltunk az if-vel, azt nem tudnánk megoldani a switch-vel 

és ha ez most lefutatjuk, akkor (a terminálba node script.js-vel), akkor kiírja, hogy a A felhasználó kedvenc színe a piros
Tehát pontos egyezőséget keres és itt ugye az utolsó case-ben történt pontos egyezőség, ezért kiírta azt ami ott van, vagy megcsinálja 
attól függően, hogy mire készítettük a case-t 

Nincsen más elégazás a js-ben 
*/

/*
Az a példa switch-vel, mikor van egy függvényünk és annak van egy operatora, ami változik case-enként tehát erre csináljuk majd
és van két értékünk, ami meg a és b 
*/

function performOperator(operator, a, b) {
    let result = 0;

    switch(operator) {
        case "+": 
            result = a + b;
        break;
        case "-":
            result = a - b;
        break;
        case "*":
            result = a * b;
        break;
        case "/":
            result = a / b;
        break;
        default:
            console.log("invalid operator");
        break;
    }

    return result;
}

const performOperatorResult = performOperator("*", 5, 10);
console.log(performOperatorResult);

/*
1. Csináltunk egy függvényt, ami vár három értéket 
    -operator 
    -a (number)
    -b (number)
2. Megadutnk egy kezdőértéket, const result, amivel majd mindegyik switch-ben attól függően, hogy mi lesz az operator 
kapunk egy értéket éa majd a végén ezt az értéket fogjuk visszakapni a return-ben!!!!!!!
3. Meghatározzuk, a switch-ben, hogy mire készül, minek keressük az egyezőséget, itt majd ez az operator lesz 
4. Csinálunk case-ket, tehát itt megadjuk, hogy milyen operator legyen +, -, *, / 
5. A case-kben megadjuk, hogy mi legyen amikor ez a case helyes, itt megadjuk pl. a + case esetében, hogy az a és b-t adja össze 
és ez legyen a result, ebben a case-ben amit visszakapunk a végén -> result = a + b;
6. return result!!!!!!
7. Meghívjuk a függvényt egy valamilyen változóban az értékekkel együtt -> const performOperatorResult = performOperator("*", 5, 10);
ha ezt meg is szeretnénk jeleníteni a konzolon, akkor console.log ennek a változónak a neve -> performOperatorResult

Tehát case pontos egyezőség és mindegyik case után kell break!!!! 
************************************************************************************************************************************
Mikor kell return egy function(függvényben) ->
1. Ha pl. egy értéket kapunk vissza, akkor kell return
*/
function add(a, b) {
    return a + b;
}
/*
2. Nem kell ha például egy tömböt módosítunk vele!!!!!!!!!!!!!!!!!!!!!!!! vagy valamit ki szeretnénk írni a console-ra  
    -konzol kiírás ->
*/
    function greet(name) {
    console.log("Hello, " + name + "!");
    //No return statement needed
}
/*
    -tömb módosítása -> 
Ez a függvény vár egy array-t, végigmegy for ciklussal ennek az array-nek az elemein és mindegyik elemét megszorozza 2-vel -> 
arr[i] *= 2 vagy akár lehetne ezt így is írni -> arr[i] = arr[i] * 2 

megadunk neki egy array-t -> numbers = [1, 2, 3, 4, 5]
ilyenkor még nem fog megváltozni semmi, ha ki akarunk log-olni 

utána meghívjuk a függvényt -> doubleArray(numbers)
és itt már meg fog változni a numbers tömb értékei, azzal ami a függvényben van, jelen esetben ez arr[i] = arr[i] * 2;
tehát minden egyes eleme a numbers array-nek a kétszerese lesz 
*/
function doubleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2; // Multiply each element by 2
    }
    // No return statement needed as the original array is modified in place
}

let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers); // Output: Original array: [1, 2, 3, 4, 5]

doubleArray(numbers); // Modify the array

console.log("Modified array:", numbers); // Output: Modified array: [2, 4, 6, 8, 10]

/*

3. Tudjuk használni a return egy függvényben, ha például, amit keresünk az beteljesül és ki szeretnénk lépni a függvényből
nem szeretnénk, hogy a függvény többi része is lefusson, ebben az esetben indok nélkül -> early exit 
*/
function isPositive(num) {
    if(num > 0) {
        return true;
    }
    return false; //ezt nem is kéne ideírni ugye, 
}

function isPositive2(num) {
    if(num > 0)
        return true;
}

/*
Mi a különbség a tömb és a string változásánál!!!!!!!!!!!!!!!!!!!!!!!!!

1. Tömb 

Ha készítunk egy tömböt, annak meg tudjuk változtatni az értékét, análkül, hogy létrehoznánk neki, hogy egy másik új tömb készülni 
tehát nem úgy müködik, hogy van egy array és bármilyen változtatást csinálunk vele és keletkezik egy új tömb és a régi tömb is megmarad
hanem!!!!!!!!!!!!! az eredeti tömbnek az értékeit változtatjuk meg, hozzáadunk elemet, kiveszünk belőle, mindig csak egy tömb fog létezni
(a legfrissebb)

pl. 
arr = [1, 2, 3];
arr.push(4);
console.log(arr) -> [1, 2, 3, 4]
vagy akár index alapján is változtathatunk 
arr[0] = 0; -> [0, 2, 3, 4]

2. 
Stringeknél viszont nem így van, ha megadunk egy string-et egy változónak, akkor az már elkészült és nem lehet módosítani 
csak, olyan formában, hogy létrehozunk egy másik változót és abban az eredetit megváltoztatjuk 
pl. 
let str = "hello";
let newStr = str.toUpperCase();

az str mindig "hello" lesz a newStr pedig "HELLO"
**********************************************************************************************************************************************
*/

/*
Ciklusok 
    * előtesztelő 
    * hátultesztelő 
    * számlálós 
    
Van a while (hátultesztelő) meg a do-while(elöltesztelős) és a for ciklus pedig a számlálós

Milyen részei vannak egy ciklusnak 
    * ciklusfej 
    * ciklusmag
*/
/*
1. while 
ciklusfej -> counter < 15
Itt a ciklusfelben van a futási feltétel -> addig fut a ciklus, ameddig a futási feltétel az igaz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

ciklusmag -> counter++
Mit csináljon - utasítások, müveletek 

Mi lesz a legnagyobb érték, amit kiír a konzolra, mi a legnagyobb érték, amit majd kap a counter -> 15
Így ebben a formában 15, mert a ciklusfejben teljesül a futási feltétel a 14-re és bemegy a cilusmagba, ahol hozzáadunk eggyet 
és azt kiírjuk 

de viszont, ha ez így lenne -> !!!!!!!!!!!!!!!! akkor csak 14
var counter = 0;

while(counter < 15) {
    console.log("counter:" + counter);
    counter++;
}
Mert ebben az esetben teljesül a futási feltétel a 14-re majd ezt kiírjuk és csak utána adunk hozzá eggyet (counter++)
de attól meg a counter ebben a ciklusmagban a 15-ös értéket fogja felvenni, mint legmagassabb értéket
*/
var counter = 0;

while(counter < 15) {
    counter++;
    console.log("counter:" + counter);
}
/*
2. do-while 

Mi a különbség a do-while és a while között ->
Elöször elvégzi a müveletet és utána tesztel a do-while!!!!!!!!!!!!!!!!!!!!!!
While pedig elöször tesztel, tehát megnézi, hogy a ciklusfejben a futási feltétel megfelelő és utána csinálja meg a müveletet!!!
->
Ettől előtesztelő a while ciklus és hátultesztelő a do-while ciklus!!!!!!!!!!!!!!!!
*/ 
counter = 0;

do {
    counter++;
    console.log("do-while-counter: " + counter);
} while(counter < 15);

/*
Mi van abban az esetben, ha mindegyiknél a kezdőértéket átírjuk 0-ról 15-re 
counter = 0;
-> 
counter = 15;
Mi fog történni az egyikkel, mi fog történni a másikkal?
- while 
    nem végződik a müvelet, mert a futási feltétel nem fog teljesülni -> 15 nem kisebb mint 15
-do-while 
    elöször cselekszik, aztán gondolkodik, tehát itt el fog végződni a müvelet, mert elöször lefutatja ciklusmagot 
    aztán pedig a futási feltételt ellenőrzi, tehát itt ebben a counter = 15 esetben 16 lesz, mert elöször hozzáadja

Ez a különbség azért van, mert fizikailag a do feljebb található, mint a while 
!!!Ezért, merthogy fentről lefele hajtjuk végre, ezeket az egyszerű programokat, nem minden programra igaz ez, mert pl. függvényhívásnál
másképpen nézhet ki a dolog, de alapvetően fentről lefele olvassuk a kódot és akkor a do-while-nál a do az végre is hajtja a while elött
*/

/*
3. for ciklus 
számlálós!!!

Mettől-meddig fig menni itt az i -> 
0-14

Miben különbözik a for ciklus a while és a do-while ciklustól -> 
a fir ciklus egy fix-szerkezetű ciklusfeje van 
Ciklusfejben létrehozunk egy számlálót (i++), arra egy feltételt megfogalmazunk(var i = 0 és i < 15)
*/
for(var i = 0; i < 15; i++) {
    console.log("i = " + i);// i = 0 .... i = 14
}
/*
Itt pedig megfordítjuk a feltételt tehát 15-től megy 0-ig, mert >= 0 és a számlalá pedig -- lesz 
*/
for(var i = 15;i >= 0; i--){
    console.log("i = " + i);//i = 15....i = 0
}
/*
Ha mondjuk ezt írnánk abban mi a hiba -> 
for(var i = 15; i >= 0; i++)
    console.log("i = " + i);

ez a ciklus, akkor érne véget ha elérné a nullát, de ezt soha nem fogja, ezért megy 15-től eggyesével a végtelenig(infinte loop)
tehát itt a futási feltétel az örökké él(végtelen ciklus)

van egy másik végtelen ciklus -> 
while(true)
Mert ha ide true-t írunk akkor örökké fog futni 

és ha megnézzük a while ciklust az ugyanugy egy boolean értéket fog fogadni a ciklus fejében, mint az if 
while(counter < 15)!!!!!!!!!!!!!!!!
if(homerseklet < 0)!!!!!!!!!!!!!!!!
*************************************************************************************************************************************
*/
/*
Mik azok az alprogramok ->
Az alprogramok a programunk jól elkülöníthető funkciónális egységei (function)
    - eljárás 
    - függvény 

Mi a különbség az eljárás és a függvény között!!!!!!!!!!!!!!! -> 
Az eljárásban nincsen visszakapott érték!!!!!!!! (tömb megváltoztatása, meg csak ha valamit ki akarunk console.log-olni)

function hello() {
    var h = "hellóka"
}

console.log(h);

Az a hiba, így, hogy nem tudunk hozzáférni a h-hoz, mert az csak a function belsejéből lesz elérhető és kivülről nem fogunk 
tudni hozzáférni!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
ha ezt most így lefutatnánk, akkor hibaüzenetet kapunk!!!
h is not defined, mert az eláráson belül, tehát abban a scope-ban a h változó definiálva van de viszont globálisan nincsen!!!

Mit kell csinálni, hogy ehhez a h változóhoz hozzáférjünk, nem is a változóhoz, hanem csak az értékéhez
kell írni egy return-t, hogy azt adja vissza!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function hello() {
    var h = "hellóka"
    return h;
}

és akkor ezt a függvényt meg tudjuk hívni egy változóban és akkor annak a változónak is lehet a neve mondjuk h, mert a két változónak 
semmi köze egymáshoz
function hello() {
    var h = "hellóka"
    return h;
}
var b = hello();
console.log(b);

Tehát így tudunk hozzáférni egy függvényben meghatározott változóhoz globálisan, hogy return-őljuk az értékét !!!!!
és egy másik változóban meghívjuk ezt a függvényt és azt a változót pedig ki tudjuk console.log-olni!!!!!!
*/

//function-re egy másik példa 
function pow(a, b) {
    return a**b;
}

const result = pow(2, 20);//2 a 20-ikon
console.log(result); //1048576

/*
Tehát itt az van, hogy meghatátozunk valamit a függvény paramétereinek és a return-ben ezeket visszaadjuk egy müvelettel 
majd a végeredményt egy globális változóban tároljuk, amiben meghívjuk ugye ezt a függvényt és a paramétereinek meg értéket adunk!!!!!!!!!!!

Tehát erre jók a függvények, hogy a lokális változóknak az értékeit kihozzák a függvényen kivülre 

Miért kell, hogy az a meg b lokális változó legyen -> !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Mert a függvény meghívásánál bármilyen értéket megadhatunk neki 

function pow(a, b){
    result = a ** b;
    return result;
}
const result = pow(2, 30);
console.log(result);

Miért kell, hogy ez a result (result = a ** b) lokális változó legyen -> 
mert a belső lokális result változónak lehet bármennyi értéke, a kinti globális változónak meg csak egy értéke lehet!!!!!!!!!!!!!!!!!
attól függően, hogy a pow-t hányszor hívjuk meg, de minden meghívásnál egy külön globális változó kell létrehozni!!!! 
mert az csak egy értéket tud tárolni 

Ezért van, hogy léteznek ezek a hatókörök (scope) vagy különben nem müködne a dolog
********************************************************************************************************************************************
*/

/*
Mi a különbség a let a const és a var között -> 

1. Ha létrehozunk egy blokban egy var változót, akkor az a blokkon kivül is létezni fog!!!
mert ez egy globális változó de viszont a let és a const nem!!!
Ha létrehozunk egy let-es változót a blokban, akkor az a blokkon kivül nem fog létezni 

2. Az még a különbség, hogyha létrehozunk var-val egy változót és előtte szeretnénk console.log-olni, tehát hozzáférni, 
akkor az létezik csak azt mondja, hogy undefined, míg ez let-vel és const-val hibaüzenet lenne, hiszen a console.log() pillanatában
az a változó még nem is létezett!!!!! var-nál érzékeli, hogy van ilyen változó a programban, csak ott még nincsen értéke
*/

//1
{
    var a = 0;
}

console.log(a);//0

{
    let z = 1;
}

console.log(z);//hibaüzenet

//2
console.log(asdf);// undefined
var asdf = "asdf";

console.log(asdfg);
let asdfg = "asdfg";//not defined (hibaüzenet)

/*
const -> nem módosulhat az értéke, másrészt kötelező neki alapértéket adni!!!!!!!! (míg let-nek nem kötelező értéket adni)
hiszen ha nem módosulhat az értéke, és létrehozod akkor az összes const undefined lesz 
*/
const df = "df";
/*
****************************************************************************************************************************************

Mik azok a tömbök -> 
Több elemet tudunk bennük tárolni(több értéket)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
ezek Javascriptben lehetnek többfajta típusuak is, de többi programozási nyelvben viszont nem 

Hogyan tudjuk ezeket a tömböket kezelni -> 
Vannak indexei!!!!!!!! (0-val kezdődik)
Indexek az elemek sorszámai, amik nullától indulnak!!!

Hogy férünk hozzá ennek a tömbnek a 8-ához 
arr = [1,2,3,4,5,6,7,8,9,10];
arr[7];

Honnan tudjuk a tömb elemszámát, ha nem szeretnénk megszámolni eggyesével -> length!!!!!!
Length megmondja, hogy mennyi az elemszáma a tömbnek 

Mi az összefüggés a legmagasabb index és a length között -> 
A length eggyel nagyobb, mint az utolsó elem, mert az indexelés az nullától kezdődik!!!!!!

Hogyan tudunk egy ciklussal végigmenni ezen az arr nevű tömbön -> 7
for(let i = 0;i < arr.length; i++) {
    console.log(arr[i])
}

Azért tudunk így végigmenni egy tömbön, mert i mint index az nullánál kezdődik és length az meg eggyel több mint az index,de 
itt azt írjuk, hogy < mint length, ezért length-nél már nem fog bemenni, csak eggyel előtte, ami pont jó nekünk
mert eggyel kisebb az utolsó elem indexe mint a length!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

hogy lehet visszafele menni egy tömbön
array.length - 1-nél kezdünk, hiszen az az utolsó indexű eleme a tömbbnek és >= 0-ig megyünk, mert 0 az első indexe!!!!!!!!!!
*/
for(let i = arr.length - 1;i >= 0;i--){
    console.log(arr[i]);
}

/*
Fontos, hogy for-nál mi a kezdőérték, meddig menjen és fontos a index-length reláció, index mindig eggyel kisebb mint a length
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
***********************************************************************************************************************
*/

/*
console.log(typeof arr); object 
Object a js-ben háromféle lehet object, array, date (tényleges objektum, tömb, date)

console.log(hello); function!!!!!

console.log(hello()); -> ha meghívjuk, visszatérési értéke a hello függvénynek -> string!!!!!

egy arrow function, aminek nincsen viszatérési értéke 
console.log(typeof (()=> {})); -> function

de ha viszont csinálunk egy arrow function-t egy változóban 
és azt a változót meghívjuk, akkor az lesz az értéke, hogy undefined

const func = ()=>{};
console.log(func()) -> undefined, mert ez nem ad vissza semmit 

Mi a különbség ezek az arrow functionök között 
const add1 = (a, b)=>a+b;
const add2 = (a, b)=>{a+b};
console.log(add1(3,4))
console.log(add2(3,4))

Ha az add1-et meghívjuk, akkor azt fogjuk visszakapni, hogy 7 viszont az add2-nél nem kapunk vissza semmit 
mert ez egy eljárás {a+b}, tehát ha van egy kapcsoszárójel, akkor az eljárás lesz és biztos, hogy undefined lesz 
mert nem adunk vissza semmit, kell oda a return!!!!!!!!!!!!!!!!!!!!!

de ha viszont így írnánk, akkor megint egy függvény const add2 = (a, b)=>{return a+b};
de ezt nem érdemes, így írni mert ez sokkal egyszerübb!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
**********************************************************************************************************************************************
Random szám generálás 
Milyen értékeket fogunk visszakapni arra, hogy
Math.random()
Visszakapunk egy értéket 0-1 között 

Mit kell csinálni, ha vissza szeretnénk kapni egy random értéket nulla és tíz között 
Meg kell szorozni 10-vel!!!!!!!!!!
Math.random()*10

Mit kell csinálni, hogy egész számot kapjunk vissza
Math.random!!!!!!!!!!!!!!!!!
Math.floor(Math.random()*11)
Ha azt akarjuk, hogy az intervallum az 10 legyen, akkor eggyel többel kell megszorozni, mint az eredeti volt!!!!
intervallum mindig az lesz, hogyha n az intervallum, akkor n+1-vel kell megszorozni!!!

és ha innentől kezdve egy számot szeretnénk 50-60-ig akkor csak azt írjuk, hogy +50
Math.floor(Math.random()*11)+50
Itt mindig 50 és 60 között ad vissza egy számot, mert itt (*11) 10 lesz az intervallum, +50 itt pedig 50-nel kezdünk!!!!!!

Véletlenszám generálás 
const rand = (from, to)=> Math.floor(Math.random() * ((to-from)+1)) + from
console.log(rand(5,6));

Tudunk 5 és 6 között véletlen számot generálni, kettő vel szoroztuk meg itt ((to-from)+1) és 5-től megy, tehát vagy 5 vagy 6 lesz 

de lehet modnjuk 89 és 94 között is 
console.log(rand(89,94));










*/







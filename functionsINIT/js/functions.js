const h1 = document.getElementById('h1');

const text = `<p>Jon Smith</p>`;


const insertText = (text) => {
    h1.innerHTML+= text;
}

for (let i = 0; i < 1; i++) {
    insertText(text);
}

//Parašykite funkciją, kurios argumentas būtų tekstas, 
//kuris yra įterpiamas į h1 tagą;


//Parašykite funkciją su dviem argumentais, 
//pirmas argumentas tekstas, įterpiamas į h tagą,
//o antrasis tago numeris (1-6). Rašydami šią funkciją 
//remkitės pirmame uždavinyje parašytą funkciją;
function func2(text, number) {
    h1.innerHTML+= text;
    h1.classList.add(`h${number}`);
}

// Sugeneruokite atsitiktinį stringą iš raidžių ir skaičių.
// Visus skaitmenis stringe įdėkite į h1 tagą. 
// Raides palikite. Jegu iš eilės eina keli skaitmenys, 
// juos į tagą reikią dėti kartu 
// (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) 
// Keitimui naudokite pirmo patobulintą (jeigu reikia)
// uždavinio funkciją.

// generate random string from letters and numbers
function generateRandomString() {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const randomString = generateRandomString();
//console.log(randomString);
const arrays = getArrays(randomString);
//console.log(arrays);
insertText(arrays[1]);
// get 2 arrays out of string which contains letters and numbers
function getArrays(text) {
    let letters = '';
    let numbers = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'a' && text[i] <= 'z' || text[i] >= 'A' && text[i] <= 'Z') {
            letters += text[i];
        } else {
            numbers += text[i];
        }
    }
    return [letters, numbers];
}

//Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių 
//jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).



//console.log(divideWithoutRemainder(12));

//Sugeneruokite masyvą iš 100 elementų, 
//kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. 
//Išrūšiuokite masyvą pagal daliklių be liekanos kiekį 
//mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.

// generate random array of numbers from 33 to 77 with 100 elements

let array = generateRandomArray(33,77,100);
//console.log(array);

let sortedArr = array.sort((a, b) => divideWithoutRemainder(b) - divideWithoutRemainder(a));
//console.log(sortedArr);

//bubble sort
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (divideWithoutRemainder(array[j+1]) > divideWithoutRemainder(array[j])) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
//console.log(bubbleSort(array));



// Sugeneruokite masyvą iš 100 elementų, 
// kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. 
// Naudodami 4 uždavinio funkciją iš masyvo 
// ištrinkite pirminius skaičius.

let array6 = generateRandomArray(333,777,100);
// console.log(array6);
array6 = array6.filter(number => divideWithoutRemainder(number) % 2 === 0);
// console.log(array6);

// Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, 
// kurio visi, išskyrus paskutinį, 
// elementai yra atsitiktiniai skaičiai nuo 0 iki 10, 
// o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą 
// kaip ir pirmasis masyvas. 
// Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. 

//let array7 = generateRandomArray(0,10,Math.floor(Math.random() * (21 - 10)+10));
//console.log(array7);


//Sugeneruokite masyvą iš trijų elementų, 
//kurie yra atsitiktiniai skaičiai nuo 1 iki 33. 
//Jeigu tarp trijų paskutinių elementų yra nors vienas
// ne pirminis skaičius, prie masyvo pridėkite dar vieną 
//elementą- atsitiktinį skaičių nuo 1 iki 33. 
//Vėl patikrinkite pradinę sąlygą ir 
//jeigu reikia pridėkite dar vieną elementą. Kartokite, 
//kol sąlyga nereikalaus pridėti elemento. 

let array9 = generateRandomArray(1,33,3);
//console.log(array9);

function task9(array) {
    while (true) {
        if(
        divideWithoutRemainder(array[array.length-1]) != 0 || 
        divideWithoutRemainder(array[array.length-2]) != 0 || 
        divideWithoutRemainder(array[array.length-3]) != 0
        ) {
            array.push(Math.floor(Math.random() * (33 - 1)+1));
        } else {
            break;
        }
        
    }
    return array;
}
//console.log(task9(array9));


//generuokite masyvą iš 10 elementų, 
//kurie yra masyvai iš 10 elementų, 
//kurie yra atsitiktiniai skaičiai nuo 1 iki 100. 
//Jeigu tokio didelio masyvo (ne atskirai mažesnių) 
//pirminių skaičių vidurkis mažesnis už 70, 
//suraskite masyve mažiausią skaičių (nebūtinai pirminį) 
//ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių 
//skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite


function generateRandomArray(low,high,length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (high - low +1)) + low);
    }
    return array;
}

function divideWithoutRemainder(number) {
    let result = 0;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            result++;
        }
    }
    return result;
}

function averageOfArrayOfArrays(array) {
    let sum = 0;
    let lowest = array[0][0];
    let [row,col] = [0,0];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (divideWithoutRemainder(array[i,j]) === 0) {
                sum += array[i][j];
            }
            if (array[i][j] < lowest) {
                lowest = array[i][j];
                row = i;
                col = j;
            }
        }
    }
    return [(sum / (array.length * array[0].length)),lowest,row,col];
}


 function task10(){
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(generateRandomArray(1,10,10));
    }
    console.log(array);
    let [average,lowest,row,col] = averageOfArrayOfArrays(array);

    while(average < 70) {
        array[row][col] += 3;
        [average,lowest,row,col] = averageOfArrayOfArrays(array);
    }
    console.log(array);
    console.log(average,lowest,row,col);


    return array;
}
//task10();

/*
    Sugeneruokite masyvą, kurio ilgis atsitiktinai kinta nuo 10 iki 100. 
    Masyvo reikšmes sudaro atsitiktiniai skaičiai 0-100 ir masyvai. 
    Santykis skaičiuojamas atsitiktinai, 
    bet taip, kad skaičiai sudarytų didesnę dalį nei masyvai. 
    Reikšmių masyvų ilgis nuo 1 iki 5, o reikšmės analogiškos 
    (nuo 50% iki 100% atsitiktiniai skaičiai 0-100, o likusios masyvai) 
    ir t.t. kol visos galutinės reikšmės bus skaičiai ne masyvai. 
    Suskaičiuoti kiek elementų turi masyvas. 
    Suskaičiuoti masyvo elementų (tie kurie ne masyvai) sumą. 
    Suskaičiuoti maksimalų masyvo gylį. 
    Atvaizduokite masyvą grafiškai . 
    Masyvą pavazduokite kaip 
    div elementą, kuris yra display:flex, kurio viduje yra skaičiai. 
    Kiekvienas div elementas turi savo unikalų id ir 
    unikalią background spalvą (spalva pvz nepavaizduota). 
    pvz: <div id=”M1”>10, 46, 67, 
        <div id=”M2”> 89, 45, 89, 34, 90, 
        <div id=”M3”> 84, 97 </div> 90, 56 </div> </div>
*/

const task11 = () => {
    let array = generateRandomArray(0,100,Math.floor(Math.random() * (100 - 10 +1)) + 10);
    
}


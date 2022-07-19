const task1 = () => {
    const array = Array.from({length: 300}, 
        () => Math.floor(Math.random() * 300))
    
    let sum150 = 0
    const string = `${
            array.map((value) => {
                if (value>150) sum150++;
                if(value>275) return `[${value}]`;
                return value;
            }).join(' ')
    }`
    console.log(`bigger than 150 numbers - ${sum150}`);
    console.log(string);

    // Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, 
    // atspausdinkite juos atskirtus tarpais ir suskaičiuokite 
    // kiek tarp jų yra didesnių už 150.  
    // Skaičiai didesni nei 275 turi būti 
    // atspausdinti skliausteliuose” [ ] “.
}
//task1();

const task2 = () => {
    let array = Array.from(Array(3000).keys())
    let [str1,str2] = ['',''];

    for(let i=0; i<array.length; i++) {
        if(array[i] % 77 == 0) {
            console.log(array.length);
            str1 = str1 + `${array[i]},`;
        } else {
            str2 = str2 + `${array[i]},`;
        }
    }
    
    console.log(str1.substring(0, str1.length-1));

    console.log(str2.substring(0, str2.length-1));

    /*
    //Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000 kurie //dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Popaskutinio skaičiaus kablelio neturi būti.
    */
}
//task2();

const task3 = () => {
    let quadrant = '';
    for(let i=0; i<10;i++) {
        for(let j=0; j<10; j++) {
            quadrant = quadrant + '* '
        }
        quadrant = quadrant + '\n'
    }
    console.log(quadrant);


    //     Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”.
    // * * * * * * * * * * *
    // * * * * * * * * * * *
    // * * * * * * * * * * *
    // * * * * * * * * * * *
    // * * * * * * * * * * *
    // * * * * * * * * * * *
    // * * * * * * * * * * *

}
//task3();

const task4 = () => {
    const grid = document.getElementById('grid');
    for(let i=0; i<7;i++) {
        let row = document.createElement('div');
        row.id = `row${i}`;
        row.style.display = 'flex';
        row.style.gap = '4px';

        for(let j=0; j<7; j++) {
            if(i==j || i + j == 7-1) {
                let quadrantRed = document.createElement('div');
                quadrantRed.classList.add("quadrant");
                quadrantRed.classList.add("red");
                row.appendChild(quadrantRed);
            } else {
                let quadrantPurple = document.createElement('div');
                quadrantPurple.id = `quadrant${j}`;
                quadrantPurple.style = {

                }
                quadrantPurple.style.backgroundColor = 'purple';
                quadrantPurple.style.width = '50px';
                quadrantPurple.style.height = '50px';
                row.appendChild(quadrantPurple);
            }
        }
        grid.appendChild(row);
    }
}
//task4();

const task5 = () => {
    const firstScenario = () => {
        let firstScenario = true;
        while(firstScenario) {
            if(Math.floor(Math.random() * 2)) console.log('S');
            else {
                console.log('H');
                firstScenario = false;
            };
            
        }
    }
    //firstScenario();

    const secondScenario = () => {
        let secondScenario = 0;
        while(secondScenario<3) {
            if(Math.floor(Math.random() * 2)) console.log('S');
            else {
                console.log('H');
                secondScenario++;
            };
            
        }
    }
    //secondScenario();

    const thirdScenario = () => {
        let thirdScenario = 0;
        while(thirdScenario<3) {
            if(Math.floor(Math.random() * 2)) {
                console.log('S')
                thirdScenario = 0;
            } else {
                console.log('H');
                thirdScenario++;
            };
            
        }
    }
    //thirdScenario();


    //     Metam monetą. Monetos kritimo rezultatą imituojam Math.random() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
    // Iškritus herbui;
    // Tris kartus iškritus herbui;
    // Tris kartus iš eilės iškritus herbui;
}
//task5();

const task6 = () => {
    let [kazysPTS,petrasPTS] = [0,0];
    while(kazysPTS <= 222 || petrasPTS <= 222) {
        const roundPTSPetras = Math.floor(Math.random() * (20 - 10 + 1) + 10);
        const roundPTSKazys = Math.floor(Math.random() * (25 - 5 + 1) + 5);
        
        console.log(roundPTSPetras);
        console.log(roundPTSKazys);
        roundPTSKazys==roundPTSPetras ? 
            console.log('Abudu laimejo raunda'):roundPTSKazys>roundPTSPetras? console.log('Kazys laimejo raunda'):console.log('Petras laimejo raunda');; 
        kazysPTS += roundPTSKazys;
        petrasPTS += roundPTSPetras;
    }
    if(petrasPTS >= 222 && kazysPTS >= 222) {
        console.log('Abudu laimejo saskes');
    } else if( petrasPTS > 222 ) {
        console.log('petras laimejo saskes');
    } else {
        console.log('kazys laimejo saskes');
    }
    console.log(`petro taskai: ${petrasPTS}`);
    console.log(`kazio taskai: ${kazysPTS}`);

    // Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​Math.random()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.
}
//task6();

const task7 = () => {
    const rowsCount = 5;
    const grid = document.getElementById('rhombus');
    for(let i=0; i<rowsCount;i++) {
        let row = document.createElement('div');
        row.id = `row${i}`;
        row.style.display = 'flex';
        row.style.gap = '4px';

        for(let j=0; j<rowsCount; j++) {
            if(i==j || i + j == rowsCount-1) {
                let quadrantRed = document.createElement('div');
                quadrantRed.classList.add("quadrant");
                quadrantRed.classList.add("red");
                row.appendChild(quadrantRed);
            } else {
                let quadrantPurple = document.createElement('div');
                quadrantPurple.id = `quadrant${j}`;
                quadrantPurple.style.backgroundColor = 'purple';
                quadrantPurple.style.width = '50px';
                quadrantPurple.style.height = '50px';
                row.appendChild(quadrantPurple);
            }
        }
        grid.appendChild(row);
    }

}
//task7();

const task8 = () => {

    const small = () => {
        let sum = 0;
        let tries = 0;
        while(sum<=85) {
            sum+=Math.floor(Math.random() * (20 - 5 + 1) + 5);
            tries++;
        }
        console.log('Reikejo bandymu:', tries);
    }
    small();

    const big = () => {
        let sum = 0;
        let tries = 0;

        while(sum<=85) {
            sum+=Math.round(Math.random())? (Math.floor(Math.random() * (30 - 20 + 1) + 20)) : 0;
            tries++;
        }
        console.log('Reikejo bandymu:', tries);
    }
    big();
    //     Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami Math.random() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
    // “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
    // “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite Math.random() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.
}
//task8();


const task9 = () => {
    let array = new Array();

    for(let i=0; i<50;i++) {
        let unique = true;
        let value;
        while(unique) {
            value = Math.floor(Math.random() * 200)+1;
            unique = array.includes(value);
            !unique ? array.push(value): null
        }
    }
    console.log(array.join(' '));
    

    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }

    let array2 = array.filter((value) => {
        const prime = isPrime(value)
        if(prime) {
            return value;
        }
    }).sort((a, b) => a - b);
    console.log(array2.join(' '));

    // Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių
    // skaičių nuo 1 iki 200, atskirtų tarpais. 
    // Skaičiai turi būti unikalūs (t.y. nesikartoti). 
    // Sugeneruokite antrą stringą, pasinaudodami pirmu, 
    // palikdami jame tik pirminius skaičius 
    // (t.y tokius, kurie dalinasi be liekanos tik iš 1 ir patys savęs). 
    // Skaičius stringe sudėliokite didėjimo tvarka, nuo mažiausio iki didžiausio. 
    // (reikės split() funkcijos ir masyvų.)
}
//task9();
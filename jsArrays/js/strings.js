const stask1 = () => {
    const [name,surname] = ['Jonas','Jonaitis'];
    console.log(name.length<surname.length? name:surname);

    // Sukurti du kintamuosius. Jiems priskirti savo mylimo 
    // aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). 
    // Atspausdinti trumpesnį stringą.
}
//stask1();

const stask2 = () => {
    const [name,surname] = ['Leonardo','Dicaprio'];
    const regexLowCase = /([a-z])/g;
    const regexUpCase = /([A-Z])/g;
    console.log(`
        ${name.replace(regexLowCase, function(match) {
        return match.toUpperCase();
    })} ${surname.replace(regexUpCase, function(match) {
        return match.toLowerCase();
    })}`);

    // Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus
    // vardą ir pavardę kaip stringus. 
    // Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. 
    // (LEONARDO dicaprio)
}
//stask2();

const stask3 = () => {
    console.log("task3");
    const [name,surname] = ['Leonardo','Dicaprio'];
    const third = name[0] + surname[0];
    console.log(third);
    // Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus 
    // vardą
    // ir pavardę kaip stringus. 
    // Sukurti trečią kintamąjį ir jam priskirti stringą, 
    // sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. 
    // Jį atspausdinti.
}
//stask3();


const stask4 = () => {
    // create 2 variables with your name and surname
    const [name,surname] = ['Jonas','Jonaitis'];
    // create variable of last 3 letters of name and surname
    const third = name.substring(name.length-3) + surname.substring(surname.length-3);
    console.log(third);
    // Sukurti du kintamuosius. 
    // Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
    //  Sukurti trečią kintamąjį ir jam priskirti stringą, 
    //  sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. 
    //  Jį atspausdinti.
}
//stask4();

const stask5 = () => {
    // create variable with string "An American in Paris"
    // replace a's and A's with *'s
    const str = "An American in Paris";
    const regex = /[aA]/g;
    console.log(str.replace(regex, "*"));

}
//stask5();

const stask6 = () => {
    // create variable with string "An American in Paris"
    // delete all vowels
    let str = "An American in Paris";
    const regex = /[aeiou]|[AEIOU]/g;
    console.log(str.replace(regex, ""));
    str = `“Breakfast at Tiffany's”, “2001: A Space Odyssey”, “It's a Wonderful Life”`;
    console.log(str.replace(regex, ""));


}
//stask6();

const stask7 = () => {
    let str = "Star Wars: Episode "+ " "
        .repeat( Math.ceil(Math.random() * 10))
        +(Math.ceil (Math.random() * 7)+1) +" ";
    console.log(str);

    // find number in string
    const regex = /\d+/g;
    console.log(str.match(regex));

}
//stask7();

const stask8 = () => {
    let str = `“Don't Be a Menace to South Central While Drinking Your Juice in the Hood”`; 
    console.log(str);
    // count how many words in a string contains words with length of 5 or less
    const regex = /\b\w{1,5}\b/g;
    console.log(str.match(regex).length);
    str = `“Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”`;
    console.log(str);
    console.log(str.match(regex).length);
}
//stask8();

const stask9 = () => { 
    let str = '';
    while(str.length<3) {
        str+= String.fromCharCode(
            (Math.floor(Math.random() * 26) + 65)
        ).toLowerCase();
    }
    console.log(str);

}
//stask9();


const stask10 = () => {
    let str1 = `“Don't Be a Menace to South Central While Drinking Your Juice in the Hood”`; 
    let str2 = `“Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”`;
    const regexQuotes = /([“”])(?:(?=(\\?))\2.)*?/g;
    str1 = str1.replace(regexQuotes, "");
    str2 = str2.replace(regexQuotes, "");

    let words = (str1 + ' ' + str2).replace(/ /g, " ").split(' ');
    console.log(words);

    let sentence = '';
    let numberOfWords = 0;
    while(numberOfWords!=10) {
        const word = words[Math.floor(Math.random() * words.length)];
        sentence= sentence + word + ' ';
        words.pop(word);
        numberOfWords++;     
    }
    console.log(sentence);
}
//stask10();
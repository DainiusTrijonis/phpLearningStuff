const func1 = (num, pow) => {
    return num ** pow;
}
console.log(func1(2, 3));

const func2 = (num, pow, id) => {
    document.getElementById(id).innerHTML = func1(num, pow);;
}
func2(2, 4, "result");

const func3 = (id) => {
    let num = Number(document.getElementById(id).innerHTML);
    let result = "";
    for (let i = 2; i <= num; i++) {
        for(let j = 1; j<=num; j++) {
            if(func1(i, j) === num) {
                result += `${i}^${j} = ${num}<br>`;
            }
        }
    }
    document.getElementById(id).innerHTML = result;
}
func3("result");
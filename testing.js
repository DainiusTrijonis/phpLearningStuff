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
    console.log(average,lowest,row,col);

    

   while(average < 70) {
        console.log(lowest);
       array[row][col] += 3;
       [average,lowest,row,col] = averageOfArrayOfArrays(array);
   }
    console.log(array);
    //console.log(average,lowest,row,col);
}
task10();

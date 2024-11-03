function showNumbers(n){
    for(i=n+1; i<n+11;i++){
        console.log(i)
    }
}

// showNumbers(10)
// showNumbers(84)
// showNumbers(25)
// showNumbers(101)

function printEveryThree(){
    for(i=1; i<=57;i+=3){
        console.log(i)
    }
}

// printEveryThree();

function totalSummation(){
    let suma=0;
    for(i=0;i<=100;i++){
        suma+=i;
    }
    console.log(suma);
}

// totalSummation();

function showToUpperCase(cadena){
    for(s=0; s<cadena.length ;s++){
        console.log(cadena[s].toUpperCase());
    }
}

// showToUpperCase("practicando el uso de los ciclos o bucles");

function returnPairs(array){
    let numPares = [];
    for(i=0; i<array.length;i++){
        if(array[i]%2 == 0){
            numPares.push(array[i]);
        }
    }
    return numPares;
}
// const numeros = [3, 7, 2, 10, 15, 24, 30, 47, 50, 18, 6];

// console.log(returnPairs(numeros));

module.exports = {showNumbers,  printEveryThree,  totalSummation,  showToUpperCase,  returnPairs}
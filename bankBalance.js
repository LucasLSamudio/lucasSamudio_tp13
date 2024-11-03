let cuentas = [20000, -5000, -1000, -8000, 1000, 6000, -15000, -20000, 10000];
let cuentas1 = [15000, -3000, -700, -12000, 2500, 5000, -14000, -18000, 9000];
let cuentas2 = [25000, -4500, -1100, -9500, 3000, 7000, -13000, -21000, 11000];
let cuentas3 = [18000, -6000, -1200, -8500, 2000, 5500, -15500, -19000, 12000];
let cuentas4 = [22000, -7000, -900, -10000, 1500, 6500, -12500, -23000, 8000];
let cuentas5 = [14000, -2000, -500, -7000, 500, 3000, -10000, -25000, 15000];

function calculateBalances(array){
    let saldoTotalDepositos = 0;
    let saldoTotalRetiros = 0;
    let saldoActual = 15000;

    for(let i=0; i<array.length; i++){
        (array[i]>0) ? ((saldoActual+=array[i]), (saldoTotalDepositos+=array[i])) : ((saldoActual+=array[i]), (saldoTotalRetiros+=array[i])); 
    }
    return [saldoTotalDepositos, saldoTotalRetiros, saldoActual];
}

function bankBalance(name, surname, array){
    let a1 = array[0];
    let a2 = array[1] * (-1);
    let a3 = array[2];
    return console.log(`\nEstimado/a ${name} ${surname}:\nEl monto total de los depósitos es de: $${a1}.\nEl monto total de los retiros es de: $${a2}.\nPor lo tanto, su saldo actual en la cuenta es de: $${a3}.\n`)
}

// bankBalance("Juan", "Menendez", calculateBalances(cuentas));
// bankBalance("Martin", "Quiroga", calculateBalances(cuentas1));
// bankBalance("Fernando", "Abdala", calculateBalances(cuentas2));
// bankBalance("Belen", "Marsupia", calculateBalances(cuentas3));
// bankBalance("Denisse", "Florici", calculateBalances(cuentas4));
// bankBalance("Gloria", "Patreus", calculateBalances(cuentas5));

module.exports = bankBalance;
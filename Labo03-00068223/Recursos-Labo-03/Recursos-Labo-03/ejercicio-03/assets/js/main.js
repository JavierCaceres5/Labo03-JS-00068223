const calculateFactorial = (numero1) => {

    if(numero1 === 1){
        return 1;
    }

    let factorial = 1;
    for(let i = 1; i <= numero1; i++){
        factorial *= i;
    }
    return factorial;
    
}

const requestNumber = () => {
    var input = prompt("Ingrese un numero: ", 0);
    var numero1 = parseInt(input);

    if(isNaN(numero1) || numero1 <= 0) {
        alert('El factorial de: 0 (iterativo) es: 1')
    }
    return numero1;
}

const main = () => {
    const numero1 =requestNumber();
    if(numero1 != 0){
        const result = calculateFactorial(numero1);
        alert('El factorial de ' + numero1 + ' (iterativo) es: ' +  result);
    }
}

main();

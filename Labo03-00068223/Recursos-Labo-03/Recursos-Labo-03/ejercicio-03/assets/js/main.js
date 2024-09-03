const calculateFactorial = (numero1) => {
    let factorial = 1;
    for(let i = 1; i <= numero1; i++){
        factorial *= i;
    }
    return factorial;
    
}

const requestNumber = () => {
    var numero1 = parseInt(prompt("Ingrese un numero: ", 0));
    return numero1;
}

const main = () => {
    const numero1 =requestNumber();
    const result = calculateFactorial(numero1);
    alert('El factorial de: ' + numero1 + ' (iterativo) es: ' +  result);
}

main();

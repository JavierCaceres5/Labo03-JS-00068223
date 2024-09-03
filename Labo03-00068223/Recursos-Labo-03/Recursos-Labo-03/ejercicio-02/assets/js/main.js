
const plus = (numero1, numero2) => {
    var suma = numero1 + numero2;
    alert('El resultado de la suma es: ' + suma);
};
const subtract = (numero1, numero2) =>{
    var resta = numero1 - numero2;
    alert('EL resultado de la resta es: ' + resta);
} ;
const multiply = (numero1, numero2) =>{
    var multiplicacion = numero1 * numero2;
    alert('EL resultado de la multiplicacion es: ' + multiplicacion);
} ;
const split = (numero1, numero2) => {
    var division = numero1 / numero2;
    alert('El resultado de la division es: ' + division);
};
const requestNumber = () => {
    var numero1 = parseInt(prompt("Ingrese el primer numero ", 0));
    var numero2 = parseInt(prompt("Ingrese el segundo numero: ", 0))
    return [numero1, numero2];
};

const selectOperation = (numero1, numero2) => { 
    var opcion = parseInt(prompt("Introduce una opcion: " + 
                          "1. Suma " +
                          "2. Resta " +
                          "3. Multiplicacion " + 
                          "4. Division"));

    switch (opcion) {
        case 1:
            plus(numero1, numero2);
            break;
        case 2:
            subtract(numero1, numero2);
            break;
        case 3:
            multiply(numero1, numero2);
            break;
        case 4:
            split(numero1, numero2);
            break;
        default:
            alert('Ingrese una opcion valida');
            break;
    }
};

const main = () => {
    const [numero1,numero2] = requestNumber();
    selectOperation(numero1, numero2); 
}

main();

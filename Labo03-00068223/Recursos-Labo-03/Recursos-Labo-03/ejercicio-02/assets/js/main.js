
const plus = (numero1, numero2) => {
    var suma = numero1 + numero2;
    alert(suma);
};
const subtract = (numero1, numero2) =>{
    var resta = numero1 - numero2;
    return resta;
} ;
const multiply = (numero1, numero2) =>{
    var multiplicacion = numero1 * numero2;
    return multiplicacion;
} ;
const split = (numero1, numero2) => {
    var division = numero1 / numero2;
    return division;
    aler
};
const requestNumber = () => {
    var numero1 = parseInt(prompt("Ingrese el primer numero ", 0));
    var numero2 = parseInt(prompt("Ingrese el segundo numero: ", 0))
    let resultado = [numero1, numero2];
    return resultado;
};

const selectOperation = () => {
    var opcion = parseInt(prompt("Introduce una opcion: " + 
                          "1. Suma" +
                          "2. Resta" +
                          "3. Multiplicacion" + 
                          "4. Division"));

    switch (opcion) {
        case '1':
            plus(number1, number2);
            break;
        case '2':
            subtract(number1, number2);
            break;
        case '3':
            multiply(number1, number2);
            break;
        case '4':
            split(number1, number2);
            break;
        default:
            alert('Ingrese un numero valido');
            break;
    }
};

const main = () => {
    requestNumber();
    selectOperation(); 
}

main();

class Calculadora {
    suma(a, b = null, c = null) {

        if (b == null && c == null) {

            return a + a;
        } else if (c == null) {
            return a + b;
        } else {
            
            return a + b + c;
        }
    }
}

let objcalculador = new Calculadora();

console.log(objcalculador.suma(1));         
console.log(objcalculador.suma(1, 2));      
console.log(objcalculador.suma(1, 2, 3));
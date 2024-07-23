class Validador {
    constructor(atributo) {
        this.atributo = atributo;
    }

    validarAtributo() {
        if (typeof this.atributo === 'number') {
            console.log(this.atributo + 2);
        } else if (typeof this.atributo === 'string') {
            console.log("El atributo es un string: " + this.atributo);
        }
    }
}

let instanciaNumero = new Validador(10);
instanciaNumero.validarAtributo(); 

let instanciaString = new Validador("Hola");
instanciaString.validarAtributo(); 

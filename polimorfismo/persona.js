class Persona{
    constructor(nombre , apellido) {
        this.nombre = nombre 
        this.apellido = apellido
    } 

    saludo () {
        return "hola persona: "+this.nombre
    }

    informacion () {
        return "Informacion: nombre: "+this.nombre+ " apellido: "+this.apellido
    }

}



class Diseñador extends Persona{
    constructor (nombre , apellido , lenguaje) {
        super(nombre , apellido)
        this.lenguaje = lenguaje
    }
    saludo () {
        return "hola diseñador: "+this.nombre
    }

    informacion () {
        return "Informacion: nombre: "+this.nombre+" apellido: "+this.apellido+" lenguaje: "+this.lenguaje
    }

    informacionPadre() {
        return super.informacion();
    }
}




let objdiseñador = new Diseñador ("juan" , "madroñero" , "javascript")

console.log(objdiseñador.informacion())
console.log(objdiseñador.saludo())
console.log(objdiseñador.informacionPadre())

let arreglopersonas = [new Persona("Carlos", "Gomez"), new Diseñador ("Luisa" , "Rivera" , "javascript")]

arreglopersonas.forEach(Persona => {
    console.log(Persona.saludo())
})
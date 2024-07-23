class Herramienta {
    mostrarEstado(mensaje) {
        console.log(mensaje)
    }
}

class HerramientaMecanica extends Herramienta {
    mostrarEstado(mensaje) {
        console.log(mensaje)
    }
}

class HerramientaElectrica extends Herramienta {
    mostrarEstado(mensaje) {
        console.log(mensaje)
    }
}

let herramienta = new Herramienta();
let mecanica = new HerramientaMecanica();
let electrica = new HerramientaElectrica();

herramienta.mostrarEstado("Las herramientas son esenciales para el mantenimiento.")
mecanica.mostrarEstado("Las herramientas mecánicas son fundamentales y fáciles de manejar.")
electrica.mostrarEstado("Las herramientas eléctricas o electrónicas son de alta precisión.")


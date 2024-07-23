class ProductoPanadero {
    constructor(nombre, insumo, cantidad, costo) {
        this.nombre = nombre;
        this.insumo = insumo;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    getNombre() {
        return this.nombre;
    }

    getInsumo() {
        return this.insumo;
    }

    getCantidad() {
        return this.cantidad;
    }

    getCosto() {
        return this.costo;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setInsumo(insumo) {
        this.insumo = insumo;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }

    setCosto(costo) {
        this.costo = costo;
    }

    describir() {
        console.log("Este es un producto panadero.");
    }
}

class PanBlanco extends ProductoPanadero {
    constructor(insumo, cantidad, costo) {
        super("Pan Blanco", insumo, cantidad, costo);
    }

    describir() {
        console.log("Este es pan blanco, hecho con harina de trigo.");
    }
}

class PanIntegral extends ProductoPanadero {
    constructor(insumo, cantidad, costo) {
        super("Pan Integral", insumo, cantidad, costo);
    }

    describir() {
        console.log("Este es pan integral, hecho con harina integral.");
    }
}

let productoBlanco = new PanBlanco("Harina de trigo", 100, 50);
let productoIntegral = new PanIntegral("Harina integral", 80, 60);

console.log(productoBlanco.getNombre()); 
console.log(productoBlanco.getInsumo()); 
console.log(productoBlanco.getCantidad()); 
console.log(productoBlanco.getCosto()); 
productoBlanco.describir(); 

console.log(productoIntegral.getNombre()); 
console.log(productoIntegral.getInsumo()); 
console.log(productoIntegral.getCantidad()); 
console.log(productoIntegral.getCosto()); 
productoIntegral.describir(); 

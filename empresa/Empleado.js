let privado = new WeakMap();

class Empleado {
    nombre;
    #salario;
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.#salario = salario
        this.obtenersalario = () => {
            return this.#salario;
        }
        }  
    mostrarInfo () {
        console.log("Empleado: " + this.nombre + ", Salario: " + this.obtenerSalario());
    }
}

export default Empleado;

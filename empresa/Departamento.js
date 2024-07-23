import Empleado from "./Empleado.js";

class Departamento {
    constructor(nombre) {
        this.nombre = nombre;
        this.empleados = [];
    }

    agregarEmpleado(empleado) {
        this.empleados.push(empleado);
    }

    mostrarEmpleados() {
        console.log("Empleados en el departamento " + this.nombre + ":");
        this.empleados.forEach(emp => console.log(emp.nombre));
    } 
}

export default Departamento
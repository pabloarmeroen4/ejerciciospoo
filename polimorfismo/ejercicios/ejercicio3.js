class Silos {
    constructor(tipoDeGrano, cantidad, cliente, diasDeAlmacenamiento, mes) {
        this.tipoDeGrano = tipoDeGrano;
        this.cantidad = cantidad;
        this.cliente = cliente;
        this.diasDeAlmacenamiento = diasDeAlmacenamiento;
        this.mes = mes;
    }

    getTipoDeGrano() {
        return this.tipoDeGrano;
    }

    getCantidad() {
        return this.cantidad;
    }

    getCliente() {
        return this.cliente;
    }

    getDiasDeAlmacenamiento() {
        return this.diasDeAlmacenamiento;
    }

    getMes() {
        return this.mes;
    }

    setTipoDeGrano(tipoDeGrano) {
        this.tipoDeGrano = tipoDeGrano;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }

    setCliente(cliente) {
        this.cliente = cliente;
    }

    setDiasDeAlmacenamiento(diasDeAlmacenamiento) {
        this.diasDeAlmacenamiento = diasDeAlmacenamiento;
    }

    setMes(mes) {
        this.mes = mes;
    }

    calcularPrecio() {
        const costoPorDia = 1000; 
        let costoTotal = this.diasDeAlmacenamiento * costoPorDia;

        if (this.mes >= 1 && this.mes <= 6) {
            costoTotal += 15000;
        } else if (this.mes >= 7 && this.mes <= 12) {
            costoTotal += 25000;
        } else {
            console.log("Mes inválido");
        }

        return costoTotal;
    }

    info() {
        console.log(`Tipo de grano: ${this.tipoDeGrano}, Cantidad: ${this.cantidad}, Cliente: ${this.cliente}, Días de almacenamiento: ${this.diasDeAlmacenamiento}, Mes: ${this.mes}`);
        console.log(`Precio a cobrar: ${this.calcularPrecio()} pesos`);
    }
}

let silo1 = new Silos("Trigo", 5000, "Cliente A", 30, 3);
silo1.info(); 

let silo2 = new Silos("Maíz", 3000, "Cliente B", 45, 8);
silo2.info(); 
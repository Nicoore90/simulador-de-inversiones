class bono {
    constructor (Nombre, Codigo, cotPesos, cotDolares) {
        this.Nombre = Nombre;
        this.Codigo = Codigo;
        this.cotPesos = cotPesos;
        this.cotDolares = cotDolares;
    }
        dolarMep(p) {
            let nominales = parseInt((p / this.cotPesos)*0.99);
            let dolares = parseInt((nominales * this.cotDolares)*0.99);
            document.write(`<p>Con los ${p} que ingresaste vas a comprar ${nominales} valores nominales del bono ${this.Codigo}</p>`);
            document.write(`<p>Despues vas a esperar 24 hs y vas a vender tus ${nominales} nominales con la especie ${this.Codigo}D</p>`);
            document.write(`<p>En total vas a terminar con aproximadamente US$ ${dolares} dolares, los cuales vas a poder transferir a tu cuenta bancaria en moneda extranjera.</p>`);
        }
}

const AL30 = new bono ("Bonar 2030", "AL30", 64.26, 0.3546)

const AL29 = new bono ("Bonar 2029", "AL29", 68.41, 0.3715)

const AL35 = new bono ("Bonar 2035", "AL35", 62.55, 0.341)

const GD29 = new bono ("Global 2029", "GD29", 78.40, 0.378)

const GD30 = new bono ("Global 2030", "GD30", 73.86, 0.3663)

let bonosArgy = [AL30, AL29, AL35, GD29, GD30]

let ingreso = parseInt(prompt("Ingresa el importe en pesos que quieras invertir"))

let titulo = prompt("Ingresa el bono que queres operar")

let papel = titulo.toUpperCase()

if (titulo == "AL30" || titulo == "al30") {
    AL30.dolarMep(ingreso);
} else if(titulo == "AL29" || titulo == "al29") {
    AL29.dolarMep(ingreso);
} else if (titulo == "AL35" || titulo == "al35") {
    AL35.dolarMep(ingreso);
} else if (titulo == "GD29" || titulo == "gd29") {
    GD29.dolarMep(ingreso);
} else if (titulo == "GD30" || titulo == "gd30") {
    GD30.dolarMep(ingreso);
} else {
    document.write("<p>El bono que ingresaste no existe en nuestra base de datos. Revisa si ingresaste bien el codigo.</p>")
}

const buscarBono = bonosArgy.find(bonosArgy => bonosArgy.Codigo == papel)

console.log("Estos son los datos del bono que elegiste")

console.log(buscarBono)
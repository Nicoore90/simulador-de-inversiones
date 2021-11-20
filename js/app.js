



class bono {
    constructor (Nombre, Codigo, cotPesos, cotDolares) {
        this.Nombre = Nombre;
        this.Codigo = Codigo;
        this.cotPesos = cotPesos;
        this.cotDolares = cotDolares;
    }
}

const AL30 = new bono ("Bonar 2030", "AL30", 63.75, 0.314)

const AL29 = new bono ("Bonar 2029", "AL29", 68.20, 0.343)

const AL35 = new bono ("Bonar 2035", "AL35", 62.45, 0.3149)

const GD29 = new bono ("Global 2029", "GD29", 77.80, 0.388)

const GD30 = new bono ("Global 2030", "GD30", 72.90, 0.3546)

let bonosArgy = [AL30, AL29, AL35, GD29, GD30]

let monto

let papel

let titulo

let nominales

let eftDolares

let ticker

let boton = document.getElementById("calcular");

boton.addEventListener("click", calcular);

function calcular(e) {
    e.preventDefault();
    monto = parseInt(document.getElementById("importe").value);
    papel = document.getElementById("bono").value;
    titulo = papel.toUpperCase()
    console.log(monto)
    console.log(typeof(monto))
    console.log(papel)
    console.log(typeof papel)
    console.log(titulo)
    console.log(typeof(titulo))
    if (titulo == "AL30") {
        nominales = parseInt((monto/AL30.cotPesos)*0.99)
        eftDolares = parseInt((nominales*AL30.cotDolares)*0.99)
        ticker = AL30.Codigo
    } else if (titulo == "AL29") {
        nominales = parseInt((monto/AL29.cotPesos)*0.99)
        eftDolares = parseInt((nominales*AL29.cotDolares)*0.99)
        ticker = AL29.Codigo
    } else if (titulo == "AL35") {
        nominales = parseInt((monto/AL35.cotPesos)*0.99)
        eftDolares = parseInt((nominales*AL35.cotDolares)*0.99)
        ticker = AL35.Codigo
    } else if (titulo == "GD29") {
        nominales = parseInt((monto/GD29.cotPesos)*0.99)
        eftDolares = parseInt((nominales*GD29.cotDolares)*0.99)
        ticker = GD29.Codigo
    } else if (titulo == "GD30") {
        nominales = parseInt((monto/GD30.cotPesos)*0.99)
        eftDolares = parseInt((nominales*GD30.cotDolares)*0.99)
        ticker = GD30.Codigo
    } else {
        titulo = undefined
    }
    let parrafo = document.getElementById("instrucciones")
    if(titulo != undefined) {
        parrafo.innerHTML = `<ol><li>Con los ${monto} que ingresaste vas a comprar ${nominales} valores nominales del bono ${ticker}</li>` + `<li>Despues vas a esperar 24 hs y vas a vender tus ${nominales} nominales con la especie ${ticker}D</li>` + `<li>En total vas a terminar con aproximadamente US$ ${eftDolares} dolares, los cuales vas a poder transferir a tu cuenta bancaria en moneda extranjera.</li></ol>`
    }else {
        parrafo.innerHTML = "<p>El bono que ingresaste no se encuentra en nuestra base de datos. Por favor corrobora si ingresaste bien el codigo</p>"
    }
}

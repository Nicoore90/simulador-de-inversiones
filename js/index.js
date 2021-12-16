
let perfilUsuario 

$("#enviarPerfil").click(() => {
    perfilUsuario = $('#perfil').val()
    localStorage.setItem("perfil", perfilUsuario)
    console.log(localStorage.perfil)
    let saludo = document.createElement("div")
    saludo.innerHTML = "<p>Tu perfil es " + localStorage.perfil + "</p>"
    $("#paginas").prepend(saludo)
    $("#form").fadeOut()
})

$("#cauciones").click (function caucion () {
    $("#informacion").hide();
    $("#informacion").slideDown(1000, ()=> {
        $("#introduccion").fadeOut();
    });
    $("#informacion").html ("<p id='info'>La caucion bursatil se trata de una inversion muy parecida al plazo fijo tradicional, en pesos, por la cual se obtiene un rendimiento. En terminos simples, una caucion bursatil es un prestamo de dinero, donde hay una parte tomadora (el que toma prestado el dinero) y una parte colocadora (el que presta el dinero). El interes de ese prestamo va a estar sujeto a la oferta y la demanda. Se pueden operar cauciones a un plazo que varia entre 1 y 180 dias. Para las cauciones tomadoras, lo normal es que el agente pida algun tipo de garantia en forma de bonos, letras, acciones o cualquier otro titulo que el inversor tenga en su poder.</p>")
})

$("#letras").click (function letra () {
    $("#informacion").hide();
    $("#informacion").slideDown(1000, ()=> {
        $("#introduccion").fadeOut();
    });
    $("#informacion").html("<p id='info'>Las letras son titulos de deuda de corto plazo del Estado. Su vencimiento es menor al año y generalmente responde a necesidades de financiamiento especificas del ente que lo emita. Las letras pueden ser letras de descuento (se paga el valor nominal al vencimiento y se compra el titulo a un valor menor, con un 'descuento' que establece la tasa que ganara el inversor) o amortizables (paga un interes cada cierto tiempo, con amortizaciones de capital en cuotas o al vencimiento del titulo)</p>")
})

$("#bonos").click(function bono () {
    $("#informacion").hide();
    $("#informacion").slideDown(1000, ()=> {
        $("#introduccion").fadeOut();
    });
    $("#informacion").html("<p id='info'>Los bonos son un titulo de deuda del Estado a mediano y largo plazo. Un Estado puede necesitar financiamiento por varias razones, y una de las formas de obtener este dinero es mediante la emision de deuda. Los bonos tienen un precio que va a variar de acuerdo a (entre otros factores) la confianza de los inversores en que el Estado emisor va a poder hacer frente a sus compromisos. Esto se mide con un indicador denominado 'riesgo pais'. Algunos bonos cotizan en pesos y en dolares, lo que nos permite comprar dolares por medio del mercado de capitales. Los bonos tambien tienen un flujo de fondos estipulado donde estan los pagos de intereses y de capital. </p>" + "<div class='botones' id='calculadora'><a href='./calculadora.html'>Calculadora Mep</a></div>")
})

$("#ON").click(function on () {
    $("#informacion").hide();
    $("#informacion").slideDown(1000, ()=> {
        $("#introduccion").fadeOut();
    });
    $("#informacion").html("<p id='info'>Las obligaciones negociables son titulos de deuda privada. Son muy parecidos a los bonos, con la diferencia de que los emite una empresa. Las empresas pueden necesitar financiamiento por algun proyecto de inversion grande que tengan planificado, y, en lugar de emitir acciones (lo cual incrementaria su capital y disminuiria el porcentaje de propiedad de los socios actuales) pueden elegir colocar deuda. Las obligaciones negociables, al igual que los bonos, cuentan con un flujo de fondo determinado, con un pago de interes cada cierto tiempo y una devolucion de capital estipulada.</p>")
})

const displayList = (jsonObject) => {
    jsonObject.forEach(item => {
        const {ticker, nombre, rubro} = item
        const userDiv = document.createElement("div")
        const usuarios = `
        <div id='datos'>
            <li>
                <h2>${nombre}</h2>
                <p>Codigo bursatil: ${ticker}</p>
                <p><strong>Rubro: ${rubro}</strong></p>
            </li>
        </div>
        `
        userDiv.innerHTML = usuarios
        $("#lista").append(userDiv)
        
    })
}
    //userDiv.innerHTML = usuarios
    //$("#lista").append(userDiv)
    //});

let sector

const jqueryData = () => {
    $.get(`./data/${sector}.json`, (respuesta, estado) => {
        if(estado=="success") {
            console.log(respuesta)
            displayList(respuesta)
        }
    })
}

$("#acciones").click(function accion () {
    $("#informacion").hide();
    $("#informacion").slideDown(1000, ()=> {
        $("#introduccion").fadeOut();
    });
    $("#informacion").html("<p id='info'>Una accion es una parte del capital de una empresa. Las empresas que tienen necesidades de financiamiento pueden necesitar emitir partes de su capital para cubrir proyectos de inversion. Ser tenedor de una accion de cualquier empresa da derecho a cobrar dividendos cuando la empresa presente sus estados financieros trimestrales, e incluso podes asistir a las asambleas de socios. Generalmente, el que invierte en una accion espera una ganancia derivada del aumento del precio del titulo, por lo cual es un activo de renta variable (no tenemos asegurado un porcentaje de rentabilidad).</p><div class='botones' id='boton'>Algunos ejemplos</button>")
    let boton = $("#boton")
    boton.on("click", () => {
        $("#selector").show()
        $("#ver").show()
        $("#ver").click(() => {
            sector = $("#selector").val()
            jqueryData()
        })
    })
})

//const baseUrl = "https://cloud.iexapis.com/?symbols=MELI,GLOB"

//const baseUrl = "https://rickandmortyapi.com/documentation/#character"


$("#cedears").click(function cedear () {
    $("#informacion").hide();
    $("#informacion").slideDown(1000, ()=> {
        $("#introduccion").fadeOut();
    });
    $("#informacion").html("<p id='info'>Un cedear es una accion de una empresa que cotiza en el extranjero. En nuestro mercado es posible acceder a estos titulos mediante certificados de depositos especiales emitidos por una entidad financiera local que los custodia. Este titulo puede ser transferido a una cuenta comitente en el exterior y vendido en dolares, dando origen a un tipo de cambio conocido como 'contado con liqui' o CCL. Al estar constantemente 'copiando' una cotizacion en moneda dura de una accion extranjera, este activo es una buena opcion para el inversor que quiera cubrirse de una posible devaluacion de la moneda.</p>")
})

let boton = $("#boton")

boton.on("click", jqueryData)


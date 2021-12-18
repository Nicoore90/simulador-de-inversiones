
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
    $("#informacion").html ("<p id='info'>La caucion bursatil se trata de una inversion muy parecida al plazo fijo tradicional, en pesos, por la cual se obtiene un rendimiento. Se pueden operar a un plazo que varia entre 1 y 180 dias.</p>")
})

$("#letras").click (function letra () {
    $("#informacion").hide();
    $("#informacion").slideDown(1000, ()=> {
        $("#introduccion").fadeOut();
    });
    $("#informacion").html("<p id='info'>Las letras son titulos de deuda de corto plazo del Estado. Su vencimiento es menor al año y generalmente responde a necesidades de financiamiento especificas del ente que lo emita.</p>")
})

$("#bonos").click(function bono () {
    $("#informacion").hide();
    $("#informacion").slideDown(1000, ()=> {
        $("#introduccion").fadeOut();
    });
    $("#informacion").html("<p id='info'>Los bonos son un titulo de deuda del Estado a mediano y largo plazo. Algunos bonos cotizan en pesos y en dolares, lo que nos permite comprar dolares por medio del mercado de capitales.</p>" + "<div class='botones' id='calculadora'><a href='./calculadora.html'>Calculadora Mep</a></div>")
})

$("#ON").click(function on () {
    $("#informacion").hide();
    $("#informacion").slideDown(1000, ()=> {
        $("#introduccion").fadeOut();
    });
    $("#informacion").html("<p id='info'>Las obligaciones negociables son titulos de deuda privada. Son muy parecidos a los bonos, con la diferencia de que los emite una empresa.</p>")
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
    $.get(`../data/${sector}.json`, (respuesta, estado) => {
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
    $("#informacion").html("<p id='info'>Una accion es una parte del capital de una empresa. Ser tenedor de una accion de cualquier empresa da derecho a cobrar dividendos cuando la empresa presente sus estados financieros trimestrales, e incluso podes asistir a las asambleas de socios.</p><div class='botones' id='boton'><p>Algunos ejemplos</p></button>")
    let boton = $("#boton")
    boton.on("click", () => {
        $("#selector").slideDown()
        $("#ver").slideDown()
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
    $("#informacion").html("<p id='info'>Un cedear es una accion de una empresa que cotiza en el extranjero. Este titulo puede ser transferido a una cuenta comitente en el exterior y vendido en dolares, dando origen a un tipo de cambio conocido como 'contado con liqui' o CCL.</p>")
})

let boton = $("#boton")

boton.on("click", jqueryData)


let info = document.getElementById("informacion");

let cauciones = document.getElementById("cauciones");

cauciones.addEventListener("click", caucion);

function caucion () {
    info.innerHTML ="<p>La caucion bursatil se trata de una inversion muy parecida al plazo fijo tradicional, en pesos, por la cual se obtiene un rendimiento. En terminos simples, una caucion bursatil es un prestamo de dinero, donde hay una parte tomadora (el que toma prestado el dinero) y una parte colocadora (el que presta el dinero). El interes de ese prestamo va a estar sujeto a la oferta y la demanda. Se pueden operar cauciones a un plazo que varia entre 1 y 180 dias. Para las cauciones tomadoras, lo normal es que el agente pida algun tipo de garantia en forma de bonos, letras, acciones o cualquier otro titulo que el inversor tenga en su poder.</p>"
    document.body.appendChild(info)
}

let letras = document.getElementById("letras");

letras.addEventListener("click", letra);

function letra () {
    info.innerHTML = "<p>Las letras son titulos de deuda de corto plazo del Estado. Su vencimiento es menor al año y generalmente responde a necesidades de financiamiento especificas del ente que lo emita. Las letras pueden ser letras de descuento (se paga el valor nominal al vencimiento y se compra el titulo a un valor menor, con un 'descuento' que establece la tasa que ganara el inversor) o amortizables (paga un interes cada cierto tiempo, con amortizaciones de capital en cuotas o al vencimiento del titulo)</p>"
}
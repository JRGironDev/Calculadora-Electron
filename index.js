var Mousetrap = require("mousetrap");

var botonUno = document.getElementById("botonUno");
var botonDos = document.getElementById("botonDos");
var botonTres = document.getElementById("botonTres");
var botonCuatro = document.getElementById("botonCuatro");
var botonCinco = document.getElementById("botonCinco");
var botonSeis = document.getElementById("botonSeis");
var botonSiete = document.getElementById("botonSiete");
var botonOcho = document.getElementById("botonOcho");
var botonNueve = document.getElementById("botonNueve");
var botonCero = document.getElementById("botonCero");

var botonSuma = document.getElementById("botonSuma");
var botonResta = document.getElementById("botonResta");
var botonDivi = document.getElementById("botonDivi");
var botonMulti = document.getElementById("botonMulti");

var botonBorrar = document.getElementById("botonBorrar");
var botonLimpiar = document.getElementById("botonLimpiar");

var actual = document.getElementById("actual");
var resultado = document.getElementById("resultado");

const lista = document.getElementById("lista");

botonUno.addEventListener("click", clickUno);
botonDos.addEventListener("click", clickDos);
botonTres.addEventListener("click", clickTres);
botonCuatro.addEventListener("click", clickCuatro);
botonCinco.addEventListener("click", clickCinco);
botonSeis.addEventListener("click", clickSeis);
botonSiete.addEventListener("click", clickSiete);
botonOcho.addEventListener("click", clickOcho);
botonNueve.addEventListener("click", clickNueve);
botonCero.addEventListener("click", clickCero);

botonSuma.addEventListener("click", clickSuma);
botonResta.addEventListener("click", clickResta);
botonDivi.addEventListener("click", clickDivi);
botonMulti.addEventListener("click", clickMulti);

botonBorrar.addEventListener("click", clickBorrar);
botonLimpiar.addEventListener("click", clickLimpiar);

Mousetrap.bind("1", clickUno);
Mousetrap.bind("2", clickDos);
Mousetrap.bind("3", clickTres);
Mousetrap.bind("4", clickCuatro);
Mousetrap.bind("5", clickCinco);
Mousetrap.bind("6", clickSeis);
Mousetrap.bind("7", clickSiete);
Mousetrap.bind("8", clickOcho);
Mousetrap.bind("9", clickNueve);
Mousetrap.bind("0", clickCero);
Mousetrap.bind("+", clickSuma);
Mousetrap.bind("-", clickResta);
Mousetrap.bind("/", clickDivi);
Mousetrap.bind("*", clickMulti);
Mousetrap.bind("backspace", clickBorrar);

function clickUno() {
  actual.innerHTML += "1";
}

function clickDos() {
  actual.innerHTML += "2";
}

function clickTres() {
  actual.innerHTML += "3";
}

function clickCuatro() {
  actual.innerHTML += "4";
}

function clickCinco() {
  actual.innerHTML += "5";
}

function clickSeis() {
  actual.innerHTML += "6";
}

function clickSiete() {
  actual.innerHTML += "7";
}

function clickOcho() {
  actual.innerHTML += "8";
}

function clickNueve() {
  actual.innerHTML += "9";
}

function clickCero() {
  actual.innerHTML += "0";
}

function clickSuma() {
  let valorActual = parseInt(actual.innerHTML) ? parseInt(actual.innerHTML) : 0;
  let valorResultado = parseInt(resultado.innerHTML);
  popularLista(
    actual.innerHTML,
    resultado.innerHTML,
    "+",
    valorActual + valorResultado
  );
  resultado.innerHTML = valorActual + valorResultado;
  actual.innerHTML = "";
}

function clickResta() {
  let valorActual = parseInt(actual.innerHTML) ? parseInt(actual.innerHTML) : 0;
  let valorResultado = parseInt(resultado.innerHTML);
  popularLista(
    actual.innerHTML,
    resultado.innerHTML,
    "-",
    valorResultado - valorActual
  );
  resultado.innerHTML = valorResultado - valorActual;
  actual.innerHTML = "";
}

function clickDivi() {
  let valorActual = parseInt(actual.innerHTML) ? parseInt(actual.innerHTML) : 0;
  let valorResultado = parseInt(resultado.innerHTML);
  popularLista(
    actual.innerHTML,
    resultado.innerHTML,
    "/",
    valorResultado / valorActual ? valorResultado / valorActual : "0"
  );
  resultado.innerHTML =
    valorResultado / valorActual ? valorResultado / valorActual : "0";
  actual.innerHTML = "";
}

function clickMulti() {
  let valorActual = parseInt(actual.innerHTML) ? parseInt(actual.innerHTML) : 0;
  let valorResultado = parseInt(resultado.innerHTML);
  popularLista(
    actual.innerHTML,
    resultado.innerHTML,
    "*",
    valorActual * valorResultado
  );
  resultado.innerHTML = valorActual * valorResultado;
  actual.innerHTML = "";
}

function clickBorrar() {
  let valorActual = actual.innerHTML.slice(0, -1);
  actual.innerHTML = valorActual;
}

function clickLimpiar() {
  resultado.innerHTML = "0";
}

function popularLista(valorActual, valorFinal, signo, resultado) {
  const elementoHTML = document.createElement("li");
  elementoHTML.textContent =
    "Operación: " +
    valorFinal +
    " " +
    signo +
    " " +
    (valorActual ? valorActual : "0") +
    " = " +
    resultado;
  lista.appendChild(elementoHTML);
}

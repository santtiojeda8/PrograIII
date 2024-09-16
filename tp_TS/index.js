"use strict";
let titulo = 'Tipos de Datos';
let words = 'Hola, TypeScripy!';
let nn = 123;
let bl = true;
let fechas = new Date(2024, 8, 9);
document.write(`${titulo}
    <br> Texto: ${words} 
    <br> Número: ${nn}
    <br> Booleano: ${bl}
    <br> Fecha: ${fechas}
    `);
function convertitCadena(numero) {
    numero.toString();
    document.write(`
        <br>Número convertido a cadena: ${numero}`);
}
convertitCadena(123546);
function sumarArray(a) {
    let suma = 0;
    for (let i = 0; i < a.length; i++) {
        suma += a[i];
    }
    document.write(`
        <br>Suma del array: ${suma}
        `);
}
let envioArray = [1, 2, 3, 4, 5];
sumarArray(envioArray);
let humanos = {
    Estudiante: 'Juan',
    Edad: 20,
    Curso: 'Matemáticas'
};
document.write(`
    <br> Nombre: ${humanos.Estudiante}
    <br> Edad: ${humanos.Edad}
    <br> Curso: ${humanos.Curso}
    `);
let hogar = {
    calle: 'Expedicionarios Mendocinos 2198',
    CP: 5513,
    ciudad: 'Maipú'
};
document.write(`
    <br> Calle: ${hogar.calle}
    Ciudad: ${hogar.ciudad}
    CP: ${hogar.CP}
    `);
let user1 = {
    Nombre: 'Santiago',
    Correo: 'ojedasi2004@gmail.com',
    saludar: function () {
        return `Hola, mi nombre es ${user1.Nombre}`;
    }
};
document.write(`<br> ${user1.saludar()}`);
class Persona {
    constructor(Nombre, Edad) {
        this.Edad = Edad;
        this.Nombre = Nombre;
    }
    presentarse(nombre, edad) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
    }
}
let user2 = new Persona('Sebastián', 19);
document.write(`<br> ${user2.presentarse(user2.Nombre, user2.Edad)}`);
class box {
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
}
let generico = new box();
generico.setValor(7);
let generico2 = new box();
generico2.setValor('letra');
document.write(`
    <br> Contenido de cajaDeNumero: ${generico.getValor()}
    <br> Contenido de cajaDeTexto: ${generico2.getValor()}
    `);
function identidad(dato) {
    return dato;
}
document.write(`
    <br> Identidad del número: ${identidad(17)}
    <br> Identidad del texto: ${identidad('texto')}
    `);
var Color;
(function (Color) {
    Color[Color["Azul"] = 0] = "Azul";
    Color[Color["Naranja"] = 1] = "Naranja";
    Color[Color["Verde"] = 2] = "Verde";
})(Color || (Color = {}));
let colorin = Color[0];
document.write(`
    <br> Color favorito : ${colorin}
    `);



// EJERCICIO 1
let a1 = 5;
let b1 = 10;
let c1 = a1 + b1;

console.log(c1);

//EJERCICIO 2
let nombre2 = prompt("Ingrese su nombre");

console.log('Hola '+nombre2);

//EJERCICIO 3
let a3 = 5;
let b3 = 10;
let c3 = 10;

if (a3 > b3 && a3>c3){
    console.log("El mayor de los tres números es: "+a3);
}else if (b3 > a3 && b3>c3){
    console.log("El mayor de los tres números es: "+b3);
}else{
    console.log("El mayor de los tres números es: "+c3);
}

//EJERCICIO 4
let numero4 = prompt("Ingrese un número");

if (numero4 % 2 === 0){
    console.log("El número es par");
}else{
    console.log("El número es impar");
}

//EJERCICIO 5
let numero5 = 10;

while(numero5 > 0){
    console.log(numero5);
    numero5--;
}

//EJERCICIO 6
let numero6 = 0;
do{
    numero6 = prompt("Ingrese un número mayor a 100");
}while(numero6 < 100);

console.log("El número ingresado es mayor a 100 "+numero6);

//EJERCICIO 7
function esPar(numero7){
    if (numero7 % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let numero7 = prompt("Ingrese un número");

if (esPar(numero7)){
    console.log(`El número ${numero7} es par: ${esPar(numero7)}`);
}else{
    console.log(`El número ${numero7} es par: ${esPar(numero7)}`);
}

//EJERCICIO 8
function convertiCelsiusAFahrenheit(celsius){
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

console.log(`30°C son equivalentes a ${convertiCelsiusAFahrenheit(30)}°F`);


//EJERCICIO 9
let persona = {
    nombre : 'Ana',
    edad : 30,
    ciudad : 'Barcelona'
}

console.log(persona);

function cambiaCiudad(nuevaCiudad){
    persona.ciudad = nuevaCiudad;
}

cambiaCiudad('Madrid');

console.log(persona);


//EJERCICIO 10
let libro = {
    titulo: 'El Quijote',
    autor: 'Miguel de Cervantes',
    anioPublicacion: 2000
}

console.log(libro);

function antiguedad(anioActual) {
    if ((anioActual - libro.anioPublicacion) > 10) {
        console.log(`El libro ${libro.titulo} es antigüo : ${true}`);
    } else {
        console.log(`El libro ${libro.titulo} es antigüo : ${false}`);
    }
}

antiguedad(2024)

//EJERCICIO 11
let numeros11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosDuplicados11 = []

for (let i = 0; i < 10; i++) {
    let valor = numeros11[i] * 2;
    numerosDuplicados11[i] = valor;
}

console.log(`Números originales: ${numeros11}`);

console.log(`Números multiplicados por 2: ${numerosDuplicados11}`);

//EJERCICIO 12
let pares = []

for (let i = 1; i < 21; i++) {
    if ((i) % 2 === 0) {
        pares.push(i);
    }
}

console.log(`Primeros 10 números pares: ${pares}`);

//EJERCICIO 13
let boton13 = document.getElementById('boton');
let parrafos = document.getElementById('parrafos');

boton13.addEventListener('click', function () {
    parrafos.style.color = 'blue';
})


//EJERCICIO 14
let boton14 = document.getElementById('boton1');

boton14.addEventListener('click', function () {
    let texto = document.getElementById('texto');
    alert(texto.value);
    texto.value = '';
})


//EJERCICIO 15
let elemento1 = document.getElementById('li1');
let elemento2 = document.getElementById('li2');
let elemento3= document.getElementById('li3');
let elemento4 = document.getElementById('li4');


function mostrarTexto(elemento) {
    elemento.addEventListener('click', function () {
        console.log(elemento.textContent);
    })
}

mostrarTexto(elemento1);
mostrarTexto(elemento2);
mostrarTexto(elemento3);
mostrarTexto(elemento4);


//EJERCICIO 16
let boton16Des = document.getElementById('botonDes');
let boton16Hab = document.getElementById('botonHab');
let texto16 = document.getElementById('texto16');

boton16Des.addEventListener('click', function () {
    texto16.disabled = true;
})

boton16Hab.addEventListener('click', function () {
    texto16.disabled = false;
})

//EJERCICIO 17
let formulario = document.getElementById('formulario');
let texto17 = document.getElementById('texto17');
let botonAgregar = document.getElementById('guardar');
let contenedorCorreos = document.getElementById('contenedorCorreos');
let botonEliminar = document.getElementById('eliminar');

formulario.addEventListener('submit', function (event){
    let correo = texto17.value;

    localStorage.setItem('correo', correo);

    contenedorCorreos.innerHTML =`
    <p>${correo}</p>
    `
})

document.addEventListener('DOMContentLoaded', function () {
    let correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        contenedorCorreos.innerHTML =`
        <p>${correoGuardado}</p>
        `
    }
})

botonEliminar.addEventListener('click', function () {
    localStorage.removeItem('correo');
    contenedorCorreos.innerHTML = '';
})

let titulo = 'Tipos de Datos'
let words = 'Hola, TypeScripy!';
let nn = 123
let bl = true
let fechas = new Date(2024,8,9)

document.write(
    `${titulo}
    <br> Texto: ${words} 
    <br> Número: ${nn}
    <br> Booleano: ${bl}
    <br> Fecha: ${fechas}
    `
)


function convertitCadena(numero : number){

    numero.toString()

    document.write(`
        <br>Número convertido a cadena: ${numero}`
    )
}

convertitCadena(123546)

function sumarArray(a : number[]){
    let suma = 0

    for(let i = 0 ; i < a.length ; i++){
        suma += a[i]
    }

    document.write(`
        <br>Suma del array: ${suma}
        `
    )
}

let envioArray = [1,2,3,4,5]

sumarArray(envioArray)

let humanos ={
    Estudiante: 'Juan',
    Edad: 20,
    Curso: 'Matemáticas'
}

document.write(`
    <br> Nombre: ${humanos.Estudiante}
    <br> Edad: ${humanos.Edad}
    <br> Curso: ${humanos.Curso}
    `
)

type Direccion = {
    calle : string,
    CP : number,
    ciudad : string
}

let hogar : Direccion = {
    calle: 'Expedicionarios Mendocinos 2198',
    CP: 5513,
    ciudad: 'Maipú'
}

document.write(`
    <br> Calle: ${hogar.calle}
    Ciudad: ${hogar.ciudad}
    CP: ${hogar.CP}
    `
)

interface usuario{
    Nombre: string,
    Correo: string,
    saludar() : string
}

let user1 : usuario = {
    Nombre: 'Santiago',
    Correo : 'ojedasi2004@gmail.com',

    saludar : function (){
        return `Hola, mi nombre es ${user1.Nombre}`
    }
}

document.write(`<br> ${user1.saludar()}`)

class Persona{
    Nombre : string;
    Edad : number;

    constructor(Nombre : string, Edad : number){
        this.Edad = Edad
        this.Nombre = Nombre
    }

    presentarse(nombre : string,edad: number){
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años`
    }
}

let user2 = new Persona('Sebastián',19)

document.write(`<br> ${user2.presentarse(user2.Nombre,user2.Edad)}`)

class box <T>{

    private valor? : T;

    getValor(){
        return this.valor
    }

    setValor(valor : T){
        this.valor = valor;
    }

}

let generico = new box <number> ()
generico.setValor(7)

let generico2 = new box <string> ()
generico2.setValor('letra')

document.write(`
    <br> Contenido de cajaDeNumero: ${generico.getValor()}
    <br> Contenido de cajaDeTexto: ${generico2.getValor()}
    `
)

function identidad <T> (dato : T){
    return dato;
}

document.write(`
    <br> Identidad del número: ${identidad(17)}
    <br> Identidad del texto: ${identidad('texto')}
    `
)

enum Color{
    'Azul',
    'Naranja',
    'Verde'
}

let colorin = Color[0]

document.write(`
    <br> Color favorito : ${colorin}
    `
)
/*
    Função em js é first-Class object (citizens)
    higher- order functions
*/

//criar de forma literal
function fun1(params) {}

// armazenar uma função numa variável

const fun2 = function () {};

fun2  (22);

// armazenar uma função dentro de um array

const array = [function (a, b) {return a + b;},fun1,fun2,];

console.log(array[0](2,3))

// Armazenar uma função em um objeto

const obj= {}
obj.falar=function(){return "opa"}
console.log(obj.falar())

//passar função como parametro

function run(fun) {
    fun()
}

run(function(){console.log("executando...")})

//uma função que pode retornar/conter uma função

function soma(a,b) {
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,10)(50)
const cincoMais = soma(2,3)
cincoMais(4)
console.log(cincoMais)
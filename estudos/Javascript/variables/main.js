// ============================================
// ESTUDOS SOBRE VARIÁVEIS EM JAVASCRIPT
// ============================================

// 1. VAR - Escopo de função (evitar usar em código moderno)
// Pode ser redeclarada e atualizada
var nome = "João";
console.log(nome); // "João"

var nome = "Maria"; // Redeclaração - permitida
nome = "Pedro"; // Atualização - permitida
console.log(nome); // "Pedro"

// 2. LET - Escopo de bloco (recomendado)
// Não pode ser redeclarada, mas pode ser atualizada
let idade = 25;
console.log(idade); // 25

idade = 26; // Atualização - permitida
console.log(idade); // 26

// let idade = 30; // ERRO: Identificador já foi declarado

// 3. CONST - Escopo de bloco (recomendado para valores imutáveis)
// Não pode ser redeclarada nem atualizada
const userEmail = "usuario@email.com";
console.log(userEmail); // "usuario@email.com"

// email = "novo@email.com"; // ERRO: atribuição a variável constante
// const email = "outro@email.com"; // ERRO: Identificador já foi declarado

// Porém, objetos e arrays constantes podem ter suas propriedades modificadas
const pessoa = {
  nome: "Ana",
  idade: 30,
};

pessoa.idade = 31; // Permitido - modifica propriedade
console.log(pessoa); // { nome: "Ana", idade: 31 }

// pessoa = {}; // ERRO: não pode reatribuir

// ============================================
// REGRAS DE NOMENCLATURA DE VARIÁVEIS
// ============================================

// ✅ Nomes válidos
const userName = "João"; // camelCase - recomendado
const user_name = "Maria"; // snake_case - menos comum em JS
const UserName = "Pedro"; // PascalCase - para classes/construtores
const _privateVar = "privado"; // Prefixo underscore para variáveis "privadas"
const $jquery = "valor"; // $ é permitido (convenção jQuery)

// ❌ Nomes inválidos
// const 123nome = "erro"; // Não pode começar com número
// const nome-usuario = "erro"; // Hífen não é permitido
// const nome usuario = "erro"; // Espaço não é permitido
// const for = "erro"; // Palavras-chave reservadas não são permitidas

// Palavras-chave reservadas a evitar
// const, let, var, function, return, if, else, for, while, class, extends, etc...

// ✅ Boas práticas de nomenclatura
const maxLoginAttempts = 3; // Descritivo e claro
const isUserActive = true; // Booleano com prefixo "is"
const getUserById = () => {}; // Função com verbo no início
const DAYS_IN_WEEK = 7; // Constantes globais em UPPER_CASE
const API_BASE_URL = "https://api.example.com"; // Configurações em UPPER_CASE

// ❌ Evite
const x = 10; // Muito vago
const temp = "valor"; // Pouco descritivo
const d = new Date(); // Letra única
const dados = []; // Muito genérico

// ============================================
// ESCOPO DE VARIÁVEIS
// ============================================

// Escopo Global
var globalVar = "Sou global";
let globalLet = "Também sou global";
const globalConst = "Também sou global";

function testeEscopo() {
  // Escopo de Função
  var localVar = "Sou local com var";
  let localLet = "Sou local com let";
  const localConst = "Sou local com const";

  console.log(localVar); // Acessível
}

// console.log(localVar); // ERRO: localVar não está definida

// ============================================
// HOISTING (Elevação)
// ============================================

// var é "hoisted" (movida para o topo) com valor undefined
console.log(hoistedVar); // undefined (não gera erro)
var hoistedVar = "Tenho hoisting";

// let e const também sofrem hoisting, mas sem inicialização (Temporal Dead Zone)
// console.log(hoistedLet); // ERRO: Cannot access before initialization
let hoistedLet = "Sem hoisting visível";

// ============================================
// TIPOS DE DADOS EM VARIÁVEIS
// ============================================

// Primitivos
let texto = "String"; // String
let numero = 42; // Number
let booleano = true; // Boolean
let indefinido = undefined; // Undefined
let nulo = null; // Null
let simbolo = Symbol("id"); // Symbol
let bigint = 123456789012345678901234567890n; // BigInt

// Objetos e Arrays
let objeto = { chave: "valor" };
let array = [1, 2, 3];
let funcao = function () {};

// ============================================
// BOAS PRÁTICAS
// ============================================

// ✅ Use const por padrão
// ✅ Use let quando precisar reatribuir
// ❌ Evite usar var em código moderno

const nomeUsuario = "Carlos"; // Constante - não muda
let contador = 0; // Muda durante a execução
contador++;

// Nomes descritivos
const dataAtual = new Date();
const precoProduto = 99.99;
const usuarioLogado = true;
// ============================================
// DESTRUCTURING (Desestruturação)
// ============================================

// Array destructuring
const cores = ["vermelho", "verde", "azul"];
const [cor1, cor2, cor3] = cores;
console.log(cor1); // "vermelho"

// Object destructuring
const usuario = { nome: "Lucas", email: "lucas@email.com", idade: 28 };
const { nome, email } = usuario;
console.log(nome); // "Lucas"

// ============================================
// CONVERSÃO DE TIPOS (Type Coercion)
// ============================================

let str = "42";
let num = Number(str); // Conversão explícita
console.log(num); // 42

let bool = Boolean(0); // false
let bool2 = Boolean(1); // true

// ============================================
// ESCOPO COM BLOCOS (if, for, while)
// ============================================

if (true) {
  let blocoLet = "Apenas neste bloco";
  const blocoConst = "Também apenas neste bloco";
}
// console.log(blocoLet); // ERRO: não definida fora do bloco

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2 - 'i' existe apenas no loop
}
// console.log(i); // ERRO: 'i' não existe fora do loop

// ============================================
// SPREAD OPERATOR (...)
// ============================================

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

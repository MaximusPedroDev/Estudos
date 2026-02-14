// ============================================
// MODO ESTRITO EM JAVASCRIPT - GUIA DE ESTUDO
// ============================================

// 1. ATIVANDO MODO ESTRITO
// ================================================

// Modo estrito global (no início do arquivo)
"use strict";

// Ou modo estrito apenas em uma função
function exemploFuncao() {
  "use strict";
  // código com restrições...
}

// 2. MUDANÇAS PRINCIPAIS DO MODO ESTRITO
// ================================================

// a) Variáveis devem ser declaradas
// ❌ Sem 'use strict': cria variável global (ruim!)
// ✓ Com 'use strict': lança erro

function testarVariavel() {
  "use strict";
  // x = 10; // ReferenceError: x is not defined
  let x = 10; // Correto
  return x;
}

// b) Não é permitido deletar variáveis
function testarDelete() {
  "use strict";
  let minhaVar = 10;
  // delete minhaVar; // SyntaxError em modo estrito
}

// c) 'this' em funções é undefined (não global object)
function verificarThis() {
  "use strict";
  console.log(this); // undefined (não é 'window' ou 'global')
}

// d) Eval não cria variáveis no escopo atual
function testarEval() {
  "use strict";
  eval("let x = 10");
  // console.log(x); // ReferenceError: x is not defined
}

// 3. RESTRIÇÕES EM OBJETOS
// ================================================

// a) Não é permitido usar números octais
// let numero = 010; // SyntaxError em modo estrito

// b) Propriedades de objetos não podem ter nomes duplicados
// const obj = {
//   nome: 'Pedro',
//   nome: 'João'  // SyntaxError em modo estrito
// };

// c) Não é permitido modificar propriedades somente leitura
const objeto = {};
Object.defineProperty(objeto, "propriedade", {
  value: 42,
  writable: false,
});

// objeto.propriedade = 100; // TypeError em modo estrito

// 4. RESTRIÇÕES EM FUNÇÕES
// ================================================

// a) Argumentos de função não podem ter nomes duplicados
// function funcao(a, a, b) { // SyntaxError em modo estrito
//   return a + a + b;
// }

// b) Não é permitido usar 'arguments.callee'
function testarArgumentosCallee(x) {
  "use strict";
  // console.log(arguments.callee); // TypeError em modo estrito
  return x * 2;
}

// 5. PALAVRAS RESERVADAS ADICIONAIS
// ================================================

// Em modo estrito, estas palavras são reservadas:
// let, static, yield, implements, interface, package,
// private, protected, public

// ❌ Não pode usar como variáveis:
// let implements = 10; // SyntaxError

// 6. VANTAGENS DO MODO ESTRITO
// ================================================

console.log("VANTAGENS DO MODO ESTRITO:");
console.log("✓ Código mais seguro");
console.log("✓ Erros são lançados mais cedo");
console.log("✓ Melhor performance (otimizações do engine)");
console.log("✓ Prepara para versões futuras do JavaScript");
console.log("✓ Evita práticas ruins");

// 7. EXEMPLO PRÁTICO
// ================================================

("use strict");

class Pessoa {
  constructor(nome, idade) {
    if (typeof nome !== "string") {
      throw new Error("Nome deve ser uma string");
    }
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
  }
}

const pessoa = new Pessoa("Pedro", 25);
console.log(pessoa.apresentar());

// 8. COMPARAÇÃO: COM vs SEM MODO ESTRITO
// ================================================

// SEM MODO ESTRITO:
function semEstrito() {
  x = 100; // Cria variável global (problema!)
  return x;
}

// COM MODO ESTRITO:
function comEstrito() {
  "use strict";
  // y = 100; // ReferenceError (previne erro!)
  let y = 100; // Forma correta
  return y;
}

// ============================================
// CONCLUSÃO
// ============================================
/*
Use 'use strict' em seus projetos para:
- Escrever código mais seguro
- Evitar erros comuns
- Melhorar a performance
- Preparar para o futuro do JavaScript

Sempre comece novos arquivos com 'use strict'!
*/

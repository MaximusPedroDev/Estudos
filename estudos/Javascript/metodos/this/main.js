// ========================================
// ESTUDOS SOBRE 'THIS' EM JAVASCRIPT
// ========================================

// 1. THIS EM CONTEXTO GLOBAL
// Em escopo global, 'this' refere-se ao objeto global
console.log(this); // Window (navegador) ou Global (Node.js)

// ========================================
// 2. THIS EM OBJETOS (Object Method)
// ========================================
const pessoa = {
  nome: "João",
  idade: 30,

  // Quando uma função é chamada como método de um objeto,
  // 'this' refere-se ao objeto em si
  saudacao() {
    console.log(`Olá, meu nome é ${this.nome}`);
  },

  apresentar() {
    return `${this.nome} tem ${this.idade} anos`;
  },
};

pessoa.saudacao(); // "Olá, meu nome é João"
console.log(pessoa.apresentar()); // "João tem 30 anos"

// ========================================
// 3. THIS EM FUNÇÕES CONSTRUTORAS
// ========================================
function Carro(marca, modelo) {
  // 'this' refere-se à nova instância criada
  this.marca = marca;
  this.modelo = modelo;

  this.descricao = function () {
    return `${this.marca} ${this.modelo}`;
  };
}

const meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.descricao()); // "Toyota Corolla"

// ========================================
// 4. THIS EM ARROW FUNCTIONS
// ========================================
// Arrow functions NÃO possuem seu próprio 'this'
// Elas herdam 'this' do escopo externo (léxico)
const objeto = {
  valor: 10,

  // Arrow function herda 'this' do escopo externo
  metodoArrow: () => {
    console.log(this.valor); // Undefined (this vem do escopo global)
  },

  // Função regular tem seu próprio 'this'
  metodoRegular() {
    console.log(this.valor); // 10
  },
};

// ========================================
// 5. MÉTODO CALL()
// ========================================
// call() permite chamar uma função com um 'this' específico
function saudar(mensagem) {
  console.log(`${mensagem}, ${this.nome}!`);
}

const usuario = { nome: "Maria" };
saudar.call(usuario, "Bem-vindo"); // "Bem-vindo, Maria!"

// ========================================
// 6. MÉTODO APPLY()
// ========================================
// apply() é similar ao call(), mas os argumentos são um array
function apresentarDados(profissao, cidade) {
  return `${this.nome} é ${profissao} em ${cidade}`;
}

const pessoa2 = { nome: "Pedro" };
const resultado = apresentarDados.apply(pessoa2, [
  "Desenvolvedor",
  "São Paulo",
]);
console.log(resultado); // "Pedro é Desenvolvedor em São Paulo"

// ========================================
// 7. MÉTODO BIND()
// ========================================
// bind() cria uma nova função com 'this' permanentemente ligado
const funcionario = {
  nome: "Ana",
  cumprimento: function () {
    return `Olá, sou ${this.nome}`;
  },
};

const saudacaoAnaSeparada = funcionario.cumprimento.bind(funcionario);
console.log(saudacaoAnaSeparada()); // "Olá, sou Ana"

// ========================================
// 8. THIS EM EVENT LISTENERS
// ========================================
// Em event listeners, 'this' refere-se ao elemento que disparou o evento
const botao = document.querySelector("button");
botao?.addEventListener("click", function () {
  // 'this' refere-se ao botão clicado
  console.log(this); // <button>...</button>
});

// Com arrow function, 'this' é do escopo externo
botao?.addEventListener("click", () => {
  // 'this' vem do escopo outter
  console.log(this); // window ou global
});

// ========================================
// 9. RESUMO - TABELA DE CONTEXTOS
// ========================================
/*
┌─────────────────────┬──────────────────────────────────┐
│ CONTEXTO            │ O QUE 'THIS' REFERE-SE           │
├─────────────────────┼──────────────────────────────────┤
│ Método de objeto    │ Ao próprio objeto                │
│ Função regular      │ Window/Global ou undefined       │
│ Construtor (new)    │ Nova instância criada            │
│ Arrow function      │ 'this' do escopo externo         │
│ call()/apply()      │ Ao objeto especificado           │
│ bind()              │ Ao objeto especificado           │
└─────────────────────┴──────────────────────────────────┘
*/

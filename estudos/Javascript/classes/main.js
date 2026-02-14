// ============================================
// CLASSES EM JAVASCRIPT - GUIA DE ESTUDOS
// ============================================

// 1. DECLARAÇÃO BÁSICA DE UMA CLASSE
// Uma classe é um modelo para criar objetos com propriedades e métodos
class Pessoa {
  // Constructor é executado quando uma nova instância é criada
  constructor(nome, idade) {
    this.nome = nome; // Propriedade da instância
    this.idade = idade;
  }

  // Método da classe
  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
  }
}

// Criar uma instância da classe
const pessoa1 = new Pessoa("João", 25);
console.log(pessoa1.apresentar()); // Olá, meu nome é João e tenho 25 anos

// 2. PROPRIEDADES E MÉTODOS
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  // Método que retorna informações
  infos() {
    return `${this.marca} ${this.modelo} (${this.ano})`;
  }

  // Método que modifica a propriedade
  atualizarAno(novoAno) {
    this.ano = novoAno;
  }
}

const carro1 = new Carro("Toyota", "Corolla", 2020);
console.log(carro1.infos()); // Toyota Corolla (2020)
carro1.atualizarAno(2023);
console.log(carro1.infos()); // Toyota Corolla (2023)

// 3. HERANÇA - Uma classe herdando de outra
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    return `${this.nome} faz um som`;
  }
}

// A classe Cachorro herda de Animal usando extends
class Cachorro extends Animal {
  // Método específico da subclasse
  fazerSom() {
    return `${this.nome} faz: Au au!`;
  }
}

const dog = new Cachorro("Rex");
console.log(dog.fazerSom()); // Rex faz: Au au!

// 4. SUPER - Acessar métodos da classe pai
class Veiculo {
  constructor(tipo) {
    this.tipo = tipo;
  }

  descricao() {
    return `Este é um ${this.tipo}`;
  }
}

class Bicicleta extends Veiculo {
  constructor(tipo, marchas) {
    // super() chama o constructor da classe pai
    super(tipo);
    this.marchas = marchas;
  }

  descricao() {
    // super.descricao() chama o método da classe pai
    return `${super.descricao()} com ${this.marchas} marchas`;
  }
}

const bike = new Bicicleta("Bicicleta", 18);
console.log(bike.descricao()); // Este é um Bicicleta com 18 marchas

// 5. GETTERS E SETTERS - Controlar acesso às propriedades
class Conta {
  constructor(saldo) {
    this._saldo = saldo; // Convenção: _ indica propriedade privada
  }

  // Getter - obtém o valor
  get saldo() {
    return this._saldo;
  }

  // Setter - define o valor
  set saldo(novoSaldo) {
    if (novoSaldo < 0) {
      console.log("Saldo não pode ser negativo");
      return;
    }
    this._saldo = novoSaldo;
  }
}

const conta = new Conta(1000);
console.log(conta.saldo); // 1000
conta.saldo = 500;
console.log(conta.saldo); // 500

// 6. PROPRIEDADES ESTÁTICAS
class Contador {
  static quantidade = 0; // Propriedade estática - pertence à classe, não à instância

  constructor(nome) {
    this.nome = nome;
    Contador.quantidade++; // Incrementa a quantidade
  }

  static info() {
    return `Total de contadores: ${Contador.quantidade}`;
  }
}

const c1 = new Contador("Contador 1");
const c2 = new Contador("Contador 2");
console.log(Contador.info()); // Total de contadores: 2

// 7. PROPRIEDADES PRIVADAS (Modern JavaScript)
class Usuario {
  #senha; // # torna a propriedade privada

  constructor(usuario, senha) {
    this.usuario = usuario;
    this.#senha = senha;
  }

  validarSenha(entradaSenha) {
    return entradaSenha === this.#senha;
  }
}

const user = new Usuario("Pedro", "abc123");
console.log(user.validarSenha("abc123")); // true
// console.log(user.#senha); // Erro! Propriedade privada não pode ser acessada

// 8. EXEMPLO PRÁTICO - Sistema de Biblioteca
class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  descricao() {
    return `"${this.titulo}" por ${this.autor} (${this.ano})`;
  }
}

class Biblioteca {
  constructor(nome) {
    this.nome = nome;
    this.livros = [];
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
  }

  listarLivros() {
    return this.livros.map((livro) => livro.descricao());
  }

  totalLivros() {
    return this.livros.length;
  }
}

const biblioteca = new Biblioteca("Biblioteca Municipal");
biblioteca.adicionarLivro(new Livro("Dom Casmurro", "Machado de Assis", 1899));
biblioteca.adicionarLivro(new Livro("O Cortiço", "Aluísio Azevedo", 1890));
console.log(biblioteca.listarLivros());
console.log(`Total de livros: ${biblioteca.totalLivros()}`);

// ============================================
// ESTUDO: FUNÇÕES FÁBRICA (FACTORY FUNCTIONS)
// ============================================

// Uma função fábrica é uma função que retorna um objeto
// sem necessidade de usar a palavra-chave 'new'

// --- 1. EXEMPLO BÁSICO ---
// Função fábrica simples que cria objetos de usuário
function criarUsuario(nome, email) {
  return {
    nome: nome,
    email: email,
    exibir() {
      console.log(`Usuário: ${this.nome}, Email: ${this.email}`);
    },
  };
}

const usuario1 = criarUsuario("João", "joao@email.com");
const usuario2 = criarUsuario("Maria", "maria@email.com");

// --- 2. FACTORY COM VALIDAÇÃO ---
// Função fábrica que valida dados antes de criar o objeto
function criarProduto(nome, preco) {
  if (!nome || preco < 0) {
    throw new Error("Dados inválidos para produto");
  }

  return {
    nome: nome,
    preco: preco,
    aplicarDesconto(percentual) {
      return this.preco * (1 - percentual / 100);
    },
    obterInfo() {
      return `${this.nome} - R$ ${this.preco}`;
    },
  };
}

const produto1 = criarProduto("Notebook", 2500);
const produto2 = criarProduto("Mouse", 50);

// --- 3. FACTORY COM ESTADO PRIVADO (CLOSURES) ---
// Usa closures para criar propriedades privadas
function criarConta(titular, saldoInicial = 0) {
  let saldo = saldoInicial; // Variável privada

  return {
    titular: titular,
    // Método para depositar (acessa a variável privada)
    depositar(valor) {
      if (valor > 0) {
        saldo += valor;
        return `Depositado: R$ ${valor}. Novo saldo: R$ ${saldo}`;
      }
      return "Valor inválido";
    },
    // Método para sacar (acessa a variável privada)
    sacar(valor) {
      if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        return `Sacado: R$ ${valor}. Novo saldo: R$ ${saldo}`;
      }
      return "Saque não permitido";
    },
    // Método para obter saldo (getter)
    obterSaldo() {
      return saldo;
    },
  };
}

const conta1 = criarConta("Pedro", 1000);

// --- 4. FACTORY COM HERANÇA (COMPOSIÇÃO) ---
// Uma factory que usa outra factory
function criarPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade,
    apresentar() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    },
  };
}

function criarFuncionario(nome, idade, cargo, salario) {
  // Composição: reutiliza a factory de pessoa
  const pessoa = criarPessoa(nome, idade);

  return {
    ...pessoa, // Spread operator para copiar propriedades
    cargo: cargo,
    salario: salario,
    exibirDados() {
      return `${this.apresentar()} - Cargo: ${this.cargo} - Salário: R$ ${this.salario}`;
    },
  };
}

const funcionario1 = criarFuncionario("Ana", 28, "Desenvolvedora", 5000);

// --- 5. FACTORY COM MÉTODOS ESTÁTICOS ---
// Factory que mantém um registro de objetos criados
const UsuarioFactory = (() => {
  const usuarios = [];

  return {
    criar(nome, email) {
      const usuario = { nome, email, id: usuarios.length + 1 };
      usuarios.push(usuario);
      return usuario;
    },
    listarTodos() {
      return usuarios;
    },
    obterPorId(id) {
      return usuarios.find((u) => u.id === id);
    },
  };
})();

// --- 6. FACTORY COM PADRÃO SINGLETON ---
// Garante que apenas uma instância seja criada
function criarConexaoDB() {
  let instancia = null;

  return {
    obterInstancia() {
      if (!instancia) {
        instancia = {
          conectado: false,
          conectar() {
            this.conectado = true;
            return "Conectado ao banco de dados";
          },
          desconectar() {
            this.conectado = false;
            return "Desconectado do banco de dados";
          },
        };
      }
      return instancia;
    },
  };
}

const db = criarConexaoDB();

// ============================================
// VANTAGENS DAS FUNÇÕES FÁBRICA
// ============================================
// ✓ Não precisa usar 'new'
// ✓ Pode criar propriedades privadas com closures
// ✓ Composição (melhor que herança)
// ✓ Mais simples e flexível
// ✓ Evita problemas com 'this'
// ✓ Fácil de testar e manter

// ============================================
// EXEMPLO DE USO
// ============================================

console.log("--- Usuários ---");
usuario1.exibir();
usuario2.exibir();

console.log("\n--- Produtos ---");
console.log(produto1.obterInfo());
console.log(produto2.obterInfo());

console.log("\n--- Contas ---");
console.log(conta1.depositar(500));
console.log(conta1.sacar(200));
console.log(`Saldo: R$ ${conta1.obterSaldo()}`);

console.log("\n--- Funcionário ---");
console.log(funcionario1.exibirDados());

console.log("\n--- Factory com Registro ---");
UsuarioFactory.criar("Carlos", "carlos@email.com");
UsuarioFactory.criar("Lucia", "lucia@email.com");
console.log(UsuarioFactory.listarTodos());

console.log("\n--- Banco de Dados ---");
const dbInstance = db.obterInstancia();
console.log(dbInstance.conectar());
console.log(dbInstance.desconectar());

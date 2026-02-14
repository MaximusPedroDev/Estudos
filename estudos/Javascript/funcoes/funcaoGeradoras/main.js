/**
 * ESTUDO: FUNÇÕES GERADORAS EM JAVASCRIPT
 *
 * Funções geradoras são funções que podem ser pausadas e retomadas.
 * Elas utilizam a palavra-chave 'function*' e 'yield' para controlar o fluxo.
 * Retornam um objeto iterador que permite navegar pelos valores.
 */

// ================================================================
// 1. FUNÇÃO GERADORA BÁSICA
// ================================================================
/**
 * Exemplo simples que produz valores sequenciais
 * yield pausa a execução e retorna um valor
 */
function* contadorSimples() {
  yield 1;
  yield 2;
  yield 3;
}

// Uso:
const iter1 = contadorSimples();
console.log(iter1.next()); // { value: 1, done: false }
console.log(iter1.next()); // { value: 2, done: false }
console.log(iter1.next()); // { value: 3, done: false }
console.log(iter1.next()); // { value: undefined, done: true }

// ================================================================
// 2. GERADORA COM LOOP
// ================================================================
/**
 * Loop infinito controlado com yield
 * Útil para sequências numéricas
 */
function* contadorInfinito(inicio = 0) {
  let numero = inicio;
  while (true) {
    yield numero++;
  }
}

// Uso:
const contador = contadorInfinito(10);
console.log(contador.next().value); // 10
console.log(contador.next().value); // 11
console.log(contador.next().value); // 12

// ================================================================
// 3. GERADORA DE FIBONACCI
// ================================================================
/**
 * Gera a sequência de Fibonacci sob demanda
 * Muito mais eficiente que calcular tudo de uma vez
 */
function* fibonacci(limite = Infinity) {
  let a = 0,
    b = 1;
  while (a < limite) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Uso:
for (const num of fibonacci(50)) {
  console.log(num); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
}

// ================================================================
// 4. GERADORA COM PARÂMETROS NO YIELD
// ================================================================
/**
 * Recebendo valores através de .next(valor)
 * O valor passado é retornado pelo yield anterior
 */
function* diálogo() {
  console.log("Iniciando");
  const nome = yield "Qual é seu nome?";
  console.log(`Olá, ${nome}!`);
  const idade = yield "Qual é sua idade?";
  console.log(`Você tem ${idade} anos.`);
}

// Uso:
const dialogo = diálogo();
console.log(dialogo.next().value); // "Qual é seu nome?"
console.log(dialogo.next("João").value); // "Qual é sua idade?" (após Olá, João!)
dialogo.next(25); // "Você tem 25 anos."

// ================================================================
// 5. DELEGAÇÃO COM yield*
// ================================================================
/**
 * yield* delega para outra geradora
 * Útil para compor geradores
 */
function* cores() {
  yield "vermelho";
  yield "verde";
  yield "azul";
}

function* coresComIntensidade() {
  yield "cores:";
  yield* cores(); // Delega para cores()
  yield "fim";
}

// Uso:
for (const cor of coresComIntensidade()) {
  console.log(cor); // cores:, vermelho, verde, azul, fim
}

// ================================================================
// 6. GERADORA DE ARRAYS
// ================================================================
/**
 * Itera sobre elementos de um array sob demanda
 * Útil para economia de memória em grandes coleções
 */
function* iterarArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Acessando índice ${i}`);
    yield arr[i];
  }
}

// Uso:
const gen = iterarArray(["a", "b", "c"]);
console.log(gen.next().value); // "a"
console.log(gen.next().value); // "b"

// ================================================================
// 7. GERADORA COM try/catch/finally
// ================================================================
/**
 * Tratamento de erros em geradores
 * .throw() injeta um erro que pode ser capturado
 */
function* comErro() {
  try {
    yield "valor1";
    yield "valor2";
  } catch (e) {
    console.log(`Erro capturado: ${e}`);
  } finally {
    console.log("Limpeza finalizada");
  }
}

// Uso:
const genErro = comErro();
console.log(genErro.next()); // { value: 'valor1', done: false }
genErro.throw(new Error("Algo deu errado")); // Captura o erro

// ================================================================
// 8. GERADORA PARA API COM PAGINAÇÃO
// ================================================================
/**
 * Simula busca de dados paginados
 * Útil para lazy loading
 */
function* buscarDadosPaginados(totalPages = 3) {
  for (let page = 1; page <= totalPages; page++) {
    const dados = {
      page,
      items: [`item${page}a`, `item${page}b`, `item${page}c`],
    };
    yield dados;
  }
}

// Uso:
for (const pagina of buscarDadosPaginados()) {
  console.log(`Página ${pagina.page}:`, pagina.items);
}

// ================================================================
// RESUMO DOS CONCEITOS
// ================================================================
/**
 * FUNÇÕES GERADORAS:
 * - Criadas com 'function*'
 * - Usam 'yield' para pausar e retornar valores
 * - Retornam um iterador com método .next()
 * - .next() retorna { value, done }
 * - .next(valor) envia valor para o yield anterior
 * - yield* delega para outra geradora
 * - .throw(erro) injeta exceções
 * - .return(valor) termina a geradora
 * - Excelentes para lazy evaluation e economia de memória
 */

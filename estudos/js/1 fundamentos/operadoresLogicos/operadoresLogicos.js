/*
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: OPERADORES LÓGICOS
 * ============================================================================
 * Operadores lógicos são usados para determinar a lógica entre variáveis ou valores.
 * Eles sempre retornam um valor que pode ser avaliado como verdadeiro ou falso.
 */

// ----------------------------------------------------------------------------
// 1. OS TRÊS OPERADORES PRINCIPAIS
// ----------------------------------------------------------------------------

/* AND (&&) - "E" */
// Retorna TRUE apenas se AMBOS os lados forem verdadeiros.

const temChave = true;
const temPortaAberta = true;
const podeEntrar = temChave && temPortaAberta; // true

/* OR (||) - "OU" */
// Retorna TRUE se pelo menos UM dos lados for verdadeiro.

const eAdmin = false;
const eModerador = true;
const temAcessoPainel = eAdmin || eModerador; // true

/* NOT (!) - "NÃO" (Negação) */
// Inverte o valor booleano. O que é true vira false e vice-versa.

const estaLogado = false;
const mostrarBotaoLogin = !estaLogado; // true

// ----------------------------------------------------------------------------
// 2. CURTO-CIRCUITO (SHORT-CIRCUIT EVALUATION)
// ----------------------------------------------------------------------------

/*
 * O JavaScript é "preguiçoso" (eficiente):
 * No &&: Se o primeiro for false, ele nem olha o segundo.
 * No ||: Se o primeiro for true, ele nem olha o segundo.
*/

// Exemplo prático de segurança:

const usuario = { nome: "Pedro" };
const nomeExibicao = usuario && usuario.nome;
// Se 'usuario' fosse null, o JS pararia no primeiro item e não daria erro no segundo.

// ----------------------------------------------------------------------------
// 3. VALORES TRUTHY E FALSY
// ----------------------------------------------------------------------------

/* No JS, valores não-booleanos podem ser avaliados como true ou false. */

// FALSY (Valores que o JS entende como 'false'):
// false, 0, -0, "", null, undefined, NaN.

// TRUTHY (Tudo o que não é falsy):
// "Texto", 42, [], {}, function(){}.

const inputUsuario = "";
const nomePadrao = inputUsuario || "Convidado"; // "Convidado", pois "" é falsy.

// ----------------------------------------------------------------------------
// 4. OPERADOR DE COALESCÊNCIA NULA (??)
// ----------------------------------------------------------------------------

/*
 * Diferente do ||, o ?? só olha para NULL ou UNDEFINED.
 * É excelente para quando o valor 0 (zero) é um dado válido.
 */

const nivel = 0;
const status1 = nivel || "Sem nível"; // Retorna "Sem nível" (porque 0 é falsy)
const status2 = nivel ?? "Sem nível"; // Retorna 0 (porque 0 não é null nem undefined)

// ----------------------------------------------------------------------------
// 5. OPERADOR TERNÁRIO (O IF DE UMA LINHA)
// ----------------------------------------------------------------------------

/* condição ? valor_se_true : valor_se_false */
const xp = 5000;
const resultado = xp >= 1000 ? "Mestre" : "Aprendiz";
console.log(resultado)

// ----------------------------------------------------------------------------
// 6. PRECEDÊNCIA (ORDEM DE EXECUÇÃO)
// ----------------------------------------------------------------------------

/* A ordem é: ! (Negação) -> && (E) -> || (OU) */
const teste = true || (false && !true);
// 1. !true vira false
// 2. false && false vira false
// 3. true || false vira true

/* 
 * PRO-TIP: Use parênteses () para forçar a ordem que você quer
 * e para deixar o código mais legível para outros devs.
*/

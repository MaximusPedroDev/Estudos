
/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: TIPOS BÁSICOS (PRIMITIVOS)
 * ============================================================================
 * Primitivos são dados que não são objetos e não possuem métodos próprios.
 * Eles são IMUTÁVEIS (você não altera o valor, você substitui por um novo).
 */

// ----------------------------------------------------------------------------
// 1. STRING (Textos)
// ----------------------------------------------------------------------------

/* Aspas simples ou duplas (Comuns) */
const nome = "Ezio";
const sobrenome = "Auditore";

/* Template Literals (Crase) - O mais poderoso */
// Permite quebra de linha e interpolação de variáveis com ${}
const biografia = `O assassino ${nome} 
veio de Florença.`;

// ----------------------------------------------------------------------------
// 2. NUMBER (Números)
// ----------------------------------------------------------------------------

/* No JS, não existe distinção entre 'int' e 'float'. Tudo é Number. */
const idade = 33; // Inteiro
const preco = 99.9; // Decimal (Ponto flutuante)
const infinito = Infinity; // Valor matemático infinito
const naoENumero = NaN; // "Not a Number" (Resultado de operações inválidas)

// ----------------------------------------------------------------------------
// 3. BOOLEAN (Lógico)
// ----------------------------------------------------------------------------

/* Apenas dois valores possíveis: true ou false. */
const isLogged = true;
const hasPermission = false;

// ----------------------------------------------------------------------------
// 4. NULL vs UNDEFINED (A Grande Confusão)
// ----------------------------------------------------------------------------

/**
 * undefined: Significa que a variável foi declarada, mas não tem valor.
 * É o "vazio" padrão do JavaScript.
 */
let statusProjeto;
// console.log(statusProjeto); // Saída: undefined

/**
 * null: É uma ausência de valor INTENCIONAL.
 * Você, desenvolvedor, diz que aquele lugar está vazio.
 */
const conquistaBloqueada = null;

// ----------------------------------------------------------------------------
// 5. BIGINT (Números Gigantes)
// ----------------------------------------------------------------------------

/* Usado para números inteiros maiores do que o Number suporta com precisão. */
/* Adiciona-se um 'n' no final do número. */
const numeroGigante = 9007199254740991n;

// ----------------------------------------------------------------------------
// 6. SYMBOL (Identificadores Únicos)
// ----------------------------------------------------------------------------

/* Cria um valor único que nunca se repete, útil para chaves de objetos privadas. */
const idInterno = Symbol("id");

// ----------------------------------------------------------------------------
// 7. COMO VERIFICAR O TIPO? (typeof)
// ----------------------------------------------------------------------------

// O operador 'typeof' retorna uma string com o nome do tipo.
console.log(typeof "Olá"); // "string"
console.log(typeof 10); // "number"
console.log(typeof true); // "boolean"

/* CURIOSIDADE / BUG HISTÓRICO: */
console.log(typeof null); // "object"
// (!) Isso é um erro antigo do JS que nunca foi corrigido para não quebrar a web.

// ----------------------------------------------------------------------------
// 8. CONVERSÃO DE TIPOS (Coerção)
// ----------------------------------------------------------------------------

/* Coerção Implícita (O JS tenta te ajudar e às vezes atrapalha) */
const somaEstranha = "10" + 5; // Saída: "105" (Virou string!)

/* Coerção Explícita (Recomendado) */
const somaCerta = Number("10") + 5; // Saída: 15

/** * PRO-TIP: No TypeScript (que você está estudando), você define esses
 * tipos explicitamente para evitar que uma string "10" quebre seus cálculos.
 */

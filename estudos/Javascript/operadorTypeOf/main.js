// ==========================================
// ESTUDOS: Operador typeof em JavaScript
// ==========================================

// O operador typeof retorna uma string indicando o tipo de uma variável
// Sintaxe: typeof operando

// 1. TIPOS PRIMITIVOS
// ==========================================

// String - texto
console.log(typeof "Hello"); // "string"
let nome = "João";
console.log(typeof nome); // "string"

// Number - números (inteiros e decimais)
console.log(typeof 42); // "number"
console.log(typeof 3.14); // "number"
let idade = 25;
console.log(typeof idade); // "number"

// Boolean - verdadeiro ou falso
console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"
let ativo = true;
console.log(typeof ativo); // "boolean"

// Undefined - variável declarada mas sem valor atribuído
let indefinido;
console.log(typeof indefinido); // "undefined"

// Symbol - identificador único
const simbolo = Symbol("ID");
console.log(typeof simbolo); // "symbol"

// BigInt - números muito grandes
const numeroGrande = 12345678901234567890n;
console.log(typeof numeroGrande); // "bigint"

// 2. OBJETOS E FUNÇÕES
// ==========================================

// Object - objetos, arrays, null (null é considerado objeto por questão histórica)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof null); // "object" (CUIDADO: bug histórico!)

let pessoa = { nome: "Pedro", idade: 30 };
console.log(typeof pessoa); // "object"

// Function - funções
console.log(typeof function () {}); // "function"
console.log(typeof (() => {})); // "function"

let soma = (a, b) => a + b;
console.log(typeof soma); // "function"

// 3. CASOS ESPECIAIS
// ==========================================

// Verificando se variável foi declarada (evita erro)
if (typeof variavelDesconhecida !== "undefined") {
  console.log("Variável existe");
} else {
  console.log("Variável não foi declarada"); // Esta mensagem será exibida
}

// NaN é do tipo number (mas não é um número válido)
console.log(typeof NaN); // "number"
console.log(isNaN(NaN)); // true - função melhor para verificar NaN

// Infinity é do tipo number
console.log(typeof Infinity); // "number"

// 4. EXEMPLO PRÁTICO: VALIDANDO TIPOS
// ==========================================

function validarEntrada(valor, tipoEsperado) {
  if (typeof valor === tipoEsperado) {
    console.log(`✓ Valor válido: ${valor} é do tipo ${tipoEsperado}`);
    return true;
  } else {
    console.log(
      `✗ Erro: esperado ${tipoEsperado}, mas recebeu ${typeof valor}`,
    );
    return false;
  }
}

validarEntrada("João", "string"); // ✓ Valor válido
validarEntrada(25, "number"); // ✓ Valor válido
validarEntrada(true, "string"); // ✗ Erro

// 5. DICAS IMPORTANTES
// ==========================================

// Para verificar se é um array, use Array.isArray()
console.log(Array.isArray([])); // true
console.log(typeof []); // "object" (não é suficiente)

// Para verificar se é null, compare explicitamente
console.log(null === null); // true
console.log(typeof null === "object"); // true (mas não é um objeto real)

// Para verificar se é um objeto "de verdade"
function ehObjeto(obj) {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}

console.log(ehObjeto({})); // true
console.log(ehObjeto([])); // false
console.log(ehObjeto(null)); // false

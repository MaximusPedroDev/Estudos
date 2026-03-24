/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: VARIÁVEIS EM JAVASCRIPT
 * ============================================================================
 * Variáveis são "contêineres" para armazenar valores de dados. No JS moderno (ES6+),
 * a forma como declaramos variáveis define o escopo, a mutabilidade e o ciclo de vida.
 */

// ----------------------------------------------------------------------------
// 1. AS TRÊS FORMAS DE DECLARAÇÃO
// ----------------------------------------------------------------------------

/* var: A forma antiga (Legado) */
// Possui escopo de função, não respeita blocos { } e sofre Hoisting total.
// EVITE usar no desenvolvimento moderno.
var heroi = "Ezio Auditore";

/* let: A forma moderna para valores mutáveis */
// Possui escopo de bloco. Use quando o valor da variável precisar mudar.
let level = 10;
level = 11; // Permitido: reatribuição

/* const: A forma moderna para valores constantes */
// Possui escopo de bloco. Não permite reatribuição após definida.
// USE POR PADRÃO. Só mude para 'let' se for estritamente necessário.
const franquia = "Assassin's Creed";
// franquia = "Odyssey"; // ERRO: Assignment to constant variable.

// ----------------------------------------------------------------------------
// 2. ENTENDENDO O ESCOPO (SCOPE)
// ----------------------------------------------------------------------------

/**
 * Escopo de Bloco: O código dentro de chaves { }
 * 'let' e 'const' ficam presos aqui dentro.
 */
if (true) {
	let segredo = "Maçã do Éden";
	const local = "Masyaf";
	// console.log(segredo); // Funciona aqui dentro
}
// console.log(segredo); // ERRO: segredo is not defined

// ----------------------------------------------------------------------------
// 3. HOISTING (IÇAMENTO)
// ----------------------------------------------------------------------------

/* Com 'var', a declaração é "puxada" para o topo, mas o valor não. */
console.log(versao); // Saída: undefined (não dá erro, o que é perigoso)
var versao = "v1.0";

/* Com 'let' e 'const', o JS sabe que ela existe, mas proíbe o acesso antes da linha. */
// console.log(status); // ERRO: Cannot access 'status' before initialization
let status = "Online";

// ----------------------------------------------------------------------------
// 4. TIPOS DE DADOS (O QUE AS VARIÁVEIS GUARDAM)
// ----------------------------------------------------------------------------

// Primitivos (Passados por valor/Imutáveis)
const nome = "Altaïr"; // String
const idade = 25; // Number
const isMaster = true; // Boolean
const nada = null; // Null (Ausência intencional de valor)
let indefinido; // Undefined (Declarada mas não inicializada)
const idUnico = Symbol("id"); // Symbol (Identificador único)

// Referência (Passados por referência/Objetos)
const inventario = ["Espada", "Faca de Arremesso"]; // Array (é um objeto)
const usuario = { nome: "Pedro", cargo: "Dev" }; // Object

// ----------------------------------------------------------------------------
// 5. CURIOSIDADE SOBRE CONST E OBJETOS (MUTABILIDADE)
// ----------------------------------------------------------------------------

/**
 * IMPORTANTE: 'const' impede a reatribuição da variável,
 * mas NÃO impede a alteração interna de objetos ou arrays.
 */
const configuracao = { tema: "Neon Deep-Tech" };
configuracao.tema = "GitHub Dark"; // FUNCIONA! Alteramos uma propriedade.
// configuracao = {};              // ERRO! Tentativa de mudar a referência da variável.

// ----------------------------------------------------------------------------
// 6. BOAS PRÁTICAS (CLEAN CODE)
// ----------------------------------------------------------------------------

/*
    1. Use camelCase: let meuProjetoOmnis = ...
    2. Nomes significativos: evite 'x', 'y', 'a'. Use 'userScore', 'isLogged'.
    3. Constantes em MAIÚSCULO para valores fixos globais: const API_URL = "...";
    4. Mantenha as variáveis próximas de onde serão usadas.
*/

/*
 * PRO-TIP: No VS Code, você pode usar 'F2' em cima de uma variável
 * para renomeá-la em todo o projeto de uma vez só.
 */

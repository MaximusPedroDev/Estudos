/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: DECLARAÇÕES VS EXPRESSÕES
 * ============================================================================
 * A principal diferença entre elas está no HOISTING (Içamento) e em como
 * o interpretador do JavaScript processa o arquivo.
 */

// ----------------------------------------------------------------------------
// 1. FUNCTION DECLARATION (DECLARAÇÃO)
// ----------------------------------------------------------------------------

/**
 * Elas são "içadas" (hoisted). Isso significa que você pode chamar a função
 * ANTES da linha onde ela foi escrita.
 */

executarAssassinato(); // Funciona perfeitamente!

function executarAssassinato() {
	// console.log("Alvo eliminado silenciosamente.");
}

// ----------------------------------------------------------------------------
// 2. FUNCTION EXPRESSION (EXPRESSÃO)
// ----------------------------------------------------------------------------

/**
 * Aqui, a função é criada e atribuída a uma variável.
 * Ela NÃO sofre hoisting. Se tentar chamar antes, o código quebra.
 */

// saltarDeFe(); // ERRO: Cannot access 'saltarDeFe' before initialization

const saltarDeFe = function () {
	// console.log("Sincronizando ponto de observação...");
};

saltarDeFe(); // Agora funciona!

// ----------------------------------------------------------------------------
// 3. ANÔNIMAS VS NOMEADAS NAS EXPRESSÕES
// ----------------------------------------------------------------------------

/* Expressão Anônima (Mais comum) */
const configurarOmnis = function () {};

/* Expressão Nomeada (Útil para recursão ou logs de erro melhores) */
const calcularRank = function processarPontos(xp) {
	if (xp < 100) return "Recruta";
	// O nome 'processarPontos' só existe dentro da própria função
};

// ----------------------------------------------------------------------------
// 4. TABELA COMPARATIVA
// ----------------------------------------------------------------------------

/*
 | Característica   | Declaration (Declaração) | Expression (Expressão)  |
 |------------------|--------------------------|-------------------------|
 | Sintaxe          | function nome() { }      | const x = function() { }|
 | Hoisting         | Sim (Içada ao topo)      | Não                     |
 | Quando usar      | Funções globais/úteis    | Callbacks, Arrow Funct. |
 | Escopo           | Função ou Global         | Bloco (se usar const/let)|
*/

// ----------------------------------------------------------------------------
// 5. POR QUE ISSO IMPORTA NO DIA A DIA?
// ----------------------------------------------------------------------------

/**
 * 1. Organização: Com Declarations, você pode colocar a lógica principal
 * no topo do arquivo e as definições das funções lá embaixo.
 * * 2. Segurança: Com Expressions (usando const), você garante que a função
 * não seja sobrescrita por acidente em outra parte do código.
 * * 3. Lógica Condicional: Você pode criar Expressions dentro de um 'if',
 * mudando o comportamento da função dependendo da situação.
 */

if (true) {
	const acao = function () {
		/* console.log("Ataque!"); */
	};
}
// acao(); // ERRO: acao is not defined (escopo de bloco respeitado)

// ----------------------------------------------------------------------------
// 6. DICA DE PRODUTIVIDADE NO VS CODE
// ----------------------------------------------------------------------------

/* Ao usar Function Expressions com 'const', o VS Code te ajuda melhor 
   com o IntelliSense (auto-completar) em arquivos grandes, pois ele 
   segue o fluxo de declaração das variáveis.
*/

/** * PRO-TIP: No seu projeto Omnis, prefira Function Expressions (especialmente
 * Arrow Functions) para funções que manipulam dados de estado, e
 * Function Declarations para funções utilitárias que podem ser
 * exportadas para todo o sistema.
 */

/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: FUNÇÕES ANÔNIMAS
 * ============================================================================
 * Uma função anônima é uma função que é definida sem um identificador (nome).
 * Elas são criadas em tempo de execução e geralmente usadas como argumentos
 * para outras funções ou armazenadas em variáveis.
 */

// ----------------------------------------------------------------------------
// 1. SINTAXE BÁSICA (A DIFERENÇA)
// ----------------------------------------------------------------------------

/* Função Nomeada (Tradicional) */
function saudar() {
	return "Olá, Assassino!";
}

/* Função Anônima (Atribuída a uma variável) */
const saudarAnonimo = function () {
	return "Olá das sombras...";
};

// ----------------------------------------------------------------------------
// 2. USO COMO CALLBACKS (O MAIS COMUM)
// ----------------------------------------------------------------------------

/**
 * Callbacks são funções passadas para outras funções.
 * Imagine que você quer rodar um código após um tempo ou após um clique.
 */

// Exemplo com setTimeout (executa após 3 segundos)
setTimeout(function () {
	// console.log("Sistema Omnis inicializado com sucesso!");
}, 3000);

// Exemplo com Manipulação de Eventos (DOM)
/* const botao = document.querySelector('#btn-save');
botao.addEventListener('click', function() {
    console.log("Salvando progresso no banco de dados...");
});
*/

// ----------------------------------------------------------------------------
// 3. IIFE (Immediately Invoked Function Expression)
// ----------------------------------------------------------------------------

/**
 * Uma função que é executada no exato momento em que é definida.
 * Útil para criar um escopo isolado e evitar poluir o escopo global.
 */
(function () {
	const versaoInterna = "v2.5-flash";
	// console.log("Executando núcleo do sistema " + versaoInterna);
})();
// console.log(versaoInterna); // ERRO: versaoInterna is not defined

// ----------------------------------------------------------------------------
// 4. FUNÇÕES ANÔNIMAS EM MÉTODOS DE ARRAY
// ----------------------------------------------------------------------------

const conquistas = [
	"Sincronização 100%",
	"Salto de Fé",
	"Mestre das Sombras",
];

/* Usando função anônima para formatar a lista */
const listaFormatada = conquistas.map(function (item) {
	return `Troféu: ${item}`;
});

// ----------------------------------------------------------------------------
// 5. VANTAGENS E DESVANTAGENS
// ----------------------------------------------------------------------------

/* Vantagens:
   1. Menos nomes para inventar (evita conflitos de variáveis).
   2. Código mais conciso para tarefas únicas.
   3. Ideal para encapsulamento (IIFE).
*/

/* Desvantagens:
   1. Stack Trace: Em caso de erro, o console dirá "anonymous function", 
      o que dificulta saber exatamente ONDE o erro aconteceu.
   2. Não são reutilizáveis fora do contexto onde foram criadas.
   3. Podem deixar o código difícil de ler se forem muito longas.
*/

// ----------------------------------------------------------------------------
// 6. EVOLUÇÃO PARA ARROW FUNCTIONS
// ----------------------------------------------------------------------------

/**
 * Hoje em dia, a maioria das funções anônimas é escrita como Arrow Functions
 * por serem mais curtas, mas a lógica de "não ter nome" permanece a mesma.
 */
const soma = (a, b) => a + b; // Também é uma função anônima atribuída!

// ----------------------------------------------------------------------------
// 7. DICA DE PRODUTIVIDADE NO VS CODE
// ----------------------------------------------------------------------------

/* No seu arquivo settings.json, você pode configurar o "Breadcrumbs" para 
   ajudar a se localizar mesmo dentro de funções anônimas complexas:
   "breadcrumbs.enabled": true
*/

/** * PRO-TIP: No seu Dashboard, use funções anônimas dentro dos seus
 * .filter() para limpar dados de APIs que venham com valores nulos
 * ou repetidos de forma rápida.
 */

/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: ARRAYS EM JAVASCRIPT
 * ============================================================================
 * Um Array no JS é um objeto especial que permite armazenar múltiplos valores
 * em uma única variável, organizados por índices numéricos (começando em 0).
 */

// ----------------------------------------------------------------------------
// 1. CRIAÇÃO E ESTRUTURA
// ----------------------------------------------------------------------------

/* Forma literal (Mais comum e recomendada) */
const games = [
	"Assassin's Creed",
	"The Witcher",
	"Cyberpunk 2077",
];

/* Construtor de Array (Menos comum, útil para criar tamanhos fixos) */
const scores = new Array(10, 25, 30);

// ----------------------------------------------------------------------------
// 2. ACESSO E MANIPULAÇÃO BÁSICA (MÉTODOS MUTÁVEIS)
// ----------------------------------------------------------------------------

// Acessando pelo índice
console.log(games[0]); // Saída: Assassin's Creed

// Adicionar ao final e ao início
games.push("Elden Ring"); // Adiciona ao fim
games.unshift("Valhalla"); // Adiciona ao início

// Remover do final e do início
games.pop(); // Remove o último
games.shift(); // Remove o primeiro

// splice: O "canivete suíço". (índice, quantos deletar, o que adicionar)
games.splice(1, 1, "Black Flag"); // Remove 1 item no índice 1 e adiciona 'Black Flag'

// ----------------------------------------------------------------------------
// 3. MÉTODOS DE ITERAÇÃO DE ALTA ORDEM (ESSENCIAIS PARA REACT)
// Estes métodos não alteram o array original (Imutabilidade).
// ----------------------------------------------------------------------------

/**
 * .forEach()
 * Usado para executar uma ação para cada item, mas NÃO retorna nada.
 */
games.forEach((game, index) => {
	// console.log(`${index}: ${game}`);
});

/**
 * .map()
 * Transforma os dados. Cria um NOVO array com o resultado da função.
 * Vital para renderizar listas no React.
 */
const gameTitlesUpper = games.map((game) =>
	game.toUpperCase(),
);

/**
 * .filter()
 * Cria um novo array apenas com os itens que passarem no teste lógico.
 */
const longTitles = games.filter((game) => game.length > 10);

/**
 * .reduce()
 * Reduz o array a um único valor (ex: somar todos os itens).
 * (acumulador, valorAtual) => lógica, valorInicial
 */
const totalCharacters = games.reduce(
	(total, game) => total + game.length,
	0,
);

// ----------------------------------------------------------------------------
// 4. BUSCA E LOCALIZAÇÃO
// ----------------------------------------------------------------------------

/* Retorna o primeiro item que satisfaz a condição */
const foundGame = games.find((game) =>
	game.includes("Black"),
);

/* Retorna o ÍNDICE do primeiro item encontrado */
const gameIndex = games.findIndex(
	(game) => game === "Black Flag",
);

/* Verifica se um valor existe no array (Retorna true/false) */
const hasWitcher = games.includes("The Witcher");

// ----------------------------------------------------------------------------
// 5. OPERAÇÕES MODERNAS (ES6+)
// ----------------------------------------------------------------------------

/**
 * Spread Operator (...)
 * Útil para clonar arrays ou mesclar sem mutar o original.
 */
const modernGames = ["Starfield", "Hades"];
const allGames = [...games, ...modernGames];

/*
    . Destructuring (Desestruturação)
    . Extrair valores para variáveis de forma limpa.
 */
const [primeiro, segundo, ...resto] = allGames;

// ----------------------------------------------------------------------------
// 6. PERFORMANCE E CURIOSIDADES
// ----------------------------------------------------------------------------

/* - Arrays em JS podem conter tipos mistos: [1, "texto", { id: 1 }]
    - A propriedade .length é dinâmica e pode ser alterada manualmente (mas evite).
    - Métodos como .map/.filter são mais lentos que um loop 'for' clássico, 
    mas são preferidos pela legibilidade e manutenção do código.
*/

/** * PRO-TIP: No seu projeto Omnis, para gerenciar conquistas ou dados
 * de jogos, o .reduce() e o .filter() serão seus melhores amigos para
 * processar grandes volumes de dados vindos de APIs.
 */

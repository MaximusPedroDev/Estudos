/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: ARROW FUNCTIONS (ES6+)
 * ============================================================================
 * Arrow functions fornecem uma sintaxe compacta e compartilham o mesmo 'this'
 * léxico que o escopo circundante.
 */

// ----------------------------------------------------------------------------
// 1. COMPARATIVO DE SINTAXE
// ----------------------------------------------------------------------------

/* Função Tradicional (Function Declaration) */
function somar(a, b) {
	return a + b;
}

/* Arrow Function (Atribuída a uma constante) */
const somarArrow = (a, b) => {
	return a + b;
};

// ----------------------------------------------------------------------------
// 2. RETORNO IMPLÍCITO (Sintaxe Curta)
// ----------------------------------------------------------------------------

/**
 * Se a função tiver apenas UMA linha de código,
 * podemos remover as chaves { } e a palavra 'return'.
 */
const dobrar = (n) => n * 2;

/* Para retornar um OBJETO de forma implícita, use parênteses ( ) */
const getGame = () => ({
	id: 1,
	title: "Assassin's Creed",
});

// ----------------------------------------------------------------------------
// 3. A DIFERENÇA DO 'THIS' (O PONTO CHAVE)
// ----------------------------------------------------------------------------

/**
 * Funções normais criam seu próprio 'this'.
 * Arrow functions NÃO possuem seu próprio 'this'. Elas herdam do pai.
 */

const perfil = {
	nome: "Pedro",
	skills: ["JS", "TS", "React"],

	showSkills() {
		// No forEach, a arrow function usa o 'this' do método showSkills
		this.skills.forEach((skill) => {
			// console.log(`${this.nome} sabe ${skill}`); // 'this.nome' funciona aqui!
		});
	},
};

// ----------------------------------------------------------------------------
// 4. QUANDO NÃO USAR ARROW FUNCTIONS
// ----------------------------------------------------------------------------

/* 1. Métodos de Objetos (se precisar do 'this' do próprio objeto) */
const user = {
	name: "Maximus",
	// ISSO VAI DAR ERRO (ou undefined) se usar arrow function:
	greet: () => console.log(`Olá, ${this.name}`),
};

/* 2. Construtores: Arrow functions não podem ser usadas com 'new' */
// const Player = () => {};
// const p1 = new Player(); // ERRO!

// ----------------------------------------------------------------------------
// 5. USO EM CALLBACKS (O DIA A DIA DO DEV)
// ----------------------------------------------------------------------------

/**
 * Elas brilham em métodos de array (map, filter, reduce)
 * e em eventos do navegador.
 */
const numeros = [1, 2, 3, 4, 5];

/* Exemplo: Filtrando números pares e dobrando o valor */
const resultado = numeros
	.filter((n) => n % 2 === 0)
	.map((n) => n * 2);

// ----------------------------------------------------------------------------
// 6. PARÂMETROS
// ----------------------------------------------------------------------------

/* Zero parâmetros: precisa dos parênteses vazios */
const saudar = () => "Iniciando sistema Omnis...";

/* Um parâmetro: parênteses são opcionais */
const log = (mensagem) => console.log(mensagem);

/* Dois ou mais: parênteses obrigatórios */
const calcularDano = (ataque, defesa) => ataque - defesa;

// ----------------------------------------------------------------------------
// 7. DICAS DE PERFORMANCE E ESTILO
// ----------------------------------------------------------------------------

/* - Use 'const' para declarar suas arrow functions para evitar sobrescritas.
   - Elas são excelentes para manter o código limpo e funcional.
   - Em debuggers, arrow functions podem aparecer como "anonymous", o que 
     pode ser mais difícil de rastrear do que funções nomeadas.
*/

/** * PRO-TIP: No seu projeto de Dashboard, as Arrow Functions serão
 * usadas em quase todos os componentes React, especialmente nos
 * hooks (useEffect, useCallback) e manipuladores de clique.
 */

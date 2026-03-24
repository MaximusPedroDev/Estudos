/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: FUNÇÕES (TRADICIONAIS)
 * ============================================================================
 * Uma função é um procedimento — um conjunto de instruções que executa uma
 * tarefa ou calcula um valor. Elas permitem REUTILIZAÇÃO de código.
 */

// ----------------------------------------------------------------------------
// 1. DECLARAÇÃO DE FUNÇÃO (FUNCTION DECLARATION)
// ----------------------------------------------------------------------------

/**
 * Esta forma sofre HOISTING: você pode chamar a função antes mesmo
 * de defini-la no arquivo.
 */
saudar("Assassino");

function saudar(nome) {
	// console.log(`Bem-vindo à Irmandade, ${nome}!`);
}

// ----------------------------------------------------------------------------
// 2. EXPRESSÃO DE FUNÇÃO (FUNCTION EXPRESSION)
// ----------------------------------------------------------------------------

/**
 * Aqui a função é armazenada em uma variável.
 * NÃO sofre hoisting (deve ser declarada antes de usar).
 */
const calcularDano = function (ataque, defesa) {
	return ataque - defesa;
};

const danoFinal = calcularDano(100, 45);

// ----------------------------------------------------------------------------
// 3. PARÂMETROS E ARGUMENTOS
// ----------------------------------------------------------------------------

/* Parâmetros Padrão (Default Parameters) */
// Se 'plataforma' não for enviada, ela assume "PC"
function configurarJogo(nome, plataforma = "PC") {
	// console.log(`Configurando ${nome} para ${plataforma}...`);
}

/* Rest Parameters (...) */
// Permite que a função receba um número infinito de argumentos como um Array
function somarPontos(...pontos) {
	return pontos.reduce((total, atual) => total + atual, 0);
}
// console.log(somarPontos(10, 20, 30, 40)); // Saída: 100

// ----------------------------------------------------------------------------
// 4. O RETORNO (RETURN)
// ----------------------------------------------------------------------------

/**
 * A palavra 'return' finaliza a execução da função e cospe um valor para fora.
 * Se não houver 'return', a função retorna 'undefined' por padrão.
 */
function verificarStatus(progresso) {
	if (progresso >= 100) return "Concluído";

	return "Em andamento"; // Se o IF acima rodar, esta linha nunca será lida
}

// ----------------------------------------------------------------------------
// 5. ESCOPO DE FUNÇÃO
// ----------------------------------------------------------------------------

/**
 * Variáveis criadas dentro de uma função são LOCAIS e não podem
 * ser acessadas do lado de fora.
 */
function criarProjeto() {
	const nomeProjeto = "Omnis Dashboard";
	// console.log(nomeProjeto); // Funciona aqui
}
// console.log(nomeProjeto); // ERRO: nomeProjeto is not defined

// ----------------------------------------------------------------------------
// 6. FUNÇÕES ANÔNIMAS E CALLBACKS
// ----------------------------------------------------------------------------

/**
 * Funções sem nome, geralmente passadas como argumento para outras funções.
 */
setTimeout(function () {
	// console.log("Isso executa após 2 segundos.");
}, 2000);

// ----------------------------------------------------------------------------
// 7. DICAS DE MANUTENÇÃO (CLEAN CODE)
// ----------------------------------------------------------------------------

/* 1. Nomeie com Verbos: Use 'getData', 'calculateTotal', 'validateUser'.
   2. Regra de Responsabilidade Única: Uma função deve fazer APENAS UMA coisa.
   3. Evite muitos parâmetros: Se passar de 3, considere enviar um OBJETO.
*/

/** * PRO-TIP: No VS Code, coloque o mouse sobre o nome de uma função
 * para ver a "assinatura" dela (quais parâmetros ela espera e o que retorna).
 */

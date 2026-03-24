/*
 * ============================================================================
 *GUIA DEFINITIVO DE ESTUDOS: ESTRUTURAS DE CONTROLE (DECISÃO)
 * ============================================================================
 *Estruturas de controle direcionam o fluxo de execução do programa.
 *Elas decidem quais blocos de código devem ser executados e quais ignorados.
*/

// ----------------------------------------------------------------------------
// 1. O BLOCO IF / ELSE (SE / SENÃO)
// ----------------------------------------------------------------------------

const progresso = 100;

/* IF Simples */

if (progresso >= 100) {
	// console.log("Troféu de Platina desbloqueado!");
}

/* IF / ELSE IF / ELSE */

const plataforma = "Ubisoft Connect";

if (plataforma === "Steam") {
	// console.log("Sincronizando com a Steam...");
} else if (plataforma === "Epic Games") {
	// console.log("Sincronizando com a Epic...");
} else {
	// console.log("Plataforma não suportada pelo Omnis no momento.");
}

// ----------------------------------------------------------------------------
// 2. SWITCH (ESCOLHA)
// ----------------------------------------------------------------------------

/*
 * O Switch é ideal para quando você tem múltiplas opções fixas
 * para uma única variável. É mais limpo que vários "else if".
 */

const rank = "Mestre";

switch (rank) {
	case "Aprendiz":
		// console.log("Continue treinando, jovem assassino.");
		break; // O 'break' impede que o código execute o próximo 'case'
	case "Assassino":
		// console.log("Você já domina as sombras.");
		break;
	case "Mestre":
		// console.log("A Irmandade se curva à sua maestria.");
		break;
	default: // Executado se nenhum caso anterior for atendido
	// console.log("Rank desconhecido.");
}

// ----------------------------------------------------------------------------
// 3. OPERADOR TERNÁRIO (O IF DE UMA LINHA)
// ----------------------------------------------------------------------------

/* Sintaxe: condição ? valor_se_verdade : valor_se_falso */

const idadeDaughter = 10;
const categoria =
	idadeDaughter >= 12
		? "Classificação 12+"
		: "Livre/Infantil";

// ----------------------------------------------------------------------------
// 4. TRUTHY E FALSY NAS CONDIÇÕES
// ----------------------------------------------------------------------------

/*
 * Você não precisa sempre comparar (x === true).
 * O JS avalia o "valor de verdade" do dado.
 */

let listaDeJogos = []; // Array vazio é TRUTHY

if (listaDeJogos.length) {
	// 0 é FALSY, números > 0 são TRUTHY
	// console.log("Você tem jogos na sua biblioteca.");
} else {
	// console.log("Sua biblioteca está vazia.");
}

// ----------------------------------------------------------------------------
// 5. TRATAMENTO DE ERROS (TRY / CATCH)
// ----------------------------------------------------------------------------

/*
 * Uma estrutura de controle para lidar com "falhas de missão".
 * Evita que o programa inteiro trave se algo der errado (como uma API fora do ar).
 */
try {
	// Tenta executar este código
	const dados = JSON.parse("{ erro_de_sintaxe }");
} catch (error) {
	// Executa este se houver erro no bloco acima
	// console.error("Falha ao processar dados do jogo:", error.message);
} finally {
	// Sempre executa, independente de erro ou sucesso
	// console.log("Operação finalizada.");
}

// ----------------------------------------------------------------------------
// 6. DICAS DE CÓDIGO LIMPO (CLEAN CODE)
// ----------------------------------------------------------------------------

/*
* 1. Evite "Else" desnecessários (Early Return): Se o 'if' já retorna algo, não precisa de 'else' depois.
* 2. Não aninhe muitos IFs (Código pirâmide): Tente manter a lógica o mais "reta" possível.
* 3. No Switch, nunca esqueça o 'break', a menos que queira executar múltiplos casos propositalmente.
*/

/* 
 * PRO-TIP: No VS Code, você pode usar 'Ctrl + Shift + r' para
 * refatorar um bloco de 'if/else' complexo em um 'switch'
 * automaticamente em alguns casos!
 */

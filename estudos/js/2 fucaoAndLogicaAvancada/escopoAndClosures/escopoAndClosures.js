/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: ESCOPO E CLOSURES
 * ============================================================================
 * Escopo: Determina a visibilidade e acessibilidade das variáveis.
 * Closure: É a capacidade de uma função "lembrar" do seu escopo léxico,
 * mesmo quando executada fora dele.
 */

// ----------------------------------------------------------------------------
// 1. ESCOPO GLOBAL vs LOCAL
// ----------------------------------------------------------------------------

/* Escopo Global: Acessível de qualquer lugar */
const versaoSistema = "1.0.0";

function mostrarVersao() {
	// console.log(versaoSistema); // Funciona!
}

/* Escopo de Função: Variáveis presas dentro da função */
function criarAssassino() {
	const nomeCodificado = "Altaïr";
	// console.log(nomeCodificado); // Funciona aqui
}
// console.log(nomeCodificado); // ERRO: nomeCodificado is not defined

// ----------------------------------------------------------------------------
// 2. ESCOPO DE BLOCO (ES6 - let e const)
// ----------------------------------------------------------------------------

/**
 * Antes do ES6 (var), não existia escopo de bloco.
 * Com 'let' e 'const', as variáveis ficam presas dentro de { }.
 */
if (true) {
	const segredo = "Maçã do Éden";
	// console.log(segredo); // OK
}
// console.log(segredo); // ERRO!

// ----------------------------------------------------------------------------
// 3. O QUE É UMA CLOSURE? (O CONCEITO)
// ----------------------------------------------------------------------------

/**
 * Closure ocorre quando uma função interna é retornada por uma função externa.
 * A função interna mantém o acesso às variáveis da função pai, mesmo após
 * a função pai ter terminado de executar.
 */

function criarGeradorDeId(prefixo) {
	let contagem = 0; // Esta variável está "protegida" pelo Closure

	return function () {
		contagem++;
		return `${prefixo}_${contagem}`;
	};
}

const gerarIdJogo = criarGeradorDeId("GAME");
const gerarIdUser = criarGeradorDeId("USER");

// console.log(gerarIdJogo()); // GAME_1
// console.log(gerarIdJogo()); // GAME_2
// console.log(gerarIdUser()); // USER_1 (Cada closure tem sua própria memória)

// ----------------------------------------------------------------------------
// 4. POR QUE USAR CLOSURES? (CASOS DE USO)
// ----------------------------------------------------------------------------

/* A. Encapsulamento (Privacidade de dados) */
// Você esconde variáveis do mundo exterior, permitindo acesso apenas via funções.

function contaBancaria(saldoInicial) {
	let _saldo = saldoInicial; // Variável "privada" (convenção do underline)

	return {
		verSaldo: () => _saldo,
		depositar: (valor) => (_saldo += valor),
	};
}

const minhaConta = contaBancaria(1000);
// console.log(minhaConta._saldo); // undefined (segurança!)
// console.log(minhaConta.verSaldo()); // 1000

/* B. Fábrica de Funções (Function Factories) */
// Criar funções personalizadas com base em parâmetros iniciais.

// ----------------------------------------------------------------------------
// 5. O CADEIA DE ESCOPO (SCOPE CHAIN)
// ----------------------------------------------------------------------------

/**
 * O JS procura a variável de dentro para fora:
 * 1. Escopo Local da função atual.
 * 2. Escopo da função Pai (Outer Scope).
 * 3. Escopo Global.
 */

const global = "Global";

function externa() {
	const pai = "Pai";

	function interna() {
		const filho = "Filho";
		// console.log(filho, pai, global); // Tem acesso aos três!
	}
	interna();
}
externa();

// ----------------------------------------------------------------------------
// 6. CUIDADO COM MEMÓRIA (MEMORY LEAKS)
// ----------------------------------------------------------------------------

/* Como as Closures mantêm referências a variáveis externas, elas podem 
   impedir que o "Garbage Collector" limpe a memória se não forem usadas 
   com cuidado em aplicações gigantescas.
*/

/** * PRO-TIP: No VS Code, se você passar o mouse sobre uma variável
 * dentro de uma função interna, o editor costuma mostrar de qual
 * escopo ela está vindo, ajudando a identificar Closures.
 */

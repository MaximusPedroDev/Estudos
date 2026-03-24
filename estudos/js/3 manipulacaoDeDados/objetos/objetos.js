/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: OBJETOS (OBJECTS)
 * ============================================================================
 * Um objeto é uma coleção de propriedades relacionadas, definidas como pares
 * de "chave: valor". É a estrutura de dados mais importante do ecossistema JS.
 */

// ----------------------------------------------------------------------------
// 1. CRIAÇÃO E ESTRUTURA BÁSICA
// ----------------------------------------------------------------------------

/* Objeto Literal */
const player = {
	nickname: "PedroMaximus",
	level: 33,
	isOnline: true,
	// Um objeto pode ter outro objeto dentro (Aninhamento)
	stats: {
		strength: 85,
		agility: 90,
	},
	// Um objeto pode ter funções (Métodos)
	levelUp() {
		this.level++; // 'this' refere-se ao próprio objeto
		console.log(`Level subiu para ${this.level}!`);
	},
};

// ----------------------------------------------------------------------------
// 2. ACESSANDO E MODIFICANDO PROPRIEDADES
// ----------------------------------------------------------------------------

/* Notação de Ponto (.) - Mais comum */
console.log(player.nickname);
player.level = 34;

/* Notação de Colchetes ([]) - Útil para chaves dinâmicas */
const chaveDesejada = "isOnline";
console.log(player[chaveDesejada]); // true

/* Adicionando ou Deletando */
player.guild = "Assassin Brotherhood"; // Adiciona nova propriedade
delete player.isOnline; // Remove a propriedade

// ----------------------------------------------------------------------------
// 3. DESESTRUTURAÇÃO (DESTRUCTURING) - FUNDAMENTAL PARA REACT
// ----------------------------------------------------------------------------

/**
 * Permite extrair valores de propriedades em variáveis distintas
 * de forma rápida e limpa.
 */
const { nickname, level } = player;
// console.log(nickname); // Saída: "PedroMaximus"

/* Renomeando na desestruturação */
const { nickname: userName } = player; // userName agora vale "PedroMaximus"

// ----------------------------------------------------------------------------
// 4. MÉTODOS ÚTEIS DO CONSTRUTOR 'Object'
// ----------------------------------------------------------------------------

const config = { theme: "Cyan", opacity: 0.8 };

/* Object.keys() - Retorna um array com os nomes das propriedades */
const chaves = Object.keys(config); // ["theme", "opacity"]

/* Object.values() - Retorna um array com os valores das propriedades */
const valores = Object.values(config); // ["Cyan", 0.8]

/* Object.entries() - Retorna um array de arrays [chave, valor] */
const entradas = Object.entries(config); // [ ["theme", "Cyan"], ["opacity", 0.8] ]

/* Object.assign() ou Spread (...) - Mesclagem de objetos */
const novaConfig = { ...config, font: "Fira Code" }; // Forma moderna (Spread)

// ----------------------------------------------------------------------------
// 5. IMUTABILIDADE E PROTEÇÃO
// ----------------------------------------------------------------------------

/* Object.freeze() - Impede QUALQUER alteração no objeto */
const constanteReal = Object.freeze({ versao: "1.0" });
constanteReal.versao = "2.0"; // Não acontece nada, o valor continua "1.0"

// ----------------------------------------------------------------------------
// 6. JSON (JAVASCRIPT OBJECT NOTATION)
// ----------------------------------------------------------------------------

/**
 * JSON é o formato de texto usado para enviar dados entre cliente e servidor.
 * Quase idêntico a um objeto JS, mas as chaves DEVEM ter aspas duplas.
 */

// Converter Objeto para String JSON (para salvar no LocalStorage ou enviar via API)
const jsonString = JSON.stringify(player);

// Converter String JSON para Objeto (ao receber dados de uma API)
const objetoRecuperado = JSON.parse(jsonString);

// ----------------------------------------------------------------------------
// 7. OPTIONAL CHAINING (?.) - EVITANDO O ERRO "CANNOT READ PROPERTY"
// ----------------------------------------------------------------------------

/* Se 'stats' ou 'mana' não existirem, ele retorna 'undefined' em vez de quebrar o código */
const manaValue =
	player.stats?.mana ?? "Atributo inexistente";

/** * PRO-TIP: No seu projeto Omnis, use Objetos para mapear os IDs de
 * jogos para seus respectivos nomes e ícones. É muito mais rápido
 * do que buscar em um Array gigante.
 */

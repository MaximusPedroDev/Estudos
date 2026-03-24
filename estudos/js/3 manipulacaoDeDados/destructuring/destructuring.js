/*
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: DESTRUCTURING (DESESTRUTURAÇÃO)
 * ============================================================================
 * A desestruturação permite extrair dados de arrays ou objetos em variáveis
 * distintas, usando uma sintaxe que imita a estrutura do próprio dado.
 */

// ----------------------------------------------------------------------------
// 1. DESESTRUTURAÇÃO DE OBJETOS
// ----------------------------------------------------------------------------

const jogo = {
	titulo: "Assassin's Creed Valhalla",
	plataforma: "Ubisoft Connect",
	progresso: 85,
	desenvolvedora: "Ubisoft",
};

/* Forma Antiga */

// const titulo = jogo.titulo;
// const progresso = jogo.progresso;

/* Forma Moderna (Destructuring) */
const { titulo, progresso } = jogo;

// console.log(`Jogando ${titulo} - Status: ${progresso}%`);

/* Renomeando Variáveis */
// Extrai 'plataforma', mas cria a variável com o nome 'loja'
const { plataforma: loja } = jogo;
// console.log(loja); // "Ubisoft Connect"

/* Valores Padrão (Default Values) */

// Se 'ano' não existir no objeto, ele assume 2020
const { ano = 2020 } = jogo;

// ----------------------------------------------------------------------------
// 2. DESESTRUTURAÇÃO DE ARRAYS
// ----------------------------------------------------------------------------

const coresNeon = ["#00FFFF", "#8A2BE2", "#000000"];

/* A ordem importa nos arrays! */
const [cyan, violet, deepBlack] = coresNeon;

/* Pulando Elementos */
const [, , fundo] = coresNeon; // Extrai apenas o terceiro item

/* Rest Operator (...) */
const numeros = [1, 2, 3, 4, 5];
const [primeiro, segundo, ...resto] = numeros;
// console.log(resto); // [3, 4, 5]

// ----------------------------------------------------------------------------
// 3. DESESTRUTURAÇÃO ANINHADA (NESTED)
// ----------------------------------------------------------------------------

const usuario = {
	id: 1,
	perfil: {
		nome: "Pedro",
		social: {
			discord: "Maximus#1234",
		},
	},
};

/* Extraindo o Discord de dentro da estrutura profunda */
const {
	perfil: {
		social: { discord },
	},
} = usuario;

// ----------------------------------------------------------------------------
// 4. USO EM PARÂMETROS DE FUNÇÃO (VITAL PARA REACT)
// ----------------------------------------------------------------------------

/*
 * Em vez de passar o objeto inteiro e usar 'obj.prop',
 * desestruturamos direto nos parênteses.
 */
function exibirStatus({ titulo, progresso }) {
	// console.log(`${titulo} está em ${progresso}%`);
}

exibirStatus(jogo);

// ----------------------------------------------------------------------------
// 5. TROCA DE VALORES (SWAP)
// ----------------------------------------------------------------------------

let a = "Ezio";
let b = "Altaïr";

/* Troca os valores sem precisar de uma variável temporária 'temp' */
[a, b] = [b, a];

// ----------------------------------------------------------------------------
// 6. CUIDADOS E BOAS PRÁTICAS
// ----------------------------------------------------------------------------

/* 
1. Se tentar desestruturar algo de 'null' ou 'undefined', o JS quebrará. Use valores padrão ou verifique antes.
2. Não exagere no aninhamento: se for muito profundo, o código fica difícil de ler. Às vezes é melhor fazer em duas etapas.
*/

/*
 * PRO-TIP: No seu Dashboard Omnis, quando você receber um objeto
 * gigante de uma API de jogos, use a desestruturação logo no
 * início da função para "limpar" os dados e usar apenas o necessário.
 */

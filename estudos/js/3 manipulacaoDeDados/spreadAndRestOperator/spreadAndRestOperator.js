/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: SPREAD E REST OPERATOR (...)
 * ============================================================================
 * Ambos usam a sintaxe de reticências (...), mas dependem do contexto:
 * - Spread: "Espalha" ou "Explode" um iterável em elementos individuais.
 * - Rest: "Recolhe" múltiplos elementos em um único Array.
 */

// ----------------------------------------------------------------------------
// 1. SPREAD OPERATOR (ESPALHAR) - EM ARRAYS
// ----------------------------------------------------------------------------

const jogosBase = ["Assassin's Creed", "Origins"];
const novasDLCs = ["Hidden Ones", "Pharaohs Curse"];

/* Clonar e Mesclar Arrays (Sem alterar os originais) */
const bibliotecaCompleta = [
	...jogosBase,
	...novasDLCs,
	"Discovery Tour",
];

// console.log(bibliotecaCompleta);
// Saída: ["Assassin's Creed", "Origins", "Hidden Ones", "Pharaohs Curse", "Discovery Tour"]

/* Clonagem Rasa (Shallow Copy) */
const copiaJogos = [...jogosBase]; // Cria uma nova referência na memória

// ----------------------------------------------------------------------------
// 2. SPREAD OPERATOR (ESPALHAR) - EM OBJETOS
// ----------------------------------------------------------------------------

/**
 * Essencial no React para atualizar estados.
 * Você copia o objeto antigo e sobrescreve apenas o que mudou.
 */

const configuracaoOriginal = {
	tema: "Cyan",
	fonte: "Fira Code",
	transparencia: 0.8,
};

const novaConfiguracao = {
	...configuracaoOriginal,
	transparencia: 1.0, // Sobrescreve o valor anterior
};

// ----------------------------------------------------------------------------
// 3. REST OPERATOR (RECOLHER/RESTO) - EM FUNÇÕES
// ----------------------------------------------------------------------------

/**
 * Permite que uma função aceite um número indefinido de argumentos,
 * transformando-os em um Array dentro da função.
 */

function somarXp(nomePersonagem, ...pontos) {
	// 'pontos' vira um Array: [100, 250, 50, 10]
	const total = pontos.reduce((acc, p) => acc + p, 0);
	return `${nomePersonagem} ganhou ${total} de XP!`;
}

// console.log(somarXp("Ezio", 100, 250, 50, 10));

/* REGRAS DO REST: Deve ser sempre o ÚLTIMO parâmetro da função. */

// ----------------------------------------------------------------------------
// 4. REST OPERATOR - NA DESESTRUTURAÇÃO (DESTRUCTURING)
// ----------------------------------------------------------------------------

const medalhas = [
	"Ouro",
	"Prata",
	"Bronze",
	"Menção Honrosa",
];

const [primeiro, segundo, ...outros] = medalhas;

// console.log(primeiro); // "Ouro"
// console.log(outros);   // ["Bronze", "Menção Honrosa"]

// ----------------------------------------------------------------------------
// 5. CUIDADOS: CLONAGEM RASA (SHALLOW COPY)
// ----------------------------------------------------------------------------

/**
 * O Spread copia apenas o PRIMEIRO nível. Se houver objetos aninhados,
 * eles ainda compartilharão a mesma referência de memória.
 */

const user = { nome: "Pedro", skills: ["JS", "React"] };
const userClone = { ...user };

userClone.skills.push("TS");
// CUIDADO: Isso alterou 'user.skills' também, pois o array interno não foi espalhado.

// ----------------------------------------------------------------------------
// 6. CASOS DE USO NO PROJETO OMNIS
// ----------------------------------------------------------------------------

/* 1. Ao receber novos dados de uma API, você pode dar um spread no array 
     antigo e adicionar os novos itens no final.
  2. Passar "props" dinâmicas para componentes React.
  3. Criar funções utilitárias de log que aceitam múltiplos dados.
*/

/** * PRO-TIP: No VS Code, se você usar o spread em um objeto e ele
 * começar a ficar lento ou com erros estranhos, verifique se você
 * não está tentando espalhar algo que não é iterável (como null).
 */

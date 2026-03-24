/*
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: TEMPLATE LITERALS
 * ============================================================================
 * Template Literals são strings delimitadas por crases (` `) em vez de aspas.
 * Elas permitem interpolação de variáveis, expressões e strings multilinha.
 */

// ----------------------------------------------------------------------------
// 1. SINTAXE BÁSICA E INTERPOLAÇÃO
// ----------------------------------------------------------------------------

const usuario = "PedroMaximus";
const jogoAtivo = "Assassin's Creed";

/* Forma Antiga (Concatenação com +) */

// const mensagem = "O usuário " + usuario + " está jogando " + jogoAtivo + ".";

/* Forma Moderna (Interpolação com ${}) */
const mensagem = `O usuário ${usuario} está jogando ${jogoAtivo}.`;

// console.log(mensagem);

// ----------------------------------------------------------------------------
// 2. STRINGS MULTILINHA (MULTILINE)
// ----------------------------------------------------------------------------

/*
 * Com aspas comuns, você precisaria de \n para pular linha.
 * Com Template Literals, basta dar o 'Enter' no código.
 */

const checklist = `
Status do Projeto Omnis:
  - UI: Neon Deep-Tech [OK]
  - Backend: Node.js [Em progresso]
  - Database: PostgreSQL [Pendente]
`;

// console.log(checklist);

// ----------------------------------------------------------------------------
// 3. EXPRESSÕES DENTRO DA STRING
// ----------------------------------------------------------------------------

/**
 * Você pode executar lógica matemática ou chamadas de função
 * diretamente dentro do ${}.
 */

const precoOriginal = 199.9;
const desconto = 0.15; // 15%

const cupomTexto = `Preço final com desconto: R$ ${(precoOriginal * (1 - desconto)).toFixed(2)}`;

// console.log(cupomTexto);

// ----------------------------------------------------------------------------
// 4. CHAMADA DE FUNÇÕES E TERNÁRIOS
// ----------------------------------------------------------------------------

const isOnline = true;

/* Usando operador ternário para decidir o texto dinamicamente */

const statusStatus = `O servidor está ${isOnline ? "OPERANTE" : "OFFLINE"}.`;

// ----------------------------------------------------------------------------
// 5. TAGGED TEMPLATES (AVANÇADO)
// ----------------------------------------------------------------------------

/**
 * Você pode "taguear" uma template string com uma função para
 * processar os dados antes de gerar a string final.
 * Muito usado em bibliotecas como 'styled-components'.
 */

function realçar(partes, ...valores) {
	return partes.reduce((acc, parte, i) => {
		return `${acc}${parte}${valores[i] ? `>>${valores[i]}<<` : ""}`;
	}, "");
}

const nick = "Ezio";
const frase = realçar`O mestre ${nick} chegou.`;
// console.log(frase); // "O mestre >>Ezio<< chegou."

// ----------------------------------------------------------------------------
// 6. CUIDADOS E SEGURANÇA
// ----------------------------------------------------------------------------

/* 1. Cuidado com espaços em branco: Em strings multilinha, a indentação do código vira parte da string.
  2. Segurança (XSS): Nunca insira dados de usuários diretamente em Template Literals que serão renderizados 
  como HTML sem antes "limpar" os dados (sanitização).
*/

/** * PRO-TIP: No seu Dashboard, use Template Literals para criar
 * as URLs de busca de jogos, ex:
 * `https://api.rawg.io/api/games?search=${searchTerm}&key=${API_KEY}`
 */

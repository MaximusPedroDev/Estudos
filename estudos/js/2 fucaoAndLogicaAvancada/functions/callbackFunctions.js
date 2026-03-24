/*
> ============================================================================
. GUIA DEFINITIVO DE ESTUDOS: FUNÇÕES CALLBACK
> ============================================================================
. Uma função de callback é uma função passada a outra função como argumento,
. que é então invocada dentro da função externa para completar algum tipo
. de rotina ou ação.

*/

// ----------------------------------------------------------------------------
// 1. O CONCEITO BÁSICO (SÍNCRONO)
// ----------------------------------------------------------------------------

function processarUsuario(nome, callback) {
	// console.log(`Iniciando processamento para: ${nome}`);
	callback(nome); // Aqui a callback é executada
}

//. Passando uma função anônima como callback 

processarUsuario("PedroMaximus", (nome) => {
	// console.log(`Usuário ${nome} foi processado com sucesso no Omnis.`);
});

// ----------------------------------------------------------------------------
// 2. CALLBACKS ASSÍNCRONAS (O USO REAL)
// ----------------------------------------------------------------------------

/*
. Callbacks brilham quando precisamos esperar algo acontecer (I/O, Timer, API).
. O JavaScript continua executando o resto do código enquanto espera.
*/

// console.log("1. Abrindo o Animus...");

setTimeout(() => {

    // console.log("2. Sincronização completa! (Executado após 3 segundos)");

}, 3000);

// console.log("3. Carregando ambiente...");

// ----------------------------------------------------------------------------
// 3. USO EM MÉTODOS DE ARRAY (REVISÃO)
// ----------------------------------------------------------------------------

const jogos = ["AC1", "AC2", "AC Brotherhood"];

// O .map() recebe uma callback para transformar cada item 
const listaFormatada = jogos.map(
	(jogo) => `Título: ${jogo}`,
);

// ----------------------------------------------------------------------------
// 4. O FAMOSO "CALLBACK HELL" (O INFERNO DAS CALLBACKS)
// ----------------------------------------------------------------------------

/*
 * Quando aninhamos muitas callbacks, o código cresce para a direita (pirâmide),
 * tornando-se impossível de ler e manter.
 */

// EXEMPLO DE CÓDIGO RUIM (Evite isso): 
/*
getData(id, (user) => {
    getProjects(user.id, (projects) => {
        getTasks(projects[0], (tasks) => {
            console.log("Chegamos ao fim...");
        });
    });
});
*/

// ----------------------------------------------------------------------------
// 5. POR QUE AS CALLBACKS SÃO IMPORTANTES HOJE?
// ----------------------------------------------------------------------------

/*
1. Event Listeners: Essenciais para interatividade (clicks, scrolls).
2. Middlewares: No Node.js (Express), tudo funciona via callbacks.
3. Fundação: Elas são a base sobre a qual as Promises foram construídas.
*/

// ----------------------------------------------------------------------------
// 6. TRATAMENTO DE ERROS EM CALLBACKS
// ----------------------------------------------------------------------------

/**
 * Por convenção (Error-First Callback), o primeiro parâmetro
 * costuma ser o erro.
 */
function buscarDadosNoBanco(id, callback) {
	const erro = false; // Simulação
	if (erro) {
		callback("Erro ao conectar", null);
	} else {
		callback(null, { id: 1, nome: "Omnis DB" });
	}
}

// ----------------------------------------------------------------------------
// 7. DICA DE PRODUTIVIDADE NO VS CODE
// ----------------------------------------------------------------------------

/* Use o atalho 'clg' (se tiver snippets instalados) para criar logs rápidos dentro de suas callbacks e rastrear a ordem de execução.
*/

/*
 * PRO-TIP: No seu Dashboard, use callbacks para monitorar quando o
 * usuário para de digitar em uma barra de busca (Debounce), evitando
 * centenas de requisições inúteis à API.
 */

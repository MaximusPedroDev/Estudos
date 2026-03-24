/*
 * ============================================================================
 * GUIA DE ESTUDOS: TRY...CATCH (O PARAQUEDAS DO CÓDIGO)
 * ============================================================================
 * Erros acontecem! A internet cai, o banco de dados dorme ou você digita algo
 * errado. O Try...Catch serve para "tentar" fazer algo e, se der erro,
 * "pegar" esse erro antes que ele quebre o computador.
 */

// ----------------------------------------------------------------------------
// 1. A ESTRUTURA BÁSICA (COMO FUNCIONA)
// ----------------------------------------------------------------------------

try {
	// [TRY = TENTAR]
	// Aqui você coloca o código "perigoso" que pode dar erro.
	// console.log("Tentando abrir a porta do templo...");

	const portaTrancada = true;
	if (portaTrancada) {
		throw new Error("A chave quebrou na fechadura!"); // 'throw' é como "lançar" um alerta
	}
} catch (erro) {
	// [CATCH = PEGAR]
	// Esse bloco SÓ roda se o 'try' der errado.
	// Ele pega o erro e te deixa resolver o problema sem travar o site.
	// console.log("OPS! Algo deu errado: " + erro.message);
	// console.log("Chamando o chaveiro...");
} finally {
	// [FINALLY = FINALMENTE]
	// Este bloco SEMPRE roda, dando certo ou errado.
	// console.log("Fim da tentativa. Guardando as ferramentas.");
}

// ----------------------------------------------------------------------------
// 2. EXEMPLO DA VIDA REAL (PROJETO OMNIS)
// ----------------------------------------------------------------------------

/*
 * No seu sistema, quando você for buscar os jogos na internet,
 * a internet pode cair bem na hora!
 */

function carregarJogosDoServidor() {
	try {
		// console.log("Conectando ao banco de dados do Omnis...");
		// Fingindo que a internet caiu:
		throw new Error("Internet sem sinal!");
	} catch (falha) {
		// Em vez de a tela ficar branca e o usuário ficar bravo:
		// console.log("Aviso: Não conseguimos carregar seus jogos agora. Tente mais tarde.");
	}
}

// ----------------------------------------------------------------------------
// 3. POR QUE USAR ISSO? (PARA A 5ª SÉRIE)
// ----------------------------------------------------------------------------

/* 
*    Imagine que você está fazendo um bolo. 
*  - TRY: Você tenta quebrar o ovo na tigela.
*  - CATCH: Se o ovo estiver podre (ERRO!), você joga ele fora e limpa a mão.
*  - Se você não usasse o CATCH, você ia colocar o ovo podre no bolo e estragar a festa inteira (o programa travaria)!
*/

// ----------------------------------------------------------------------------
// 4. DICA DE OURO: NÃO ESCONDA OS ERROS!
// ----------------------------------------------------------------------------

/* 
* Nunca deixe o 'catch' vazio. Se você não escrever nada lá dentro, 
* o erro vai acontecer e você nunca vai saber POR QUE o jogo não abriu. 
* Sempre use um console.log(erro) para você poder consertar depois!
*/

/* 
 * PRO-TIP NO VS CODE: Quando o seu console ficar cheio de letras
 * vermelhas, é o JavaScript gritando que você esqueceu de usar
 * um Try...Catch em algum lugar onde o código "tropeçou".
 */

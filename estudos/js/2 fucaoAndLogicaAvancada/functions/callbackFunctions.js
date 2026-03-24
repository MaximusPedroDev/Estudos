/*
 * ============================================================================
 * GUIA DE ESTUDOS: CALLBACKS (PARA CRIANÇAS E GENTE GRANDE)
 * ============================================================================
 * Imagine que uma Callback é um "BILHETE DE INSTRUÇÃO".
 * Você entrega o bilhete para alguém e diz:
 * "Faça o seu trabalho e, QUANDO TERMINAR, siga o que está neste bilhete".
*/

// ----------------------------------------------------------------------------
// 1. O EXEMPLO DA PIZZARIA (O JEITO FÁCIL)
// ----------------------------------------------------------------------------

// Esta é a função que faz o trabalho demorado (fazer a pizza)
function pedirPizza(sabor, instrucaoPosEntrega) {
	console.log(`[1] Pedido de pizza de ${sabor} recebido!`);
	console.log("[2] A pizza está no forno... isso vai demorar um pouco.");

	// O JavaScript não fica parado esperando! Ele continua fazendo outras coisas.

	setTimeout(() => {
		console.log(`[3] A pizza de ${sabor} chegou na sua casa!`);

		// AGORA, o entregador olha o seu "bilhete" (a Callback)
		instrucaoPosEntrega();
	}, 4000); // Espera 4 segundos para fingir que é o tempo do forno
}

// ----------------------------------------------------------------------------
// 2. EXECUTANDO A MISSÃO
// ----------------------------------------------------------------------------

// Aqui nós "chamamos" a função e entregamos a nossa Callback (o bilhete)
pedirPizza("Calabresa", function () {
	console.log("[4] AÇÃO DA CALLBACK: Lavar as mãos e COMER!");
});

// console.log("[!] Enquanto a pizza não vem, eu vou jogando videogame...");

// ----------------------------------------------------------------------------
// 3. POR QUE ISSO É IMPORTANTE?
// ----------------------------------------------------------------------------

/* 
	Imagine se o mundo parasse toda vez que você pedisse algo. 
	- Se você clicasse num botão e o computador ficasse "congelado" até 
    o site carregar, seria horrível. 
	- A Callback serve para o computador dizer: 
    "Pode continuar fazendo suas coisas, eu te aviso quando terminar!"
*/

// ----------------------------------------------------------------------------
// 4. RESUMO PARA NÃO ESQUECER
// ----------------------------------------------------------------------------

/* 
1. Função Principal: É o "Trabalhador" (Ex: Pedir Pizza).
2. Callback: É o "Aviso" de o que fazer depois (Ex: Comer).
3. O Momento: A Callback só acontece DEPOIS que o trabalhador termina.
*/

/*
 * PRO-TIP DO PAI: No seu sistema Omnis, uma Callback é como
 * quando você clica para abrir um jogo e, enquanto ele carrega,
 * você pode ver suas mensagens no Discord. Quando o jogo abre
 * (termina a tarefa), ele "chama" você de volta para jogar.
 */

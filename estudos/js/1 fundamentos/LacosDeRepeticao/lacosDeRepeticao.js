/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: LAÇOS DE REPETIÇÃO (LOOPS)
 * ============================================================================
 * Loops permitem executar um bloco de código várias vezes. Eles são a base para
 * processar coleções de dados (como Arrays e Objetos).
 */

// ----------------------------------------------------------------------------
// 1. O CLÁSSICO: FOR (Controle Total)
// ----------------------------------------------------------------------------

/* Estrutura: for (inicialização; condição; incremento) */
// Ideal quando você sabe exatamente quantas vezes quer repetir.
for (let i = 0; i < 5; i++) {
	// console.log(`Repetição número: ${i}`);
}

// ----------------------------------------------------------------------------
// 2. WHILE (Enquanto)
// ----------------------------------------------------------------------------

/* Executa enquanto a condição for verdadeira. */
// Útil quando você NÃO sabe quantas vezes vai repetir (ex: esperar um carregamento).
let energia = 100;
while (energia > 0) {
	// console.log("Lutando...");
	energia -= 20; // Cuidado: Sem isso, você cria um LOOP INFINITO e trava o VS Code!
}

/* DO...WHILE: Garante que o código execute PELO MENOS UMA VEZ. */
let carregado = false;
do {
	// console.log("Tentando conectar ao servidor Omnis...");
} while (carregado === true);

// ----------------------------------------------------------------------------
// 3. ITERAÇÃO MODERNA: FOR...OF (Para Arrays)
// ----------------------------------------------------------------------------

/* Percorre os VALORES de uma lista. É o mais legível e usado hoje em dia. */
const assassinos = ["Altaïr", "Ezio", "Connor", "Edward"];

for (const nome of assassinos) {
	// console.log(`Membro da Irmandade: ${nome}`);
}

// ----------------------------------------------------------------------------
// 4. ITERAÇÃO EM OBJETOS: FOR...IN (Para Chaves)
// ----------------------------------------------------------------------------

/* Percorre as CHAVES (propriedades) de um objeto. */
const projeto = {
	nome: "Omnis",
	versao: "1.0",
	linguagem: "JavaScript",
};

for (const chave in projeto) {
	// console.log(`${chave}: ${projeto[chave]}`);
}

// ----------------------------------------------------------------------------
// 5. MÉTODOS DE ARRAY vs LOOPS (A Diferença)
// ----------------------------------------------------------------------------

/**
 * Embora existam loops manuais, em 90% dos casos no React/Web Dev,
 * usamos métodos funcionais como .forEach() ou .map().
 */
assassinos.forEach((assassino, index) => {
	// console.log(`${index} - ${assassino}`);
});

// ----------------------------------------------------------------------------
// 6. CONTROLE DE FLUXO: BREAK E CONTINUE
// ----------------------------------------------------------------------------

/* break: Interrompe o loop imediatamente. */
for (let i = 0; i < 10; i++) {
	if (i === 5) break; // Para tudo quando chegar no 5
	// console.log(i);
}

/* continue: Pula apenas a iteração atual e vai para a próxima. */
for (let i = 0; i < 5; i++) {
	if (i === 2) continue; // Pula o número 2
	// console.log(i); // Vai imprimir 0, 1, 3, 4
}

// ----------------------------------------------------------------------------
// 7. PERFORMANCE E DICAS
// ----------------------------------------------------------------------------

/* - Loops 'for' tradicionais são ligeiramente mais rápidos que .forEach().
   - No entanto, a legibilidade do 'for...of' ou '.map()' costuma ser mais importante.
   - Evite modificar o tamanho de um array (push/pop) enquanto o percorre.
*/

/** * PRO-TIP: No seu dashboard, use o for...of para filtrar rapidamente
 * quais jogos da sua lista possuem conquistas pendentes antes de
 * renderizar na tela.
 */

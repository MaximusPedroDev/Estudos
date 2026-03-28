/*
 * ============================================================================
 * GUIA DE ESTUDOS: TIPOS DE DECLARAÇÃO (AS CAIXAS DE GUARDAR COISAS)
 * ============================================================================
 * No JavaScript, declarar uma variável é como colocar uma etiqueta em uma
 * caixa para você saber o que tem dentro e como pode usar aquilo depois.
 */

// ----------------------------------------------------------------------------
// 1. CONST (A CAIXA COM CADEADO)
// ----------------------------------------------------------------------------

/*
 * 'const' vem de "Constante".
 * Imagine uma caixa transparente com um cadeado que não tem chave.
 * Você coloca o brinquedo lá dentro e NUNCA MAIS pode tirar ou trocar.
 */

const meuNome = "Pedro";
// meuNome = "Maximus"; // O JAVASCRIPT VAI GRITAR! (Erro: Assignment to constant variable)

// POR QUE USAR? É a mais segura. Use para coisas que não mudam, como seu CPF
// ou o nome do seu projeto "Omnis".

// ----------------------------------------------------------------------------
// 2. LET (A CAIXA DE SAPATO)
// ----------------------------------------------------------------------------

/*
 * 'let' é uma caixa de sapato comum.
 * Você guarda um carrinho hoje, mas se amanhã quiser colocar um boneco
 * no lugar, você pode!
 */

let nivelNoJogo = 10;
nivelNoJogo = 11; // Tudo certo! Você subiu de nível.

// POR QUE USAR? Use quando você sabe que o valor vai mudar, como a
// pontuação de um jogo ou a idade da sua filha que cresce todo ano.

// ----------------------------------------------------------------------------
// 3. VAR (A CAIXA ASSOMBRADA - ANTIGA)
// ----------------------------------------------------------------------------

/*
 * 'var' é o jeito antigo. Ela é meio "assombrada" porque ela atravessa paredes.
 * Se você criar um 'var' dentro de um quartinho (um bloco de código),
 * ela pode aparecer na sala de estar do nada! Isso causa muita confusão.
 */

var fantasma = "Bu!";

// DICA DE AMIGO: Hoje em dia, quase ninguém usa 'var'.
// Prefira sempre 'const' ou 'let'.

// ----------------------------------------------------------------------------
// 4. ONDE A CAIXA "VIVE" (ESCOPO)
// ----------------------------------------------------------------------------

/* 
- Se você cria uma caixa (let ou const) dentro de um par de chaves { }, ela só existe ali dentro. 
- É como um brinquedo que só pode ficar dentro do quarto. Se você tentar pegar ele na cozinha, ele "desaparece".
*/

{
	let brinquedoEscondido = "Carrinho";
	// console.log(brinquedoEscondido); // Aqui ele aparece!
}
// console.log(brinquedoEscondido); // ERRO! O brinquedo sumiu porque o quarto fechou.

// ----------------------------------------------------------------------------
// 5. REGRAS PARA DAR NOME ÀS CAIXAS
// ----------------------------------------------------------------------------

/* 
* 1. Não pode começar com número: '1jogo' (Errado) -> 'jogo1' (Certo).
* 2. Não pode ter espaço: 'meu jogo' (Errado) -> 'meuJogo' (Certo - estilo camelo).
* 3. Use nomes que façam sentido: Em vez de 'let x = 10', use 'let vidas = 10'.
*/

/* 
 * PRO-TIP: No seu projeto Omnis, use 'const' para a URL da API que
 * você vai consultar e 'let' para a lista de jogos que vai mudar
 * toda vez que o usuário fizer uma busca.
 */
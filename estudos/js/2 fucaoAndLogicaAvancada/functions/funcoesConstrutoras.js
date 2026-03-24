/*
> ============================================================================
 * GUIA DE ESTUDOS: FUNÇÕES CONSTRUTORAS (A FÁBRICA DE OBJETOS)
> ============================================================================
 * Imagine que você tem um molde de peças de LEGO. A Função Construtora é o molde.
 * Cada peça que sai de lá é um "Objeto" novo, mas todas têm o mesmo formato.
 */

// ----------------------------------------------------------------------------
// 1. COMO CRIAR O "MOLDE" (A CONSTRUTORA)
// ----------------------------------------------------------------------------

/*
 * REGRAS DE OURO:
 * 1. O nome sempre começa com LETRA MAIÚSCULA (PascalCase).
 * 2. Usamos a palavra 'this' para dizer: "ESTE objeto que estou criando agora".
 */

function Jogo(titulo, genero, lancamento) {
	this.titulo = titulo;
	this.genero = genero;
	this.lancamento = lancamento;
	this.status = "Pendente"; // Todo jogo novo começa como pendente

	// Podemos criar funções (métodos) dentro do molde
	this.finalizar = function () {
		this.status = "Concluído!";
		// console.log(`${this.titulo} foi zerado com sucesso!`);
	};
}

// ----------------------------------------------------------------------------
// 2. FABRICANDO OS OBJETOS (A PALAVRA 'NEW')
// ----------------------------------------------------------------------------

/*
 * Para usar o molde, precisamos da palavra mágica: 'new'.
 * O 'new' cria um objeto vazio {}, aponta o 'this' para ele e o retorna.
 */

const jogo1 = new Jogo(
	"Assassin's Creed 2",
	"Ação/Aventura",
	2009,
);
const jogo2 = new Jogo("The Witcher 3", "RPG", 2015);

 console.log(jogo1.titulo); // "Assassin's Creed 2"
 jogo2.finalizar();         // "The Witcher 3 foi zerado com sucesso!"

// ----------------------------------------------------------------------------
// 3. ENTENDENDO O 'THIS' NA CONSTRUTORA (PARA A 5ª SÉRIE)
// ----------------------------------------------------------------------------

/* 
*  Imagine que a função Jogo é uma ficha de inscrição de escola.
*  O 'this' é o espaço em branco onde você escreve o seu nome.
*  - No papel do Pedro, o 'this' é o Pedro.
*  - No papel da Maria, o 'this' é a Maria.
*  A ficha é a mesma, mas os dados (this) mudam para cada pessoa.
*/

// ----------------------------------------------------------------------------
//  4. PROTOTYPES (MELHORANDO A PERFORMANCE)
// ----------------------------------------------------------------------------

/*
 * Em vez de criar a função 'finalizar' dentro de CADA objeto (o que gasta memória),
 * podemos colocá-la no "DNA" do molde (Prototype).
 */

Jogo.prototype.exibirInfo = function () {
	// console.log(`${this.titulo} (${this.lancamento}) - Gênero: ${this.genero}`);
};

// Agora todos os jogos fabricados sabem usar o 'exibirInfo', mas a função
// existe em um lugar só na memória do computador.

// ----------------------------------------------------------------------------
// 5. POR QUE NÃO USAR UMA FUNÇÃO NORMAL?
// ----------------------------------------------------------------------------

/*
* Se você esquecer o 'new', o 'this' vai tentar virar o "Global/Window" e você vai criar uma bagunça no sistema. 
* O 'new' garante que um NOVO objeto isolado seja criado.
*/

/*
 *  PRO-TIP: No seu Dashboard Omnis, você pode ter uma construtora
 * chamada 'Achievement' (Conquista). Assim, cada vez que o usuário
 * ganha um troféu, você só dá um 'new Achievement("Nome", "XP")'
 * e pronto, o objeto já vem configurado!
 */

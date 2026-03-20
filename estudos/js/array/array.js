/* 
*   O que é um Array? (A Lista Mágica do Computador)
Imagine que você está organizando sua casa. Se você tem apenas uma variável comum, ela é como uma única caixa onde você guarda uma coisa (ex: sua idade). 
Se você guardar algo novo lá, o que estava antes é jogado fora.
Já um Array é como uma prateleira inteira com várias divisórias numeradas. 
Ele permite que você guarde uma lista de coisas (como nomes de pacientes ou produtos de mercado) em um único lugar, sem perder nada
.
1. A Regra do Número 0
A coisa mais importante para lembrar é que o computador começa a contar do zero
.
A primeira coisa da sua lista está na posição 0.
A segunda coisa está na posição 1, e assim por diante
.
2. Como criar sua lista
No código, criar uma prateleira vazia é tão simples quanto escrever:
*/
var lista = [];
/* 
3. Colocando e tirando coisas (Como uma fila)
Existem comandos fáceis para gerenciar sua lista:
push: Coloca um item novo no final da fila.
unshift: Empurra todo mundo e coloca o novo item no comecinho da fila.
pop: Tira o último da lista.
shift: Tira o primeiro da lista.
4. Para que serve na vida real?
Imagine um consultório médico. O Array guarda a lista de pacientes esperando.
Quando o médico chama o próximo, o programa usa o comando para tirar o primeiro da lista e mostrá-lo na tela.
*/
/* 
1. A Estrutura de um Array
Um array é uma estrutura que permite armazenar uma lista de dados na memória do computador. 
Diferente de uma variável comum, que guarda apenas um valor por vez, o array permite guardar vários itens sob um único nome.
Índices: Cada item tem um endereço numérico chamado índice.
Regra do Zero: O primeiro item da lista ocupa sempre a posição 0.
Exemplo visual: Se você tem um array frutas = ["Banana", "Maçã", "Uva"], a "Banana" está no índice 0, a "Maçã" no 1 e a "Uva" no 2
.
2. Comandos de Gerenciamento (Métodos)
Para manipular essa "prateleira" de dados, usamos comandos específicos que facilitam a vida do programador
:
Para Adicionar:
push(): Coloca o item no final da lista
.
unshift(): Coloca o item no início da lista, empurrando os outros para baixo
.
Para Remover:
pop(): Tira o último item da lista
.
shift(): Tira o primeiro item da lista
.
3. Ferramentas de Busca e Organização
Como as listas podem ser grandes, o JavaScript oferece "atalhos" para encontrar e organizar as informações:
Tamanho da lista: A propriedade .length informa quantos itens existem no array no total
.
Localizar itens: O método indexOf() procura um item do início para o fim e retorna a posição dele
. Se o item não existir, ele retorna -1
.
Ordenar: O método sort() coloca os itens em ordem alfabética. 
Para inverter a ordem, usamos o reverse().

4. Arrays de Objetos (O Nível Profissional)
Na vida real, não guardamos apenas nomes. Guardamos informações complexas.
Podemos criar um array de objetos, onde cada item tem atributos

Exemplo: Um carro que possui modelo e preço.
Isso permite que você filtre a lista para mostrar, por exemplo, apenas carros que custam menos de R$ 20.000,00
.
Como fixar na memória?
Para quem tem TDAH, o segredo é associar o código a algo físico. Imagine o array como uma fila de banco:
push() é alguém que chega no fim da fila.
shift() é o atendente chamando quem está na frente (o índice 0).
length é o segurança contando quantas pessoas estão na fila.
*/
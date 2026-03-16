/* 
Desafio If 01
a partir de uma constante chamada "nota" e uma tabela com Devido conceito de nota. crie um sistema para informar se o aluno foi aprovado ou não.

A = Entre 9,0 e 10,0
B = Entre 7,0 e 8,9
C = Entre 5,0 e 6,9
D = Entre 4,5 e 4,9
F = Abaixo de 4,5

*/

const nota=Math.floor(Math.random()*10);

if (nota >= 9.0 && nota <= 10.0) {
	console.log("conceito A");
} else if (nota >= 7.0 && nota <= 8.9) {
	console.log("conceito B");
} else if (nota >= 5.0 && nota <= 6.9) {
	console.log("conceito C");
} else if (nota >= 4.5 && nota <= 4.9) {
	console.log("conceito D");
} else {
	console.log("conceito F");
}
console.log(nota)
/* 
. 2. Validador de Tipo de Dado
. Às vezes esperamos um número, mas recebemos um texto.

. Tarefa: Crie uma função que recebe um parâmetro.

. Regra: Dentro do try, verifique se o tipo do parâmetro é diferente de number (use typeof). Se não for número, lance um erro: "Isso não é um número!".

.Objetivo: Garantir que seu código só faça cálculos se receber números.
  
*/

let entrada = 'teste'


try {
    const tipo = typeof entrada
    if(tipo !== "number"){
        throw new Error ('a entrada não é um numero ')
    }
    console.log('a sua entrada é '+ entrada)
} catch (error) {
    console.error('Falha na validação '+ Error.message
    )
}
/*
* ==========================================
* DESAFIO 2: A FUNÇÃO MENSAGEIRA
* Crie uma função chamada 'saudar' que recebe um nome e um callback.
* O callback deve ser uma função que dá um 'console.log' na saudação.
* Exemplo esperado: saudar("Altaïr", (texto) => console.log(texto));
* ==========================================

*/

// 1. Definimos a função que aceita o callback
function saudar(nome, callback) {
    const mensagem = "Bem-vindo à Ordem, " + nome + "!";
    
    // Aqui é onde a "mágica" acontece: 
    // Estamos executando a função que foi passada por argumento
    callback(mensagem); 
}

// 2. Chamamos a função passando o nome e uma Arrow Function como callback
saudar("Altaïr", (texto) => {
    console.log(texto);
});
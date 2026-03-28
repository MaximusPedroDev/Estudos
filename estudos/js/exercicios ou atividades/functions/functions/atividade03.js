// ==========================================
// DESAFIO 3: CALCULADORA DE IDADE CANINA
// Crie uma função que recebe a idade de um cachorro e retorna a idade humana.
// Regra: 1 ano de cachorro = 7 anos humanos.
// ==========================================

function convert (dogAge) {
    let humanAge = dogAge*7
    return humanAge
}

console.log(convert(10))
// ========================================
// OPERADOR TERNÁRIO EM JAVASCRIPT
// ========================================

// O operador ternário é uma forma concisa de escrever uma condicional (if/else)
// Sintaxe: condição ? valor_se_verdadeiro : valor_se_falso

// ========================================
// EXEMPLO 1: Caso Básico
// ========================================

const idade = 18;

// Usando if/else tradicional
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Usando operador ternário (mais limpo)
const status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);

// ========================================
// EXEMPLO 2: Atribuição de Variáveis
// ========================================

const nota = 7;
const resultado = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(resultado); // "Aprovado"

// ========================================
// EXEMPLO 3: Ternário Aninhado (Múltiplas Condições)
// ========================================

const temperatura = 25;

// Multiple ternários (cuidado: difícil de ler)
const climaStatus = 
    temperatura > 30 ? "Quente" : 
    temperatura > 20 ? "Agradável" : 
    temperatura > 10 ? "Frio" : 
    "Muito Frio";

console.log(climaStatus); // "Agradável"

// ========================================
// EXEMPLO 4: Em Funções
// ========================================

function verificarParidade(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(verificarParidade(4));  // "Par"
console.log(verificarParidade(7));  // "Ímpar"

// ========================================
// EXEMPLO 5: Com Expressões
// ========================================

const preco = 100;
const podeComprar = true;

// Ternário retornando resultado de expressão
const mensagem = podeComprar ? `Compra realizada! Total: R$${preco}` : "Sem saldo";
console.log(mensagem);

// ========================================
// EXEMPLO 6: Com Tipos Diferentes
// ========================================

const usuario = { nome: "Pedro" };

// Retorna objetos ou valores diferentes
const userData = usuario ? usuario.nome : null;
console.log(userData); // "Pedro"

// ========================================
// EXEMPLO 7: Em Arrays/Listas
// ========================================

const usuarios = [
    { nome: "Ana", ativo: true },
    { nome: "Carlos", ativo: false },
    { nome: "Maria", ativo: true }
];

// Usando ternário com map
const statusUsuarios = usuarios.map(user => 
    user.ativo ? `${user.nome} está online` : `${user.nome} está offline`
);

console.log(statusUsuarios);
// ["Ana está online", "Carlos está offline", "Maria está online"]

// ========================================
// QUANDO USAR TERNÁRIO
// ========================================

// ✅ BOM - Condição simples e direta
const tipo = usuario.idade >= 18 ? "adulto" : "menor";

// ⚠️ EVITAR - Muito complexo ou aninhado
// const resultado = condicao1 ? valor1 : condicao2 ? valor2 : condicao3 ? valor3 : valor4;
// Nesse caso, use if/else ou switch

// ========================================
// DICAS IMPORTANTES
// ========================================

// 1. Ternário é ótimo para assignments simples
// 2. Evite ternários muito aninhados (difícil de ler)
// 3. Alternativa para múltiplas condições: switch ou if/else
// 4. Sempre mantenha a legibilidade do código
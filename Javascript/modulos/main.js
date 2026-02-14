// ========================================
// ESTUDO: MÓDULOS EM JAVASCRIPT
// ========================================

// 1. EXPORTAÇÃO COM NAMED EXPORTS
// Arquivo: math.js
export const soma = (a, b) => a + b;
export const subtracao = (a, b) => a - b;
export const multiplicacao = (a, b) => a * b;

// 2. EXPORTAÇÃO COM DEFAULT EXPORT
// Arquivo: calculadora.js
const dividir = (a, b) => {
    if (b === 0) throw new Error("Divisão por zero!");
    return a / b;
};

export default dividir;

// 3. IMPORTANDO NAMED EXPORTS
// Usar específico: import { soma, subtracao } from './math.js';

// 4. IMPORTANDO DEFAULT EXPORT
// import dividir from './calculadora.js';

// 5. IMPORTANDO TUDO COM ALIAS
// import * as Operacoes from './math.js';
// Uso: Operacoes.soma(5, 3);

// ========================================
// EXEMPLO PRÁTICO COMPLETO
// ========================================

// Definindo funções para exportação
const potencia = (base, expoente) => Math.pow(base, expoente);
const raizQuadrada = (num) => Math.sqrt(num);
const modulo = (a, b) => a % b;

// Exportando múltiplas funções
export { potencia, raizQuadrada, modulo };

// ========================================
// BENEFÍCIOS DOS MÓDULOS
// ========================================

/*
✓ Organização: Separa código em arquivos lógicos
✓ Reutilização: Importa funções em múltiplos projetos
✓ Evita conflitos: Cada módulo tem seu próprio escopo
✓ Manutenção: Código mais limpo e fácil de atualizar
✓ Dependências claras: Vê exatamente o que cada arquivo precisa
*/

// ========================================
// PADRÕES COMUNS
// ========================================

// CommonJS (Node.js antigo)
// module.exports = { soma, subtracao };
// const { soma } = require('./math.js');

// ES6 Modules (Padrão moderno)
// export const funcao = () => {};
// import { funcao } from './arquivo.js';
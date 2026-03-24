/**
 * ============================================================================
 * GUIA DEFINITIVO DE ESTUDOS: OPERADORES ARITMÉTICOS
 * ============================================================================
 * Operadores aritméticos recebem valores numéricos (literais ou variáveis)
 * como seus operandos e retornam um único valor numérico.
 */

// ----------------------------------------------------------------------------
// 1. OPERADORES BÁSICOS
// ----------------------------------------------------------------------------

const ataqueBase = 50;
const bonusArma = 15;

/* Adição (+) */
const danoTotal = ataqueBase + bonusArma; // 65

/* Subtração (-) */
const vidaRestante = 100 - danoTotal; // 35

/* Multiplicação (*) */
const danoCritico = danoTotal * 2; // 130

/* Divisão (/) */
const mediaDano = danoTotal / 2; // 32.5

// ----------------------------------------------------------------------------
// 2. OPERADORES AVANÇADOS
// ----------------------------------------------------------------------------

/* Módulo (%) - Retorna o RESTO da divisão */
// Muito útil para saber se um número é par ou ímpar.
const ePar = 10 % 2; // 0 (é par)
const eImpar = 7 % 2; // 1 (é ímpar)

/* Exponencial (**) - Potência */
const areaQuadrada = 5 ** 2; // 25 (5 elevado ao quadrado)

// ----------------------------------------------------------------------------
// 3. INCREMENTO E DECREMENTO
// ----------------------------------------------------------------------------

let nivel = 10;

/* Incremento (++) */
nivel++; // nivel agora é 11 (adiciona 1)

/* Decremento (--) */
let pocoes = 5;
pocoes--; // pocoes agora é 4 (subtrai 1)

/**
 * CUIDADO: O lugar do operador importa!
 * ++variavel: Incrementa ANTES de usar o valor.
 * variavel++: Incrementa DEPOIS de usar o valor.
 */

// ----------------------------------------------------------------------------
// 4. ATRIBUIÇÃO ARITMÉTICA (ATALHOS)
// ----------------------------------------------------------------------------

let xp = 100;

// Em vez de: xp = xp + 50;
xp += 50; // 150 (Soma e atribui)

// Funciona com todos:
xp -= 20; // 130 (Subtrai e atribui)
xp *= 2; // 260 (Multiplica e atribui)
xp /= 2; // 130 (Divide e atribui)

// ----------------------------------------------------------------------------
// 5. PRECEDÊNCIA DE OPERADORES
// ----------------------------------------------------------------------------

/**
 * A ordem de execução segue a matemática:
 * 1. Parênteses ( )
 * 2. Potência **
 * 3. Multiplicação * e Divisão /
 * 4. Adição + e Subtração -
 */

const calculoMaluco = 10 + 5 * 2; // 20 (primeiro 5*2)
const calculoCerto = (10 + 5) * 2; // 30 (primeiro os parênteses)

// ----------------------------------------------------------------------------
// 6. CUIDADOS COM COERÇÃO (O "PERIGO" DO +)
// ----------------------------------------------------------------------------

/* O operador + também serve para concatenar Strings! */
const resultado1 = "10" + 5; // "105" (String)
const resultado2 = "10" - 5; // 5 (Number - o JS converteu para você)

/* Dica: Use Number() para garantir que é um cálculo matemático */
const somaSegura = Number("10") + 5; // 15

/** * PRO-TIP: No seu Dashboard, use o operador de Módulo (%) para
 * criar efeitos de "zebra" (cores alternadas) em listas de jogos,
 * verificando se o índice da linha é par ou ímpar.
 */

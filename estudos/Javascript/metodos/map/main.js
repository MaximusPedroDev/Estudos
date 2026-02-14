/**
 * MÉTODO MAP EM JAVASCRIPT
 * ========================
 * O map() é um método de array que cria um NOVO array
 * aplicando uma função a cada elemento do array original.
 * Ele NÃO modifica o array original (imutável).
 */

// ============================================
// 1. SINTAXE BÁSICA
// ============================================
// array.map((elemento, índice, array) => {
//   return transformação;
// });

// ============================================
// 2. EXEMPLO SIMPLES: Dobrar números
// ============================================
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map((num) => num * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]
console.log(numeros); // [1, 2, 3, 4, 5] - original não muda

// ============================================
// 3. EXEMPLO: Converter strings em números
// ============================================
const strings = ["10", "20", "30"];
const numerosConvertidos = strings.map((str) => parseInt(str));
console.log(numerosConvertidos); // [10, 20, 30]

// ============================================
// 4. EXEMPLO: Trabalhar com objetos
// ============================================
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 30 },
  { nome: "Carlos", idade: 28 },
];

// Extrair apenas os nomes
const nomes = usuarios.map((user) => user.nome);
console.log(nomes); // ['Ana', 'Bruno', 'Carlos']

// Criar novo array de objetos
const usuariosComId = usuarios.map((user, index) => ({
  id: index + 1,
  nome: user.nome,
  idade: user.idade,
}));
console.log(usuariosComId);
// [{id: 1, nome: 'Ana', idade: 25}, ...]

// ============================================
// 5. EXEMPLO: Usar com função nomeada
// ============================================
function elevarAoQuadrado(numero) {
  return numero * numero;
}

const quadrados = numeros.map(elevarAoQuadrado);
console.log(quadrados); // [1, 4, 9, 16, 25]

// ============================================
// 6. EXEMPLO: Transformar HTML dinâmico
// ============================================
const items = ["Maçã", "Banana", "Laranja"];
const listaHTML = items.map((item) => `<li>${item}</li>`);
console.log(listaHTML);
// ['<li>Maçã</li>', '<li>Banana</li>', '<li>Laranja</li>']

// ============================================
// 7. USANDO TODOS OS PARÂMETROS
// ============================================
const resultado = numeros.map((numero, indice, arrayCompleto) => {
  return `Índice ${indice}: ${numero} (total de ${arrayCompleto.length})`;
});
console.log(resultado);

// ============================================
// 8. DIFERENÇA: MAP vs FOREACH vs FOR
// ============================================
// MAP: Retorna novo array, é imutável, funcional
const comMap = numeros.map((n) => n * 2);

// FOREACH: Não retorna nada, apenas executa
numeros.forEach((n) => console.log(n * 2));

// FOR tradicional: mais verboso
const comFor = [];
for (let i = 0; i < numeros.length; i++) {
  comFor.push(numeros[i] * 2);
}

// ============================================
// 9. MÉTODO ENCADEADO (CHAINING)
// ============================================
const resultado_final = numeros
  .map((n) => n * 2) // [2, 4, 6, 8, 10]
  .map((n) => n + 1) // [3, 5, 7, 9, 11]
  .filter((n) => n > 5); // [7, 9, 11]
console.log(resultado_final);

// ============================================
// 10. CUIDADO: Não confunda com mutação
// ============================================
const objetos = [{ valor: 1 }, { valor: 2 }];
const mapeados = objetos.map((obj) => ({ ...obj, valor: obj.valor * 2 }));
console.log(objetos); // Original intacto
console.log(mapeados); // Novo array criado

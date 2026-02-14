/**
 * Calcula a soma de dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} A soma de a e b
 * @example
 * soma(5, 3); // retorna 8
 */
function soma(a, b) {
  return a + b;
}

/**
 * Filtra um array baseado em uma condição
 * @param {Array} array - Array a ser filtrado
 * @param {Function} callback - Função de teste para cada elemento
 * @returns {Array} Novo array com elementos que passaram no teste
 * @example
 * filtrar([1, 2, 3, 4], (x) => x > 2); // retorna [3, 4]
 */
function filtrar(array, callback) {
  return array.filter(callback);
}

/**
 * Mapeia um array transformando cada elemento
 * @param {Array} array - Array a ser mapeado
 * @param {Function} callback - Função de transformação
 * @returns {Array} Novo array com elementos transformados
 * @example
 * mapear([1, 2, 3], (x) => x * 2); // retorna [2, 4, 6]
 */
function mapear(array, callback) {
  return array.map(callback);
}

/**
 * Reduz um array a um único valor
 * @param {Array} array - Array a ser reduzido
 * @param {Function} callback - Função de acumulação
 * @param {*} inicial - Valor inicial do acumulador
 * @returns {*} Valor acumulado final
 * @example
 * reduzir([1, 2, 3, 4], (acc, x) => acc + x, 0); // retorna 10
 */
function reduzir(array, callback, inicial) {
  return array.reduce(callback, inicial);
}

/**
 * Verifica se todos os elementos passam no teste
 * @param {Array} array - Array a testar
 * @param {Function} callback - Função de teste
 * @returns {boolean} true se todos passarem
 */
function todos(array, callback) {
  return array.every(callback);
}

/**
 * Verifica se algum elemento passa no teste
 * @param {Array} array - Array a testar
 * @param {Function} callback - Função de teste
 * @returns {boolean} true se algum passar
 */
function algum(array, callback) {
  return array.some(callback);
}

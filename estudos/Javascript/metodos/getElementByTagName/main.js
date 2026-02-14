/**
 * ESTUDO: Método getElementsByTagName em JavaScript
 *
 * O getElementsByTagName() retorna uma HTMLCollection de todos os elementos
 * que correspondem a uma tag específica no documento ou em um elemento.
 */

// ============================================
// 1. SINTAXE BÁSICA
// ============================================

// Seleciona todos os elementos <p> do documento
const paragrafos = document.getElementsByTagName("p");

// Seleciona todos os elementos <div> dentro de um elemento específico
const container = document.getElementById("container");
const divss = container.getElementsByTagName("div");

// ============================================
// 2. RETORNO: HTMLCollection
// ============================================

// getElementsByTagName retorna uma HTMLCollection (não um Array)
const spans = document.getElementsByTagName("span");
console.log(spans); // HTMLCollection { length: ... }

// Para acessar elementos individuais:
console.log(spans[0]); // Primeiro elemento <span>
console.log(spans.length); // Quantidade total de <span>

// ============================================
// 3. ITERANDO SOBRE OS RESULTADOS
// ============================================

// Método 1: Loop tradicional com for
for (let i = 0; i < spans.length; i++) {
  console.log(spans[i].textContent);
}

// Método 2: Converter para Array e usar forEach
Array.from(spans).forEach((span) => {
  console.log(span.textContent);
});

// Método 3: Spread operator
[...spans].forEach((span) => {
  console.log(span.textContent);
});

// ============================================
// 4. CASOS DE USO PRÁTICOS
// ============================================

// Exemplo 1: Modificar todos os títulos <h1>
const titulos = document.getElementsByTagName("h1");
for (let titulo of titulos) {
  titulo.style.color = "blue";
  titulo.classList.add("destaque");
}

// Exemplo 2: Contar elementos específicos
const links = document.getElementsByTagName("a");
console.log(`Total de links: ${links.length}`);

// Exemplo 3: Adicionar event listeners a múltiplos elementos
const botoes = document.getElementsByTagName("button");
for (let botao of botoes) {
  botao.addEventListener("click", () => {
    console.log("Botão clicado!");
  });
}

// ============================================
// 5. DIFERENÇAS COM OUTROS MÉTODOS
// ============================================

// querySelector - Retorna o primeiro elemento encontrado
const primeiroP = document.querySelector("p");

// querySelectorAll - Retorna um NodeList estático
const todosP = document.querySelectorAll("p");

// getElementsByTagName - Retorna HTMLCollection dinâmica
const paragrafosLista = document.getElementsByTagName("p");

// ============================================
// 6. IMPORTANTE: HTMLCollection é DINÂMICA
// ============================================

// A HTMLCollection se atualiza automaticamente quando o DOM muda
const imagens = document.getElementsByTagName("img");
console.log(imagens.length); // Ex: 3

// Se adicionarmos uma nova <img> ao DOM
const novaImg = document.createElement("img");
document.body.appendChild(novaImg);

console.log(imagens.length); // Agora é 4 (atualizado automaticamente!)

// ============================================
// 7. CASE INSENSITIVE
// ============================================

// getElementsByTagName não diferencia maiúsculas de minúsculas
const divs1 = document.getElementsByTagName("div");
const divs2 = document.getElementsByTagName("DIV");
const divs3 = document.getElementsByTagName("Div");
// Todos retornam o mesmo resultado

// ============================================
// 8. BOAS PRÁTICAS
// ============================================

// ✅ BOM: Usar quando você precisa de elementos específicos de uma tag
const todosOsLinks = document.getElementsByTagName("a");

// ✅ MELHOR: Usar querySelector/querySelectorAll quando possível
const linksPrincipais = document.querySelectorAll("nav a");

// ❌ EVITAR: Chamar a função múltiplas vezes (armazene em uma variável)
// Ruim:
for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
  // ...
}

// Bom:
const divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
  // ...
}

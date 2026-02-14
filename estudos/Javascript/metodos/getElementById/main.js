// ============================================
// ESTUDOS: Método getElementById em JavaScript
// ============================================

// O método getElementById() é usado para selecionar um elemento HTML pelo seu atributo ID
// Ele retorna o elemento encontrado ou null se nenhum elemento com esse ID existir

// Sintaxe básica:
// document.getElementById('id')

// ============================================
// EXEMPLO 1: Selecionando um elemento simples
// ============================================

// Supondo que exista um elemento HTML: <h1 id="titulo">Olá Mundo</h1>
const titulo = document.getElementById("titulo");
console.log(titulo); // Exibe o elemento H1 no console

// ============================================
// EXEMPLO 2: Alterando o conteúdo de um elemento
// ============================================

const paragrafo = document.getElementById("paragrafo");
// Muda o texto dentro do elemento
paragrafo.textContent = "Novo texto aqui";
// Ou usa innerHTML para adicionar HTML
paragrafo.innerHTML = "<strong>Texto em negrito</strong>";

// ============================================
// EXEMPLO 3: Alterando estilos CSS
// ============================================

const botao = document.getElementById("meuBotao");
// Muda as propriedades de estilo
botao.style.backgroundColor = "blue";
botao.style.color = "white";
botao.style.padding = "10px 20px";

// ============================================
// EXEMPLO 4: Adicionando event listeners
// ============================================

const formulario = document.getElementById("formulario");
// Adiciona um evento de clique ao elemento
formulario.addEventListener("click", function () {
  console.log("Formulário foi clicado!");
});

// ============================================
// EXEMPLO 5: Verificando se o elemento existe
// ============================================

const elemento = document.getElementById("elementoQueNaoExiste");
// Sempre verifique se o elemento foi encontrado antes de usar
if (elemento !== null) {
  elemento.textContent = "Elemento encontrado!";
} else {
  console.log("Elemento não foi encontrado");
}

// ============================================
// IMPORTANTE: Boas Práticas
// ============================================

// ✓ BOM: Verificar se elemento existe
const meuElemento = document.getElementById("minhaDiv");
if (meuElemento) {
  meuElemento.style.display = "block";
}

// ✗ RUIM: Não verificar pode causar erro
// document.getElementById('idQueNaoExiste').style.display = 'block'; // Erro!

// ✓ BOM: Usar const para elementos que não mudam
const header = document.getElementById("header");

// ✓ BOM: IDs devem ser únicos no documento
// Um ID deve aparecer apenas uma vez no HTML

// ✓ BOM: Usar nomes significativos para IDs
// id="usuario-perfil" é melhor que id="div1"

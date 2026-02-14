// ============================================
// TRATAMENTO DE FORMULÁRIOS EM JAVASCRIPT
// ============================================

// 1. SELECIONANDO ELEMENTOS DO FORMULÁRIO
// ============================================

// Selecionar formulário por ID
const formulario = document.getElementById("meuFormulario");

// Selecionar input por name
const inputNome = document.querySelector('input[name="nome"]');

// Selecionar múltiplos elementos
const inputs = document.querySelectorAll("input");

// 2. CAPTURANDO VALORES DO FORMULÁRIO
// ============================================

// Obter valor de um input
const valor = document.getElementById("email").value;

// Obter valor de textarea
const mensagem = document.querySelector("textarea").value;

// Obter valor selecionado em select
const opcaoSelecionada = document.querySelector("select").value;

// Verificar se checkbox está marcado
const aceitar = document.getElementById("aceitar").checked;

// 3. VALIDAÇÃO DE FORMULÁRIO
// ============================================

// Validar email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validar campo vazio
function validarCampoVazio(valor) {
  return valor.trim() !== "";
}

// Validar comprimento mínimo
function validarComprimento(valor, minimo) {
  return valor.length >= minimo;
}

// 4. LISTENERS DE EVENTOS DO FORMULÁRIO
// ============================================

// Evento ao submeter formulário
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Previne envio padrão
  console.log("Formulário sendo validado...");

  // Sua lógica de validação aqui
});

// Evento ao mudar input (em tempo real)
document.getElementById("email").addEventListener("change", function () {
  console.log("Email alterado:", this.value);
});

// Evento ao digitar (mais frequente que change)
document.getElementById("email").addEventListener("input", function () {
  console.log("Digitando:", this.value);
});

// Evento ao dar foco no input
document.getElementById("email").addEventListener("focus", function () {
  this.style.borderColor = "blue";
});

// Evento ao perder foco (blur)
document.getElementById("email").addEventListener("blur", function () {
  this.style.borderColor = "gray";
});

// 5. EXEMPLO PRÁTICO: VALIDAR E ENVIAR FORMULÁRIO
// ============================================

function validarFormulario() {
  // Obter valores
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Limpar mensagens de erro anteriores
  limparErros();

  let temErros = false;

  // Validar nome
  if (!validarCampoVazio(nome)) {
    exibirErro("nome", "Nome é obrigatório");
    temErros = true;
  }

  // Validar email
  if (!validarEmail(email)) {
    exibirErro("email", "Email inválido");
    temErros = true;
  }

  // Validar senha
  if (!validarComprimento(senha, 6)) {
    exibirErro("senha", "Senha deve ter no mínimo 6 caracteres");
    temErros = true;
  }

  return !temErros;
}

// Função auxiliar para exibir erro
function exibirErro(idCampo, mensagem) {
  const campo = document.getElementById(idCampo);
  const erro = document.createElement("span");
  erro.className = "erro";
  erro.textContent = mensagem;
  campo.parentElement.appendChild(erro);
}

// Função auxiliar para limpar erros
function limparErros() {
  const erros = document.querySelectorAll(".erro");
  erros.forEach((erro) => erro.remove());
}

// 6. RESETAR FORMULÁRIO
// ============================================

// Resetar todos os valores para padrão
function resetarFormulario() {
  formulario.reset();
  console.log("Formulário resetado");
}

// Botão de reset
document
  .querySelector('button[type="reset"]')
  .addEventListener("click", resetarFormulario);

// 7. OBTER DADOS DO FORMULÁRIO DE UMA VEZ
// ============================================

function obterDadosFormulario() {
  const formData = new FormData(formulario);
  const dados = Object.fromEntries(formData);
  return dados;
}

// Ou usando Array.from
function obterDadosFormulario2() {
  const inputs = document.querySelectorAll("input, textarea, select");
  const dados = {};

  inputs.forEach((input) => {
    dados[input.name] = input.value;
  });

  return dados;
}

// 8. SUBMISSÃO DO FORMULÁRIO COM VALIDAÇÃO
// ============================================

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // Validar antes de enviar
  if (validarFormulario()) {
    // Obter dados
    const dados = obterDadosFormulario();
    console.log("Dados válidos:", dados);

    // Aqui você enviaria para o servidor
    // fetch('/api/salvar', { method: 'POST', body: JSON.stringify(dados) })
  } else {
    console.log("Formulário contém erros");
  }
});

// 9. DESABILITAR/HABILITAR CAMPOS
// ============================================

function desabilitarCampo(idCampo) {
  document.getElementById(idCampo).disabled = true;
}

function habilitarCampo(idCampo) {
  document.getElementById(idCampo).disabled = false;
}

// 10. MASCARAS EM INPUTS
// ============================================

// Máscara para telefone (XX) XXXXX-XXXX
function aplicarMascaraTelefone(evento) {
  let valor = evento.target.value.replace(/\D/g, "");
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
  evento.target.value = valor;
}

// Aplicar máscara
document
  .getElementById("telefone")
  ?.addEventListener("input", aplicarMascaraTelefone);

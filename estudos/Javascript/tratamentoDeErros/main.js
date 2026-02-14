// ============================================
// TRATAMENTO DE ERROS EM JAVASCRIPT
// ============================================

// 1. TIPOS DE ERROS COMUNS
// ============================================

// SyntaxError - Erro de sintaxe (detectado durante análise)
// const x = ;  // SyntaxError: Unexpected token

// ReferenceError - Variável não declarada
// console.log(varivelNaoDeclarada);  // ReferenceError

// TypeError - Tipo incorreto
// const obj = null;
// obj.metodo();  // TypeError: Cannot read property 'metodo' of null

// RangeError - Valor fora do intervalo permitido
// const arr = new Array(-1);  // RangeError

// 2. BLOCO TRY-CATCH
// ============================================

try {
  // Código que pode gerar erro
  const resultado = 10 / 2;
  console.log("Resultado:", resultado);
} catch (erro) {
  // Captura e trata o erro
  console.error("Erro capturado:", erro.message);
}

// 3. OBJETO DE ERRO
// ============================================

try {
  throw new Error("Erro customizado!");
} catch (erro) {
  console.log("Nome:", erro.name); // Error
  console.log("Mensagem:", erro.message); // Erro customizado!
  console.log("Stack:", erro.stack); // Rastreamento da pilha
}

// 4. TRY-CATCH-FINALLY
// ============================================

try {
  const dados = JSON.parse('{"inválido}');
} catch (erro) {
  console.error("JSON inválido:", erro.message);
} finally {
  // Executado SEMPRE, independente de erro ou não
  console.log("Limpeza de recursos");
}

// 5. MÚLTIPLOS CATCH (ES2019+)
// ============================================

try {
  const x = undefined;
  x.metodo();
} catch (erro) {
  if (erro instanceof TypeError) {
    console.error("Erro de tipo:", erro.message);
  } else if (erro instanceof ReferenceError) {
    console.error("Variável não encontrada");
  } else {
    console.error("Erro desconhecido");
  }
}

// 6. ERROS CUSTOMIZADOS
// ============================================

class ErroCustomizado extends Error {
  constructor(mensagem, codigo) {
    super(mensagem);
    this.name = "ErroCustomizado";
    this.codigo = codigo;
  }
}

try {
  throw new ErroCustomizado("Operação não permitida", 403);
} catch (erro) {
  console.error(`${erro.name} (${erro.codigo}): ${erro.message}`);
}

// 7. VALIDAÇÃO ANTES DE EXECUTAR
// ============================================

function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Ambos os parâmetros devem ser números");
  }
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
}

try {
  console.log(dividir(10, 2));
  console.log(dividir(10, 0)); // Gerará erro
} catch (erro) {
  console.error("Erro na divisão:", erro.message);
}

// 8. PROMISES COM TRATAMENTO DE ERRO
// ============================================

const promise = new Promise((resolve, reject) => {
  const sucesso = Math.random() > 0.5;
  if (sucesso) {
    resolve("Operação bem-sucedida!");
  } else {
    reject(new Error("Operação falhou!"));
  }
});

promise
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.error("Erro na promise:", erro.message));

// 9. ASYNC-AWAIT COM TRY-CATCH
// ============================================

async function buscarDados() {
  try {
    // Simula uma requisição
    const resposta = await fetch("https://api.example.com/dados");

    if (!resposta.ok) {
      throw new Error(`HTTP Error: ${resposta.status}`);
    }

    const dados = await resposta.json();
    console.log("Dados obtidos:", dados);
    return dados;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro.message);
    return null;
  } finally {
    console.log("Requisição finalizada");
  }
}

// buscarDados();

// 10. BOAS PRÁTICAS
// ============================================

/*
✓ FAÇA:
    - Use try-catch para código que pode gerar erros
    - Sempre trate erros em promises e async-await
    - Lance erros específicos e descritivos
    - Use finally para limpeza de recursos
    - Faça logging de erros em produção

✗ NÃO FAÇA:
    - Use catch vazio sem tratar o erro
    - Lance strings em vez de objetos Error
    - Ignore erros silenciosamente
    - Use try-catch para controle de fluxo normal
    - Deixe promises rejeitadas sem tratamento
*/

console.log("=== Estudos sobre Tratamento de Erros Concluídos ===");

// ============================================
// ESTUDO: FUNÇÕES ANINHADAS (NESTED FUNCTIONS)
// ============================================

// 1. CONCEITO BÁSICO
// Funções aninhadas são funções definidas dentro de outras funções
function externa() {
    const mensagem = "Eu sou a função externa";
    
    // Esta é uma função aninhada
    function interna() {
        console.log(mensagem); // Acessa variável da função externa
    }
    
    interna(); // Chamando a função interna
}

externa(); // Output: "Eu sou a função externa"


// 2. ESCOPO E CLOSURE
// Funções aninhadas têm acesso às variáveis da função pai (closure)
function contador() {
    let count = 0; // Variável privada
    
    function incrementar() {
        count++;
        console.log(count);
    }
    
    function decrementar() {
        count--;
        console.log(count);
    }
    
    return { incrementar, decrementar }; // Retorna as funções
}

const meuContador = contador();
meuContador.incrementar(); // Output: 1
meuContador.incrementar(); // Output: 2
meuContador.decrementar(); // Output: 1


// 3. FACTORY FUNCTION (Padrão comum)
// Função que retorna outras funções personalizadas
function criarSaudacao(idioma) {
    function saudarEmPortugues(nome) {
        return `Olá, ${nome}!`;
    }
    
    function saudarEmIngles(nome) {
        return `Hello, ${nome}!`;
    }
    
    return idioma === 'pt' ? saudarEmPortugues : saudarEmIngles;
}

const saudacao = criarSaudacao('pt');
console.log(saudacao('Pedro')); // Output: "Olá, Pedro!"


// 4. MÚLTIPLOS NÍVEIS DE ANINHAMENTO
// Você pode aninhar funções em múltiplos níveis
function nivel1() {
    const var1 = "Nível 1";
    
    function nivel2() {
        const var2 = "Nível 2";
        
        function nivel3() {
            const var3 = "Nível 3";
            console.log(var1, var2, var3); // Acessa todas as variáveis
        }
        
        return nivel3;
    }
    
    return nivel2;
}

const funcao = nivel1();
const funcaoFinal = funcao();
funcaoFinal(); // Output: "Nível 1 Nível 2 Nível 3"


// 5. IMEDIATAMENTE INVOCADA (IIFE com aninhamento)
// Funções aninhadas dentro de uma IIFE para criar escopo privado
const modulo = (() => {
    const chavePrivada = "senha123";
    
    function validar(senha) {
        return senha === chavePrivada;
    }
    
    function acessar() {
        console.log("Acesso concedido!");
    }
    
    return {
        verificar: (senha) => validar(senha) ? acessar() : console.log("Acesso negado")
    };
})();

modulo.verificar("senha123"); // Output: "Acesso concedido!"
modulo.verificar("errada");   // Output: "Acesso negado"


// 6. VANTAGENS
console.log("=== VANTAGENS ===");
// - Encapsulamento: variáveis privadas
// - Organização: agrupar funções relacionadas
// - Closures: persistência de dados
// - Evita poluição do escopo global
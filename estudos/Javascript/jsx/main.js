// ====================================================
//. ESTUDOS SOBRE JSX EM JAVASCRIPT
// ====================================================

// JSX é uma extensão de sintaxe para JavaScript que permite
// escrever código que se parece com HTML/XML dentro do JS.
// JSX é usado principalmente com React.

// ====================================================
// 1. CONCEITOS BÁSICOS DE JSX
// ====================================================

// JSX precisa ser compilado para JavaScript válido
// JSX é convertido em chamadas de função React.createElement()

// Exemplo básico de JSX:
const elemento = <h1>Olá, Mundo!</h1>;
// Isso é convertido para:
// const elemento = React.createElement('h1', null, 'Olá, Mundo!');

// ====================================================
// 2. EXPRESSÕES JAVASCRIPT EM JSX
// ====================================================

// Você pode incluir expressões JS usando chaves {}
const nome = "João";
const saudacao = <h1>Bem-vindo, {nome}!</h1>;

const numero = 42;
const resultado = <p>O resultado é: {numero * 2}</p>;

// ====================================================
// 3. ATRIBUTOS EM JSX
// ====================================================

// Atributos usam camelCase (não kebab-case como em HTML)
const link = <a href="https://example.com">Clique aqui</a>;
const input = <input type="text" className="form-input" />;
const imagem = <img src="photo.jpg" alt="Descrição" />;

// Atributos dinâmicos com expressões
const id = "user-123";
const elemento2 = <div id={id} data-value={5}></div>;

// ====================================================
// 4. COMPONENTES EM JSX
// ====================================================

// Componentes funcionar como funções que retornam JSX
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

// Usar um componente em JSX
const meuComponente = <Saudacao nome="Maria" />;

// ====================================================
// 5. CONDITIONAL RENDERING (Renderização Condicional)
// ====================================================

// Usar ternário
function exemplo1(logado) {
  return logado ? <p>Bem-vindo!</p> : <p>Faça login</p>;
}

// Usar lógica AND (&&)
function exemplo2(notificacoes) {
  return (
    <div>
      {notificacoes.length > 0 && (
        <p>Você tem {notificacoes.length} mensagens</p>
      )}
    </div>
  );
}

// ====================================================
// 6. LISTAS E MAPEAMENTO
// ====================================================

// Renderizar listas com .map()
function ListaDeTarefas({ tarefas }) {
  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
  );
}

// ====================================================
// 7. FRAGMENTOS
// ====================================================

// Fragmentos permitem retornar múltiplos elementos sem wrapper
function Componente1() {
  return (
    <>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </>
  );
}

// Forma verbose:
function Componente2() {
  return (
    <React.Fragment>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </React.Fragment>
  );
}

// ====================================================
// 8. PROPS E DESESTRUTURAÇÃO
// ====================================================

// Passar props para componentes
function Cartao({ titulo, descricao, autor }) {
  return (
    <div className="cartao">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <small>Por: {autor}</small>
    </div>
  );
}

// Usar props com spread operator
function Botao({ texto, ...outrasProps }) {
  return <button {...outrasProps}>{texto}</button>;
}

// ====================================================
// 9. EVENTOS EM JSX
// ====================================================

function Contador() {
  const [count, setCount] = React.useState(0);

  // Manipuladores de eventos usam camelCase
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}

// ====================================================
// 10. ESTILOS EM JSX
// ====================================================

// Estilos inline como objeto JavaScript
const estilos = {
  container: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "8px",
  },
  titulo: {
    color: "#333",
    fontSize: "24px",
  },
};

function ComponenteComEstilo() {
  return (
    <div style={estilos.container}>
      <h1 style={estilos.titulo}>Olá com Estilo</h1>
    </div>
  );
}

// ====================================================
// 11. BOAS PRÁTICAS
// ====================================================

// ✓ BOM - Componentes bem estruturados
function CartaoProduto({ nome, preco, disponivel }) {
  return (
    <article className="produto">
      <h3>{nome}</h3>
      <p>R$ {preco.toFixed(2)}</p>
      {disponivel ? <span>Em estoque</span> : <span>Fora de estoque</span>}
    </article>
  );
}

// ✗ EVITAR - Lógica complexa dentro de JSX
// Prefira mover lógica para fora do JSX para melhor legibilidade

// ====================================================
// 12. EXPORTAR COMPONENTES
// ====================================================

export default function App() {
  return (
    <div className="app">
      <h1>Minha Aplicação</h1>
      <Saudacao nome="Pedro" />
    </div>
  );
}

// ====================================================
// FIM DO ARQUIVO DE ESTUDOS
// ====================================================

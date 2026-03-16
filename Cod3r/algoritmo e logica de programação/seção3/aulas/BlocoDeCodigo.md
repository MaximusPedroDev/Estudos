# Bloco de codigo

Para dominar o javaScript, você precisa entender que o código não é apenas uma sequencia de linhas, mas uma hierarquia de "caixas" ou blocos . Um bloco de código é o que define onde uma variável nasce, onde ela vive e onde ela morre.

## 1° O que é um bloco de código?

Em JavaScript, um bloco de código é delimitado por chaves {....}. Ele agrupa declarações para que o motor do js as trate como uma unidade única.

```javascript
if (true) {
    const versao = "1.0.0";
    console.log(versao); // Funciona
}

console.log(versao); // Erro! "versao" não existe aqui fora.
```

### O problema do var

 Diferente das anteriores, a palavra-chave var ignora blocos (exceto blocos de função). Ela "vaza" para fora do bloco, o que geralmente causa bugs em loops for.
Dica: Sempre predira const ou let.

## 3. Estruturas de Repetição com Blocos

Como você ,mencionou o uso de .length e arrays, veja como o bloco se comporta no for:

```javascript
const usuarios = [{nome: "Basim"}, {nome: "Hytham"}];

// O bloco aqui executa repetidamente enquanto i < usuarios.length
for (let i = 0; i < usuarios.length; i++) {
    // Escopo do bloco do loop
    let msg = `Processando: ${usuarios[i].nome}`;
    console.log(msg);
}
// i e msg não existem mais aqui
```

## 4. Aninhamento de Blocos

Você pode colocar blocos dentro de blocos (Nested Blocks). O bloco interno tem acesso às variaveis do bloco externo, mas o inverso não é verdadeiro.

```javascript
{ // Bloco Pai
    let projeto = "Omnis";

    { // Bloco Filho
        let modulo = "UI/UX";
        console.log(projeto); // Acessa o pai (OK)
    }

    // console.log(modulo); // Erro (Filho é privado)
}
```

## Boas Práticas para seus Arquivos

1. Indentação:Sempre use 2 ou 4 espaços dentro de cada {}. Isso torna a hierarquia visivel instantaneamente.
2. Mantenha Curto: Se um bloco de código (dentro de um if ou for) tiver mais de 20 linhas, considere extrair essa lógica para uma função separada.
3. Use const por padrão: só mude para let for realmente for reatribuir o valor da variável dentro do bloco.

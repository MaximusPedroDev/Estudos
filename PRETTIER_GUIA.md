# 📋 Guia Completo de Configurações do Prettier

## O que é Prettier?

Prettier é um formatador de código opinionado que garante que todo o seu código tenha um estilo consistente. Ele remove toda a estilização original e reimprime o código com suas próprias regras.

**Documentação oficial:** https://prettier.io/docs/en/options.html

---

## 📌 Índice

1. [Pontuação e Sintaxe](#pontuação-e-sintaxe)
2. [Espaçamento e Indentação](#espaçamento-e-indentação)
3. [Quebras de Linha](#quebras-de-linha)
4. [Linguagens Específicas](#linguagens-específicas)
5. [Dicas Úteis](#dicas-úteis)

---

## Pontuação e Sintaxe

### `semi` - Ponto e Vírgula

Adiciona ponto e vírgula ao final das linhas de código.

| Propriedade           | Valor             |
| --------------------- | ----------------- |
| **Tipo**              | `boolean`         |
| **Valores possíveis** | `true` \| `false` |
| **Padrão**            | `true`            |

**Exemplos:**

```javascript
// true (recomendado)
const x = 1;
const y = 2;
function test() {
  return "resultado";
}

// false
const x = 1;
const y = 2;
function test() {
  return "resultado";
}
```

---

### `singleQuote` - Aspas Simples

Usa aspas simples em vez de duplas em strings.

| Propriedade           | Valor             |
| --------------------- | ----------------- |
| **Tipo**              | `boolean`         |
| **Valores possíveis** | `true` \| `false` |
| **Padrão**            | `false`           |

**Nota:** JSX sempre usa aspas duplas por padrão. Use `jsxSingleQuote` para alterar comportamento em JSX.

**Exemplos:**

```javascript
// true
const msg = "Olá, mundo!";
const url = "https://exemplo.com";

// false (padrão)
const msg = "Olá, mundo!";
const url = "https://exemplo.com";
```

---

### `quoteProps` - Aspas em Chaves de Objetos

Define quando adicionar aspas em chaves de objetos.

| Propriedade           | Valor                                           |
| --------------------- | ----------------------------------------------- |
| **Tipo**              | `string`                                        |
| **Valores possíveis** | `"as-needed"` \| `"consistent"` \| `"preserve"` |
| **Padrão**            | `"as-needed"`                                   |

**Valores:**

- `"as-needed"` - Adiciona aspas apenas quando necessário
- `"consistent"` - Adiciona aspas em todas as chaves ou nenhuma
- `"preserve"` - Mantém conforme estava originalmente

**Exemplos:**

```javascript
// as-needed (recomendado)
{
  foo: 1,
  "bar-baz": 2,
  "123": 3
}

// consistent
{
  "foo": 1,
  "bar-baz": 2,
  "123": 3
}
```

---

### `jsxSingleQuote` - Aspas Simples em JSX

Usa aspas simples em atributos JSX.

| Propriedade           | Valor             |
| --------------------- | ----------------- |
| **Tipo**              | `boolean`         |
| **Valores possíveis** | `true` \| `false` |
| **Padrão**            | `false`           |

**Exemplos:**

```jsx
// true
<Component className='container' title='Meu Componente' />

// false (padrão)
<Component className="container" title="Meu Componente" />
```

---

### `trailingComma` - Vírgulas Finais

Define onde adicionar vírgulas finais em arrays, objetos e parâmetros.

| Propriedade           | Valor                          |
| --------------------- | ------------------------------ |
| **Tipo**              | `string`                       |
| **Valores possíveis** | `"none"` \| `"es5"` \| `"all"` |
| **Padrão**            | `"es5"`                        |

**Valores:**

- `"none"` - Nunca adiciona vírgulas finais
- `"es5"` - Adiciona onde válido em ES5
- `"all"` - Adiciona sempre que possível

**Exemplos:**

```javascript
// es5 (recomendado)
const arr = [1, 2, 3];
const obj = { a: 1, b: 2 };
```

---

### `arrowParens` - Parênteses em Arrow Functions

Define parênteses em arrow functions com um parâmetro.

| Propriedade           | Valor                   |
| --------------------- | ----------------------- |
| **Tipo**              | `string`                |
| **Valores possíveis** | `"always"` \| `"avoid"` |
| **Padrão**            | `"always"`              |

**Exemplos:**

```javascript
// always (recomendado)
(x) => x * 2;

// avoid
(x) => x * 2;
```

---

## Espaçamento e Indentação

### `printWidth` - Largura de Linha

Define o número máximo de caracteres por linha antes de quebra automática.

| Propriedade              | Valor            |
| ------------------------ | ---------------- |
| **Tipo**                 | `integer`        |
| **Valores recomendados** | 80 \| 100 \| 120 |
| **Padrão**               | `80`             |

**Observação:** Prettier tentará quebrar linhas que excedem este limite.

---

### `tabWidth` - Tamanho da Indentação

Define o número de espaços para cada nível de indentação.

| Propriedade        | Valor      |
| ------------------ | ---------- |
| **Tipo**           | `integer`  |
| **Valores comuns** | `2` \| `4` |
| **Padrão**         | `2`        |

**Exemplos:**

```javascript
// tabWidth: 2 (recomendado para web)
if (true) {
  console.log();
}

// tabWidth: 4
if (true) {
  console.log();
}
```

---

### `useTabs` - Usar Tabulações

Usa tabulações em vez de espaços para indentação.

| Propriedade           | Valor             |
| --------------------- | ----------------- |
| **Tipo**              | `boolean`         |
| **Valores possíveis** | `true` \| `false` |
| **Padrão**            | `false`           |

**Observação:** Se `true`, `tabWidth` é ignorado.

---

### `bracketSpacing` - Espaços em Objetos

Adiciona espaços dentro de chaves em objetos.

| Propriedade           | Valor             |
| --------------------- | ----------------- |
| **Tipo**              | `boolean`         |
| **Valores possíveis** | `true` \| `false` |
| **Padrão**            | `true`            |

**Exemplos:**

```javascript
// true (recomendado)
{ foo: "bar", name: "test" }

// false
{foo: "bar", name: "test"}
```

---

### `bracketSameLine` - Fechamento de Tag na Mesma Linha

Coloca `>` na mesma linha do último atributo em JSX/HTML.

| Propriedade           | Valor             |
| --------------------- | ----------------- |
| **Tipo**              | `boolean`         |
| **Valores possíveis** | `true` \| `false` |
| **Padrão**            | `false`           |

**Exemplos:**

```jsx
// true
<Component prop="value" />

// false (recomendado)
<Component
  prop="value"
/>
```

---

### `singleAttributePerLine` - Um Atributo por Linha

Coloca cada atributo JSX em sua própria linha.

| Propriedade           | Valor             |
| --------------------- | ----------------- |
| **Tipo**              | `boolean`         |
| **Valores possíveis** | `true` \| `false` |
| **Padrão**            | `false`           |

---

## Quebras de Linha

### `endOfLine` - Tipo de Quebra de Linha

Define qual caractere usar para quebra de linha.

| Propriedade           | Valor                                    |
| --------------------- | ---------------------------------------- |
| **Tipo**              | `string`                                 |
| **Valores possíveis** | `"lf"` \| `"crlf"` \| `"cr"` \| `"auto"` |
| **Padrão**            | `"lf"`                                   |

**Valores:**

- `"lf"` - Line Feed (`\n`) - Unix/Linux/macOS (recomendado)
- `"crlf"` - Carriage Return + Line Feed (`\r\n`) - Windows
- `"cr"` - Carriage Return (`\r`) - Mac clássico
- `"auto"` - Detecta automaticamente

**Recomendação:** Use `"lf"` para compatibilidade com Git.

---

### `proseWrap` - Quebra de Linhas em Prosa

Define como quebrar linhas em arquivo de prosa (markdown).

| Propriedade           | Valor                                   |
| --------------------- | --------------------------------------- |
| **Tipo**              | `string`                                |
| **Valores possíveis** | `"always"` \| `"never"` \| `"preserve"` |
| **Padrão**            | `"preserve"`                            |

**Valores:**

- `"always"` - Quebra linhas sempre que excedem `printWidth`
- `"never"` - Nunca quebra linhas automaticamente
- `"preserve"` - Mantém as quebras originais

---

### `htmlWhitespaceSensitivity` - Sensibilidade de Espaço em Branco HTML

Define como lidar com espaços em branco em HTML.

| Propriedade           | Valor                               |
| --------------------- | ----------------------------------- |
| **Tipo**              | `string`                            |
| **Valores possíveis** | `"css"` \| `"strict"` \| `"ignore"` |
| **Padrão**            | `"css"`                             |

**Valores:**

- `"css"` - Respeita regras CSS (recomendado)
- `"strict"` - Preserva todos os espaços
- `"ignore"` - Ignora espaços não necessários

---

## Linguagens Específicas

### `vueIndentScriptAndStyle` - Indentação em Vue

Indenta conteúdo de `<script>` e `<style>` em arquivos Vue.

| Propriedade           | Valor             |
| --------------------- | ----------------- |
| **Tipo**              | `boolean`         |
| **Valores possíveis** | `true` \| `false` |
| **Padrão**            | `false`           |

---

### `embeddedLanguageFormatting` - Formatação de Linguagens Embutidas

Formata código de linguagens embutidas (template strings, HTML em JS).

| Propriedade           | Valor               |
| --------------------- | ------------------- |
| **Tipo**              | `string`            |
| **Valores possíveis** | `"auto"` \| `"off"` |
| **Padrão**            | `"auto"`            |

**Valores:**

- `"auto"` - Detecta e formata automaticamente
- `"off"` - Desativa a formatação

---

### `jsxBracketSameLine` - (DESCONTINUADO)

⚠️ **DESCONTINUADO** - Use `bracketSameLine` em vez disso.

---

### `experimentalTernaries` - Ternários Experimentais

Ativa formatação experimental para operadores ternários.

| Propriedade           | Valor             |
| --------------------- | ----------------- |
| **Tipo**              | `boolean`         |
| **Valores possíveis** | `true` \| `false` |
| **Padrão**            | `false`           |

**Observação:** Feature experimental e pode mudar no futuro.

---

## Dicas Úteis

### 1. Ignorar Formatação em Arquivo

```javascript
// prettier-ignore-start
const codigo = "Não será formatado";
const outro = "Também não";
// prettier-ignore-end
```

### 2. Ignorar Linha Específica

```javascript
// prettier-ignore
const codigo = "Esta linha não será formatada";
```

### 3. Arquivo `.prettierignore`

Crie arquivo na raiz com extensões/pastas a ignorar:

```
node_modules/
build/
dist/
*.min.js
.next/
coverage/
```

### 4. Scripts no `package.json`

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "format:specific": "prettier --write src/"
  }
}
```

### 5. Integração com VSCode

**`.vscode/settings.json`:**

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### 6. Pre-commit Hook com Husky

```bash
npm install husky lint-staged --save-dev
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

### 7. Configuração Atual do Projeto

Localização: `.vscode/.prettierrc`

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "vueIndentScriptAndStyle": false,
  "endOfLine": "lf",
  "quoteProps": "as-needed",
  "embeddedLanguageFormatting": "auto",
  "singleAttributePerLine": false,
  "jsxSingleQuote": false,
  "jsxBracketSameLine": false,
  "experimentalTernaries": false
}
```

---

## Comparação de Configurações Populares

### ✨ Configuração para Web (Frontend)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "bracketSpacing": true,
  "bracketSameLine": false
}
```

### 🏢 Configuração para Backend (Node.js)

```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 4,
  "useTabs": false,
  "arrowParens": "avoid"
}
```

### 🎯 Configuração Minimalista

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all"
}
```

---

## Resumo Rápido

| Opção                       | Tipo    | Padrão       | Recomendado  |
| --------------------------- | ------- | ------------ | ------------ |
| `semi`                      | boolean | `true`       | `true`       |
| `singleQuote`               | boolean | `false`      | `false`      |
| `trailingComma`             | string  | `"es5"`      | `"es5"`      |
| `printWidth`                | integer | `80`         | `80-100`     |
| `tabWidth`                  | integer | `2`          | `2`          |
| `useTabs`                   | boolean | `false`      | `false`      |
| `arrowParens`               | string  | `"always"`   | `"always"`   |
| `bracketSpacing`            | boolean | `true`       | `true`       |
| `bracketSameLine`           | boolean | `false`      | `false`      |
| `endOfLine`                 | string  | `"lf"`       | `"lf"`       |
| `proseWrap`                 | string  | `"preserve"` | `"preserve"` |
| `htmlWhitespaceSensitivity` | string  | `"css"`      | `"css"`      |

---

## Links Úteis

- 🌐 [Site Oficial do Prettier](https://prettier.io/)
- 📖 [Documentação Completa](https://prettier.io/docs/en/)
- 🎮 [Playground Online](https://prettier.io/playground/)
- ⚙️ [Todas as Opções](https://prettier.io/docs/en/options.html)
- 🔗 [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- 🚀 [GitHub Repository](https://github.com/prettier/prettier)

---

## 10 Templates de Configuração Prontos para Usar

### 1️⃣ Template: React/Vue (Recomendado)

Para projetos frontend com React, Vue ou frameworks similares.

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "endOfLine": "lf",
  "quoteProps": "as-needed",
  "embeddedLanguageFormatting": "auto"
}
```

---

### 2️⃣ Template: Node.js/Backend

Para projetos backend e servidores Node.js.

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 120,
  "tabWidth": 4,
  "useTabs": false,
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css"
}
```

---

### 3️⃣ Template: Next.js

Otimizado para projetos Next.js.

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "endOfLine": "lf",
  "embeddedLanguageFormatting": "auto",
  "singleAttributePerLine": false,
  "jsxSingleQuote": false
}
```

---

### 4️⃣ Template: TypeScript/Strict

Configuração rigorosa para projetos TypeScript.

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "quoteProps": "consistent",
  "endOfLine": "lf"
}
```

---

### 5️⃣ Template: Minimalista (Airbnb Style)

Configuração minimalista similar ao padrão Airbnb.

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "always"
}
```

---

### 6️⃣ Template: Google Style

Inspirado nos padrões do Google.

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "none",
  "printWidth": 80,
  "tabWidth": 4,
  "useTabs": false,
  "arrowParens": "avoid",
  "bracketSpacing": false,
  "endOfLine": "lf"
}
```

---

### 7️⃣ Template: Projeto Web Corporativo

Para projetos corporativos e enterprise.

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "quoteProps": "as-needed",
  "embeddedLanguageFormatting": "auto",
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css"
}
```

---

### 8️⃣ Template: Desenvolvimento Rápido/Prototipagem

Para prototipagem e desenvolvimento ágil.

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 200,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "avoid",
  "bracketSpacing": false,
  "endOfLine": "auto"
}
```

---

### 9️⃣ Template: Markdown/Documentação

Otimizado para projetos com muito markdown e documentação.

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "proseWrap": "always",
  "htmlWhitespaceSensitivity": "strict",
  "embeddedLanguageFormatting": "auto",
  "endOfLine": "lf"
}
```

---

### 🔟 Template: Compatibilidade Máxima (Windows/Mac/Linux)

Para equipes multiplataforma.

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "endOfLine": "lf",
  "quoteProps": "as-needed",
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css"
}
```

---

## Como Usar os Templates

1. **Escolha o template** que melhor se encaixa no seu projeto
2. **Copie o JSON** da configuração
3. **Crie um arquivo** `.prettierrc` na raiz do seu projeto
4. **Cole o conteúdo** no arquivo
5. **Salve e pronto!** O Prettier usará essa configuração

### Exemplo Prático

```bash
# Criar arquivo .prettierrc
echo "" > .prettierrc

# No VS Code, abra o arquivo e cole a configuração desejada
```

---

**Última atualização:** 14 de fevereiro de 2026

**Observação:** Este é um guia de referência pessoal. Para informações oficiais, consulte a [documentação do Prettier](https://prettier.io/docs/en/).

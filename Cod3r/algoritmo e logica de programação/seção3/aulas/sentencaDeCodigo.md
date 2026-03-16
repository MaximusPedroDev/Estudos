# Sentença de código (ou steatement)

Trata-se do menor elemento de um programa, a instrução que instrui o navegador ou o ambiente de execução a executar uma ação específica. Diferente de uma expressão, que apenas produz um valor, a sentença executa um comando.
Aqui estão os tipos mais comuns de sentenças de código.

## 1° Declaração de variáveis

  Instruções para reservar espaço na memória e armazenar dados
  Let e Const: usados para declarar variáveis com escopo de bloco.

   ```javascript
 let nome = "João";
    const pi = 3.14;

```

## 2° sentenças condicionais

Permite que o programa tome decisões baseadas em condições lógicas.

- If...else: Executa um bloco de código se a condição for verdadeira

```javascript
  if (idade >= 18) {
   console.log("Acesso Permitido");
    } else {
   console.log("Acesso Negado");
    }
```

- Switch: Escolhe um entre vários blocos de código para execução.

## 3ª Sentença de iteração (Loops)

Repetem um bloco de código enquanto uma condição for atendida ,

- For: ideal para repetições com número definido de vezes

- while: Executa enquanto a condição permanecer verdadeira

## 4° sentenças de controle de fluxo

Alteram a ordem normal de execução de um loop ou switch

- break: interrompe a execução de um loop ou switch
- Continue: pula a interação atual do loop e vai para a próxima
- return: finaliza a execução de uma função e retorna um valor.

### 5° Tratamentos de erros

Garante que o programa não pare de funcionar ao encontrar falhas

- (try ...catch): Tenta executar um código e captura erros se eles ocorrerem

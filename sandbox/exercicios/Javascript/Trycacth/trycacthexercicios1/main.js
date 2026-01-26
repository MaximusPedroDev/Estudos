// Selecionamos os elementos que ficam parados na tela
const btn = document.getElementById('btnSalvar');
const display = document.getElementById('resultado');

btn.addEventListener('click', function() {
    // 1. Capturamos os números EXATAMENTE no momento do clique
    const n1 = Number(document.getElementById('first').value);
    const n2 = Number(document.getElementById('second').value);

    // 2. Verificamos se é uma divisão por zero
    if (n2 === 0) {
        display.innerHTML = `<p style="color: red;">Erro: Divisão por zero!</p>`;
        return; // Para o código aqui
    }

    // 3. Fazemos o cálculo
    const resultadoCalculado = n1 / n2;

    // 4. Escrevemos no HTML usando Template Strings
    display.innerHTML = `
        <section>
            <p>O valor da divisão de ${n1} e ${n2} é:</p>
            <strong>${resultadoCalculado}</strong>
        </section>
    `;
});
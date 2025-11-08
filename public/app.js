// Conecta a interface com as funções da calculadora

function realizarCalculo() {
    // Le os valores da interface
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    const operacao = document.getElementById('operacao').value;
    
    // Encontra os elementos para mostrar o resultado
    const displayElement = document.getElementById('display');
    const resultadoElement = document.getElementById('resultado');
    
    // Tenta calcular
    try {
        // Chama a função calcular do calculator.js
        const resultado = calcular(numero1, numero2, operacao);
        
        // Sucesso
        displayElement.textContent = resultado;
        resultadoElement.textContent = `${numero1} ${operacao} ${numero2} = ${resultado}`;
        resultadoElement.className = 'resultado sucesso'; // Aplica o CSS verde
        
    } catch (error) {
        // Erro
        displayElement.textContent = 'Erro';
        resultadoElement.textContent = error.message; // Mostra a mensagem de erro
        resultadoElement.className = 'resultado erro'; // Aplica o CSS vermelho
    }
}

// Permite calcular com a tecla Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                realizarCalculo();
            }
        });
    });
});
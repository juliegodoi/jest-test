// Funções matemáticas da calculadora
// Ssado pelo navegador para fazer os cálculos

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error('Não é possível dividir por zero');
    }
    return a / b;
}

function calcular(numero1, numero2, operacao) {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    
    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('Valores inválidos');
    }
    
    switch(operacao) {
        case '+':
            return somar(n1, n2);
        case '-':
            return subtrair(n1, n2);
        case '*':
            return multiplicar(n1, n2);
        case '/':
            return dividir(n1, n2);
        default:
            throw new Error('Operação inválida');
    }
}
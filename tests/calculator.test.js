// Importa as funções
const { somar, subtrair, multiplicar, dividir, calcular } = require('../src/calculator');

describe('Funções da Calculadora', () => {
    
    // Grupo de testes para a função somar
    describe('Função somar', () => {
        test('deve somar dois números positivos', () => {
            expect(somar(5, 3)).toBe(8);
        });

        test('deve somar números decimais', () => {
            // Usa toBeCloseTo para evitar erros de arredondamento com decimais
            expect(somar(2.5, 3.7)).toBeCloseTo(6.2);
        });
    });

    // Grupo de testes para a função subtrair
    describe('Função subtrair', () => {
        test('deve subtrair dois números positivos', () => {
            expect(subtrair(10, 3)).toBe(7);
        });
    });

    // Grupo de testes para a função multiplicar
    describe('Função multiplicar', () => {
        test('deve multiplicar dois números positivos', () => {
            expect(multiplicar(5, 3)).toBe(15);
        });

        test('deve multiplicar por zero', () => {
            expect(multiplicar(5, 0)).toBe(0);
        });
    });

    // Grupo de testes para a função dividir
    describe('Função dividir', () => {
        test('deve dividir dois números positivos', () => {
            expect(dividir(10, 2)).toBe(5);
        });

        test('deve lançar erro ao dividir por zero', () => {
            // Verifica se a função lança o erro esperado
            expect(() => dividir(10, 0)).toThrow('Não é possível dividir por zero');
        });
    });

    // Grupo de testes para a função calcular
    describe('Função calcular', () => {
        test('deve calcular adição corretamente', () => {
            // Testa com strings, que é como os dados vem do html
            expect(calcular('5', '3', '+')).toBe(8);
        });
        
        test('deve calcular subtração corretamente', () => {
            expect(calcular('10', '3', '-')).toBe(7);
        });

        test('deve calcular multiplicação corretamente', () => {
            expect(calcular('5', '3', '*')).toBe(15);
        });
    
        test('deve calcular divisão corretamente', () => {
            expect(calcular('10', '2', '/')).toBe(5);
        });

        test('deve lançar erro para valores inválidos', () => {
            expect(() => calcular('abc', '3', '+')).toThrow('Valores inválidos');
        });

        test('deve lançar erro para operação inválida', () => {
            expect(() => calcular('5', '3', '%')).toThrow('Operação inválida');
        });
    });
});
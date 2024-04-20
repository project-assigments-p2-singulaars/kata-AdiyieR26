// tests/calculadoraPropina.test.js

import { calcularPropina } from '../src/css/calculadoraPropina.js';

describe('Calculadora de propina', () => {
    test('Calcula correctamente la propina', () => {
        expect(calcularPropina(50, 10)).toBe(5);
        expect(calcularPropina(100, 15)).toBe(15);
        expect(calcularPropina(75, 20)).toBe(15);
    });

    test('Maneja correctamente los valores negativos', () => {
        expect(() => calcularPropina(-50, 10)).toThrow('Los valores no pueden ser negativos');
        expect(() => calcularPropina(50, -10)).toThrow('Los valores no pueden ser negativos');
    });

    test('Maneja correctamente las entradas no numéricas', () => {
        expect(() => calcularPropina('abc', 10)).toThrow('Ambos argumentos deben ser números');
        expect(() => calcularPropina(50, 'def')).toThrow('Ambos argumentos deben ser números');
        
    });

    test('Realizar redondeo de propina correctamente', () => {
        expect(calcularPropina(55, 10)).toBeCloseTo(5.5);
        expect(calcularPropina(100, 15)).toBeCloseTo(15);
        expect(calcularPropina(75, 20)).toBeCloseTo(15);

    })

   
});
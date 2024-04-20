export function calcularPropina(totalCuenta, porcentajePropina) {
    if (typeof totalCuenta !== 'number' || typeof porcentajePropina !== 'number') {
        throw new Error('Ambos argumentos deben ser números');
    }

    if (totalCuenta < 0 || porcentajePropina < 0) {
        throw new Error('Los valores no pueden ser negativos');
    }

    return totalCuenta * (porcentajePropina / 100);
}
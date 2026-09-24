function calcularMaodeObra(horas) {
    const hora = 80.00;
    return horas * valorHora;
}

function calcularTotal(valorPecas, horas) {
    return valorPecas + calcularMaoDeObra(horas);
}

function verificarGarantia(meses) {
    if (meses <= 6) {
        return 'EM GARANTIA';
    } else {
        return 'FORA DA GARANTIA'
    }
}

module.exports = {
    calcularMaodeObra,
    calcularTotal,
    verificarGarantia
};
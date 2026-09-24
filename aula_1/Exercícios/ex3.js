// // --------------------------------------------------------------------------------------------------------------------------------------
// // Meu Modelo:

// const entrada = require('readline-sync');

// const pecas_Ciclo = entrada.questionInt("Digite quantas pecas são produzidas por ciclo: \n");

// let acumulado = 0

// for (let ciclo = 1; ciclo <= 10; ciclo++) {
//     acumulado += pecas_Ciclo
//     console.log(`Ciclo: ${ciclo}: ${acumulado} pecas acumuladas.`)
// };

// --------------------------------------------------------------------------------------------------------------------------------------
// Modelo do Professor:

const entrada = require('readline-sync');

const pecasCiclo = entrada.questionInt("Digite quantas pecas sao produzidas por ciclo: \n");

for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const acumulado = ciclo * pecasCiclo;
    console.log(`Ciclo: ${ciclo}: ${acumulado} pecas acumuladas.`)
};
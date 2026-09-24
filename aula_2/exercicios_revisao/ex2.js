// Uma linha de produção registrou a quantidade de peças com defeito em 6 inspeções. O programa deve ler os valores e calcular o total e a média.

const entrada = require('readline-sync');

let total = 0;

for (let i = 1; i <= 6; i++) {
    const valor = entrada.questionInt(`Digite o valor da ${i}a inspecao: `);
    total += valor;
}

const media = total / 6;

console.log(`Total de defeitos: ${total}`);
console.log(`Media de defeitos: ${media.toFixed(2)}`);

const entrada = require('readline-sync');
const manutencao = require('./funcoesManutencao');

const maquina = entrada.question("Digite o nome da máquuina: \n")
const valorPecas = entrada.questionFloat("Digite o valor das pecas: \n")
const horas = entrada.questionFloat("Digite quantas horas faz desde a última manutenção: \n")
const meses = entrada.questionInt("Digite quantos meses se passaram desde a última manutenção: \n")

const maoDeObra = manutencao.calcularMaoDeObra(horas);
const total = manutencao.calcularTotal(valorPecas, horas);
const garantia = manutencao.verificarGarantia(meses);

console.log('--- RELATORIO DE MANUTENCAO ---');
console.log(`Maquina: ${maquina}`);
console.log(`Pecas: R$ ${valorPecas.toFixed(2)}`);
console.log(`Mao de obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Garantia: ${garantia}`);
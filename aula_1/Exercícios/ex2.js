const entrada = require('readline-sync');

const pesoPeca = entrada.questionFloat("Digite o peso da peca: \n")

if (pesoPeca >= 95 && pesoPeca <= 105) {
    console.log("Peca APROVADA!");
} else {
    console.log("Peca REPROVADA!");
};
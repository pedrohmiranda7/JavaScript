// Cadastre 5 nomes de operadores e, depois de terminar o cadastro, faça uma segunda passagem pelo array para exibir a lista numerada.

const entrada = require('readline-sync');

const operadores = [];

for (let i = 1; i <= 5; i++) {
    const nome = entrada.question(`Digite o nome do ${i}o operador: `);
    operadores.push(nome);
}
console.log('--- LISTA DE OPERADORES ---');

for (let i = 0; i < operadores.length; i++) {
    console.log(`${i + 1} - ${operadores[i]}`);
}
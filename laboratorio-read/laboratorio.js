// Passo 2:

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// console.log(typeof texto);
// console.log(texto);

// -----------------------------------------------------------------------------------------

// Passo 3:

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// console.log(Array.isArray(maquinas));
// console.log(maquinas.length);
// console.log(maquinas[0].nome);

// -----------------------------------------------------------------------------------------

// Passo 4:

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);
// maquinas.forEach((maquina, indice) => {
//     console.log(`${indice + 1} - ${maquina.nome}`);
// });

// -----------------------------------------------------------------------------------------

// Passo 5:

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// const procurada = maquinas.find(maquina => maquina.id === 99);
// console.log(procurada);

// -----------------------------------------------------------------------------------------

// Passo 6:

// const fs = require("fs");
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// const emManutencao = maquinas.filter(
//     maquina => maquina.status === "Manutenção"
// );
// console.log(emManutencao.length);
// console.log(emManutencao);

// -----------------------------------------------------------------------------------------

// Passo 7:

// Método O que faz Retorno:

// forEach() Executa uma função por item undefined
// find() Retorna o primeiro item que corresponde Elemento ou undefined
// filter() Seleciona todos os itens que correspondem Novo array, inclusive []

// Questão para reflexão: se a indústria precisa listar todas as máquinas com defeito, find() seria a melhor escolha? Explique por quê.

// Resposta:
    // Não, o método find() não seria a melhor escolha.   
    // Para listar todas, a escolha certa é o filter(), porque ele percorre o array inteiro e devolve um novo array com todos os registos correspondentes, ele filtra tudo.

// -----------------------------------------------------------------------------------------

// Passo 8:

// ENOENT: arquivo não encontrado:
    // Confira o nome e a localização do arquivo. Execute o comando no terminal dentro da pasta quecontém o JSON; confira também a extensão.

// SyntaxError no JSON.parse():
    // Abra o JSON e confira aspas duplas, vírgulas e chaves. Utilize um formato JSON válido antes de tentar converter.

// Cannot read properties of undefined:
    // Uma busca find() pode não ter retornado nada. Verifique o resultado antes de acessar propriedades.

// filter() não encontra nada:
    // Confira exatamente o texto de comparação: maiúsculas, minúsculas, acentos e espaços fazem diferença.

// Resultado inesperado ao comparar IDs:
//     O número 2 é diferente da string "2" ao utilizar ===. Verifique os tipos com typeof.

// readFileSync() trava a execução durante a leitura:
//     É uma operação síncrona. Funciona bem neste laboratório, mas não é a opção ideal para leituras frequentes em servidores com múltiplas requisições.

// -----------------------------------------------------------------------------------------

// Passo 9:

// const fs = require("fs");

// try {
//     const texto = fs.readFileSync("maquinas.json", "utf8");
//     const maquinas = JSON.parse(texto);
//     console.log(`Registros carregados: ${maquinas.length}`);
// } catch (erro) {
//     console.log("Não foi possível carregar os dados.");
//     console.log(erro.message);
// }

// -----------------------------------------------------------------------------------------

// // Passo 10:

// const fs = require("fs");

// // Leitura do ficheiro JSON
// const texto = fs.readFileSync("maquinas.json", "utf8");
// const maquinas = JSON.parse(texto);

// // --- Desafio A ---
// console.log("=== DESAFIO A ===");
// maquinas.forEach(maquina => {
//     console.log(`${maquina.id} | ${maquina.nome} | ${maquina.status}`);
// });

// // --- Desafio B ---
// console.log("\n=== DESAFIO B ===");
// const idProcurado = 3;
// const maquinaId = maquinas.find(m => m.id === idProcurado);

// if (maquinaId !== undefined) {
//     console.log(`Setor da máquina ${maquinaId.nome}: ${maquinaId.setor}`);
// } else {
//     console.log("Aviso: Máquina não encontrada.");
// }

// // --- Desafio C ---
// console.log("\n=== DESAFIO C ===");
// const setorProcurado = "Usinagem";
// const maquinasSetor = maquinas.filter(maquina => maquina.setor === setorProcurado);

// console.log(`Total de máquinas no setor ${setorProcurado}: ${maquinasSetor.length}`);
// maquinasSetor.forEach(maquina => {
//     console.log(`- ${maquina.nome}`);
// });

// // --- Desafio D ---
// console.log("\n=== DESAFIO D ===");
// function filtrarPorStatus(statusDesejado) {
//     return maquinas.filter(maquina => maquina.status === statusDesejado);
// }

// console.log(filtrarPorStatus("Operando"));
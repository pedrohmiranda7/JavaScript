// Um sensor mede a temperatura de um forno industrial. O sistema deve classificar a leitura sem deixar valores de fronteira fora das faixas.

const entrada = require("readline-sync");

const temperatura = entrada.questionFloat("Digite a temperatura do forno: \n")

if (temperatura <= 60) {
    console.log("NORMAL")
} else if (temperatura >= 61 && temperatura <= 80) {
    console.log("ATENÇÃO")
} else {
    console.log("CRÍTICA")
};
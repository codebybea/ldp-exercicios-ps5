// ATIVIDADE PS5 BEATRIZ BORGES - 23214290001

// P5

const retorno = require("prompt-sync")({sigint:true});

function classeTrab (categoria, salario) {
    const aumento = [0.1, 0.15, 0.2];
    let soma;
    switch (categoria) {
        case 'a':
            soma = salario + (salario * aumento[0]);
            return soma;
        case 'b':
            soma = salario + (salario * aumento[1]);
            return soma;
        case 'c':
            soma = salario + (salario * aumento[2]);
            return soma;
        default:
            return 'escolha uma categoria valida'
    }
}

let categoria = retorno('digite a categoria do aumento: ').toLowerCase();
let salario = parseFloat(retorno('digite o salario inicial: '));


console.log(classeTrab(categoria, salario));
// ATIVIDADE PS5 BEATRIZ BORGES - 23214290001

// P3

function somaProgAr(priTer, razao, numTer) {
  if (numTer <= 0) {
      throw new Error ('O número de termos deve ser positivo')
  }
  const soma = (priTer +(numTer - 1)* razao) * numTer /2;
  
  return soma;
}

let priTer = 7;
let razao = 9;
let numTer = 1542;

const soma = somaProgAr(priTer, razao, numTer);

console.log(soma);
  
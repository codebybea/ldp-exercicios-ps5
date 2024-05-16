// ATIVIDADE PS5 BEATRIZ BORGES - 23214290001

// P4

function somaProgGeo (priTer, razao, numTer) {
  if (numTer <= 0) {
      throw new Error ('O número de termos deve ser positivo');
  }

  if (razao === 1) {
      return priTer*numTer;
  }

  const soma = priTer *(1 - Math.pow(razao, numTer)) / (1 - razao);

  return soma;
}

let priTer = 4;
let razao = 13;
let numTer = 51;

const soma = somaProgGeo(priTer, razao, numTer);
console.log(soma);
  
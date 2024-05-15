// ATIVIDADE PS5 BEATRIZ BORGES - 23214290001

// P1

function mediaVetor(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {

        soma += numeros[i]
        
    }

    let media = soma / numeros.length
    return media
}
  
let numeros = [5,6,7]
console.log(mediaVetor(numeros));

let numeros1 = [4,8,10]

function mediaVetor(numeros) {
    let soma = 0;
    for(const n of numeros) {
        soma += n;
    }


}
// ATIVIDADE PS5 BEATRIZ BORGES - 23214290001

// P2

function multVetor(escalar,vetor) {
    let a = [];
    
    for (let i = 0; i < vetor.length; i++) {
        let aux = escalar * vetor[i];

        a.push(aux);
    }

    return a;
}

let v = [1,2,3,4]
let e = 2;

console.log(multVetor(e, v));
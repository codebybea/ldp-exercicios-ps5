// ATIVIDADE PS5 BEATRIZ BORGES - 23214290001

// P4

function sumGP(a, r, n) {

    if (r === 1) {
      return a * n;
    } else {
      const totalTerms = n;
      const firstTerm = a;
      const lastTerm = a * Math.pow(r, n - 1);
      const sum = (firstTerm * (1 - Math.pow(r, n))) / (1 - r);
      return sum;
    }
  }
  const somaPG = sumGP(2, 3, 4);
  console.log("Soma da PG:", somaPG); 
  
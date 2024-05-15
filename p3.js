// ATIVIDADE PS5 BEATRIZ BORGES - 23214290001

// P3

function sumAP(a, d, n) {
    
    const totalTerms = n;
    const firstTerm = a;
    const lastTerm = a + (n - 1) * d;
    const sum = (totalTerms * (firstTerm + lastTerm)) / 2;
  
    return sum;
  }
  
// Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).


let [a, b, c, d] = [parseInt(lines[0]), parseInt(lines[1]), parseInt(lines[2]), parseInt(lines[3])];
// para testar atribua o valor. Ex: [5, 6, 7, 8]

let diferenca = ((a*b) - (c*d));

console.log(`DIFERENCA = ${diferenca}`)
// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

let [peca1, qt1, valor1] = lines.shift().split(' ').map((x) => parseFloat(x));
// para testar atribua o valor. Ex: [12, 1, 5.30]

let [peca2, qt2, valor2] =  lines.shift().split(' ').map((x) => parseFloat(x));
// para testar atribua o valor. Ex: [16, 2, 5.10]

let totalValor = (valor1 * qt1) + (valor2 * qt2);

console.log(`VALOR A PAGAR: R$ ${totalValor.toFixed(2)}`);
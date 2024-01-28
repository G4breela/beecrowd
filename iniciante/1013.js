// Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

// maiorAB = (a+b+(Math.abs(a-b)))/2;

let [a, b, c] = lines.shift().split(' ').map((x) => parseFloat(x));
// para testar atribua o valor. Ex: [7, 14, 106]

let maiorAB = (a+b+(Math.abs(a-b)))/2;

let maior = (maiorAB+c+(Math.abs(maiorAB-c)))/2;

console.log(`${maior} eh o maior`);
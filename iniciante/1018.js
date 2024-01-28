// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

let valor = parseInt(lines.shift());
// para testar atribua um valor. Ex: 11257

console.log(`${Math.floor(valor/100)} nota(s) de R$ 100,00`);
valor %= 100;
console.log(`${Math.floor(valor/50)} nota(s) de R$ 50,00`);
valor %= 50;
console.log(`${Math.floor(valor/20)} nota(s) de R$ 20,00`);
valor %= 20;
console.log(`${Math.floor(valor/10)} nota(s) de R$ 10,00`);
valor %= 10;
console.log(`${Math.floor(valor/5)} nota(s) de R$ 5,00`);
valor %= 5;
console.log(`${Math.floor(valor/2)} nota(s) de R$ 2,00`);
valor %= 2;
console.log(`${Math.floor(valor)} nota(s) de R$ 1,00`);
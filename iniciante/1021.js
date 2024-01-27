// Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

let n = lines.shift();
// para testar adicione o valor 91.16;

console.log(`NOTAS:`);
console.log(`${parseInt(n/100)} nota(s) de R$ 100.00`);
n %= 100;
console.log(`${parseInt(n/50)} nota(s) de R$ 50.00`);
n %= 50;
console.log(`${parseInt(n/20)} nota(s) de R$ 20.00`);
n %= 20;
console.log(`${parseInt(n/10)} nota(s) de R$ 10.00`);
n %= 10;
console.log(`${parseInt(n/5)} nota(s) de R$ 5.00`);
n %= 5;
console.log(`${parseInt(n/2)} nota(s) de R$ 2.00`);
n %= 2;

console.log(`MOEDAS:`);
console.log(`${Math.floor(n/1)} moeda(s) de R$ 1.00`);
n %= 1;
console.log(`${Math.floor(n/0.50)} moeda(s) de R$ 0.50`);
n %= 0.50;
console.log(`${Math.floor(n/0.25)} moeda(s) de R$ 0.25`);
n %= 0.25;
console.log(`${Math.floor(n/0.10)} moeda(s) de R$ 0.10`);
n %= 0.10;
console.log(`${Math.floor(n/0.05)} moeda(s) de R$ 0.05`);
n %= 0.05;
console.log(`${Math.round(n/0.01)} moeda(s) de R$ 0.01`);
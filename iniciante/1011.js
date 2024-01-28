// Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.

let raio = parseFloat(lines.shift());
// para testar atribula um valor. Ex: [3,];

let pi = 3.14159;

let volume = (4/3) * pi * (Math.pow(raio,3));

console.log(`VOLUME = ${volume.toFixed(3)}`);
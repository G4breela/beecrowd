// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

let [num, horasTrab ,valHora] = [parseInt(lines.shift()), parseInt(lines.shift()), parseFloat(lines.shift())];
// para testar atribua os valores. ex: [25, 100, 5.50];

let sal = horasTrab * valHora

console.log(`NUMBER = ${num}\nSALARY = U$ ${sal.toFixed(2)}`);
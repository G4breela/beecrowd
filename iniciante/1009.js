// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

let [nome, sal, vendas] = [lines.shift(), parseFloat(lines.shift()), parseFloat(lines.shift())];
// para testar atribua os valores. Ex: ['Joao', 500.00, 1230.30]

let bonus = vendas*0.15;

let total = sal + bonus;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);
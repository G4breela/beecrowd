// Idade em Dias

/**
 * * Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

* !Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

**Entrada
O arquivo de entrada contém um valor inteiro.

**Saída
Imprima a saída conforme exemplo fornecido.
 */

let idadeDias = lines.shift();
// para testar adicione um valor ex: 30;

let anos = Math.floor(idadeDias/365);

idadeDias %= 365;

let meses = Math.floor(idadeDias/30);

idadeDias %= 30;

let dias = Math.floor((idadeDias*30)/30);

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);
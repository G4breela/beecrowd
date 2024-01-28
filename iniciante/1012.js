// Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
//a) a área do triângulo retângulo que tem A por base e C por altura.
//b) a área do círculo de raio C. (pi = 3.14159)
//c) a área do trapézio que tem A e B por bases e C por altura.
//d) a área do quadrado que tem lado B.
//e) a área do retângulo que tem lados A e B.


let [a, b, c] = lines.shift().split(' ').map((x) => parseFloat(x));
// para testar atribua os valores. Ex: [3.0, 4.0, 5.2]

let pi = 3.14159;

let tri = (a*c)/2;
let circ = pi*(Math.pow(c, 2));
let trap = ((a+b)*c)/2;
let quad = Math.pow(b,2);
let ret = a*b;


console.log(`TRIANGULO: ${tri.toFixed(3)}\nCIRCULO: ${circ.toFixed(3)}\nTRAPEZIO: ${trap.toFixed(3)}\nQUADRADO: ${quad.toFixed(3)}\nRETANGULO: ${ret.toFixed(3)}`)
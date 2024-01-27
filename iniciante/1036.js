// Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().split(' ').map((x) => parseFloat(x));
// para teste coloque o valor [10.3, 203.0, 5.0];

let delta = (Math.pow(B,2)) - 4*(A*C);

let r1 = (-B+(Math.sqrt(delta)))/ (2*A);
let r2 = (-B-(Math.sqrt(delta)))/ (2*A);

if(A !== 0 && delta > -1 ){
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}else{
    console.log('Impossivel calcular')
}
// Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

let [A, B, C, D] = lines.shift().split(' ').map((x) => parseInt(x));
// para testes adicione o valor [2, 3, 2, 6];

let somaCD = C+D;
let somaAB = A+B;

let restoA = A%2;

if(B > C && D > A && somaCD > somaAB && Math.sign(C, D) == 1 && restoA === 0 ){
    console.log('Valores aceitos');
}else{
    console.log('Valores nao aceitos');
}
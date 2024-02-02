//Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

let [a, b] = [6, 25] //lines.shift().split(' ').map((x) => parseInt(x));

if(a < b){
   [a, b] = [b,a]
}
console.log((a % b === 0) ? "Sao Multiplos" : "Nao sao Multiplos");
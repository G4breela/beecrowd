// Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

function ordemCrescente(a, b){
    return (a - b)
}

let [a, b, c] = lines.shift().split(' ').map((x) => parseInt(x));
// para testar atraibua os valores. Ex: [7, 21, -14]

let array = [a, b, c];

let crescente = array.sort(ordemCrescente);

console.log(`${crescente[0]}\n${crescente[1]}\n${crescente[2]}\n`);
console.log(`${a}\n${b}\n${c}`);
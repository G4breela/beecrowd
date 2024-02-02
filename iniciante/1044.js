let [a, b] = [6, 25] //lines.shift().split(' ').map((x) => parseInt(x));

if(a < b){
   [a, b] = [b,a]
}
console.log((a % b === 0) ? "Sao Multiplos" : "Nao sao Multiplos");
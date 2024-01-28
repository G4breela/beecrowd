// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

let segundos = parseInt(lines.shift());
// para testar atribua um valor. Ex: 556

let hora = Math.floor(segundos/3600);
segundos %= 3600

let minutos = Math.floor(segundos/60);
segundos %= 60;

console.log(`${hora}:${minutos}:${segundos}`);
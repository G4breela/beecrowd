// Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

let distancia = parseInt(lines.shift());
// para testar atribua o valor. Ex: 2254 

let totalCombustivel = parseFloat(lines.shift());
// para testar atribua o valor. Ex: 124.4

let consumoMedio = distancia/totalCombustivel;

console.log(`${consumoMedio.toFixed(3)} km/l`);
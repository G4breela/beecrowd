// A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

// - Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

let raio = parseFloat(lines.shift());
// para testar adicione o valor. ex: 100.64;

let pi = 3.14159;

let area = pi*(Math.pow(raio, 2));

console.log(`A=${area.toFixed(4)}`)
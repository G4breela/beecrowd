// Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

let [a, b, c] = [parseFloat(lines[0]), parseFloat(lines[1]), parseFloat(lines[2])];
// para testar atribua um valor. Ex: [5.0, 6.0, 7.0]

let media = ((2*a)+(3*b)+(5*c))/(2+3+5);

console.log(`MEDIA = ${media.toFixed(1)}`);
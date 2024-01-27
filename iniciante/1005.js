// Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

let [a, b] = [parseFloat(lines[0]), parseFloat(lines[1])];
// para testar atribua um valor. Ex: [5.0, 7.1]

let media = ((3.5*a)+(7.5*b))/(3.5+7.5);

console.log(`MEDIA = ${media.toFixed(5)}`);
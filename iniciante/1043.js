//Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:

//Perimetro = XX.X

//Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem

//Area = XX.X

let [a, b, c] = [6.0, 4.0, 2.0] //lines.shift().split(' ').map((x) => parseFloat(x));
// para testar atribua os valores. Ex: [6.0, 4.0, 2.0]

if(a < b + c && b< a + c && c < a + b){
    let p = a+b+c;
    console.log(`Perimetro = ${p.toFixed(1)}`);
}else{
    let area = ((a+b))/2*c;
    console.log(`Area = ${area.toFixed(1)}`);
}
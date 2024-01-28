// Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

// distancia = Math.sqrt((Math.pow(x2 - x1), 2) + (Math.pow(y2 - y1), 2))

let [x1, y1] = lines.shift().split(' ').map((x) => parseFloat(x));
//para testar atribua o valor. Ex: [1.0, 7.0]

let [x2, y2] = lines.shift().split(' ').map((x) => parseFloat(x));
//para testar atribua o valor. Ex: [5.0, 9.0]

let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(distancia.toFixed(4));
// Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

// Se o ponto estiver na origem, escreva a mensagem “Origem”.

// Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

let [x, y] = lines.shift().split(' ').map((x) => parseFloat(x));
// para testar atribua os valores. Ex: [4.5, -2.2];

if( x > 0.0){
    if(y > 0.0){
        console.log("Q1");
    }else if (y < 0.0){
        console.log("Q4");
    }else{
        console.log("Eixo X");
    }
}else if(x < 0.0){
    if(y > 0.0){
        console.log("Q2");
    }else if (y < 0.0){
        console.log("Q3");
    }else{
        console.log("Eixo X");
    }
}else{
    if(y > 0.0){
        console.log("Eixo Y");
    }else if(y < 0.0){
        console.log("Eixo Y");
    }else{
        console.log("Origem");
    }
}
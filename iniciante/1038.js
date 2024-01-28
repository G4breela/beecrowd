// Com base na tabela, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

let [codigo, qtd] = lines.shift().split(' ').map((x) => parseInt(x))
// Para testar atribua os valores. Ex: [2, 3];

let valor;
let total;

if(codigo == 1){
    valor = 4.00;
    total = valor * qtd;

    console.log(`Total: R$ ${total.toFixed(2)}`);
}else if(codigo == 2){
    valor = 4.50;
    total = valor * qtd;

    console.log(`Total: R$ ${total.toFixed(2)}`);
}else if(codigo == 3){
    valor = 5.00;
    total = valor * qtd;

    console.log(`Total: R$ ${total.toFixed(2)}`);
}else if(codigo == 4){
    valor = 2.00
    total = valor * qtd;

    console.log(`Total: R$ ${total.toFixed(2)}`);
}else if(codigo == 5){
    valor = 1.50;
    total = valor * qtd;

    console.log(`Total: R$ ${total.toFixed(2)}`); 
}
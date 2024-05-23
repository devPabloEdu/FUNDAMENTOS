//estrategia 1 para gerar valor padrao
function soma1(a,b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1()); //os tres valores sao undefined, q vem false e gera o valor 1 conforme o || acima
console.log(soma1(1, 2, 4)); //somou os valores

// estrategia 2,3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // a recebe a, se a for diferente de undefined, porem se a for igual a undefined a recebe 1
    b = 1 in arguments ? b: 1 //  existe o segundo argumento em soma 2? se sim pega o valor de b, se nao pega o valor 1
    c = isNaN(c) ? 1 : c // se a variavel for nan retorna o padrao, caso nao, retorne o valor de c
    return a + b + c
}
console.log(soma2())
console.log(soma2(1, 2, 3))

//valor padrao do es2015

function soma3(a =1,  b=1, c =1) {
    return a + b + c
};
console.log(soma3());
console.log(soma3(2,4,3));

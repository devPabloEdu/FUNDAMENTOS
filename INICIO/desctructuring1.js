// novo recurso do es2015

const pessoa = {
    nome: "ana",
    idade: 5,
    endereço: {
        logradouro: 'rua abc',
        numero : 1000
    }
}
const {nome, idade} = pessoa;
console.log(nome, idade);

const teste = {
    brinquedo: 'batman',
    carrinho: 'hotweels',
    pratelerira:{
        coluna: 5,
        lugar: 2
    }
}

const {brinquedo, pratelerira: {coluna}} = teste;
console.log(brinquedo);
console.log(teste.carrinho);
console.log(coluna);
console.log(teste.pratelerira.lugar);
console.log(teste);
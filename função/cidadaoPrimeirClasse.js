// função em js é first class object(citizens)
// high order function

//criar de forma literal
function fun1 () {

}

//armazenar uma função em uma variavel
const fun2 = function () {

}

//armazenar dentro de um array
const array = [function (a,b) {return a+ b}, fun1, fun2];
console.log(array[0](2, 3));

// armazenando em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'opa'
}
console.log(obj.falar())


//passar função como parametro
function run(fun) {
    fun() //para invocar a função como parametro vc precisa dos ()
};
run(function(){console.log('executando')}); //definindo os parametros da função run

//uma função ela pode retornar/conter uma outra função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4) //definindo os parametros de soma e da função sem nome dentro da função soma



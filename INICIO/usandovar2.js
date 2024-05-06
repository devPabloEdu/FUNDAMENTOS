var numero = 1;
{
    var numero = 2
    console.log("dentro= ", numero);
}
console.log('fora= ', numero);

function teste(){
    var numero = 3;
    console.log(numero);
}
console.log(numero);
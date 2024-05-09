//par nome/valor
const saudacao = 'opa'; // contexto lexico 1;

function exec(){
    const saudacao = 'falaaa'; // contexto lexico 2;
    return saudacao;
}
console.log(saudacao);

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'rua muito legal',
        numero : 123
    }
}
console.log(saudacao);
console.log(exec())
console.log(cliente);
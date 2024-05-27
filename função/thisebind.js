const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
};
pessoa.falar();

const falar = pessoa.falar
falar() //conflito entre paradigmas do funcional e do oo

const falardePessoa = pessoa.falar.bind(pessoa);
falardePessoa()

const macaco = {
    ola : "maqueico",
    raça(){
        console.log(this.ola)
    }
}
macaco.raça()


var raça = macaco.raça
raça()

const macacodnv = macaco.raça.bind(macaco);
macacodnv() ////fica fixo

var raça = macaco.raça
raça()

macacodnv()
raça()
macacodnv()

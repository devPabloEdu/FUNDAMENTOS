function imprimirnome(){
    console.log(this.nome)
    console.log(this)
}

const nomeaqui = {
    nome: "pablo"
};

const nomecompleto = imprimirnome.bind(nomeaqui);
nomecompleto()
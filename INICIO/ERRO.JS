function tratarErrowLancar(erro) {
    throw new Error("ocorreu um erro")
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + `!!!`)
    } catch (e) {
        tratarErrowLancar(e)
    } finally {
        console.log('final')
    }

}

const obj = { nome : 'roberto'};
imprimirNomeGritado(obj);
let comparacomthis = function (param) {
    console.log(this === param)
}
comparacomthis(global)

const obj = {}
comparacomthis = comparacomthis.bind(obj);
comparacomthis(global);

let comparacomthisarrow = param => console.log(this === param);
comparacomthisarrow(global) //ele nao é de escopo global, ele aponta p modulo corrente
comparacomthisarrow(module.exports);
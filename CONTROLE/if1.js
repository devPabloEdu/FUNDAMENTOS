function soBoaNoticia(nota){
    if(nota >= 7){
        console.log(`aprovado com ${nota}`)
    }
}

soBoaNoticia(8.1)

function seforverdadeiroeufalo(valor) {
    if(!valor) {
        console.log(`é verdade....${valor}`)
    }
}

seforverdadeiroeufalo();
seforverdadeiroeufalo(null);
seforverdadeiroeufalo(undefined);
seforverdadeiroeufalo(NaN);
seforverdadeiroeufalo('')
//Só existem, alguns valores que retornam false nativamente da linguagem.

//null,0,undefined,' ', NaN, false, esses são os únicos
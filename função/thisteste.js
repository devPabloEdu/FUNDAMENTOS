const obj ={
    nome: 'bob',
    mostrarthus : function(){
        console.log(this);
    }
};

obj.mostrarthus()


const f3 = () => console.log(this === window);


const teste = function (contextoatual){
    console.log(this === contextoatual)
};
teste(global);
const obj ={
    nome: 'bob',
    mostrarthis : function(){
        console.log(this);
    }
};

obj.mostrarthis()


const f3 = () => console.log(this === window);


const teste = function (contextoatual){
    console.log(this === contextoatual)
};
teste(global);
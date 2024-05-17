function teste1(num){
    if(num > 7)
        console.log(num);
        console.log('final')
}

teste1(6);
teste1(8);

function teste2(num){
    if(num > 7); // blovo nao esta vinculado ao if, pois o ponto e virgula termina a sentença nessa posição
    {
        console.log(num)
    }
}

teste2(6);
teste2(8);
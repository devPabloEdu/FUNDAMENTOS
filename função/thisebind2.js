function pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //essa função dispara uma outra fução a partir do intervalo determinado
}

new pessoa
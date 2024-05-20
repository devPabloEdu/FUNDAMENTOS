const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in nums) {
    if( x == 5){
        break //no momento em que ele encontrar o indice 05, ele vai sair do bloco o break
    }
    console.log(`x = ${nums[x]}`);
}

for (y in nums) {
    if (y == 5){
        continue //quando chegar no indice 5 do array, ele vai interromper e pular pra proxima
    }
    console.log(`${y} = ${nums[y]}`);
}

externo: for ( a in nums) {
    for(b in nums) {
        if (a ==2 && b == 3){
            break externo
        }
        console.log(`par = ${a}, ${b}`)
    }
}
function CONTRARIO(pepino){
    return pepino.split("").reverse().join("")
}

function CONTRARIO2(str){
    let reversed = "";
    for(let i = str.length - 1; i >=0; i --){
        reversed += str[i]
    }
    return reversed
}

const STRING = "123456789"

console.log (CONTRARIO(STRING))
console.log (CONTRARIO2(STRING))
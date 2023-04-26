// Check whether the values are in hexadecimal or not
const ishex = (val) =>{
    for(var i=0; i<val.length; i++){
        if(val[i]<'0' || (val[i]>'9' && val[i]<'A') || val[i]>'F')
            return false;
    }
    return true;
} 

export const lda = (words, obj) =>{
    console.log("LDA is going to execute");
    let addr = words[1];
    if(addr.length!=4 || !ishex(addr)); // error
    let addval = parseInt(addr);
    if(obj.memory.has(addval)==true) obj.A = obj.memory[addval];
    else obj.A = "00";
}
export const lxi = (words, obj) =>{
    console.log("LXI is going to execute");
    if(words.length!=3 || !ishex(words[2]) || words[2].length!=4); // error
    var addr = words[2];
    var reg = words[1];
    var upr = addr.substring(0,2);
    var lwr = addr.substring(2,4);
    if(reg=="H"){
        obj.H = upr; obj.L = lwr;
    }else if(reg=="D"){
        obj.D = upr; obj.E = lwr;
    }else if(reg == "B"){
        obj.B = upr; obj.C = lwr;
    }else{
        // error
    }
    console.log(`Upper is ${upr}`);
    console.log(`Lower is ${lwr}`);    
}
export const lhld = (words, obj) =>{
    console.log("LHLD is going to execute");
    if(words.length!=2 || !ishex(words[1]) || words[1].length!=4); // error
    var addr = words[1];
    var cur = parseInt(addr, 16);
    cur++;
    var nxt = cur.toString(16);
    obj.H = "00";
    obj.L = "00";
    if(obj.memory.has(addr)) obj.H = obj.memory[addr];
    if(obj.memory.has(nxt)) obj.L = obj.memory[nxt];
    console.log(`Upper is ${addr}`);
    console.log(`Lower is ${nxt}`);  
}
// Check whether the values are in hexadecimal or not
const ishex = (val) =>{
    for(var i=0; i<val.length; i++){
        if(val[i]<'0' || (val[i]>'9' && val[i]<'A') || val[i]>'F')
            return false;
    }
    return true;
} 
export const mvi = (words, obj) =>{ // Need to be modified for memory as a operand
    console.log("MVI is going to execute");
    let reg = words[1];
    let val = words[2];
    if(reg.length!=1 || val.length!=2 || !ishex(val));  //err
    else{
        obj[reg] = val;
    }
}

export const mov = (words, obj) =>{ // Need to be modified for memory as a operand
    console.log("MOV is going to execute");
    let args = words[1].split(',');
    
    if(words[1][1]!=',' || args.length!=2 || args[0].length!=1 || args[1].length!=1 || args[0]==args[1]); 
    // err
    let reg1 = args[0];
    let reg2 = args[1];
    // has property to be used
    obj[reg1] = obj[reg2];
}
export const sta = (words, obj) =>{
    console.log("STA is going to execute");
    let addr = words[1];
    if(addr.length!=4 || !ishex(addr)); // error
    if(obj.memory.has(addr)==true) obj.memory[addr] = obj.A;
    else obj.memory.set(addr, obj.A);
}
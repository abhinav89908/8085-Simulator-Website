export const add = (words, obj) =>{
    console.log("ADD is going to execute");
    let op2 = words[1];
    if(op2.length!=1 || obj.has(op2)==false); // error
    obj.A += obj[op2];
}

export const sub = (words, obj) =>{
    console.log("SUB is going to execute");
    let op2 = words[1];
    if(op2.length!=1 || obj.has(op2)==false); // error
    obj.A -= obj[op2];
}

export const adi = (words, obj) =>{
    console.log("ADI is going to execute");
    let op2 = words[1];
    if(op2.length!=2 || !ishex(op2)); // error
    obj.A += parseInt(op2);
}
export const inr = (words, obj) =>{
    console.log("INR is going to execute");
    let op2 = words[1];
    if(op2.length!=1 || obj.has(op2)==false); // error
    obj[op2]++;
}
export const dcr = (words, obj) =>{
    console.log("DCR is going to execute");
    let op2 = words[1];
    if(op2.length!=1 || obj.has(op2)==false); // error
    obj[op2]--;
}

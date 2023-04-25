let run = document.getElementById('run');

const obj = {
    // Accumulator
    A : 0,
    // Register Pairs
    B: 0, C: 0, 
    D: 0, E: 0,
    H: 0, L: 0,
    // Flag register
    S: 0, Z: 0, AC: 0, P: 0, CY: 0,
    memory : new Array[65536],
};

// Check whether the values are in hexadecimal or not
const ishex = (val) =>{
    return true;
} 

const mov = (words) =>{
    console.log("MOV is going to execute");
    let arguments = words[1].split(',');
    
    if(words[1][1]!=',' || arguments.length!=2 || arguments[0].length!=1 || arguments[1].length!=1 || arguments[0]==arguments[1]); 
    // err
    let reg1 = arguments[0];
    let reg2 = arguments[1];
    // has property to be used
    obj[reg1] = obj[reg2];
}

const mvi = (words) =>{
    console.log("MVI is going to execute");
    let reg = words[1];
    let val = words[2];
    if(reg.length!=1 || val.length!=2 || !ishex(val));  //err
    else{
        let vall = parseInt(val);
        obj[reg] = vall;
    }

}
const lda = (words) =>{
    console.log("LDA is going to execute");
    let addr = words[1];
    if(addr.length!=4 || !ishex(addr)); // error
    let addval = addr.parseInt();
    obj.A = obj.memory[addval];
}
const sta = (words) =>{
    console.log("STA is going to execute");
    let addr = words[1];
    if(addr.length!=4 || !ishex(addr)); // error
    let addval = addr.parseInt();
    obj.memory[addval] = obj.A;

}
const add = (words) =>{
    console.log("ADD is going to execute");
    let op2 = words[1];
    if(op2.length!=2 || !ishex(op2)); // error
}
const hlt = (words) =>{
    console.log("HLT is going to execute");
}

let instruction = new Map([
    ["MOV", mov],
    ["MVI", mvi],
    ["LDA", lda],
    ["STA", sta],
    ["ADD", add],
    ["HLT", hlt],
])

run.addEventListener('click', function(){

    let codearea = document.getElementById("code");
    let code = codearea.value;

    // converting the whole code in array of strings.
    let codelines = code.split(/\n/);
    console.log(codelines);

    let i=0;
    // Iterating over each line of code and spliting the instructions, registers, data, etc.
    for(i=0; i<codelines.length; i++){
        console.log(obj);
        let words = codelines[i].split(/[ ]/);
        instruction.get(words[0])(words);
    }
    console.log(obj);


})

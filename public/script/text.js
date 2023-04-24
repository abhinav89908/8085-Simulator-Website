let run = document.getElementById('run');

const mov = (words) =>{
    console.log("MOV is going to execute");
}
const lda = (words) =>{
    console.log("LDA is going to execute");
}
const sta = (words) =>{
    console.log("STA is going to execute");
}
const add = (words) =>{
    console.log("ADD is going to execute");
}
const hlt = (words) =>{
    console.log("HLT is going to execute");
}

let instruction = new Map([
    ["MOV", mov],
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
        let words = codelines[i].split(/[ ,]/);
        console.log(words);
        instruction.get(words[0])(words);
    }


})

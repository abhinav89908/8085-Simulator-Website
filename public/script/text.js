import {sta, mvi, mov }from './storeFunctions.js';
import {lda, lxi, lhld }from './loadFunctions.js';
import {add, sub, adi, inr, dcr }from './arithemetic.js';
import {hlt }from './controlFunctions.js';
import {cma, cmp }from './logicalFunctions.js';

let run = document.getElementById('run');
const obj = {
    // Program counter
    PC: "0000",
    // Stack Pointer
    SP: "0000",
    // Accumulator
    A : "00",
    // Register Pairs
    B: "00", C: "00", 
    D: "00", E: "00",
    H: "00", L: "00",
    // Flag register
    S: "00", Z: "00", AC: "00", P: "00", CY: "00",
    // Memory Locations
    memory: new Map()
};

let instruction = new Map([
    // Load Functions
    ["MOV", mov],
    ["MVI", mvi],
    ["LDA", lda],
    ["LXI", lxi],
    ["LHLD", lhld],
    // Store Functions
    ["STA", sta],
    // Arithmentic Funcitons
    ["ADD", add],
    ["SUB", sub],
    ["ADI", adi],
    ["INR", inr],
    ["DCR", dcr],
    // Logical Fucntions
    ["CMA", cma],
    ["CMP", cmp],
    // Terminating Functions
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
        console.log(words);
        instruction.get(words[0])(words, obj);
    }
    console.log(obj);


})

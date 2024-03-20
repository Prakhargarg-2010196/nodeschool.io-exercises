'use strict'
const fs=require('fs')
// All the operations that are synchronous and blocking are ended with Sync in fs module 
//console.log(fs.readFileSync(process.argv[1]))
let File=process.argv[2];
//console.log(File);

let Buffer=fs.readFileSync(File);
let BufferConvertedToString=Buffer.toString();
//console.log(BufferConvertedToString);
let BufferSplittedAtN=BufferConvertedToString.split('\n');

console.log(BufferSplittedAtN.length-1);










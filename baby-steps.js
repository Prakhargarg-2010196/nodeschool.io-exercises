let commandLineArguments=process.argv;
let sum=0;
for(let i=2;i<commandLineArguments.length;i++){
 sum+=Number(commandLineArguments[i]);
} 
console.log(sum);

let varA = 'A'; // b
let varB = 'B'; //c
let varC = 'C'; //a

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);

const newVarA = varA;
varA = varB;
varB = varC;
varC = newVarA;
console.log(varA, varB, varC);
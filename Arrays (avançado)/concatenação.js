const a = [1, 12, 3];
const b = [12, 323, 2321];
const c = a.concat(b);
console.log(c);

const d = [...a, ...b];
console.log(d);

//adconst 
const e = [...a, ...b, 'Numbers', ...[1, 2, 34324]];
console.log(e);
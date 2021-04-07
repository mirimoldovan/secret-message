let secretMessage =['Learning', 'is', 'not', 'about','what','you','get','easily','the','first','time','it','is','about','what,','you','can','figure', 'out', '-2005','Chris','Pine','Learn','JavaScript'];
let remove = secretMessage.pop();

let add = secretMessage.push('to', 'Program');

let change =secretMessage.splice(7, 1, 'right');

let removeString = secretMessage.shift();

let addString = secretMessage.unshift('Programming');

let removeStrings =secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(' '));
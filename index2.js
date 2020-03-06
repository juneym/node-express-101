const index = require('./index.js');

//node uses, IFFE and wapping
//function(exports, require, module, __filename, __dirname) {

console.log("value of const index: ");

index.f1();
index.f2();

console.log(exports);

//return ...
//})();
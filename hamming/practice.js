var Hamming = require("./hamming.js");
hamming = new Hamming();

var str = "jalskjfd";
for(var i = 0; i < str.length; i++) {

console.log(str[i]);
}

console.log(hamming.compute("hella", "hello"));



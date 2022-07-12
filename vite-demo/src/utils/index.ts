import Big from "big.js";


var x = new Big('0.3');

console.log(new Big(0.3 - 0.2).toFixed(2), x.minus(0.2).toNumber())
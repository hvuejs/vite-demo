import Big from "big.js";

var x = new Big("0.3");

console.log(new Big(0.3 - 0.2).toFixed(2), x.minus(0.2).toNumber());

Big.RM = 0; // 设置是否需要进行四舍五入, 全局设置，全局应用，局部设置局部应用

let a = new Big('1.512142');

let y = new Big('2.2469');


console.log(a.plus(y).toFixed(2));

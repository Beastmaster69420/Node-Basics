// const isOdd = require("is-odd-number");
import isOddNumber from "is-odd-number";
console.log(177, isOddNumber(177));

// module.export = (function(){});
const a = [1, 2, 3, 4, 5];
a[5]=6;
a[2]=7;
console.log(a);
console.log(a[7]);
const[b,c,...d]=a;
console.log(d);
console.log("1" + 2 + 0);// "120"
console.log("1" - 1 + 2);// 2
console.log(true + false); //1
console.log(10 / "5"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //"9px"
console.log("$" + 4 + 5); //"$45"
console.log("42" - 2); //40
console.log("4px" - 2); //NaN
console.log(7 / 0);  //Infinity
console.log("  -9\n" + 5); //" -9\n5"
console.log("  -9\n" - 5); // -14
console.log(5 && 2); //2
console.log(2 && 5); //5
console.log(5 || 0);//5
console.log(0 || 5);//5
console.log(null + 1);//1
console.log(undefined + 1);//NaN
console.log(null == "\n0\n"); //false
console.log(+null == +"\n0\n"); //tru
[] + {}; //"[object Object]"
{} + []; // 0 //{}
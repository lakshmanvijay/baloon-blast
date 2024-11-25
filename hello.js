// var id:number=56;
// var uname:string="vijay";
// var salary:number=50000;
// console.log(id);
// console.log(uname);
// console.log(salary);
var index = 0;
var index1 = 0;
function increment() {
    var index = 5;
    var index1 = 5;
    index++;
    index1++;
    console.log("inside index == " + index);
    console.log("inside index1 == " + index1);
}
increment();
console.log("outside index == " + index);
console.log("outside index1 == " + index1);
//var index2=4
for (var index2 = 0; index2 < 5; index2++) {
    console.log("inside loop index2 == " + index2);
}
console.log("outside index2 == " + index2);
var index3 = 4;
for (var index3_1 = 0; index3_1 < 5; index3_1++) {
    console.log("inside loop index3 == " + index3_1);
}
console.log("outside index3 == " + index3);

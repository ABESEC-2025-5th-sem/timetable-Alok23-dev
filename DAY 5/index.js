// console.log("Welcome to the my home");
// document.write("Hello Neha Prajapati");
// document.write("Hey there i am using instagram");
// alert(234);
// console.error("Error massage");
// let a = prompt("Enter a number");

// var a = 10;
// var b = 30;
// console.log(a+b);
 
// let a = 10;
// let b = 202;
// console.log(a+b);


// let a = 10;
// a = 345;
// console.log(fun);
// fun(70)
// function fun(){
// var a = 90;
//     console.log(a);
// }
// console.log(a);

// let a = -5+5 + "22" + 22; 
// let b = "22" + 22 - 5 + 5;
// console.log(a);
// console.log(b);

// let x = 5;
// function modify(){
//     let x = 10;
//     console.log(x);
// }
// modify(x);
// console.log(x);

// let x = [2,3,4];
// function modify(){
//  ax.push(5);
// }
// modifyAx(x);
// console.log(x);

// (()=>{
//                             var  x=y=6;
//     })();
//     console.log(x);
//     console.log(y);
//     console.log(typeof x);
//     console.log(typeof y);

// let a = 23 - "23" + true + false - true + 23 + (-23);
// console.log(a);

// console.log(typeof null);
// console.log(typeof NaN);
// console.log(typeof undefined);
// console.log(typeof NULL);

const a = {
brand:"Mahindra",
model:"XUV-700",
year:2021
}
console.log(car.model);
console.log(car.brand);

function changeModel(obj){
    obj.model="SUV";
}
changeModel(car);
console.log(car.model);
console.log(car.brand);
  
const myCar = Object.assign({}, car);
console.log(myCar);
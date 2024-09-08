//new keyword
//create empty object {}
//returns this

// function Createuser(name,age,email,location){
//     this.name=name;
//     this.age=age;
//     this.email=email;
//     this.location=location;
//     // return this;   //no need to return coz new keyword returns this
// };

// Createuser.prototype.about=function(){
//     console.log(this.name,this.age,this.email,this.location);
// }

// const user1=new Createuser("abc",12,"abc@gmail.com","india");
// console.log(user1);
// user1.about();

// // for(let key in user1)
// //     console.log(key);  //about method is also printed as key

// for(let key in user1){
//     if(user1.hasOwnProperty(key))
//         console.log(key);}     //about is not printed as it belongs to prototype 



// const n= new Array(1,2,3);
// console.log(Array.prototype);
// console.log(Object.getPrototypeOf(n));
// console.log(n);

const f1=function(){
    console.log("hello");
};
console.log(f1.prototype);
f1.prototype=[];
console.log(f1.prototype);
f1.prototype.push('1');
console.log(f1.prototype);


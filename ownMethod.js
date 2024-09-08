// this
    // const obj={
        // name:"abc",
        // age:19,
        // about:function(){
            // console.log(`name is ${obj.name} age is ${obj.age}`);
    //         console.log(`name is ${this.name} age is ${this.age}`);  
    //     }
    // };
    // obj.about();   //obj is calling function so this=obj

    // function info(){
    //     console.log(`name is ${this.name}`);
    // }
    // const obj1={name:"abc",about:info};
    // const obj2={name:"def",about:info};
    // const obj3={name:"ghi",about:info};
    // obj1.about();  // this in function info is obj1
    // obj2.about();  // this = obj2
    // obj3.about();  //this=obj3

//when this = window
// "use strict";
//     function func(){
//         //use strict , prints undefined
//         console.log(this);  //prints window object . this=window
//     }
//     func();


//call,apply and bind
// function about(age){
//     console.log(this.name,age);
// }
//     const p1={
//         name:"abc",
        // about:function(){
        //     console.log(this.name);
        // }
        // about:function(age){
        //     console.log(this.name,age);
        // }
    // };
    //when function outside objects
        // const p2={
        //     name:"def"
        // }
    // p1.about(12);
    // about.call(p1,12);
    //calling about funciton which is inside p1 and p2 =this
        // p1.about.call(p2,12);
    
    //apply
    // same as call
    // p1.about.apply(p2,["ind",12]);   // in place of multiple arguments it passes an array

    //bind  9:08
    //returns a function with all argument passed in another function
    // const func=about.bind(p1,12);
    // func();

//note
    // const obj={
    //     name:"abc",
        // about:()=>{
        //     console.log(this.name);
        // }
        // about(){
        //     console.log(this.name);
        // }
    // };
    // // obj.about.call(obj);   //unexpected method coz in arrow funcitont this means window . cant use this inside arrow funciton
    // obj.about();




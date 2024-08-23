//fucntion declaration
    // function add(a,b){
    //     return a + b;
    // }
    // console.log(add(5,6));

//function expression
    //default way
    // function square(a){
    //     return a*a;
    // }
    // console.log(square(5));
    //using expression
    // const square=function(a){
    //     return a*a;
    // }
    // console.log(square(5));

//arrow function
    // const cube =(x)=>{    //if only one paramete then no need of parenthesis in arrow function .if no parameter () should be there .
    //     return x*x*x;
    // }
    // console.log(cube(5)); 

        //if there is only return statement in function it can be written as
        // const cube =(x)=> x*x*x;  //no need to write return and curly braces

// hoisting
    // hello();                //in js we can call function before its declaration .the funciton must be made by default way to make function else error
    // function hello(){
    //     console.log("hello");
    // }
    // hello();

    // hello();               //error in this case and with arrowr function 
    // const hello=function(){
    //     console.log("hello");
    // }

    // console.log(hello);   //undefined
    // var hello="hello world";  
    // console.log(hello);

    // console.log(hello); //error
    // const hello="hello world";
    // console.log(hello);

//function inside function
    // const app=function(){
    //     const hello=()=>console.log("hello");   //function hello inside funciton app
    //     function world(){                        //funciton world inside function app  
    //         console.log("world");
    //     }
    //     hello();      //calling function
    //     world();    //if world which is declared inside function app called outside function app then error .function dont defined.
    // }
    // app();

//lexical scope
    // function app(){
    //     const a="hello";
    //     function func1(){
    //         const b="world";
    //         console.log(a);
    //     }
    //     function func2(){
    //         // console.log(b); //error out of scope
    //         const a="world";
    //         console.log(a);   //function search for inside function first.then if not found searches in its lexical scope ie where the function is declared means inside functino app
    //     }
    //     func1();
    //     func2();
    // }
    // app();

//block vs function scope
//let and const are block scope
//var is funciton scope

//let and const
//     {
//         const a=1;
//         let b=2;
//         const c=3;
//         let d=4;
//         console.log(a,b);
//     }
    // console.log(c,d) //error out of scope . c is not defined

//var
    // {
    //     var a=1;   // var is hoisted to the top of the global scope.
    //     console.log(a);
    // }
    // console.log(a); //prints value of a

//default parameters

    // function add(a,b){
    //     if(b==undefined)
    //         b=0;
    //     return a+b;
    // }
    // console.log(add(2));

    // function add(a,b=0){
    //     return a+b;
    // }
    // console.log(add(3));

    // function func(a,b,...c){  //first two parameters gets stored in a and b rest in c array
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    // }
    // func(1,2,3,4,5,6,6);

//parameter destructing
//object
//react
    const obj={
        name:"abc",
        sno:2
    };
    //normal way
    // function show(obj){
    //     console.log(obj.name);
    //     console.log(obj.sno);
    // }
    // show(obj);

    //destructing
    // function show({name,sno}){
    //     console.log(name,sno);
    // }
    // show(obj);

//callback function
    // function show(a){
    //     console.log(a);   
    // }
    // function func(){
    //     console.log("helo");
    // }
    // show(func);  //displays funciton func

    // function show(a){  //for callback prefer taking "callback" as paramete insted of a or other variables
    //     a();
    // }
    // function func(){
    //     console.log("helo");
    // }
    // show(func); //runs funcitno show and calls func

//function returning function
    // function a(){
    //     function b(){
    //         console.log("helo");
    //     }
    //     return b();
    // }
    // a();
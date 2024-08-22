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

//
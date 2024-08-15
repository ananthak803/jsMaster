// let x=5;
// if(x%2===0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }


//else if

    // let x=0;
    // if(x>0){
    //     console.log("positive");
    // }
    // else if(x<0){
    //     console.log("negative");
    // }
    // else{
    //     console.log("zero");
    // }

// falsy values
    // false
    // null
    // ""
    // undefined
    // 0

//everythign else except falsy value is truthy value


//ternary operator or conditional operator

    // let age=15;
    // let drink = age>18?"coffee":"milk";
    // console.log(drink);
    // age =20;
    // drink = age>18?"coffee":"milk";
    // console.log(drink);


//logical and operator = &&
//logical or operator = ||

//user input
    // let userInput = prompt("enter number"); //takes input as string
    // console.log(userInput,typeof userInput);
    // userInput = +userInput;  //changing string to number
    // console.log(userInput,typeof userInput);

//2:09:52

//switch case

// let x=2;
    // switch(x){
    //     case 0:
    //         console.log("hello");
    //         break;
    //     case 1:
    //         console.log("hello world");
    //         break;
    //     case 2:
    //         console.log("this is case 2");
            // break;
        // default:
            // console.log("if no case matches default is executed");
            // break;
        // }    
//if no break statement is added in cases then after executing the case it will execute all other cases below it


//3:0:0

// while loop
    // let i =1;
    // let sum =0
    // while(i<=10){
    //     sum=sum+i;
    //     i++;
    // }
    // console.log(sum);

//formula for sum of n natural numbers
    // let n=10;
    // let s = (n*(n+1))/2;
    // console.log(s);

//do while

    // let i=10;
    // do{
    //     console.log(i); //prints i once even if the condition is false coz it checks that later in line 95
    // }while(i<10);

//for loop

    // for(let i=0; i<=5; i++){
    //     console.log(i);
    // }
    // console.log(i);  //this line show error coz we used let to declare i so i is available only inside for loop

    // let i=0
    // for(; i<=5; i++){  // no error in this ,can declare i like this and leave the initializer empty in loop 
        // console.log(i);
    // }
    // console.log(i); //i is declared outside loop so can be accessed

    // for(var i=0; i<=5; i++){
    //     console.log(i);
    // }
    // console.log(i); //var has global scope so i can be used outside the loop also
    

//break and continue

//break

    // for(let i=0; i<5; i++){
    //     if(i===3)
    //         break;   //when i = 3 breaks out of for loop and executes lines after for loop
    //     console.log(i);  
    // }
    // console.log("breaks out of loop");

//continue

    // for(let i=0;i<5;i++){
    //     if(i===3)
    //         continue;  //when i =3 , doesnt execute below line, it goes back to for loop(line 126) and skips 3 (3 is not printed).
    //     console.log(i);
    // }

//arrays
    //reference  data type - which has dynamic memory
    //ordered collection of items

// let x =["hello", "world","lesgo"];
// let y=[1,2,3,4,5];
// let z=[1,2,"helloworld",null,undefined]; //can store anything in array
// console.log(x,"\n" ,y,"\n",z);
// console.log(x[1],y[2],z[3]);
// console.log(typeof x);    //type object



//to check if it is array use Array.isArray(arrya_name)
    // console.log(Array.isArray(x));

// let obj = {}; //object literal
// console.log(Array.isArray(obj));

//changing elements in array
    // let x =["hello", "world","lesgo"];
    // console.log(x);
    // x[0]="hiiiii";
    // console.log(x);


//push add element to the end of array
    // let arr =["red","black","blue","green"];
    // console.log(arr);
    // arr.push("violet");  //returns the length of new array
    // console.log(arr);

//pop remove element from the end of array
//pop returns the element removed and that can be stored in a variable
//if array is empty undefined is returned and arrya not modified
    // let arr =["red","black","blue","green"];
    // console.log(arr);
    // let poppedElement=arr.pop();
    // console.log("element popped ",poppedElement);
    // console.log(arr);


//unshift add element to the starting of array
//slower than push and pop
    // let arr=[1,2,3,4];
    // console.log(arr);
    // arr.unshift(0);  //shifts all number to 1 index forward and inserts 0 and 0th index. returns new length
    // console.log(arr);

//shift  remove element from the begining of array and returns it
    // let arr=[1,2,3,4];
    // console.log(arr);
    // let x=arr.shift();
    // console.log("removed element ",x);
    // console.log(arr);



// let n ="spiderman";
//print char at any index
// console.log(n[0]);
// console.log(n[7]);

//length of string
    // console.log(n.length);

//print last char of string
    // console.log(n[n.length - 1]);

//trim remove spaces from string
    // let a="   hello world   ";  //space between hello world is not removed
    // console.log(a,a.length);
    // let b = a.trim();    //trim returns new string does not change the original string, string is immutable
    // console.log(b,b.length);

// let upperName = a.toUpperCase();
// console.log(upperName);
// let lowerName = a.toLowerCase();
// console.log(lowerName);

//slicing 
    // let c="helloworld ";
    // console.log(c.slice(0,5));   // print string from 0 to 5-1 , does not include 5th index
    // console.log(c.slice(1));    // print string from index 1 till end
    //1:08:47

//type of operator
    // let x =22;
    // let y ="helloworld";
    // console.log(typeof x); 
    // console.log(typeof y);
    // console.log(typeof 1);
    // console.log(typeof "hello");

//number to string
    // let x =22;
    // console.log(typeof x);
    // x=x+"";
    // console.log(typeof x);

    // x=String(x);
    // console.log(typeof x);

//string to number
    // let x = "20";
    // console.log(typeof x);
    // x=+x;  //+"helloworld" this is a NaN;
    // console.log(typeof x);

    // x=Number(x);
    // console.log(typeof x);


//string concatenation
    // let s1="hello"
    // let s2="world"
    // console.log(s1+" "+s2);

    // s1="10";
    // s2="20";
    // console.log(s1+s2);
    // console.log(+s1 + +s2);

//template string

    // let age = 19;
    // let firstName = "Anantha";
    // let s= `hello ${firstName} you are ${age} years old`;
    // console.log(s);

//undefined
    // let x;
    // console.log(x,typeof x);

//null
    // let x=null;
    // console.log(x,typeof x);
    //the typeof x which should be null it is showing object because it is an error/bug in js and it is not fixed because then the already written js code needs to be changed .

//BigInt
    // console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 - max value of integer 
    // let x = BigInt(1203333333333333333333333000000000);
    // let a=BigInt(123);   //creating a big int 
    // let b=7n;    //creating a big int 
    // console.log(a,b,typeof a,typeof b);
    // console.log(a+b);
    // console.log(a+5);  // this line shows error coz we cannot do any arithmetic between int and bigint , both the operands should be same


//boolean true,false
    //relation operators >,<,<=,>=,==,===,!=,!==
    // console.log(7>5);
    // console.log(5>7);

    // console.log(7==7);
    // console.log(7=="7");  // this shows true coz it doesn't checkt the data type it just checks if the values are same
    // console.log(7==="7"); // this checks the data type and its values if both of them are same then give true

    // console.log(7!="7"); // similarly this also dont check data type only values

    // console.log(7!=="7"); //checks the data type also



// primtive type
    // let a1=2;
    // let a2=a1;  //a2 assigned to 2
    // console.log(a1);  //2
    // console.log(a2);  //2
    // a1++; //here value of a1 is changed but a2 is not changed coz these values are stored in  a stack memory 
    // console.log(a1);  //3
    // console.log(a2);  //2

// reference type
    // let arr1=[1,2,3]; 
    // let arr2=arr1;   //arr2 stores all element of arr1 , the values of arr1 are stored in heap memory it is accessed by arr1 which has the address of heap memory. the address of heap memory is is stored in a stack , both arr1 and arr2 are stored in a stack pointing to same memore address
    // console.log(arr1===arr2); //true , both pointing to same address
    // console.log(arr1);
    // console.log(arr2);
    // arr1.push(4);  //any change made to arr1 is reflected in arr2 coz address is same 
    // console.log(arr1);
    // console.log(arr2);


//clone array
    // let a=[1,2,3];

    //method 1-manually type elements of array a  to another
        // let b=[1,2,3];

    //method 2- slice(0)
        // let b=a.slice(0);

    //method 3- use [].concat(array)
        // let b=[].concat(a);  //we create a empty array and concate it with array a using functino concat()

    //method 4- new way: spread operator
        // let b =[...a];


    //copying an array and appending more elements to it
        // let b=a.slice(0).concat(4,5);  // slice copies 1,2,3 to b and then concat() adds 4,5 to 1,2,3

        // let b=[...a,4,5]; //we can use spread operator with more elements separated by comma
        // let c=[4,5];
        // let b=[...a,...c]; //we can use more than one spread operatore using comma to separated them

        // console.log(a===b);  // false,array a and b have same elements which are stored in different locations . both are different 
    
    //clone using for loop
        //traditional loop
            // let b=[];
            // for(let i=0; i<a.length; i++){
            //     b.push(a[i]);
            // }

        // for i of array
            // const b=[1,2,3];
            // for(let number of b){
            //     console.log(number);  //prints the elements not their index
            // }

        //for i in array
            // const b=[1,2,3];
            // for(let index in b)
                // console.log(index);  //prints index


//const array
    // const b=[1,2,3];
    // console.log(b); 
    // b=[4,5,6]; //this line shows error coz b is declared with const , we cannot change the already initialized elements in array, but we can add elements using push
    // b.push(4);
    // console.log(b);

//array destrucing
    // const b=[1,2,3,4,5];
        // let x=b[0];
        // let y=b[1];

        // const [x,y] = b; // x and y variable gets 1st and 2nd elemnt of b assigned to 
        // x=4; //this line shows error coz x is declared with const. to change value of x we can declare it with let

        // const [x,,y]=b; // we used 2 coma so y is assign with third element , we skipped the second element

        // const [x,y,...newb]=b;  //first 2 elements assigned to x and y and the rest to newb array

    // console.log(x,y);
    // console.log(newb);

        



//note- use const for reference type 
//note- if try to access element of array which is out of index , undefined will be the output
//note-b=[1,2,3] : the variable b will be created as a global variable if it is not within any function or block scope. This is because, in JavaScript, if you assign a value to an undeclared variable, it automatically becomes a global variable.
    // console.log(a);
    // console.log(b);


        
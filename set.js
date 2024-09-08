//iterables - can use for loop 
//string array iterable
//object not iterable
//array like object - can use length property

//sets(iterable)
//store data , have its own method,no index base access,order is not guaranteed, unique items only
    // const a = new Set();  //initializing set
    // console.log(a);
    // // console.log(a[2]);    //undefined,no index base access
    // a.add(1);
    // a.add(2);
    //     // a.add(1);  // cant add duplicate, 1 already in set
    //     // a.add("helo");
    // // const b=["item1","item2"];
    //     // a.add(b);         //  can add arrays
    // a.add([1,2,3]);   //both are different ie stored at different memory location
    // a.add([1,2,3]);
    // console.log(a);
    //     //has
    //         //   if(a.has(1))
    //         //     console.log("a is present");     //a.has(1) returns true if 1 present in set
    //         //   else
    //         //   console.log("not present");

    //     //for loop
    //         // for(let number of a){
    //         //     console.log(number);
    //         // }

//unique elements in array
    // const a=[1,2,2,3,3,3,];
    // const b = new Set(a);  //pass array here only unique elements from array will be added to set
    // // b.add(a);
    // console.log(b);
    // console.log(a);
    // //legnth of set
    //     let c=0;
    //     for(let number of b)
    //         c++;
    //     console.log(c);
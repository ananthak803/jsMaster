//foreach method  - callbacks function for each value and index in array
    // const a=[1,,2,3,4,];
        // function print(value,index){     //1st parameter is array value and second parameter is index
        //     console.log(index,":",value);
        // }
        // function print(value){    //takes only 1 parameter which is value of array in forEach method
        //     console.log(value);   
        // }
        // a.forEach(print);  //callbacks function till array ends . like a function inside a for 

        // a.forEach((number ,index)=>{    //function declared inside forEach methodo
        //     console.log(index,number);
        // });


//map method - creates new array 
    // a=[1,2,3,4];
        // function multi2(value,index){
        //     return value*2;      //to use map the function must return some value.the returning value is stored in a new array which is returned by map method.
        // }
        // console.log(a.map(multi2));   //returns a new array 

        // const newArray=a.map((value,index)=>{
        //     return index+1;
        // })
        // console.log(newArray);

    //map used for real world data
        // const users=[
        //     {name:"abc",sno:1},
        //     {name:"def",sno:2}
        // ];

        // const username=users.map((user)=>{
        //     return user.name;
        // })
        // console.log(username);

    //filter method
        // const a=[1,2,3,4,5,6];
        // function even(n){
        //     return n%2===0;
        // }
        // const b =a.filter(even);
        // console.log(b);

        // const c = a.filter((n)=>{
        //     return n%2!==0;
        // });
        
    //reduce method
        // const a=[1,2,3,4];
        // const sum=a.reduce((accumulator,currentValue)=>{
        //     return accumulator+currentValue;
        // });
        // console.log(sum); 

        // //real life use
        // const cart=[
        //     {productName:"laptop",price:50000},
        //     {productName:"tv",price:25000},
        //     {productName:"phone",price:15000}
        // ];
        // const total=cart.reduce((totalPrice,currentPrice)=>{
        //     return totalPrice+currentPrice.price;
        // },0)              //},0 is initial value of total price.else the 1st element of array is its initial value

        // console.log(total);

    //sort method - changes original array
        //default sort
            // const a=[5,1200,3,20,10];
            // a.sort();  //sort considers number string and sort using their ascii number
            // /*
            // 5   1200   3   20   10   number
            // 53  49     51  50   49   ascii value
            // //for 1200 it first checks the asci of 1 then ascii of 2 and so on if needed
            // */
            // console.log(a);   //after sorting a = 10,1200,20,3,5

        //sorting numbers
            // const a=[5,1200,3,20,10];
            // a.sort((a,b)=>a-b);  //sorts in ascending order
            //     //if a-b positive then b,a coz b is smaller than a
            //     //if a-b negative then a,b coz a is smaller than b
            // console.log(a);
            // a.sort((a,b)=>b-a);   //sorts in descending order
            // console.log(a);
        //use of sort in real life
            // const products =[
            //     {product:1,price:500},   // this is a in sort
            //     {product:2,price:200},   //this is b in sort
            //     {product:2,price:400}
            // ];
            // //inside sort function we pass the two parameter a and b which are object 1 and object 2 respectively
            // // products.sort((a,b)=>a.price-b.price);   //sorts in ascending order but changes original object
            // //to sort withut changing original order we clone or copy the array
            // const lowToHigh =products.slice(0).sort((a,b)=>a.price - b.price);
            // console.log(products);
            // console.log(lowToHigh);
    
        
    //find method
        // const a=["cat","dog","aaaa"];

        // //how this works??????
        // // function lenCheck(str){
        // //     return str.length===3;
        // // }

        // //returns the first occurence of string with lenght 3
        // const b=a.find((string)=>string.length===3);  //if string with length 4 dont exist returns undefined
        // console.log(b);

        //irl use
            // const users=[
            //     {id:1,name:"abc"},
            //     {id:2,name:"def"},
            //     {id:3,name:"ghi"}
            // ];
            // console.log(users.find((user)=>user.id===2));

    //every method
        // const a=[2,4,6,8];
        // const b=a.every((number)=>number%2===0);   //returns true if the arrow function returns true for every element in array . if one false then every will return false
        // console.log(b);
        // const c=[2,3,4,5];
        // const d=c.every((number)=>number%2===0); 
        // console.log(d);

        //irl use
            // const products =[
            //     {id:1,price:1200},
            //     {id:2,price:1500},
            //     {id:3,price:1100}
            // ];
            // const p=products.every((product)=>product.price>1000);
            // console.log(p);
    
    // some method
            // const a=[1,3,8,7];
            // const b=a.some((number)=>number%2===0);  //some function returns true if atleast 1 number gives true output in arrow function  else false
            // console.log(b);

            //irl use
                // const products =[
                // {id:1,price:1200},
                // {id:2,price:1500},
                // {id:3,price:3000}
                // ];
                // const c=products.some((product)=>product.price>2000); 
                // console.log(c);
    
    // fill method-changes original array
        // fill(fill,start,stop) stop not included
        // const a=[1,2,3,4];
        // a.fill(0);   //set all elements of array to 0
        // console.log(a);
        // a.fill(1,1,3);//set 1 from index 1 to 2
        // console.log(a);
 
    //splice method-changes original array
        //start delete insert
        // a=[1,2,3,4,5];
        // const deletedItems=a.splice(1,2); //deletes 2 element from index 1 and returns the deleted elements
        // console.log(deletedItems);
        // console.log(a);
        // a.splice(1,0,2,3);//1-starting index,0 no of elements deleted,2 and 3 - inserted element.return empy array
        // console.log(a);

        // //insertion and deletion
        //     a.splice(2,2,10,20);  //deletes 3 and 4 and insert 10 and 20 in their place
        //     console.log(a);

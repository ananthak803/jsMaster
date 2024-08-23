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
    const users=[
        {name:"abc",sno:1},
        {name:"def",sno:2}
    ];

    const username=users.map((user)=>{
        return user.name;
    })
    console.log(username);

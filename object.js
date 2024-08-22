//objects are reference type
//arrays are good but not sufficient
//object for real world data
//objects store key value pairs

//how to create objects
        // const student ={
        //     name:"anantha",  //"name":"anantha", this is also correct
        //     age:19,
        //     marks:[1,2,3,4]  //array can be stored inside objects
        // };
        // console.log(student);

    // //access data from objects dot notation
        // console.log(student.name);
        // console.log(student.age);
        // console.log(student.marks);

    // //add key value pair to object
        // student.roll =37;
        // console.log(student.roll);

    // //bracket notation 
        // console.log(student[name]);   //this line shows error coz key in object are by default in string we dont need to write "" , but in bracket notation we need to write keys inside ""
        // console.log(student["name"]);
        // student["gender"]="male";
        // console.log(student);

//bracket notation vs dot notation
    const emp ={
        "emp name":"emp1",
        "salary":100,
        "emp no":21
    };
    // console.log(emp);
    // console.log(emp["emp name"]);
    // // console.log(emp.emp no);  //erro coz cant access this with dot operator we can access this with brackt
    // console.log(emp["emp no"]);  //key within "" else it will show error

    // //using a variable as key
    // const key="email";

    // emp[key]="123gmail.com";  //here key is not within "" coz we need to evaluate key as email
    // console.log(emp);

//iterate object
    //for i in  object
    // console.log(emp);
    // for(let key in emp)
    //     console.log(key,":",emp[key]);
    
    // //Object.keys(object_name);  note= O capital in Object
    // console.log(Object.keys(emp));
    // console.log(typeof Object.keys(emp));
    // //Array.isArray() = to check if array or not returns true or false
    // console.log( Array.isArray(Object.keys(emp)));

//computed properties
    // const key1="name";
    // const key2="sno";

    // const value1="abc";
    // const value2=12;

    //key not computed here
    // const obj={
    //     key1:value1,   //key1 is considered as key1 not treated as a variable
    //     key2:value2
    // }

    //key is computed
    // const obj={
    //     [key1]:value1,    //here the value stored in key1 is key name
    //     [key2]:value2
    // };

    //key is computed
    // const obj={};
    // obj[key1]=value1;
    // obj[key2]=value2;
    // console.log(obj);

//spread operator in array
    // const array =[1,2,3];
    // const array2 =[4,5,6];
    // const newArray =[...array,...array2];
    // console.log(newArray)

    // const array3=[..."abcdefgh"];
    // const array3 =[..."1234"];
    // const array3 =[...1234];    //error number is not iterable

    // console.log(array3);

//spread operator in objects
    // const obj={
    //     name:"abc",
    // };
    // const newObj={...obj};
    // console.log(newObj);

    //key is unique in objects
    // const obj1={
    //     name:"abc",
    //     sno:12,
    //     age:40
    // };
    // const obj2={
    //     name:"def",
    //     sno:13
    // };
    // const newObj={...obj1,...obj2};  // obj2 is after obj1, so name and sno keys will have values of obj2 coz keys are unique in objects

    // const newObj={...obj2,...obj1};    //obj1 is after obj2 so name and sno will have values of obj1 coz keys are unique in 
    
    // const newObj={
    //     ...obj1,
    //     ...obj2,
    //     gender:"male"     //we can add key value pairs like this with spread operator
    // };
    // console.log(newObj);

    // const obj={..."abcdef"};   //key = index of string, value = characters
    // const obj={...["a","b"]};   //array index = key and array elements = value  
    // console.log(obj);

//object destructing
    // const obj={
    //     name:"abc",
    //     sno:12,
    //     roll:1,
    //     gender:"male"
    // };

    
    // const{name,sno}=obj;  //name of key should be used 
    // console.log(name);    //key name is used
    // console.log(sno);

    // const{name:a,sno:b}=obj;   //key :variable. the value of key can accessed by the variable
    // console.log(a);
    // console.log(b);
    // console.log(sno);   //error sno not defined

    // const{name:a,sno:b,...left}=obj;   //key :variable. the value of key can accessed by the variable
    // console.log(a);
    // console.log(b);
    // console.log(left);  //the remaining key value pairs gets into object left

    
//********* 
//objects inside arrays
//very useful in real world applications
    const students = [
        {name:"abc",sno:12,gender:"male"},
        {name:"def",sno:13,gender:"female"},
        {name:"ghi",sno:13,gender:"female"}

    ]

    //access object in arrays
    // for(let i of students)
    //     console.log(i);

    //access object keys
    // for(let i of students)
    //     console.log(i.name);

    // access objects individially by array destructing
    // const [user1,user2]=students;
    // console.log(user1);
    // console.log(user2);

    //nested destructing
    // console.log(a);
    // console.log(c);
    // console.log(sno);
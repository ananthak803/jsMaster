// const obj1={
//     name:"abc",
//     age:12
// }

// //different method to create empty object
// const obj2=Object.create(obj1);    //obj2 is empty object and has proto of obj1 means reference to obj1
// //adding key value pair in obj2
// obj2.location="india";

// console.log(obj2);
// console.log(obj2.location, obj2.name);   //name is not found in obj2 then js looks in its proto here proto is reference to obj1


// --proto--
// [[prototype]]
//<prototype>

//using proto
const methods=
{
    about:function(){
        console.log(this.name,this.age,this.email,this.address);
    },
    location:function(){
        console.log(this.address);
    }
}

function createUser(username,age,email,address){
    const obj=Object.create(methods);  //obj has proto of methods ie reference to methods
    obj.name=username;
    obj.age=age;
    obj.email=email;
    obj.address=address;
    return obj;}

const user1=createUser("abc",12,"abc@gmail.com","india");
user1.about();  //accessing about from methods using proto
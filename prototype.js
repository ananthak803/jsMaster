// function hello(){
//     console.log("Hello");
// }

    //name property tells function name
        // console.log(hello.name);

    // javascript function = fucntion + object

    // you can add your own properties
        // hello.myProperty = "my own property";
        // console.log(hello.myProperty);

    //fucntion provides more useful properties

    //prototype of function
        // console.log(hello.prototype);
    //only function provide prototype property

    // hello.prototype.abc="abc";
    // hello.prototype.sing=function(){
    //     console.log("lalallalalalala");
    // }
    // console.log(hello.prototype);

//using prototype
function createUser(username,age,email,address){
    const obj=Object.create(createUser.prototype);   //imp
    obj.name=username;
    obj.age=age;
    obj.email=email;
    obj.address=address;
    return obj;
}
//create about function in function prototype
createUser.prototype.about=function(){
    return this.name;
}
console.log(createUser.prototype);
const user1=createUser("abc",12,"abc@gmail.com","india");
console.log(user1);
console.log(user1.about());




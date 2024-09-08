//create a function to which created new objects
const methods={
    about:function(){
        console.log(this.name,this.age,this.email,this.address);
    },
    location:function(){
        console.log(this.address);
    }
}

function createUser(username,age,email,address){
    const obj={};
    obj.name=username;
    obj.age=age;
    obj.email=email;
    obj.address=address;
    obj.about=methods.about;
    obj.location=methods.location;
    // obj.about=function(){
    //     console.log(this.name,this.age,this.email,this.address);
    // };
    return obj;
}
const user1=createUser("abc",19,"abc@gmail.com","india");
// user1.about();
//now if i want to create multiple users then multiple objects will be created and the methods are all same in all so it will consumed memory in every object
//we store the methods in another object
const user2=createUser("def",20,"def@gmail.com","us");
const user3=createUser("ghi",22,"ghi@gmail.com","japan");
//method 1 accessing methods in another object
    // methods.about.call(user1);
    // methods.about.call(user2);
    // methods.about.call(user3);

//method 2 accessing methods in another object
    user1.about();
    user1.location();
    user2.about();
    user3.about();







//class keyword
//classes are fake in js

// class createUser{
//     constructor(name,age,location){
//         this.name=name;
//         this.age=age;
//         this.location=location;
//     }

//     about(){
//     console.log(this.name,this.age,this.location);
//     }


// }
// const user1=new createUser("abc",12,"india");
// console.log(user1);
// user1.about();
// console.log(Object.getPrototypeOf(user1));

class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    isCute(){
        if(this.age<3)
            console.log("cute");
    }
}
class cat extends animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }
}
const dog = new animal("tom",2);
dog.isCute();
const cat1 = new cat("viper",1,20);
console.log(cat1);
cat1.isCute();

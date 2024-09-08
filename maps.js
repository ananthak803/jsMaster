//map
//map is an iterable
//stores data in ordered fashion
//stores key value pairs like objects and duplicate keys are not allowed like in objects
//difference between map and objects
    //object can only have string or symbol/variable as keys
    //in map u can use anything as keys like array , numbers ,string


//map declaration and initialization
    const m1 = new Map();
        // console.log(m1);
        // m1.set("name","abc");
        // m1.set("age",1);
        // m1.set(1,"one");
        // console.log(m1);
        // console.log(m1.get("name"));
        // console.log(m1.keys());

        // for(let i of m1)
        //     // console.log(i);
        //     console.log(Array.isArray(i));

        // for (let [key,value] of m1)
        //     console.log(key,value);

    // const m2 = new Map([["name","harshit"],["age",12]]);
    //     console.log(m2);

    // const obj={
    //     name: "abc",
    //     age:20
    // }
    // const m3 = new Map();
    // m3.set(obj,{sno:1});   //storing more data for obj but not in obj object . using obj object as key for map
    // console.log(m3);
    // console.log(m3.get(obj));
    // console.log(m3.get(obj).sno);

    //cloning using object.assign
        // const obj1={name:"abc",sno:1};
            // const obj2=obj1;   //obj1 and obj2 are storing same object no new object is created
            // obj1.rno=20;  //changes made in obj 1 reflected in obj 2
            // console.log(obj1);
            // console.log(obj2);

            //spread method
                // const obj2={...obj1};
                // console.log(obj2);

            //assign method
                // const obj2=Object.assign({},obj1);
                // console.log(obj2);

//optional chaining
    // const obj={
        // name:"abc",
        // detail:{no:1,sno:4}
    // };
    // console.log(obj.name);
    // console.log(obj.detail);  //when detail dont exist undefined
    // console.log(obj.detail.no);   //when detail dont exist error coz trying to access detail.no and detail is undefined
    //use ?. to avoid error it returns undefined if property is not defined
        // console.log(obj?.name);
        // console.log(obj?.detail?.no); print undefined if variable before ? dont exist

    



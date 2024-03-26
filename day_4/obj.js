let obj1={
    name:"Person 1",
    Age:5
};
let obj2={
    Age:5 ,
    name:"Person 1"
};
function Are_ObjectsEqual(obj1,obj2){
    let k1=Object.keys(obj1);
    let k2=Object.keys(obj2);
    if(k1.length!==k2.length){
        return false;
    }

    for (var i=0;i<k1.length;i++)
    {
        if(obj1[k1[i]]!==obj2[k1[i]]){
            return false;
        }
        return true;
    }
}

    var cmp=Are_ObjectsEqual(obj1,obj2);
    if(cmp==true)
    {
        console.log("The 1st object:",obj1," and the 2nd object:",obj2," is equal");
    }
    else
    {
    console.log("The 1st object:",obj1," and the 2nd object:",obj2," is not equal");
    }

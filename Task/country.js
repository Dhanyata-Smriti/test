var xhr= new XMLHttpRequest;
xhr.open("GET","https://restcountries.com/v3.1/all",true);
//countries in Asia

xhr.onload = function() 
    {
        var obj=JSON.parse(xhr.responseText);
        var arr = obj.filter((i)=>i.region=="Asia");
        for(var i=0;i<arr.length;i++){
            console.log(arr[i].name.common);

        }};
//countries with population mmore than 2 lakhs
xhr.onload = function() 
{
    var obj=JSON.parse(xhr.responseText);
    var arr = obj.filter((i)=>i.population>200000);
        for(var i=0;i<arr.length;i++){
            console.log(arr[i].name.common);

        }};
//Name , capital , flag - forEach
xhr.onload = function() 
    {
        var obj=JSON.parse(xhr.responseText);
        obj.forEach(element => {
            console.log(`Name: ${element.name.common} ; capital: ${element.capital} ; flag: ${element.flag}`);
            
        });
    };
//Total Population-reduce()
xhr.onload = function() 
    {
        var obj=JSON.parse(xhr.responseText);
        var total=[];
        obj.forEach(element => {
               total.push(element.population);
               
        });
        var totalPopulation = total.reduce((acc,ele) => {
            return acc+ele;
        },0);
        console.log(`Total Population: ${totalPopulation}`);
    };
//Us-Dollars
xhr.onload = function() 
    {
        var obj=JSON.parse(xhr.responseText);
        console.log("The countries with US DOLLARS:")
        obj.forEach(element => {
            if(Object.keys(element.currencies)=="USD")
                {
                    console.log(element.name.common);
                }
            });
       
    };
xhr.send();

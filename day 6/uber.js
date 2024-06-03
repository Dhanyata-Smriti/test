/*class uber_distancePrice{
    constructor(distance,perMile){
        
        const PriceForDistance=distance*perMile;
        return PriceForDistance;
}}

class uber_durationPrice{
    constructor(duration,perMin){
        
        const PriceForDuration=duration*perMin;
        return PriceForDuration;
}}



const costPerMile = 0.50;
const costPerMinute = 0.10;
const baseFare = 2.50;
const distance=20;
const duration=2;
const disP= new uber_distancePrice(distance,costPerMile);
const duraP= new uber_durationPrice(duration,costPerMinute);
const price = baseFare + duraP + disP;
console.log("The total fare is: ",price);*/
//array with object as elements  and to return an array with elements as string , string of object
/*var employee =
[
    {
        Name:"Dhiya",
        Age:20,
        Dept:"ECE"
    },
    {
        Name:"Gopi",
        Age:20,
        Dept:"ECE"
    },
    {
        Name:"Bala",
        Age:20,
        Dept:"ECE"
    },
    {
        Name:"Rethi",
        Age:20,
        Dept:"ECE"
    },
];


function Str(employee)
{
    let arr=[];
    employee.forEach(i => {
        
        console.log(`Name: ${i.Name}`);
        
    })
    let arr=[];
    for(let i=0; i < employee.length;i++)
        {
        const {Name,Age,Dept} = employee[i];
        arr[i]=`Name: ${Name}, Age: ${Age}, Dept: ${Dept}`;
        
    }
    console.log(arr);
    }
    
Str(employee);*/
class animal
{
  constructor(name)
  {
     this.Name = name;
  }
  getname()
  {
    return this.Name;
  }
  
}
class rabbit extends animal
{
  constructor(name,id)
  {
    super(name)
    this.ID=id;
  } 
  
  getId ()
  {
    return this.ID;
  }
  
}
const a= new rabbit("Dhiya","E01");
console.log("Name",a.getname());
console.log("ID",a.getId());
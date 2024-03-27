//ODD numbers in an array
let Array=[46,45,33,12,5,23];
let a = (arr) => {
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i])
        }
        

    }
    
};
a(Array);

//Convert all the strings to title caps in a string array
let Array=["apPle","BanaNA","oRANGE","grapes"];
//to convert array to string
var Str="";
for(var i=0;i<Array.length;i++)
{
  Str+=Array[i]+" ";
}
//console.log(Str);
let Title_caps=(Str) => {


        Str = Str.toLowerCase().split(' ');
        for (var i = 0; i < Str.length; i++) 
                    {
                      Str[i] = Str[i].charAt(0).toUpperCase() + Str[i].slice(1); 
                    } 
                    return Str.join(' ');
                  };
console.log("Before convertion:",Str);
console.log("After conversion:",Title_caps(Str));

//Sum of all Numbers in an array
let Num_Array=[23,65,100,24.5,8.09];
var count=0;
let sum=(arr) => {
    for(let i=0;i<arr.length;i++){
        count+=arr[i];
    }
    return count;

};
console.log("The sum of number in ",Num_Array," is ",sum(Num_Array));

//prime number in an array
let Arr=[46,41,0,33,12,5,23];
var a=0
console.log("The Prime Numbers in ",Arr);
let prime=(arr) => {
    for(let i=2;i<arr.length;i++){
        if(arr[i]==0||arr[i]){
               a=1;
        }
        for(let j=2;j<=arr[i]/2;j++)
        {
            if(arr[i]%j==0){
                a=1;
                break;
            }
            else{
                a=0;
            }
            
        }
        if(a==0){
            console.log(arr[i]);
        }
        
        
    }
};
prime(Arr)

//Palindrom in an Array
let arr=[343,"MALAYALAM","apple",413,"RADAR"];
console.log("The palindrom in ",arr,"is ");
let Palindrom=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i])=="number"){
            arr[i]=arr[i].toString();
        }
        const element=arr[i];
        const reverse_element=element.split('').reverse().join('');
        if(element==reverse_element){
            
            console.log(element);
        }
    }
};
Palindrom(arr);
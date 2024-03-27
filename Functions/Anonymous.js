//ODD numbers in an array
let a = function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i])
        }
        

    }
    
}
let Array=[46,45,33,12,5,23];
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
let Title_caps=function(Str){


        Str = Str.toLowerCase().split(' ');
        for (var i = 0; i < Str.length; i++) 
                    {
                      Str[i] = Str[i].charAt(0).toUpperCase() + Str[i].slice(1); 
                    } 
                    return Str.join(' ');
                  }
console.log("Before convertion:",Str);
console.log("After conversion:",Title_caps(Str));
//Sum of all Numbers in an array
let Num_Array=[23,65,100,24.5,8.09];
var count=0;
let sum=function(arr){
    for(let i=0;i<arr.length;i++){
        count+=arr[i];
    }
    return count;

}
console.log("The sum of number in ",Num_Array," is ",sum(Num_Array));
//prime number in an array
let Arr=[46,41,0,33,12,5,23];
var a=0
console.log("The Prime Numbers in ",Arr);
let prime=function(arr){
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
}
prime(Arr)
//Palindrom in an Array
let arr=[343,"MALAYALAM","apple",413,"RADAR"];
console.log("The palindrom in ",arr,"is ");
let Palindrom=function(arr){
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
}
Palindrom(arr);
//median of two sorted Array
let arr1=[1, 12, 15, 26, 38];
let arr2=[2, 13, 17, 30, 45];
let median=function(arr1,arr2){
let final_arr=[...arr1,...arr2];
final_arr.sort((a, b) => a - b);
var median_index=(final_arr.length)/2;
if(median_index%1==0){
    return (final_arr[median_index]+final_arr[median_index-1])/2;

}
else{
    return (final_arr[median_index]);

}
}
console.log("The median of the two sorted array is: ",median(arr1,arr2));
//Remove duplicates from an array
const arr = [1, 12, 15, 26, 38,1,12,1,4,1];
const unique =[];
let a=function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])===i){
            unique.push(arr[i]);
        }
    }
    console.log(unique);
}
a(arr);
//rotate an array
let Rotated_array= function(arr, k) {
    k %= arr.length;
    let rotatedArray = [];
    for (let i = 0; i < arr.length; i++) {
      rotatedArray[(i + k) % arr.length] = arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = rotatedArray[i];
    }
    return arr;
  }
  const arr = [1, 2, 3, 4, 5];
  console.log(Rotated_array(arr,3));




    



        
    


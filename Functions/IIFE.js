//ODD numbers in an array

(function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i])
        }
        

    }
    
})([46,45,33,12,5,23])
//Convert all the strings to title caps in a string array
let Array=["apPle","BanaNA","oRANGE","grapes"];
//to convert array to string
var Str="";
for(var i=0;i<Array.length;i++)
{
  Str+=Array[i]+" ";
}
//console.log(Str);
console.log("Before convertion:",Str);
console.log("After conversion:");
(function(Str){
        Str = Str.toLowerCase().split(' ');
        for (var i = 0; i < Str.length; i++) 
                    {
                      Str[i] = Str[i].charAt(0).toUpperCase() + Str[i].slice(1); 
                    } 
                    
                    console.log(Str.join(' '));
                  })(Str);
//Sum of all Numbers in an array
let Num_Array=[23,65,100,24.5,8.09];
var count= 0;
(function(arr){
    for(let i=0 ;i<arr.length;i++){
        count+=arr[i];
    }
    console.log("The sum of number in ",arr," is ",count);
    
})(Num_Array);
//prime number in an array
let Arr=[46,41,0,33,12,5,23];
var a=0
console.log("The Prime Numbers in ",Arr);
(function(arr){
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
})(Arr);
//Palindrom in an Array
let arr=[343,"MALAYALAM","apple",413,"RADAR"];
console.log("The palindrom in ",arr,"is ");
(function(arr){
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
})(arr);
//median of two sorted Array
let arr1=[1, 12, 15, 26, 38];
let arr2=[2, 13, 17, 30, 45];
console.log("The median of the two sorted array is: ");
(function(arr1,arr2){
let final_arr=[...arr1,...arr2];
final_arr.sort((a, b) => a - b);
var median_index=(final_arr.length)/2;
if(median_index%1==0){
    console.log ((final_arr[median_index]+final_arr[median_index-1])/2);


}
else{
    console.log(final_arr[median_index]);

}

})(arr1,arr2);
//Remove duplicates from an array
const arr = [1, 12, 15, 26, 38,1,12,1,4,1];
const unique =[];
(function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])===i){
            unique.push(arr[i]);
        }
    }
    console.log(unique);
})(arr);

//rotate an array
console.log("Before rotation: ",[1, 2, 3, 4, 5]);
(function(arr, k) {
    k %= arr.length;
    let rotatedArray = [];
    for (let i = 0; i < arr.length; i++) {
      rotatedArray[(i + k) % arr.length] = arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = rotatedArray[i];
    }
    console.log("After rotation: ",arr);
  })([1, 2, 3, 4, 5],3);
  



var arr = [[1, 2], [3, 4,], [6, 7, 9, [11, 12, [12, 13, [14]]]], 10]
function even(arr)
{
    var arr1 = [];
    for(var i=0; i<arr.length; i++){
      if(arr[i] instanceof Array){
        arr1 = arr1.concat(even(arr[i]));
      }else{
        arr1.push(arr[i])
      }
    }
  return  arr1
    
}
console.log(even(arr) )   // [ 1, 2, 3, 4, 6, 7, 9, 11, 12, 12, 13, 14, 10 ]

  
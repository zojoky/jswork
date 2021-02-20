function count(arr,n){
var num = 0;
 for(var i = 0;i < arr.length;i ++)
  {
     
      if(arr[i]== n)
      {
          num++;
      }
  }
    return num
  
  }
  var num = count("123415671981",1)
  console.log(num);
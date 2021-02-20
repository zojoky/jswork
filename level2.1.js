var arr = [1,2,3,4,1,5,6,7,1,9,8,1]
function popsort(arr){
    var t;
     for(var i = 0;i < arr.length-1;i ++)
      {
        for(var j = 0;j < arr.length-1-i;j ++)
        {
            if(arr[j] > arr[j + 1])
            {
            t = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = t;   
            }
        }
      } 
        console.log(arr);
      }
      popsort(arr)


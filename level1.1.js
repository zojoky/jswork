var arr = ['ABCDEEF,GHJKKM']
var arr1 = []
function recur(){
    for(var i=0;i<arr.length;i++)
    {   
       arr1 = arr[i].split("")
       arr1 = arr1.join("");
       arr1 = arr1.match(/(\w)\1+/g)
       console.log(arr1)
    }
}
recur(arr)
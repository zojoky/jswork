let arr = [{id:10,name:'kc'},{id:8,name:'hy'},{id:15,name:'pipi'},{id:2,name:'mama'}]
arr.sort(function(a,b)
{
    return a.id-b.id
}
)
arr.sort(/*你的函数*/)//[{id:2,name:'mama'},{id:8,name:'hy'},{id:10,name:'kc'},{id:15,name:'pipi'}]


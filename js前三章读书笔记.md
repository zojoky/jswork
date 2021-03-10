# 第一章 JS简介

1.  JS组成部分：核心（ECMA script）、文档对象模型（DOM）浏览器对象模型（BOM）
2. DOM：是针对XML（类似于HTML的一种标记语言）但经过拓展用于HTML的应用程序接口（API，Application Programming Interface）
3. BOM：支持可以访问和操作浏览器窗口的浏览器对象模型

# 第二章 在HTML中使用JS

## 2.1<script>元素



1. 插入JS的方法：使用<script>元素

2. 在元素<script>中嵌入JS代码时只需为其制定type属性，然后JS放入即可

   示例：

   ```javascript
   <script type="text/javascript">    
       function sayHi(){         
       alert("Hi!");     } 
   </script> 
   ```

   

3. 当通过<script>元素来包含外部JS文件时，src属性就为必须的。是一个指向外部JS文件的连接

   示例：

   ```javascript
   <script type="text/javascript" src="example.js">
       </scrip>
   ```

   

### 2.1.1标签的位置

传统的将<script>元素放在head中，现在放在body里

### 2.1.2延迟脚本

在标签中定义了defer属性，使用后可以延迟执行

示例：

```javascript 
<!DOCTYPE html> 
    <html>  
    <head>    
    <title>Example HTML Page</title>     
<script type="text/javascript" defer="defer" src="example1.js"></script>     <script type="text/javascript" defer="defer" src="example2.js"></script>   </head>  
<body>    
    <!-- 这里放内容 -->   
    </body> 
</html>
```



### 2.1.3异步脚本

定义了async属性，跟defer属性类似，可以让脚本文件先后执行（不能保证执行顺序）

示例：

```javascript
<!DOCTYPE html>
    <html>     
    
    <head>     <title>Example HTML Page</title> 
<script type="text/javascript" async src="example1.js"></script> 
<script type="text/javascript" async src="example2.js"></script>   
</head>   
<body>     
    <!-- 这里放内容 -->  
    </body> 
</html>
```

## 2.2嵌入代码与外部文件

使用外部文件的优点：

1. 可维护性
2. 可缓存
3. 适应未来

## 2.3文档模式

## 2.4<noscript>元素

# 第三章 基本概念

## 3.1语法

### 3.1.1区分大小写

### 3.1.2标识符

1.  第一个字符必须是一个字母、下划线（_）或一个美元符号（$） 
2.  其他字符可以是字母、下划线、美元符号或数字 

### 3.1.3注释

使用了C风格

示例1：

```c
//单行注释
```

示例2：

```c
/*
* 这是一个多行
* （块级）注释（2 3行的*不是必须的）
*/
```

### 3.1.4严格模式

启用时，在顶部添加以下代码

 "use strict";

示例：

```javascript
function doSomething(){  
    "use strict";    
    //函数体
} 
```

### 3.1.5语句

记得要打;｛｝呀

## 3.2关键字和保留字

 ## 3.3变量

ECMAScript的变量是松散型，即可用来保存任何类型的数据。用var声明即可（var所声明的为局部变量）

示例：

```javascript
function test(){
    var message = "hi"; // 局部变量
} 
test(); 
alert(message); // 错误！
```

改正：(省略var使message变为全局变量但须调用test函数后才可使其有定义)

```javascript
function test(){   
    message = "hi"; // 全局变量
} 
test(); 
alert(message); // "hi
```

## 3.4数据类型

### 3.4.1typeof操作符

定义：检测给定变量的数据类型

1.  "undefined"——如果这个值未定义 
2.  "boolean"——如果这个值是布尔值 
3.  "string"——如果这个值是字符串 
4.  "number"——如果这个值是数值 
5.  "object"——如果这个值是对象或**null**
6.   "function"——如果这个值是函数 

示例：

```javascript
var message = "some string"; 
alert(typeof message);     // "string"
alert(typeof(message));    // "string" 
alert(typeof 95);          // "number
```

### 3.4.2Undefined类型

在未var变量时，变量为undefined。

示例：

```javascript
var message; // 这个变量声明之后默认取得了undefined值
// 下面这个变量并没有声明
// var age 
alert(message);     // 
"undefined" alert(age);         // 产生错误
```

### 3.4.3Null类型

用typeof检测null时，返回为OBJ（因为Null值表示一个空对象指针）

### 3.4.4Boolean类型

只有true与false两种值

### 3.4.5Number类型

1. 十的表示

示例：

```javascript
var floatNum = 3.125e7;   // 等于31250000 
```

2. 不要测试某个**特定**的浮点数值

3. isNaN（）函数

示例：

```javascript
alert(isNaN(NaN));         //true 
alert(isNaN(10));          //false（10是一个数值）
alert(isNaN("10"));        //false（可以被转换成数值10）
alert(isNaN("blue"));      //true（不能转换成数值）
alert(isNaN(true));        //false（可以被转换成数值1）
```

4. 数值转换  

    如果是Boolean值，true和false将分别被转换为1和0。

   如果是数字值，只是简单的传入和返回。

   如果是null值，返回0。

   如果是undefined，返回NaN。

   如果是字符串，会遵循规则。P48

   如果是对象，则调用对象的valueOf()方法，然后依照前面的规则转换返回的值

### 3.4.6String类型

1. 定义：String类型用于表示由零或多个16位Unicode字符组成的字符序列，即字符串（双单引号都可以表示）
2. 字面量（具体在P51）换行\n 制表\t 空格\r
3. 特点：ECMAScript中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变

示例：

```JavaScript
var lang = "Java"; 
lang = lang + "Script"//lang此时=JavaScript
```

4. 转换字符串：每个值都有时toString()

示例：

```javascript
var age = 11; 
var ageAsString = age.toString();         // 字符串"11" 
var found = true; 
var foundAsString = found.toString();     // 字符串"true" 
```

不同进制字符串值在P52

5. 在不知道要转换的值是不是null或undefined的情况下，还可以使用转型函数String()，这个函数能够将任何类型的值转换为字符串

示例：

```javascript
var value1 = 10; //这里先后转换了4个值：数值、布尔值、null和undefined
var value2 = true;
var value3 = null;
var value4; 
alert(String(value1));     // "10" 
alert(String(value2));     // "true" 
alert(String(value3));     // "null" 
alert(String(value4));     // "undefined
```

### 3.4.7Object类型

1. 可创建自定义对象
2. 具有的属性与方法：

constructor：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor）就是Object()。

hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例如：o.hasOwnProperty("name")）。

isPrototypeOf(object)：用于检查传入的对象是否是传入对象的原型（第5章将讨论原型）。propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for-in语句（本章后面将会讨论）来枚举。与hasOwnProperty()方法一样，作为参数的属性名必须以字符串形式指定。toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。

toString()：返回对象的字符串表示。

valueOf()：返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同。

## 3.5操作符

### 3.5.1一元操作符

1. 递增递减：

++与--借鉴C，可以理解，具体在P56

示例：

```javascript
var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2;      // 等于21 
var num4 = num1 + num2;        // 等于21 
```

2. 加和减

### 3.5.2位操作符

1. 定义：对于有符号的整数，32位中的前31位用于表示整数的值。第32位用于表示数值的符号：0表示正数，1表示负数。这个表示符号的位叫做符号位，符号位的值决定了其他位数值的格式。
2. 按位非（NOT）定义：按位非操作符由一个波浪线（~）表示，执行按位非的结果就是返回数值的反码

示例：

```javascript
var num1 = 25;             //   二进制00000000000000000000000000011001 
var num2 = ~num1;          //    二进制11111111111111111111111111100110 
alert(num2);              // -26
```



3. 按位与（AND）：按位与操作符由一个和号字符（&）表示，它有两个操作符数（取和逻辑）。
4. 按位或（OR）：按位或操作符由一个竖线符号（|）表示，同样也有两个操作数。（取或逻辑）。（p60）
5. 按位异或（XOR）：按位异或操作符由一个插入符号（^）表示，也有两个操作数（取异或逻辑）。
6. 左移：左移操作符由两个小于号（<<）表示，这个操作符会将数值的所有位向左移动指定的位数

示例：

```javascript
var oldValue = 2;                       // 等于二进制的10
var newValue = oldValue << 5;           // 等于二进制的1000000，十进制的64 
```

7. 有符号右移：有符号的右移操作符由两个大于号（>>）表示，这个操作符会将数值向右移动，但保留符号位（即正负号标记）

示例：

```javascript
var oldValue = 64;                 // 等于二进制的1000000
var newValue = oldValue >> 5;      // 等于二进制的10 ，即十进制的2
```

8. 无符号右移：无符号右移操作符由3个大于号（>>>）表示，这个操作符会将数值的所有32位都向右移动

示例：正数跟有符号一致，负数不同P61

```javascript
var oldValue = -64;                // 等于二进制的11111111111111111111111111000000 
var newValue = oldValue >>> 5;     // 等于十进制的134217726 
```

### 3.5.3布尔操作符

1. 逻辑非符号为！

规则：

如果操作数是一个对象，返回false；

如果操作数是一个空字符串，返回true；

如果操作数是一个非空字符串，返回false；

如果操作数是数值0，返回true；

如果操作数是任意非0数值（包括Infinity），返回false；

如果操作数是null，返回true；

如果操作数是NaN，返回true；

如果操作数是undefined，返回true。

示例：

```javascript
alert(!false);        // true 
alert(!"blue");       // false 
alert(!0);             //   true 
alert(!NaN);          // true 
alert(!"");           // true 
alert(!12345);         //   false
```

2. 逻辑与符号为&&：逻辑与操作属于短路操作，即如果第一个操作数能够决定结果，那么就不会再对第二个操作数求值

规则：

如果第一个操作数是对象，则返回第二个操作数；

如果第二个操作数是对象，则只有在第一个操作数的求值结果为true的情况下才会返回该对象；

如果两个操作数都是对象，则返回第二个操作数；

如果有一个操作数是null，则返回null；

如果有一个操作数是NaN，则返回NaN；

如果有一个操作数是undefined，则返回undefined

示例：

```javascript
var found = true; 
var result = (found && someUndefinedVariable);    // 这里会发生错误
alert(result);    // 这一行不会执行
```

示例改进：

```javascript
var found = false; 
var result = (found && someUndefinedVariable);     // 不会发生错误
alert(result);    // 会执行（"false"）
```

3. 逻辑或||

规则：

P64

### 3.5.4乘性操作符

1. 乘法*，类似于C。

2. 除法/，类似于C。

3. 求模（余数）%，类似于C。

示例：

```javascript
var result = 26 % 5;     // 等于1
```

### 3.5.5加性操作符

1. 加法+，类似于C。

2. 减法-，类似于C。

### 3.5.6关系操作符

1. 小于（<）、大于（>）、小于等于（<=）和大于等于（>=）这几个关系操作符用于对两个值进行比较，比较的规则与我们在数学课上所学的一样。

### 3.5.7相等操作符

1. ECMAScript中的相等操作符由两个等于号（==）表示，如果两个操作数相等，则返回true。而不相等操作符由叹号后跟等于号（!=）表示，如果两个操作数不相等，则返回true（规则P67）

2. 全等和不全等（===和!==）

示例：

```javascript
var result1 = ("55" != 55);     //false，因为转换后相等
var result2 = ("55" !== 55);    //true，因为不同的数据类型不相等
```

### 3.5.8条件操作符

示例：

```javascript
var max = (num1 > num2) ? num1 : num2;
```

解释：在这个例子中，max中将会保存一个最大的值。这个表达式的意思是：如果num1大于num2（关系表达式返回true），则将num1的值赋给max；如果num1小于或等于num2（关系表达式返回false），则将num2的值赋给max

### 3.5.9赋值操作符

p71

### 3.5.10逗号操作符

使用逗号操作符可以在一条语句中执行多个操作

## 3.6语句

### 3.6.1if语句

示例：

```javascript
if (i > 25)     
    alert("Greater than 25.");              // 单行语句
else {   
    alert("Less than or equal to 25.");     // 代码块中的语句
     } 
```

### 3.6.2do-while语句

do-while语句是一种后测试循环语句，即只有在循环体中的代码执行之后，才会测试出口条件。换句话说，在对条件表达式求值之前，循环体内的代码至少会被执行一次

示例：

```javascript
do {    
    statement 
   } while (expression); 
//下面是一个示例：
var i = 0;
do {   
    i += 2;
} while (i < 10);
alert(i)
```

### 3.6.3while语句

while语句属于前测试循环语句，也就是说，在循环体内的代码被执行之前，就会对出口条件求值。因此，循环体内的代码有可能永远不会被执行

示例:

```javascript
var i = 0;
while(i < 10){
    i += 2;
}
```

### 3.6.4for语句

示例：

```javascript
var count = 10;
for(var i = 0;i < count; i++){
    alert(i);
}
```

### 3.6.5for-in语句

for-in语句是一种精准的迭代语句，可以用来枚举对象的属性

P75

### 3.6.6label语句

使用label语句可以在代码中添加标签，以便将来使用。

示例：

```javascript
start: for (var i=0; i < count; i++) {  
    alert(i);  
} 
```

### 3.6.7break和continue语句(p77)

其中，break语句会立即退出循环，强制继续执行循环后面的语句。而continue语句虽然也是立即退出循环，但退出循环后会从循环的顶部继续执行

示例break：

```javascript
var num = 0; 
for (var i=1; i < 10; i++) {    
    if (i % 5 == 0) {     
        break;   
    }    
    num++;
}
alert(num);    //4
```

示例continue：

```javascript
var num = 0;
for (var i = 1;i < 10; i++){
if(i % 5 == 0){
    continue;
}
    num++;
}
alert(num);//8
```

### 3.6.8with语句(严格模式下不允许使用)

with语句的作用是将代码的作用域设置到一个特定的对象中

示例：

```javascript
var qs = location.search.substring(1); 
var hostName = location.hostname;
var url = location.href;
```

改为：

```javascript
with(location){ 
    var qs = search.substring(1);    
    var hostName = hostname;    
    var url = href;
}
```

### 3.6.9swith语句(p80)

最后的default关键字则用于在表达式不匹配前面任何一种情形的时候，执行机动代码（因此，也相当于一个else语句）

示例：

```javascript
switch (expression) {
    case value: statement   
    	break;  
    case value: statement 
    	break;  
    case value: statement    
    	break;   
    case value: statement  
    	break; 
    default:statement
}
```

## 3.7函数

定义：ECMAScript中的函数使用function关键字来声明，后跟一组参数以及函数体。

示例：

```javascript
function sayHi(name, message) {   
    alert("Hello " + name + "," + message); 
}
sayHi("Nicholas", "how are you today?")//输出为"Hello Nicholas,how are you today"
```

### 3.7.1参数P83

### 3.7.2没有重载

如果在ECMAScript中定义了两个名字相同的函数，则该名字只属于后定义的函数

示例：

```javascript
function addSomeNumber(num){    
    return num + 100; 
}
function addSomeNumber(num) {   
    return num + 200;
} 
var result = addSomeNumber(100);    //30
```


// var a = 2
// {
//     let a = 3
// }
// console.log(a)

// for(var i = 0; i < 10; i++){
//     console.log('循环体内：' + i)
// }
// console.log('循环体外：' + i)

// const a = '波哥无敌'
// var a = 'bgwd'
// console.log(a)

// let a = 0;
// let b = 1;
// let c = 2;
// // 数组的解构赋值
// let [a,b,c,d] = [1,2,3];
// console.log(a);
// console.log(d)

// let [a,b='bg'] = ['wd',undefined];
// console.log(a+b)

// let [a,b='bg'] = ['wd',null];
// console.log(a+b)

// 对象的赋值解构
// let {foo,bar} = {bar:'波哥',foo:'无敌'}
// console.log(foo+bar)

// let foo;
// // {foo} = {foo:'错误'}
// ({foo} = {foo:'正确'}) // 一定要加个括号
// console.log(foo)

// const [a,b,c,d,e] = 'boge1'
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// 扩展运算符...
// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3)

// let arr1 = ['BOGE','WUDI','YYDS'];
// let arr2 = arr1; // 更改arr2时，会污染arr1
// let arr2 = [...arr1] // 保护arr1数组
// arr2.push('TXDY');
// console.log('arr1 = ' + arr1);
// console.log('arr2 = ' + arr2);

// 剩余运算符 rest ...
// function taiji(first,...arg){
//     console.log(arg.length);
//     console.log(arg);
// }
// taiji(0,1,2,3,4,5,6,7);

// 如何循环输出rest运算符
// function taiji(first,two,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }
// taiji(0,1,2,3,4,5,6,7);

// ES5字符串拼接的例子
// let a = '灶王爷';
// let b = '我们这边很多人都相信';
// document.write(b)

// ES的写法
// let a = '灶王爷';
// let b = `<b>我们这边很多人都相信</b>${a},我也很相信他`;
// document.write(b)

// let i = 'i';
// let blog = "abcdefghijklmn";
// document.write(blog.indexOf(i));
// // ES6直接用includes就可以判断，不再返回索引值
// document.write(blog.includes(i));
// // 判断开头是否存在
// document.write(blog.startsWith(i));
// // 判断结尾是否存在
// document.write(blog.endsWith(i));

// // 复制字符串
// document.write('*'.repeat(3)); // 复制3个*

// ES6数字操作
// ES6数字验证
// let a = 11/4
// console.log(Number.isFinite(a));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// ES5数字验证  区别:ES6更加严谨,只有NaN
// let a = 11/4
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('TAIJI'));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100 + '2'));

// let a = 918.1
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

// // 整数取值范围 2的53次方
// let a = Math.pow(2,53)-1;
// console.log(a);
// // 最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);
// // 最小安全整数
// console.log(Number.MIN_SAFE_INTEGER);
// // 安全整数判断
// console.log(Number.isSafeInteger(a));

// // ES新增的数组知识
// // find()实例方法
// let arr = [1,2,3,4,5,6,7,8];
// // 箭头函数 
// // find(参数：1.值 2.索引 3.数组)
// // value:表示当前查找的值
// // index:表示当前查找的数组索引
// // arr:表示当前数组
// var v = arr.find((value,index,arr)=>{
//     // 返回索引大于4的
//     return index > 4;
// });
// console.log(v);

// // findIndex()方法:返回索引
// let arr1 = [1,2,3,4,5,6,7,8];
// var i = arr1.findIndex((value) => value>4);
// console.log(i);

// // fill()实例方法:填充(可能覆盖)，参数1.内容 2.开始位 3.结束位
// // 注意点：左闭右开
// let arr = ['csm','曹水明','fw','hello'];
// arr.fill('web',1,3);
// console.log(arr);

// filter()数组去重?(过滤!)
// var myArr = [1,3,4,5,6,3,7,4];
// console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

// let json = {
//     '0':'csm',
//     '1':'曹水明',
//     '2':'fw',
//     length:3
//     // length必须写
// }
// // 把json数组转成array Array.from方法
// let arr = Array.from(json)
// console.log(arr);

// // Array.of方法
// let arr = Array.of(3,4,5,6);
// console.log(arr);

// // 数组循环for of
// let arr = ['c','s','m'];
// for(let item of arr){
//     console.log(item);
// }

// // for of索引
// let arr = ['c','s','m'];
// for(let index of arr.keys()){
//     console.log(index);
// }

// // for of内容加索引
// // entrie()实例方法:同时输出数组的内容和索引
// let arr = ['c','s','m'];
// for(let [index,val] of arr.entries()){
//     console.log(index + ':' + val);
// }
// // 剖析
// let list = arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

// ES6箭头函数
// 'use strict' ES5必须在最上面
// ES6如果在里面用严谨模式不能用默认值例:b=1
// function add(a,b=1){
//     // 'use strict'
//     if(a === 0){
//         throw new Error('This is error');
//     }
//     return a+b;
// }
// console.log(add(1,2));
// console.log(add.length); // 必须要传的参数

// // 改成箭头函数
// var add = (a,b=2) => a+b;
// // 一句话可以不写方法体，超过一句就要写
// var add = (a,b=2) => {
//     console.log('test');
//     return a+b;
// }
// console.log(add(1));

// 对象的函数解构
// let json = {
//     a:'csm',
//     b:undefined
// }
// function fun({a,b='web'}){
//     console.log(a,b);
// }
// fun(json);

// 数组的函数解构
// let arr = ['csm','曹水明','fw'];
// function fun(a,b,c,d){
//     console.log(a,b,c,d);
// }
// fun(...arr);

// in的用法
// let json = {
//     a:'csm',
//     b:'曹水明'
// }
// // 'a' 指的是key(key-value)
// console.log('a' in json);

// 数组判断
// let arr = [,,,];
// console.log(arr.length); // 输出3,所以ES5不太行
// // 注意：这里的0指的是数组下标位置是否为空
// console.log(0 in arr); // 输出false
// let arr1 = ['csm',];
// console.log(0 in arr1); //输出的是true

// // 数组遍历 forEach
// let arr = ['csm','曹水明','fw'];
// arr.forEach((val,index) => console.log(index,val))
// // 数组遍历 filter
// arr.filter(x => console.log(x))
// // 数组遍历 some
// arr.some(x => console.log(x))
// // 数组遍历 map替换
// console.log(arr.map(x => 'web'));

// 数组转成字符串
// let arr = ['csm','曹水明','fw'];
// console.log(arr.toString());
// console.log(arr.join('|'));

// 对象
//对象赋值
// let name = 'csm';
// let skill = 'web';
// var obj = {name,skill};
// console.log(obj);

// key值的构建
// let key = 'skill';
// var obj = {
//     [key]:'web'
// }
// console.log(obj.skill); // 输出web

// 自定义对象方法
// let obj = {
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2))

// ES6新增
// is方法
// let obj1 = {name:'csm'};
// let obj2 = {name:'csm'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1.name,obj2.name));
// // ===同值相等 is严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

// assign方法
// let a = {a:'csm'};
// let b = {b:'曹水明'};
// let c = {c:'fw'};
// let d = Object.assign(a,b,c);
// console.log(d);

// Symbol
// 之前的
// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;
// ES6的
// let f = Symbol();
// console.log(typeof(f));

// Symbol的打印
// let csm = Symbol('曹水明');
// console.log(csm);
// console.log(csm.toString());

// Symbol在对象中的应用
// let csm = Symbol();
// let obj = {
//     [csm]:'曹水明'
// }
// console.log(obj[csm]);
// console.log(obj.csm); // 输出undefined
// obj[csm] = 'fw';
// console.log(obj[csm])

// Symbol对象元素的保护作用
// let obj = {
//     name:'csm',
//     skill:'web',
//     age:'22'
// };
// for(let item in obj){
//     console.log(obj[item]);
// }
// let obj = {
//     name:'csm',
//     skill:'web'
// };
// let age = Symbol();
// obj[age]=18;
// console.log(obj);
// for(let item in obj){
//     console.log(obj[item]);
// }
// console.log(obj[age]);

// set的声明
// set 和 数组 的区别:set不允许有重复的值，如果有只显示一个，Set不是数组 
// let setArr = new Set(['csm','曹水明','web','csm',]);
// setArr.add('前端技术');
// console.log(setArr);
// has查找set中的中
// console.log(setArr.has('csm'));
// set值的增删改
// setArr.delete('web');
// console.log(setArr);
// 全部删除
// setArr.clear();

//循环输出
// for...of
// for(let item of setArr){
//     console.log(item);
// }
// forEach
// setArr.forEach((value) => console.log(value));
// size属性
// console.log(setArr.size);

// 去重
// const s = new Set();
// [2,3,4,5,5,2,4,2].forEach(x => s.add(x));
// for(let i of s){
//     console.log(i);
// }

// weakSet的声明 传入的值必须是对象
// let weakObj = new WeakSet();
// let obj = {a:'csm',b:'曹水明'};
// // let obj1 = obj; //这样只会输出一遍
// weakObj.add(obj);
// let obj1 = {a:'csm',b:'曹水明'}; //这样会输出两遍
// weakObj.add(obj1);
// console.log(weakObj);

// map数据类型
// json
// let json = {
//     name:'csm',
//     skill:'web'
// };
// console.log(json.name);

// map更灵活,比较随便
// var map = new Map();
// map.set(json,'I am');
// map.set('I am',json);
// console.log(map);

// map的增删查
// get取值
// console.log(map.get(json));
// delete 删除特定的值
// map.delete(json);
// console.log(map);
// clear删除全部的值
// map.clear();
// size
// console.log(map.size);
// has
// console.log(map.has(json));

// Map 转为数组
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
const arr = [...myMap]
console.log(arr)
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]

// 数组 转为 Map
new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
])
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }

// Map 转为对象
// function strMapToObj(strMap) {
// let obj = Object.create(null);
// for (let [k,v] of strMap) {
//     obj[k] = v;
// }
// return obj;
// }
// const myMap = new Map().set('yes', true).set('no', false);
// strMapToObj(myMap)
// // { yes: true, no: false }

// // 对象转为 Map
// let obj = {"a":1, "b":2};
// let map = new Map(Object.entries(obj));
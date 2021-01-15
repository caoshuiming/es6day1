export var a = 'csm';
// export var b = '陈世美';
// export var c = 'web';

// 包装成对象
var a = 'csm';
var b = '陈世美';
var c = 'web';
export {a,b,c};
// 函数的模块化包装
export function add(a,b){
    return a+b;
}


// 只能有一个export default，可以有多个export

// export{
//     name as a,
//     cname as b,
//     skill as c
// }
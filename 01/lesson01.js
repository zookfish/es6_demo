'use strict';

{
    var a =12;
    let b =15;
    {
        console.log(a,b);
    }
}

// var a =12;
// function f() {
//     console.log(a);
//     // let 不会存在变量提升的
//     let a;
// }
// f();

// {
//     let a;
//     var a;
// }

//
// var config = (function() {
//    var config = []
//     config.push(1);
//     config.push(2);
//     config.push(3);
//     config.push(4);
//     return config;
// })()

// let 的块级作用域
let config;
{

    config = []
    config.push(1)
    config.push(2)
    config.push(3)
    config.push(4)
}
console.log(config)















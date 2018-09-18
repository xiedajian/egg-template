/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/9/14
 * Time: 16:16
 */


var a = new Promise((resolve)=>{resolve(100)});

// promise 第一种用法
a.then(v=>{ return v*2 })
.then(new_v=>{
	console.log(new_v);
});

// promise 第二种用法
(async function() {
	console.log(await a*2);
}())

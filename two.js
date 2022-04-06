let x=15;
let y=10;
let z=20;
let res1=x+y/5*z-10;
let res2=x+y/5*(z-10);
let cal=x<y || x<z && z>y || ! z<10 ;
document.writeln("Hi");
document.getElementById("res1").innerHTML=res1;
document.getElementById("res2").innerHTML=res2;
document.getElementById("cal").innerHTML=cal;
// //first
// 15+10/5*20-10
// 15+2*20-10
// 15+40-10
// 55-10
// 45
//second
// 15+10/5*(20-10)
// 15+10/5*10
// 15+2*10
// 15+20
// 35
//
// x&lt;y||x&lt;z&amp;&amp;z&gt;y ||!z&lt;10
// order of precedence NOT AND OR
// 15&lt;10||15&lt;20&amp;&amp;20&gt;15||20&lt;10
// F||T&amp;&amp;T||T
// F||T&amp;&amp;T
// T||T
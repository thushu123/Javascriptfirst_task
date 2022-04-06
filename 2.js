let x= 15 ;
let y = 10 ;
let z= 20 ;
let res1 = x+y/5*z-10 ;
let res2 = x+y/5*(z-10);
let cal=x<y || x<z && z>y || ! z<10 ;
document.writeln( "x=15 , y=10 , z=20");
document.getElementById('res1').innerHTML = "x+y/5*z-10 :" + res1 ;
document.getElementById('res2').innerHTML = "x+y/5*(z-10) :" + res2 ;
document.getElementById('cal').innerHTML = "x<y || x<z && z>y || ! z<10 :"+cal ;



console.log(res1 , res2 ,cal);
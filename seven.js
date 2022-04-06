let m1=76;
let m2=78;
let m3=65;
let m4=90;
let m5=85;
let total= (m1+m2+m3+m4+m5);
let percentage = (total/600)*100 ;
console.log("Hi");
document.getElementById("demo").innerHTML = "total marks obtained :" + total ;
document.getElementById("per").innerHTML = "Percentage :"+ parseInt(percentage) +"%" ;

if(percentage >= 85){
    document.writeln("GRADE S");
}
else if((percentage >=75) && (percentage <85) ){
    document.writeln( "GRADE A");
}
else if((percentage >=65) && (percentage <75)){
    document.writeln("GRADE B");
}
else if((percentage >=55) && (percentage <65)){
    document.writeln("GRADE C");

}

else if((percentage>=50) &&(percentage>55))
{
document.writeln("GRADE D");
}
else
{
document.writeln("FAILED");
}
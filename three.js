let p = 25000 ;
let r = 3 ;
let t = 5 ;
let si =parseInt((p*t*r)/100 );
 let interest = "";
  interest +=  " Principal amount : 25000 "+"<br>" + "Rate: 3 "+"<br>" + "Time : 5" +"<br>" +"Simple interest :" +si ;
  document.getElementById("i").innerHTML = interest;
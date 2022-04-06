let x = 12  ;
let y = 3 ;

let add = x + y ;
let sub = x-y ;
let mult = x*y ;
let div = x/y ;

let text = "" ;

text += "The Numbers are "+x+ "&"+ y+"<br>"  +"Addition"+"&nbsp" + add + "<br>" + "Subtraction" + "&nbsp" + sub + "<br>" + "Multiplication"+ "&nbsp" + mult + "<br>" + "Division" +"&nbsp"+ div;

document.getElementById("demo").innerHTML = text ;
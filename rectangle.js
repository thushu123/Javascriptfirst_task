let l = 20 ;
let b = 35 ;
let area = l*b ;
let perimeter = 2*(l+b);
let rectangle = "" ;
rectangle = "Rectangle length : 20" + "<br>" + "Reactangle breadth :35" + "<br>" +
                  "Area:" + area + "<br>" + "Perimeter:" + perimeter;
document.getElementById("rectangle").innerHTML =rectangle;
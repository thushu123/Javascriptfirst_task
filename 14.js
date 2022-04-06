let options = "";
for(let i=2; i <=20; i++){
    options += "<option>" + i +"</option>";
}
// console.log("option",option);
document.getElementById("num").innerHTML = options;
multiplication =() =>{
  //  let result= "" ;
  //  //to get values seperately
  // //  let result = "" ;
  //  //get value of selected number
  // var num = document.getElementById('num').value;
  // console.log('selectednum,',num);
  // for (let i = 1 ; i<=10 ; i++){
  //   result += i * num  ; 
  //   var r = result.split(/(\s+)/);
    
  // }
  // document.writeln("<br>"+r );
  // //let num="";
            let result = "";
            //var value = select.options[select.selectedIndex].value;
            let a=document.getElementById("num");
            let b=a.options[a.selectedIndex].value;
        
            console.log(b);
            for(let i=1;i<=10;i++)
            {
                result=i*b;
                //document.getElementById("num1").value=result;
                document.writeln( result+"<br>");
                console.log(result);
            }
           // document.getElementById("demo").innerHTML=num;
        }


   
 

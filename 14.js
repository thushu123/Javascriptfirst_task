let options = "";
for(let i=2; i <=20; i++){
    options += "<option>" + i +"</option>";
}
// console.log("option",option);
document.getElementById("num").innerHTML = options;
multiplication =() =>{
   let result= "" ;
   //to get values seperately
  //  let result = "" ;
   //get value of selected number
  //  let a= document.getElementById("number");
  var num = document.getElementById('num').value;
  // let b= num.options[num.delectedIndex].value;
  console.log('selectednum,',num);
  for (let i = 1 ; i<=10 ; i++){
    result += i * num  ; 
    
  }
  document.writeln("<result>"+result + "<result>");

}
   
 

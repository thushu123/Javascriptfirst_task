function validateform(){
  let name= document.myform.name.value;
  let fname= document.myform.fname.value;
  let mn= document.myform.mname.value;
  let mnob= document.myform.mno.value;
  let pd= document.myform.pwd.value;
  let cpd= document.myform.rpwd.value;
  var numbers = /^[0-9]+$/;
  if((name==" ")||(fname=="")||(mn==" ")||(mnob==" ")||(pd==" ")||(cpd==" "))
  {
      alert("All fields must be filled out");
      nameame.focus();  
              return false;  
  }
  //NAME VALIDATION
  if((name.length<3)||(name.length>30))
  {
  alert("Name should consists of minimum of 3 and max of 30 characters");
  nameame.focus(); 
  }
  if((fname.length<3)||(fname.length>30))
  {
  alert(" Father Name should consists of minimum of 3 and max of 30 characters");
  fnameame.focus(); 
  }
  if((mn.length<3)||(mn.length>30))
  {
  alert(" Mother Name should consists of minimum of 3 and max of 30 characters");
  mname.focus(); 
  } 
  //MOBILE NUMBER VALIDATION
  if((mnob.length>10)||(mnob.length<10))
  {
      alert("Mobile Number should be 10 digits");
      mno.focus();
      return false;
  
  }
  if((mnob.match(numbers)))
  alert("correct");
  else{
      alert("please enter correct mobile number");
  }
  //validation for checkbox
  if(!this.myform.chk.checked){
      alert('You must agree to the terms and conditions first.');
      
      return false;
  }
  //password validation
  if(pwd.value.length<8)
  {
      alert("password should consists of atleast 8 characters ");
      pwd.focus();
  }
  if(pwd.value!=rpwd.value)
  {
      alert("password entered not same");
      pwd.focus();
  
  }
          }
  
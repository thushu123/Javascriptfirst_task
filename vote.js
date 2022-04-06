function check(){
    let message= "" ;

    let age;
    age = document.getElementById("age").value;
    console.log("age",age);;
    if(age < 18)
    {
        // message += "You are not eligible for vote";
        alert("You are not eligible for vote");
    }
    else if(age>=18)
    {
        // message += "You are eligible for vote";
        alert("You are eligible for vote");
    }
}
// document.getElementById("message").innerHTML = message.value;

add = () =>{
    numOne = parseInt(document.getElementById("first").value);
    numTwo = parseInt(document.getElementById("second").value);
    // console.log(numOne , numTwo);
    result = numOne + numTwo
    document.write("The result is :" + result);
}
sub = () =>{
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    console.log(num1 , num2);
    result = num1 - num2 ;
    document.write("The result is :" + result);
}
multi = () =>{
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    console.log(num1 , num2);
    result = num1 * num2 ;
    document.write("The result is :" + result);
}
div = () =>{
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    console.log(num1 , num2);
    result = num1 / num2 ;
    document.write("The result is :" + result);
}
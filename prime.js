// program to print prime numbers between the two numbers

// take input from the user
const m = parseInt(prompt('Enter lower number: '));
const n = parseInt(prompt('Enter higher number: '));
document.writeln(`The prime numbers between ${m} and ${n} are:`);



let num = "" ;
let sum =0;

// looping from m to n
for (let i = m; i <= n; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        num+=i+"<br>";
        sum = sum +i;
        console.log(i);
    }
}
document.getElementById("prime").innerHTML = num ;
document.getElementById("sum").innerHTML = "sum :"+sum ;


console.log("sum" ,sum);





const m = parseInt(prompt('Enter lower number: '));
const n = parseInt(prompt('Enter higher number: '));
for(i = m ; i <=n ; i++){
    if(i %2 == 0 && i %5 ==0){
        document.writeln(`The  numbers between ${m} and ${n} divisible by both 2 and 5 are: ${i}`);
    }
}
oddOrEven = () => {
    const n = parseInt(prompt('Enter a number: '));
    if (n % 2 == 0) {
        alert("The number is even");
    } else {
        alert("The number is odd");
    }

}
simpleInterest = () => {
    const p = parseInt(prompt('Enter principal amount: '));
    const r = parseInt(prompt('Enter rate: '));
    const t = parseInt(prompt('Enter time: '));
    let si = parseInt((p*t*r)/100 );
    alert("Simple interest :" + si);


}
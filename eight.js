function myFunction() {
    const distance = parseInt(prompt("Please enter distance in kilometer"));
    let meter = distance * 1000 ;
    let feet = distance * 3280.84;
    let inches = distance * 39370 ;
    let centimeter= distance * 100000 ;
    document.writeln("Meter value :" + meter +"<br>");
    document.writeln("Feet value :" + feet +"<br>");
    document.writeln("Inches value :" + inches +"<br>");
    document.writeln("centimeter value :" + centimeter +"<br>");
  }
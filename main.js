document.querySelector("#button1").onclick = function() {
  let hexa = "";
  let octal = "";
  let binary = "";
  let n;

  let decimal = document.querySelector("#decimal").value;

  for (let i = decimal; i >= 1; i = Math.floor((i /= 2))) {
    n = i % 2;
    binary = n + "" + binary;
  }
  for (let i = decimal; i >= 1; i = Math.floor((i /= 8))) {
    n = i % 8;
    octal = n + "" + octal;
  }
  for (let i = decimal; i >= 1; i = Math.floor((i /= 16))) {
    switch (i % 16) {
      case 10:
        hexa = "A" + "" + hexa;
        break;
      case 11:
        hexa = "B" + "" + hexa;
        break;
      case 12:
        hexa = "C" + "" + hexa;
        break;
      case 13:
        hexa = "D" + "" + hexa;
        break;
      case 14:
        hexa = "E" + "" + hexa;
        break;
      case 15:
        hexa = "F" + "" + hexa;
        break;
      default:
        let n = i % 16;
        hexa = n + "" + hexa;
        break;
    }
  }

  document.querySelector("#hexa").innerHTML = "";
  document.querySelector("#binary").innerHTML = "";
  document.querySelector("#octal").innerHTML = "";
  document.querySelector("#hexa").innerHTML = hexa;
  document.querySelector("#binary").innerHTML = binary;
  document.querySelector("#octal").innerHTML = octal;
};
